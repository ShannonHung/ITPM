# 8 Deployment - 13. Provide: 
# Analysis artifacts that arise from the professional provision should be carried over into deployment in a suitable form. 
# Write your project into a Dockerfile and build it. This way, users can easily pull the application from any environment and test it locally. 
# This approach not only ensures the applicability of your project in a variety of environments, but also makes it easier for users to use and test your project.

FROM python:3.11-slim

WORKDIR /app

COPY /backend/app.py /app
COPY /backend/data /app/data

RUN pip install Flask Flask-RESTful pandas numpy torch scikit-learn flask_cors

EXPOSE 5001

CMD ["python", "app.py"]
