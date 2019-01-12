$(() => {
    let flag = false;
    let editid;
    getAllHero();
    $('.ui.dropdown').dropdown();
    //添加打开遮罩层
    $("#addherobtn").on("click", () => {
        $('.ui.modal').modal('show');
        $("#heroname").val("");
        $("#herogender").val("男");
        $(".text").text("男")
    })
    //添加英雄 || 更新信息
    $("#addbtn").on("click", () => {
        let name = $("#heroname").val();
        let gender = $("#herogender").val();
        if (flag) {
            //更新
            updatehero(name,gender,editid);
            flag = false;
        } else {
            //添加
            addhero(name,gender);
        }
    })
    //删除英雄
    $("#heroList").on("click", "#delete", function () {
        //let id = $(this).data("id");
        let id = $(this).attr("data-id");
        deletehero(id);
    })
    //编辑英雄
    $("#heroList").on("click", "#edit", function () {
        editid = $(this).attr("data-id");
        gethero(editid);
        flag = true;
    })
})