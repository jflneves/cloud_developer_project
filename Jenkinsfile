node {
    stage('checkout') {
		checkout scm
    }
    stage('Build') {
        sh "docker-compose build"
    }

    stage('Login') {
        withCredentials([usernamePassword(credentialsId: 'dockerregistry', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
			sh "docker login -u $USERNAME -p $PASSWORD"
		}
    }
    stage('Push') {
        sh "docker-compose push"
    }
}
