# ref : https://mherman.org/blog/dockerizing-an-angular-app/
# base image
FROM node:12.14.0-slim as build

# install git
RUN apt update
# RUN apt install -y git

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

# add app
COPY . /usr/src/app

# build project
RUN ng build --configuration=production

# run nginx
FROM nginx:alpine

COPY --from=build /usr/src/app/dist/kioxia-frontend /usr/share/nginx/html

COPY ./deploy/config/nginx.conf /etc/nginx/conf.d/default.conf

# prod port
EXPOSE 5200

# start app
# CMD ["ng","serve","--host", "0.0.0.0", "--port", "5200", "--poll"]