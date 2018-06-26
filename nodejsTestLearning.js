//01

// var fs = require("fs");
// var data = fs.readFileSync("tt.txt");
// console.log(data.toString());
// console.log("over");

//02

// var enent = require('events').EventEmitter;
// var e = new enent();
// e.on('ss',function(){
// 	console.log("ss事件触发");
// })
// setTimeout(function() {
// 	e.emit('ss')
// }, 1000);

//03

// var buf = Buffer.alloc(256);
// var len = buf.write("www.baidu.com");
// console.log("写入的字节数："+len);

//04

// var fs = require("fs");
// var raed = fs.createReadStream("tt.txt");
// var write = fs.createWriteStream("t.txt");
// raed.pipe(write);
// console.log("OK");

//05

// var fs = require("fs");
// var zlib = require("zlib");
// fs.createReadStream("tt.txt")
// 	.pipe(zlib.createGzip())
// 	.pipe(fs.createWriteStream("tt.txt.gz"));
// console.log("OK");

//06

// var fs = require("fs");
// var zlib = require("zlib");
// fs.createReadStream("tt.txt.gz")
// 	.pipe(zlib.createGunzip())
// 	.pipe(fs.createWriteStream("a.txt"));
// console.log("OK");

//07

// var fs = require("fs");
// console.log("准备打开文件");
// fs.open("t.txt","r+",function(err,fd){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log(fd);
// 	console.log("OK");
// })

//08

// var fs = require("fs");
// console.log("准备写入文件");
// fs.writeFile("t.txt","我正在学习NodeJS",function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log("数据写入成功");
// 	console.log("-----------------------------");
// 	console.log("读取写入的数据");
// 	fs.readFile("t.txt",function(err,data){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log("异步读取文件数据："+data.toString());
// 	});
// })

//09

// var fs = require("fs");
// var buf = new Buffer(1024);
// console.log("准备打开文件");
// fs.open('ttt.txt','r+',function(err,fd){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log("文件打开成功");
// 	console.log("准备读取文件");
// 	fs.read(fd,buf,0,buf.length,0,function(err,butes){
// 		if(err){
// 			return console.error(err);
// 		}
// 		console.log(butes + "字节被读取");
// 		if(butes > 0){
// 			console.log(buf.slice(0,butes).toString());
// 		}													
// 	})
// })

//10

// var fs = require("fs");
// var buf = new Buffer(1024);
// console.log("准备打开文件");
// fs.open("ttt.txt","r+",function(err,fd){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log("文件打开成功");
// 	console.log("准备截取文件");
// 	console.log("截取3字节后的内容");
// 	fs.ftruncate(fd,3,function(err){
// 		if(err){
// 			return console.error(err);
// 		}
// 	})
// 	console.log("内容截取成功");
// 	console.log("读取相同的文件");
// 	fs.read(fd,buf,0,buf.length,0,function(err,butes){
// 		if(err){
// 			console.error(err);
// 		}
// 		if(butes > 0){
// 			return console.log(buf.slice(0,butes).toString());
// 		}
// 	})
// 	fs.close(fd,function(err){
// 		if(err){
// 			return console.error(err);
// 		}
// 		console.log("文件关闭成功");
// 	});
// })

//11

// var fs = require("fs");
// console.log("准备删除文件");
// fs.unlink("a.txt",function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log("文件成功删除");
// })

//12

// var fs = require("fs");
// console.log("准备创建目录");
// fs.mkdir("/nodetext/YYYy/",function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log("目录创建成功");
// })

//13

// var fs = require("fs");
// console.log("读取目录");
// fs.readdir("/nodetext/YYYy",function(err,file){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log("目录读取成功");
// 	file.forEach(function(file){
// 		console.log(file);
// 	})
// })

//14

// var fs = require("fs");
// console.log("准备删除目录");
// fs.rmdir("/nodetext/YYYy",function(err){
// 	if(err){
// 		return console.error(err);
// 	}
// 	console.log("目录删除成功");
// })

//15

// var http = require("http");
// var fs = require("fs");
// var url = require("url");
// http.createServer(function(requst,reponse){
// 	var pathname = url.parse(requst.url).pathname;
// 	console.log("requst for" + pathname +"...");
// 	fs.readFile(pathname.substr(1),function(err,data){
// 		if(err){
// 			reponse.writeHead(404,{'Content-Type':'text/html'});
// 		}else{
// 			reponse.writeHead(200,{'Content-Type':'text/html'});
// 			reponse.write(data.toString());
// 		}
// 		reponse.end();
// 	})
// }).listen(8080);
// console.log("127.0.0.1:8080");

//16

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url,function(err,db){
// 	if(err) throw err;
// 	var dbo = db.db("runoob");
// 	var myobj = {name:"nodejs教程",url:"www.nodejs"};
// 	dbo.collection("size").insertOne(myobj,function(err,db){
// 		if(err) throw err;
// 		console.log("OK");
// 		db.close();
// 	})
// })

//17

// const myEmitter = require('events');
// const myEn = new myEmitter();
// myEn.on('event',(a,b) => {
// 	console.log(a,b,this);
// })
// myEn.emit('event','a','b');

//18

// const myEn = require('events');
// const myEn_a = new myEn();
// myEn_a.once('newListener',(event,listen) => {
// 	if(event === 'event'){
// 		myEn_a.on('event',() => {
// 			console.log('B');
// 		}) 
// 	}
// })
// myEn_a.on('event',() => {
// 	console.log('A');
// })
// myEn_a.emit('event');

//19

// const http = require('http');
// const option = {
// 	host:'hao360.cn'
// } 
// const req = http.get(option);
// req.end();
// req.once('response',(res) => {
// 	const ip = req.socket.localAddress;
// 	const port = req.socket.localPoart;
// 	console.log(`你的IP地址是 ${ip}，你的源端口是 ${port}。`);                               
// })

//20

// var http = require('http');
// http.createServer((req,res) => {
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('Hello World');
// }).listen(8888);
// console.log('Server running at http://127.0.0.1:8888/')

//21

// var exepress = require('express');
// var app = exepress();
// app.get('/',function(req,res){
// 	res.send('Hello World');
// })
// var server = app.listen(8081,() =>{
// 	var host = server.address().address;
// 	var port = server.address().port;
// 	console.log('你的IP地址是 http://%s:%s',host,port);
// })

//22

var MongoClient =require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/demo"
MongoClient.connect(url,function(err,db){
	if(err){
		console.log("数据库连接失败");
		throw err;
	} 
	console.log("database is OK ");
	db.close();
})