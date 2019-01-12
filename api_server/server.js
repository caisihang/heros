const express = require("express");
const app = express();
// const mysql = require("mysql");
const body = require("body-parser");
//------------导入数据库模块-------
const conn = require("./db.js")
app.use(body.urlencoded({extended:false}));
//--------------cors跨域--------------
const cors = require("cors");
app.use(cors());
//------------导入路由模块---------
const router = require("./router.js");
app.use(router);
//------------启动服务器-----------
app.listen(5001,()=>{
    console.log("http://127.0.0.1:5001");
})