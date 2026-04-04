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
                bat 'for /f "tokens=*" %%i in (\'docker ps -q\') do docker stop %%i'
                bat 'for /f "tokens=*" %%i in (\'docker ps -aq\') do docker rm %%i'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name scm-container scm-project'
            }
        }
    }
}