var express = require('express')
var app = express()
var bodyParser = require('body-parser')
//读取html文件
var sendHtml = function(path, response) {
    var fs = require('fs')
    var options = {
        encoding: 'utf-8'
    }
    fs.readFile(path, options, function(err, data) {
        console.log(`读取的html文件 ${path} 内容是`, data)
        response.send(data)
    })
}
//套路，可以读取文件。
app.use(express.static('./'))
//设置路由
app.get('/', function(req, res) {
    var path = ('year.html')
    sendHtml(path, res)
})
//套路
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
