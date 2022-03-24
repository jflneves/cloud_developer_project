pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
				docker-compose -f docker-compose-local.yml build
            }
        }
	}
}