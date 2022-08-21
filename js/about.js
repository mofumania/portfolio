$(".fadeInUpTrigger").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $("#skill .line-anker").addClass(
      "animate__animated animate__fadeInUp line"
    ); //クラス名が付与
  }
});
