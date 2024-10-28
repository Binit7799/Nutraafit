pipeline {
    agent any

    environment {
        NEXUS_VERSION = "nexus3"
        NEXUS_PROTOCOL = "http"
        NEXUS_URL = "http://localhost:8081"
        NEXUS_REPOSITORY = "docker_images"
        NEXUS_CREDENTIAL_ID = "nexusCred"
        DOCKER_IMAGE_NAME = "nutraafit-app"
    }

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
                            bat "docker build -t ${DOCKER_IMAGE_NAME}:latest ."
                        }
                    } catch (err) {
                        echo "Error during Docker build: ${err}"
                        error("Docker build failed")
                    }
                }
            }
        }

        stage('Push to Nexus') {
            steps {
                script {
                    try {
                        echo 'Tagging Docker image for Nexus...'
                        def nexusRepoUrl = "${NEXUS_URL}/repository/${NEXUS_REPOSITORY}"
                        bat "docker tag ${DOCKER_IMAGE_NAME}:latest ${nexusRepoUrl}/${DOCKER_IMAGE_NAME}:latest"
                        
                        echo 'Logging into Nexus Docker repository...'
                        bat """
                            echo $env.DOCKER_PASSWORD | docker login -u $env.DOCKER_USERNAME --password-stdin ${nexusRepoUrl}
                        """

                        echo 'Pushing Docker image to Nexus...'
                        bat "docker push ${nexusRepoUrl}/${DOCKER_IMAGE_NAME}:latest"
                    } catch (err) {
                        echo "Error pushing Docker image to Nexus: ${err}"
                        error("Failed to push Docker image to Nexus")
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
