#!/bin/bash

while [[ "$#" -gt 0 ]]; do
    case $1 in
        -h|--help) 
            echo "Build images: ./run.sh build [f|b|all|-h|--help]"
            echo "Options:"
            echo "  [frontend|f] Build the frontend project"
            echo "  [backend|b]  Build the backend project"
            echo "  all          Build both frontend and backend projects"
            echo "  -h, --help      Display this help message"
            exit 0
            ;;
        b | build)
            lang=$2
            if [ "$lang" = "f" ]; then
                echo "Start Build Frontend Image"
                docker build -t itpm-frontend:latest -f ./frontend/deploy/dockerfiles/Dockerfile .
            elif [ "$lang" = "b" ]; then
                echo "Start Build Backend Image"
                docker build -t salary-prediction:latest -f ./backend/Dockerfile .
            elif [ "$lang" = "all" ]; then
                echo "Start Build Frontend and Backend Image"
                docker build -t salary-prediction:latest -f ./backend/Dockerfile .
                docker build -t itpm-frontend:latest -f ./frontend/deploy/dockerfiles/Dockerfile .
            else
                echo "Error! Please input 'en' or 'zh' or 'all'!"
            fi
            ;;
        s | show)
            lang=$2
            if [ "$lang" = "en" ] || [ "$lang" = "zh" ]; then
                cp "config-$lang.yml" _config.yml
                cp "config-butterfly-$lang.yml" "_config.butterfly.yml"
                npm run show
                echo "Running npm show!"
            else
                echo "Error! Please use './run.sh show en' or './run.sh show zh'!"
            fi
            shift # Move to the next argument after 'show'
            ;;
        *)
            exit 1
            ;;
    esac
    shift
done
