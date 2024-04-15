import './main.scss'

$(function(){
  //- トグルメニュー
  $('.js-toggle-open').on('click', function(){
    $(this).toggleClass('active');
    $('.js-toggle-menu').slideToggle();
  });

  //- スライダー
  let slider = $('.js-slider');
  let slideNum = $('.js-slide-num');
  let slideNav = $('.js-slide-nav');
  let slideHeight = slideNum.height();
  let slideWidth = slideNum.width(); // スライド1枚の横幅を取得
  let slideLength = slideNum.length; // スライドの枚数を取得
  let sliderWidth = slideWidth * slideLength;

  slider.css('width', sliderWidth); // スライドの枚数に合わせて横幅を追加

  let arrowPosition = slideHeight / 2;
  slideNav.css('top', arrowPosition);

  let lastObj = slideNum.last();
  slider.prepend(lastObj); // 一番最後のスライドを一番最初に追加

  let slideOuterWidth = slideNum.outerWidth(true);
  let half = ($('#slider').width() - slideOuterWidth) / 2; // 表示部分からスライド1枚分の横幅を引いた分の更に半分の数値 -> 左右に表示させたい画像の数値
  let setPosition = slideOuterWidth - half;

  slider.css('left', -(setPosition)); // スライド表示の初期値

  // スライドの枚数だけドットを追加
  for(let i = 0; i < slideLength; i++){
    let slideDot = $('.js-slider-dot');
    slideDot.append('<li><a href="#"></a></li>');

    let currentDot = 0;
    slideDot.eq(currentDot).addClass('slide-target');

    let prev = $('.js-slide-prev');
    let currentSlide = 0;
    let slideArr = [];
    prev.on('click', function(e){
      e.preventDefault;
    });
  }

});
