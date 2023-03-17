pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm run build' // build your application
        sh 'echo Build completed successfully'
        sh 'cp index.html /var/www/html' // copy the index.html file to the production directory
      }
    }
    stage('Test') {
      steps {
        sh 'node server.js' // run your tests
      }
    }
    stage('Deploy') {
      steps {
         sh 'node server.js'// deploy your application
          // deploy your application

      }
    }
  }
}

