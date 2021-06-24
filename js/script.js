

//ハンバーガーメニュー・チェックボックスのチェックを外す
$(function() {
  $('.hbg_link').click(function() {
    $('#menu_btn_check').removeAttr('checked').prop('checked', false).change();
  });
});

//スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});