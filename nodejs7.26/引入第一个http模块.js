// 1.搭建服务器第一部步引入http模块
const http = require('http');
//2.创建一个服务器对象
const server = http.createServer();
//3.绑定ip和端口
server.listen(8080, '127.0.0.1', () => {
    console.log('服务器战斗开始')
});
// 4.注册浏览器请求服务器事件
server.on('request', (req, res) => {


    console.log('有请求进来了')
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('你好骚啊');
    // nodejs的代码，每次修改过后，需要重新启动服务器，把代码重新执行
    // 需要先把之前的服务器先停止 —— ctrl + c
})


