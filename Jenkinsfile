pipeline {
  agent any

  stages{
    stage('checkout'){
      steps{
        git branch: 'master', url: 'https://github.com/abhiii71/web-app-ci-cd.git'
      }
    }

    stage('Build Docker Image'){
      steps{
        sh 'docker build -t web-app-ci-cd ./app'
      }
    }
    stage('Push to DockerHub'){
      steps{
        withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]){
          sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
          sh 'docker tag web-app-ci-cd:latest $DOCKER_USERNAME/web-app-ci-cd:latest'
          sh 'docker push $DOCKER_USERNAME/web-app-ci-cd:latest'
        }
      }
    }
  }
}
