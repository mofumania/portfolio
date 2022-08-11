//アコーディオンをクリックした時の動作
$(".title").on("click", function () {
  //タイトル要素をクリックしたら
  var findElm = $(this).next(".accordion_inner"); //直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle(); //アコーディオンの上下動作

  if ($(this).hasClass("close")) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass("close"); //クラス名を除去し
  } else {
    //それ以外は
    $(this).addClass("close"); //クラス名closeを付与
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on("load", function () {
  $(".accordion-area li:first-of-type section").addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
  $(".open").each(function (index, element) {
    //openクラスを取得
    var Title = $(element).children(".title"); //openクラスの子要素のtitleクラスを取得
    $(Title).addClass("close"); //タイトルにクラス名closeを付与し
    var Box = $(element).children(".box"); //openクラスの子要素boxクラスを取得
    $(Box).slideDown(500); //アコーディオンを開く
  });
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
