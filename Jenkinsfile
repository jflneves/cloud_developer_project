node {
    stage('Build') {
        echo 'Building....'
		docker-compose -f docker-compose-local.yml build
    }
    stage('Test') {
        echo 'Testing....'
    }
    stage('Deploy') {
        echo 'Deploying....'
    }
}