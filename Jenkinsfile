node {
    stage('checkout') {
		checkout scm
    }
    stage('Build') {
        sh "docker-compose -f docker-compose-local.yml build"
    }

    stage('Login') {
        withCredentials([usernamePassword(credentialsId: 'dockerregistry', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
			sh "docker login -u $USERNAME -p $PASSWORD
		}
    }
    stage('Push') {
        sh "docker-compose -f docker-compose-local.yml push"
    }
}
