const mysql = require("mysql");
const conn = mysql.createConnection({
    host:"",
    user:"",
    password:"",
    database:""
})
module.exports=conn;