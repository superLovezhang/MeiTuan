module.exports = {
    devServer: {
      proxy: {
        '/Data':{
            target: 'http://localhost:8080/public',
            changeOrigin: true
        }
      }
    }
  }