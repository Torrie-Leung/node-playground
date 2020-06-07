const http = require('http')
http.get('http://www.baidu.com',res => {
  res.setEncoding('utf-8');
  res.on('data',res => {
    console.log(res);
  })
})