//<!--焦点图切换-->
	var swiper = new Swiper('.swiper-container', {
		        loop: 'ture',
				autoplay: 3000,
				pagination: '.swiper-pagination',
				paginationClickable: '.swiper-pagination',
                effect : 'fade',
			});
//<!--图片手风琴-->
//<!--图片手风琴-->



//<!--产品图片切换-->
	var current = 0,
		isAutoSliding = true;
	var clickSlide = function() {
	  window.clearInterval(autoSlide);
	  isAutoSliding = false;
	};
	var updateIndex = function(currentSlide) {
	  if(isAutoSliding) {
		if(current === ($('#slide_box ul li').length - 1)) {
		  current = 0;
		} else {
		  current++;
		}
	  } else {
		  current = currentSlide;
	  }
		if(current >= 5){
			current = 0;
			}
	$('#slide_btn li').eq(current);
	  transition(current);
	};
	var transition = function(slidePosition) {
		$('#slide_box ul').animate({
		  'top': '-' + slidePosition + '00%'
		});
	};
	$('#slide_btn li').on( 'click', clickSlide);
	var autoSlide = window.setInterval(updateIndex, 3000);
		$("#next").click(function(){//下一张
			current++;
			if(current>=($('#slide_box ul li').length)){
				current=0;
				}
		if(current >= 5){
			current = 0;
			}
			$('#slide_btn li').eq(current);
			  transition(current);
			})
		$("#prev").click(function(){//上一张
			current--;
			if(current<0){
				current=($('#slide_box ul li').length - 1);
				}
		if(current >= 5){
			current = 0;
			}
			$('#slide_btn li').eq(current);
			  transition(current);
			});
//<!--往下滚动后显示一级导航-->
$(function() {
	$("header").css({"display":"none"});
	$(window).scroll(function(){
	var sc=$(window).scrollTop();
	sc>966?$("header").fadeIn():$("header").fadeOut();
	});
});

//动画库
new WOW().init();
