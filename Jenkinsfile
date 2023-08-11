pipeline {
    agent any
    environment {
       GIT_REPO = 'ISIS3710_202320_S1_E03_Front'
       GIT_CREDENTIAL_ID = '7c21addc-0cbf-4f2e-9bd8-eced479c56c6'
       SONARQUBE_URL = 'http://172.24.100.52:8082/sonar-isis2603'
    }
    stages {
       stage('Checkout') {
          steps {
             scmSkip(deleteBuild: true, skipPattern:'.*\\[ci-skip\\].*')
             git branch: 'master',
                credentialsId: env.GIT_CREDENTIAL_ID,
                url: 'https://github.com/isis3710-uniandes/' + env.GIT_REPO
          }
       }
       stage('GitInspector') { 
         steps {
            withCredentials([usernamePassword(credentialsId: env.GIT_CREDENTIAL_ID, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
               sh 'mkdir -p code-analyzer-report'
               sh """ curl --request POST --url https://code-analyzer.virtual.uniandes.edu.co/analyze --header "Content-Type: application/json" --data '{"repo_url":"git@github.com:Uniandes-isis2603/${GIT_REPO}.git", "access_token": "${GIT_PASSWORD}" }' > code-analyzer-report/index.html """   
            }
            publishHTML (target: [
               allowMissing: false,
               alwaysLinkToLastBuild: false,
               keepAll: true,
               reportDir: 'code-analyzer-report',
               reportFiles: 'index.html',
               reportName: "GitInspector"
            ])
         }
      } 
      stage('Build') {
         // Build app
         steps {
            script {
               docker.image('citools-isis2603:latest').inside('-u root') {
               sh '''
                  chown -R root:root .
                  npm install
                  npm run build
               '''
               }
            }
         }
      }
      stage('Test') {
          steps {
             script {
                docker.image('citools-isis2603:latest').inside('-u root') {
                   sh '''
                      CI=true npm test
                   '''
                }
             }
          }
       }
       stage('Static Analysis') {
          // Run static analysis
          steps {
             sh '''
                docker run --rm -u root -e SONAR_HOST_URL=${SONARQUBE_URL} -v ${WORKSPACE}:/usr/src sonarsource/sonar-scanner-cli:4.3
             '''
          }
       }
    }
    post {
      always {
        cleanWs()
        deleteDir() 
        dir("${env.GIT_REPO}@tmp") {
          deleteDir()
        }
      }
    }
 }
  
