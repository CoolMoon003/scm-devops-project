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
                docker stop scm-container >nul 2>&1
                docker rm scm-container >nul 2>&1
                exit /b 0
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