import './main.scss';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';


$(function(){
  // トグルメニュー
  $('.js-toggle-open').on('click', function(){
    $(this).toggleClass('active');
    $('.js-toggle-menu').slideToggle();
  });

  // タブ
  let tabMenu = $('.js-tab-btn');
  let tabCont = $('.js-tab-content');
  let tabActive;

  tabCont.eq(0).show();
  $('.js-tab-nav').append('<span class="js-tab-active"></span>');

  tabActive = $('.js-tab-active');
  tabActive.eq(0).addClass('active');

  tabMenu.on('click', function(){
    let index = $(this).index();
    tabCont.hide();
    tabCont.eq(index).fadeIn(500);
    if($(this).hasClass('tab1')){

    }
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
    let slideDots = $('.js-slider-dots');
    slideDots.append('<li class="js-slider-dot"><a href="#"></a></li>');

    let currentDot = 0;
    slideDots.find('li').eq(currentDot).addClass('dot-target');

    $('.js-slider-dot').on('click', function(e){
      e.preventDefault();
      $('.js-slider-dot').removeClass('dot-target');
      $(this).addClass('dot-target');
      // クリックしたドットの番号と一致するスライドを探して移動

    });

    let prev = $('.js-slide-prev');
    let next = $('.js-slide-next');
    let currentSlide = 0; // スライドの現在地
    let slideArr = [];
    prev.on('click', function(){
      let sliderPosition = parseFloat(slider.css('left')); // 現在のスライド位置を取得
      let newPosition = sliderPosition + slideWidth; // 前のスライド位置に移動
      slider.animate({
        left: newPosition + 'px'
      });
      console.log(sliderPosition);
    });
    next.on('click', function(){
      let sliderPosition = parseFloat(slider.css('left')); // 現在のスライド位置を取得
      let newPosition = sliderPosition + slideWidth; // 前のスライド位置に移動
      slider.animate({
        right: newPosition + 'px'
      });
    });
  }

  // Scroll Timeline
  let obj = $('.js-tl-wrap');
  let objTop = obj.offset().top;
  let screenHeight = $(window).height();
  let objHeight = obj.outerHeight(true);

  // Text fadein
  let fadeObj = $('.js-text-fadein');
  let fadeTop = fadeObj.offset().top;

  $(window).on('scroll', function(){
    let scroll = $(this).scrollTop();
    if(scroll >= objTop - screenHeight){
      $('.tl-line').each(function(i){
        $(this).delay(i * 200).queue(function(){
          $(this).animate({
            height: objHeight
          }, 1000, 'swing');
        });
      });
    }
    if(scroll >= fadeTop - screenHeight){
      console.log('こんにちは');
      $('.js-tf-text').each(function(i){
        $(this).delay()
      })
    }
  });


});
