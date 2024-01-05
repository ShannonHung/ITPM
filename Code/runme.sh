@@ -0,0 +1,13 @@
#!/bin/bash
echo "Start to run itpm-frontend project."
read -p "Do you want to build the images? If you have already build up the images, you can skip this step by entering 'n'. (y/n) " build_images
if [ "$build_images" == "y" ]; then
    echo "Start Build Image : FrontEnd Service => build -f ./frontend/deploy/dockerfiles/Dockerfile -t itpm-frontend ."
    docker build -t itpm-frontend:latest -f ./frontend/deploy/dockerfiles/Dockerfile .
fi


echo "Start to run itpm-backend project."
read -p "Do you want to build the images? If you have already build up the images, you can skip this step by entering 'n'. (y/n) " build_images
if [ "$build_images" == "y" ]; then
    echo "Start Build Image : FrontEnd Service => build -f ./backend/Dockerfile -t salary-prediction ."
    docker build -t salary-prediction:latest -f ./backend/Dockerfile .
fi
