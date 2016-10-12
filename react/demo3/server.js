const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,"public")));

app.listen(3000,function(){
	console.log("服务器已经启动")
})

var arr = ["香蕉","苹果","鸭梨"];

app.get("/getdata",(req,res)=>{
	res.jsonp(arr);
})