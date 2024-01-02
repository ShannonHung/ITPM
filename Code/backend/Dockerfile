# 使用官方的 Python 基礎映像
FROM python:3.11-slim

# 設置工作目錄
WORKDIR /app

# 複製應用所需的文件
COPY app.py /app
COPY /data /app/data

# 安裝 Flask 和 Flask-RESTful 以及您的應用依賴
RUN pip install Flask Flask-RESTful pandas numpy torch scikit-learn

# 暴露容器將會使用的端口號
EXPOSE 5000

# 定義容器啟動時執行的命令
CMD ["python", "app.py"]
