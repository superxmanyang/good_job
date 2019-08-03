// 搭建服务器第一部引入http模块
const http =require('http');
//创建一个服务器对象
const server = http.createServer();
// 绑定ip和端口 
server.listen(8080,'127.0.0.1',()=>{
    console.log('服务器已经启动了， 访问')
})
server.on('request',(req,res)=>{
    // req - 请求对象
    // res - 响应对象

    // 可以检查是否进来了
    console.log('哥哥不要进来')
    
    // 但是返回中文，肯能会造成乱乱码，是因为编码格式不对引起的，所以我们在响应头里面，告诉浏览器该如何解析
    // res.setHeader(键,值)
    console.log(req.url)
    res.setHeader('Content-Type','text/html;charset=utf-8');

    
    // 但是要注意，一定要在返回之前设置
    // 必须把某些结果返回给浏览器才行
    // res.end(字符串);
    if(req.url==='/index.html'){
        res.end('<h1>你好骚啊</h1>');
    }else if(req.url==='/list.html'){
      let html=`
      <h1>列表页</h1>
      <ul>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       <li>1</li>
       </ul>`
       ;
       res.end(html);
    }else if(
        req.url==='/detail.html'
    ){
        res.end('<h1>详情页</h1>');
    }else{
        res.end('404');
    }
    
    
    // console.log('13')
  })