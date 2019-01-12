const express = require("express");
const router = express.Router();
// const conn = require("./db.js");
const heros = require("./function.js");
//----------------获取数据----------------
router.get("/getallhero",heros.getallhero)
//--------------插入新的数据---------------
router.post("/addhero",heros.addhero)
//------------根据ID获取英雄信息-----------
router.get("/gethero/:id",heros.gethero)
//------------根据ID更新英雄信息-----------
router.post("/updatehero/:id",heros.updatehero)
//------------根据ID删除英雄信息-----------
router.get("/deletehero/:id",heros.deletehero)
module.exports=router;
