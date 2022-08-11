//SVGの初期設定

var logoVivus1; //SVG設定

//SVG初期設定
function VivusInit() {
  logoVivus1 = new Vivus(
    "logo",
    {
      start: "autostart", //アニメーションの自動再生
      duration: 100, //アニメーションの時間。数字が小さくなれば速くなり、大きくなれば遅くなる
      type: "scenario", // アニメーションのタイプを設定
      pathTimingFunction: Vivus.EASE, //動きの加速減速設定
    },
    function (obj) {
      $("#logo").attr("class", "done"); //描画が終わったらdoneというクラスを追加
    }
  );
  logoVivus1.stop();
}

//スクロールをしたらSVGが出現する設定
function VivusAnime() {
  //スクロールをしたら1つめのSVG id="logo"が出現する設定
  var elemPos = $("#logo").offset().top - 50; //要素より、50px上の位置まで来たら出現
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    logoVivus1.play(1); //描画される速さ。数が大きくなるほど速い
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  VivusAnime(); /* SVGアニメーション用の関数を呼ぶ*/
});
// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  VivusInit(); //SVG初期設定
  VivusAnime(); /* SVGアニメーション用の関数を呼ぶ*/
});
// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

$(".fadeInUpTrigger").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass("animate__animated animate__fadeInUp"); //クラス名が付与
  }
});

$(".fadeInUpTrigger2").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass(
      "animate__animated animate__fadeInRight animate__delay-1s"
    ); //クラス名が付与
  }
});

$(".fadeInUpTrigger3").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass(
      "animate__animated animate__fadeInRight animate__delay-2s"
    ); //クラス名が付与
  }
});

$(".fadeInUpTrigger4").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass(
      "animate__animated animate__fadeInRight animate__delay-3s"
    ); //クラス名が付与
  }
});

$(".fadeInUpTrigger5").on("inview", function (event, isInView) {
  if (isInView) {
    //表示領域に入った時
    $(this).addClass(
      "animate__animated animate__fadeInRight animate__delay-4s"
    ); //クラス名が付与
  }
});

$(".slider").slick({
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  speed: 500, //スライドのスピード。初期値は300。
  slidesToShow: 3, //スライドを画面に3枚見せる
  slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  centerMode: true, //要素を中央ぞろえにする
  variableWidth: true, //幅の違う画像の高さを揃えて表示
  dots: true, //下部ドットナビゲーションの表示
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll >= 200) {
    //200pxスクロールしたら
    $("#page-top").removeClass("DownMove"); // DownMoveというクラス名を除去して
    $("#page-top").addClass("UpMove"); // UpMoveというクラス名を追加して出現
  } else {
    //それ以外は
    if ($("#page-top").hasClass("UpMove")) {
      //UpMoveというクラス名が既に付与されていたら
      $("#page-top").removeClass("UpMove"); //  UpMoveというクラス名を除去し
      $("#page-top").addClass("DownMove"); // DownMoveというクラス名を追加して非表示
    }
  }

  var wH = window.innerHeight; //画面の高さを取得
  var footerPos = $("#footer").offset().top; //footerの位置を取得
  if (scroll + wH >= footerPos + 10) {
    var pos = scroll + wH - footerPos + 10; //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
    $("#page-top").css("bottom", pos); //#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
  } else {
    //それ以外は
    if ($("#page-top").hasClass("UpMove")) {
      //UpMoveというクラス名がついていたら
      $("#page-top").css("bottom", "10px"); // 下から10pxの位置にページリンクを指定
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$("#page-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0, //ページトップまでスクロール
    },
    500
  ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false; //リンク自体の無効化
});
