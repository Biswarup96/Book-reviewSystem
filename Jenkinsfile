pipeline {
    agent { label 'test' }

    stages {

        stage('Checkout Code') {
            steps {
                // error 'meri marzi'
                git branch: 'main', url: 'https://github.com/Biswarup96/Book-reviewSystem.git'
            }
        }
        
        stage('git leaks detect'){
            steps{
                script{
                    try{
                        sh 'gitleaks detect --source . -v'
                        echo "Gitleaks scan completed successfully."
                    }catch(e){
                        echo "Gitleaks detected secrets. Pipeline failing."
                        error "Secrets detected: ${e.message}"
                    }
                }
            }
        }
        
        stage('trivy scan filesystem'){
            steps{
                script{
                    try{
                         sh '''
                        trivy fs --exit-code 0  --severity CRITICAL,HIGH .
                         '''
                          echo "Trivy scan completed successfully."
                    }catch(e){
                        echo "Trivy detected vulnerabilities: ${e}"
                         error "Pipeline failed due to Trivy scan."
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t suvo32/bkkp:latest .'
            }
        }
        stage('Trivy Image Scan') {
        steps {
        script {
            try {
                sh '''
                trivy image --exit-code 0 --severity CRITICAL,HIGH suvo32/bkkp:latest
                '''
                echo "Trivy image scan completed successfully."
            }
            catch (e) {
                echo "Trivy found vulnerabilities in image: ${e}"
                error "Image scan failed. Fix vulnerabilities"
            }
        }
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
    
    post{
        success{
            mail to: 'biswarna96.rana@gmail.com',
            subject: 'Build Succesfull',
              body: 'good boy'
        }
        failure{
            mail to: 'biswarna96.rana@gmail.com',
            subject: 'Build fail',
              body: 'good fuck off'
        }
    }
}
