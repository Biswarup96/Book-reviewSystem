pipeline {
    agent { label 'test' }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Biswarup96/Book-reviewSystem.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t suvo32/bkkp:latest .'
            }
        }
        
        stage('push to dockerhub'){
            steps{
              withCredentials([usernamePassword(
                  credentialsId: 'dockerCreds',
                  usernameVariable: 'dockerUserName',
                  passwordVariable: 'dockerPassword'
                  )]){
                  sh '''
                  docker login -u $dockerUserName -p $dockerPassword
                  docker push $dockerUserName/bkkp:latest
                  '''
              }
            }
            
        }
        
        stage('docker compose up') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}
