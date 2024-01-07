# 8 Deployment - 13. Provide: 
# Analysis artifacts that arise from the professional provision should be carried over into deployment in a suitable form. 
# Write your project into a Dockerfile and build it. This way, users can easily pull the application from any environment and test it locally. 
# This approach not only ensures the applicability of your project in a variety of environments, but also makes it easier for users to use and test your project.

# ref : https://mherman.org/blog/dockerizing-an-angular-app/
# base image
FROM node:16-slim as build

# install git
# RUN apt update
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
RUN ng build

# run nginx
FROM nginx:alpine

COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html

COPY ./deploy/config/nginx.conf /etc/nginx/conf.d/default.conf

# prod port
EXPOSE 4200

# start app
# CMD ["ng","serve","--host", "0.0.0.0", "--port", "4200", "--poll"]
