//获取所有英雄列表
let getAllHero = () => {
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:5001/getallhero",
        success: (res) => {
            if (res.status === 200) {
                console.log(res);
                let html = template("box", res);
                $("#heroList").html(html);
            }
        }
    });
}
//添加英雄
let addhero = (name,gender)=>{
    $.ajax({
        type: "post",
        url: "http://127.0.0.1:5001/addhero",
        data: {
            "name": name,
            "gender": gender
        },
        success: (res) => {
            if (res.status === 200) {
                getAllHero();
            }
        }
    })
}
//id查询更新英雄
let updatehero = (name,gender,id)=>{
    $.ajax({
        type: "post",
        url: "http://127.0.0.1:5001/updatehero/"+id,
        data: {
            "name":name,
            "gender":gender
        },
        success: function (res) {
            if(res.status === 200){
                getAllHero();
            }
        }
    });
}
//id查询删除英雄
let deletehero = (id)=>{
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:5001/deletehero/" + id,
        success: function (res) {
            if (res.status === 200) {
                getAllHero();
            }
        }
    });
}
//id查询英雄数据
let gethero = (id)=>{
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:5001/gethero/" + id,
        success: function (res) {
            if (res.status === 200) {
                $('.ui.modal').modal('show');
                $("#heroname").val(res.data[0].name);
                $("#herogender").val(res.data[0].gender);
                $(".text").text(res.data[0].gender);
               
            }
        }
    });
}