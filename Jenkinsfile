pipeline{
    // agent any
    agent {label : first-worker-node}
    stages{
        stage('code'){
            steps{
                git url: 'https://github.com/Biswarup96/Book-reviewSystem.git' , branch: 'main'
            }
        }
        stage('build'){
            steps{
                sh 'docker build -t bookreview .'
            }
        }
        stage('push to docker hub'){
            steps{
               withCredentials([usernamePassword(
                   credentialsId: 'dockerHubCreds',
                   usernameVariable: 'dockerUserName',
                   passwordVariable: 'dockerPassword'
                   )]){
                   
                   sh 'docker login -u "$dockerUserName" -p "$dockerPassword"'
                   sh 'docker tag bookreview "$dockerUserName"/bookreview:latest'
                   sh 'docker push "$dockerUserName"/bookreview:latest'
               }
            }
        }
        stage('deployment'){
            steps{
               sh 'docker compose up -d'
            }
        }
    }
}