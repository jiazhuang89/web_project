
//tab切换公用方法
$(document).ready(function(){
			var lis = $('.content-tab');
			var divs = $('.current');
			var $fb = $('.food-title-bg');
	for(var i = 0; i < lis.length; i++){
		// lis.mouseover(function (e) {
		//      $(this).addClass('tab-active');
		//      $(this).siblings().removeClass('tab-active');
		// });
		lis[i].x = i;
		lis[i].onclick = function (){
			for(var i = 0; i < divs.length; i++){
				divs[i].style.display = "none";
			    // divs.find($fb).addClass('wow fadeInLeft').removeClass('hide');
			}
			$(this).addClass("tab-active");
            $(this).siblings().removeClass("tab-active");
			divs[this.x].style.display = "block";
		};
     }
       $('.content-tab').mouseenter(function(){
                $(this).find('.skew-back').animate({top:'-76px',opacity:'0'},200,function(){
                    $(this).css({top:'200px'});
                    $(this).animate({top:'15px',opacity:'1'},150);
                });
            });
	$(function(){
         var nav=$(".nav"); //得到导航对象
         var win=$(window); //得到窗口对象
         var sc=$(document);//得到document文档对象。
         win.scroll(function(){
             if(sc.scrollTop()>=141){	//距离高度多少后吸顶
             nav.addClass("fixednav"); 
             }else{
              nav.removeClass("fixednav");
             }
     }); 
     });
	 
     $(document).off('click', '#submit').on('click', '#submit', function() {
            var $this = $(this);
            $('#Fform').ajaxSubmit({
                beforeSubmit: function () {
                    $this.attr('disabled', 'disabled');
                    return true;
                },
                dataType: 'json',
                success: function (data) {
                    alert(data['message'] || '失败');

                    $this.removeAttr('disabled');
                },
                error: function() {
                    $this.removeAttr('disabled');
                }
            });
        });

        $('#Fform').ajaxForm({
            beforeSubmit: function () {
                return true;
            },
            dataType: 'json',
            success: function (data) {
                alert(data['message'] || '失败');
            },
            error: function() {
            }
        });
});
