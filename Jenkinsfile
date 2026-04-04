pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t scm-project .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker stop scm-container || exit 0'
                bat 'docker rm scm-container || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name scm-container scm-project'
            }
        }
    }
}