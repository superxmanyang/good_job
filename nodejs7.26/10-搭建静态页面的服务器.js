const http = require('http');
// 读取文件需要使用fs模块
const fs = require('fs');

const server = http.createServer();

server.listen(8080, () => {
    console.log('服务器已经开启，可以通过 http://127.0.0.1:8080 或者 http://192.168.70.111:8080 访问');
})
server.on('request', (req, res) => {
    if (req.url === '/index.html') {
        fs.readFile('./views/index.html', (err, data) => {
            if (err) throw err;
            // 其实返回给浏览器的内容不推荐转换为字符串转换在返回 —— 因为服务器发数据发送给浏览器的过程中，是要把这些所有的数据，先序列化 —— 转换为字节 —— buffer
            res.end(data);
        });
    }
    else if (req.url === '/list.html') {
        fs.readFile('./views/list.html', (err, data) => {
            if (err) throw err;
            // 其实返回给浏览器的内容不推荐转换为字符串转换在返回 —— 因为服务器发数据发送给浏览器的过程中，是要把这些所有的数据，先序列化 —— 转换为字节 —— buffer
            res.end(data);
        });
    } else if (req.url === '/detail.html') {
        fs.readFile('./views/detail.html', (err, data) => {
            if (err) throw err;
            // 其实返回给浏览器的内容不推荐转换为字符串转换在返回 —— 因为服务器发数据发送给浏览器的过程中，是要把这些所有的数据，先序列化 —— 转换为字节 —— buffer
            res.end(data);
        });
    } else
        if (req.url === '/assets/css/list.css') {
            fs.readFile('./assets/css/list.css', (err, data) => {
                if (err) throw err;
                res.end(data);
            });
        } else
            if (req.url === '/assets/css/list.js') {
                fs.readFile('./assets/css/list.js', (err, data) => {
                    if (err) throw err;
                    res.end(data);
                });
            } else if (req.url === '/assets/images/1.jpg') {
                fs.readFile('./assets/images/1.jpg', (err, data) => {
                    if (err) throw err;
                    res.end(data);
                });
            }
            else {
                res.end('404')
            }
})
