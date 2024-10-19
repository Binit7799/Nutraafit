pipeline {
    agent any
    stages {
        stage('Clone the Repo') {
            steps {
                script {
                    try {
                        echo 'Cloning the repository...'
                        bat 'git clone https://github.com/Binit7799/Nutraafit.git'
                    } catch (err) {
                        echo "Error cloning repository: ${err}"
                        error("Failed to clone the repository")
                    }
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    try {
                        dir('NutraaFit') {
                            echo 'Installing dependencies...'
                            bat 'npm install'
                        }
                    } catch (err) {
                        echo "Error installing dependencies: ${err}"
                        error("Failed to install dependencies")
                    }
                }
            }
        }


        stage('Docker Build') {
            steps {
                script {
                    try {
                        dir('NutraaFit') {
                            echo 'Building Docker image...'
                            bat 'docker build -t nutraafit-app:latest .'
                        }
                    } catch (err) {
                        echo "Error during Docker build: ${err}"
                        error("Docker build failed")
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
