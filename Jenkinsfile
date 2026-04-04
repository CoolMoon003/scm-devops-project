pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t scm-project .'
            }
        }

        stage('Clean Old Containers') {
            steps {
                bat '''
                FOR /F "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i
                FOR /F "tokens=*" %%i IN ('docker ps -aq') DO docker rm %%i
                '''
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name scm-container scm-project'
            }
        }
    }
}