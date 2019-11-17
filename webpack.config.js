const path = require('path');

module.exports = {
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게 하겠다
  resolve: {
    extensions: ['.js', '.jsx'] // webpack이 js나 jsx를 찾아서
  },
  entry: { // 중요
    app: ['./src/client']
  }, // 입력
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    }]
  },
  output: { // 중요
    path: path.join(__dirname, 'dist'), // 경로를 합쳐줌, C:\..\dist를 자동으로 만들어줌
    filename: 'app.js'
  }, // 출력
};