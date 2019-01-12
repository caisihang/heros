const conn = require("./db.js");
module.exports = {
    getallhero:(req,res)=>{
        const sql = "SELECT * FROM hero";
        conn.query(sql,(err,result)=>{
            if(err) return res.send({status:500,msg:err.message,data:null})
            res.send({status:200,msg:"ok",data:result});
        })
    },
    addhero:(req,res) =>{
        const sql = "INSERT INTO hero SET ?"
        let addhero = req.body;
        let myDate = new Date();
        let y = myDate.getFullYear();//年
        let m = (myDate.getMonth()+1).toString().padStart(2,"0");//月
        let d = myDate.getDate().toString().padStart(2,"0");//日
        let h = myDate.getHours().toString().padStart(2,"0")//时
        let mi = myDate.getMinutes().toString().padStart(2,"0")//分
        let s = myDate.getSeconds().toString().padStart(2,"0")//秒
        addhero.ctime = y+'-'+m+'-'+d+' '+h+":"+mi+':'+s;
        conn.query(sql,addhero,(err,result)=>{
            if(err) return res.send({status:500,msg:err.message,data:null});
            res.send({status:200,msg:"ok",data:result})
        })
    },
    gethero:(req,res)=>{
        const id = req.params.id;
        console.log(req.params)
        const sql = "SELECT * FROM hero WHERE id=?"
        conn.query(sql,id,(err,result)=>{
            if(err) return res.send({status:500,msg:err.message,data:null});
            res.send({status:200,msg:"ok",data:result})
        })
    },
    updatehero:(req,res)=>{
        const sql = "UPDATE hero SET ?  WHERE id=?;"
        const id = req.params.id;
        const info = req.body;
        conn.query(sql,[info,id],(err,result)=>{
            if(err) return res.send({status:500,msg:err.message,data:null});
            res.send({status:200,msg:"ok",data:result})
        })
    },
    deletehero:(req,res)=>{
        const id = req.params.id;
        console.log(id)
        const isdel = 1;
        const sql = "UPDATE hero SET isdel=?  WHERE id=?;"
        conn.query(sql,[isdel,id],(err,result)=>{
            if(err) return res.send({status:500,msg:err.message,data:null});
            res.send({status:200,msg:"ok",data:result})
        })
    }
}