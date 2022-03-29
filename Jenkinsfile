node {
    stage('checkout') {
		checkout scm
    }
    stage('echo') {
		sh "echo Hello world"
    }
    stage('ls') {
		sh "ls"
    }
    stage('Test') {
        sh "docker-compose -f .docker-compose-local.yml build"
    }
    stage('Deploy') {
        echo 'Deploying....'
    }
}
