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
                docker stop scm-container 2>nul || echo no container
                docker rm scm-container 2>nul || echo no container
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