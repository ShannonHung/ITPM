# %%
import numpy as np
# Data processing
import pandas as pd
# torch 
import torch
import torch.nn as nn
from flask import Flask, jsonify, request
from flask_cors import CORS  # 引入 CORS
from flask_restful import Api, Resource
from sklearn.preprocessing import MinMaxScaler, OneHotEncoder
# Tensor conversion
from torch.utils.data import Dataset

# %%
app = Flask(__name__)
CORS(app)  # 啟用 CORS
api = Api(app)


# %%
# calculate the percentiles
df = pd.read_csv('./data/ds_salaries_cleaned.csv')
# calculate the percentiles

def loadData():
    
    percentiles = np.percentile(df['salary_in_usd'], [25, 50, 75])  # 25th, 50th, 75th 分位數
    print(percentiles)
    # define the labels of saraly levels 
    labels = ['Level 1', 'Level 2', 'Level 3', 'Level 4']

    # print the meaning of label 
    for i in range(len(labels)):
        if i == 0:
            print('Level 1: < {:.2f} USD'.format(percentiles[i]))
        elif i == len(labels) - 1:
            print('Level {}: > {:.2f} USD'.format(i+1, percentiles[i-1]))
        else:
            print('Level {}: {:.2f} ~ {:.2f} USD'.format(i+1, percentiles[i-1], percentiles[i]))


    #  -np.inf, np.inf be the lower and upper bounds of the bins
    # *percentiles: base on the percentiles to cut the bins and generate the salary levels for being the labels of training data
    df['salary_level'] = pd.cut(df['salary_in_usd'], bins=[-np.inf, *percentiles, np.inf], labels=labels)
    data = df.drop(['salary_in_usd'], axis=1) # we cannot put the label into the training data
    print("\nThe data of each salary level is balanced.")
    print(data['salary_level'].value_counts())
    return data



# %%
@app.route('/')
def hello_world():
    return 'Hello, World!'

# %%
class Hello(Resource): 
  
    # corresponds to the GET request. 
    # this function is called whenever there 
    # is a GET request for this resource 
    def get(self): 
  
        return jsonify({'message': 'hello world'}) 
  
    # Corresponds to POST request 
    def post(self): 
          
        data = request.get_json()     # status code 
        return jsonify({'data': data}), 201
    
api.add_resource(Hello, '/') 

# %%
class DatasetConverter(Dataset):

    # 初始化函數，用於載入和預處理數據
    def __init__(self, data, transform=None):
        # 創建 MinMaxScaler 和 OneHotEncoder 來進行數據預處理
        minmax_scaler = MinMaxScaler()
        onehot_enc = OneHotEncoder()

        # 將數據分為類別特徵、數值特徵和標籤
        categorical_features = data[data.select_dtypes(include=['object']).columns].drop('salary_level', axis=1)
        categorical_columns = data.select_dtypes(include=['object']).columns
        print(f'categorical_features=${categorical_columns}')

        numerical_features = data[data.select_dtypes(exclude=['object']).columns]
        numerical_columns = data.select_dtypes(exclude=['object']).columns
        print(f'numerical_features=${numerical_columns}')
        
        label_features = data[['salary_level']]

        # 對數值特徵進行歸一化（MinMax 歸一化）
        numerical_features_arr = minmax_scaler.fit_transform(numerical_features)

        # 對類別特徵進行獨熱編碼
        categorical_features_arr = onehot_enc.fit_transform(categorical_features).toarray()

        # 對類別特徵進行one-hot編碼後，獲取編碼後的特徵名稱
        label_features = onehot_enc.fit_transform(label_features).toarray()

        # 將歸一化的數值特徵和獨熱編碼後的類別特徵合併成一個數據集
        combined_features = pd.DataFrame(data=numerical_features_arr, columns=numerical_features.columns)
        combined_features = pd.concat([combined_features, pd.DataFrame(data=categorical_features_arr)], axis=1)
        combined_features = pd.concat([combined_features, pd.DataFrame(data=label_features)], axis=1).reset_index(drop=True)

        self.data = combined_features

    # 返回數據集的長度
    def __len__(self):
        return len(self.data)

    # 用於訓練神經網絡的函數，返回特徵和標籤
    def __getitem__(self, idx):
        # 獲取在 self.data DataFrame 中的第 idx 行的數據
        sample = self.data.iloc[idx] 
        # 將一個數據結構轉換為 PyTorch 張量 並指定這個张量的數據類型為浮點數（float）
        features = torch.FloatTensor(sample[:-4])
        label = torch.FloatTensor(sample[-4:])
        return features, label

    # 返回整個數據集的 DataFrame
    def getData(self):
        return self.data


# %%
# Step 3: Create a neural network model
class SalaryPredictorModel(nn.Module):
    def __init__(self, input_size):
        super(SalaryPredictorModel, self).__init__()
        self.layer1 = nn.Linear(input_size, 64)
        self.layer2 = nn.Linear(64, 32)
        self.output_layer = nn.Linear(32, 4)
    
    def forward(self, x):
        x = torch.relu(self.layer1(x))
        x = torch.relu(self.layer2(x))
        x = self.output_layer(x)
        return x


# %%
def prediction(data):
    # load the model from disk
    pred_model = SalaryPredictorModel(174)
    pred_model.load_state_dict(torch.load('./data/salary_pred.pt'))
    print(pred_model)
    # predict the salary level of the new data
    with torch.no_grad():
        # get the last row of the data
        tensor_data = DatasetConverter(data).__getitem__(-1)
        input = tensor_data[0]
        output = pred_model(input)
        print(f'output = ${output}')
    return torch.argmax(output).item()


# %%
class SalaryPredictor(Resource):
    def post(self):
        # get request data 
        json_data = request.get_json(force=True)

        # load the data 
        data = loadData()
        data = pd.concat([data, pd.DataFrame([json_data])], ignore_index=True)

        # load the model parameters
        pred_model = SalaryPredictorModel(174)
        pred_model.load_state_dict(torch.load('./data/salary_pred.pt'))

        # predict the salary level of the new data
        with torch.no_grad():
            tensor_data = DatasetConverter(data).__getitem__(-1)
            input = tensor_data[0]
            output = pred_model(input)
            result = torch.argmax(output).item()
        
        # return the result 
        return {'level': result}
    
api.add_resource(SalaryPredictor, '/predict')


# %%

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)


