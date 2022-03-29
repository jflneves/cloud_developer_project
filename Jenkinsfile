node {
    stage('checkout') {
		checkout scm
    }
    stage('Test') {
        docker-compose -f docker-compose-local.yml build
    }
    stage('Deploy') {
        echo 'Deploying....'
    }
}
