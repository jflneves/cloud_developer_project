node {
    stage('checkout') {
		checkout scm
    }
    stage('Build') {
        sh "docker-compose -f docker-compose-local.yml build"
    }
    stage('Push') {
        sh "docker-compose -f docker-compose-local.yml push"
    }
}
