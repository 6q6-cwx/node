var http = require('http')

var server=http.createServer((req,res)=>{
    // 发送http头部 200 内容类型 text/plain
    response.writeHead(200,{
        'Content-Type':'text/plain',
        // 请求的响应数据
    })
    response.end('Hellow World')
})

server.listen(8000)
console.log('serve run at 8000')