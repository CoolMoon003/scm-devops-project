pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/YOUR_USERNAME/scm-devops-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t scm-project .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 scm-project'
            }
        }
    }
}