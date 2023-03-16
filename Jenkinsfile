pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', 
                    branches: [[name: '*/nodejs']],
                    userRemoteConfigs: [[url: 'https://github.com/Hemanth-14/crudops_1.git']]])
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            
            }
        }
        stage('build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm start'
            }
        }
    }
}
