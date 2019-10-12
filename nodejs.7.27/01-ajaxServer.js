// 1.搭建一个可以被访问的服务器

// 2.处理静态资源


const http = require('http');
const server = http.createServer()
const fs = require('fs')

server.listen(8080, () => {
    console.log('服务器已开启，通过http://127.0.0.1:8080');
});
server.on('request', (req, res) => {
    if (req.url.startsWith('/assets') || req.url.startsWith('/views')) {
        if (req.url.endsWith('.css')) {
            res.setHeader('content-Type', 'text/css')
        }
        fs.readFile('.' + req.url, (err, date) => {
            // if(err) throw err; // throw 一般只会在特别严谨的逻辑使用在这里会报错
            if (err) console.log(err);
            res.end(date);
        })
    } else {
        // 处理ajax处理请求
        // 约定好，前端发过来的请求如果是 /getAllHeros 就返回所有的影响的数据
        if (req.url === '/getAllHeros') {
            fs.readFile('./data/heros.json', (err, data) => {
                res.end(data)
            })
        }
    }
})

