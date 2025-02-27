pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Jenkins가 빌드에 사용할 저장소를 클론
                // 예) 깃 URL 대신 Jenkins 설정에 맞게 교체
                git branch: 'main', url: 'https://github.com/NiceDecision/frontend.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // 도커 이미지 빌드
                    sh 'docker build -t my-react-app .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
		withCredentials([
                    string(credentialsId: 'REACT_APP_API_BASE_URL', variable: 'REACT_APP_API_BASE_URL'),
                ]) {
		    sh 'docker stop my-react-app || true'
                    sh 'docker rm my-react-app || true'

                    // 새 컨테이너 실행
                    sh '''
		    docker run -d -p 80:80 \
		      -e REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL \
		      --name my-react-app my-react-app
		    '''
                }
            }
        }
    }
}

