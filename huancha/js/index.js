
$(document).ready(function(){

    $(".food_tab li").click(function(){
        var $index = $(this).index()
        $(this).addClass("current").siblings().removeClass("current")
        $(".food_info ul").eq($index).show().siblings().hide();
    });
	
	$('footer').off('click', '#submit').on('click', '#submit', function () {
        var $this = $(this);
        $('footer').find('#Fform').ajaxSubmit({
            beforeSubmit: function () {
                $this.attr('disabled', 'disabled');
                return true;
            },
            dataType: 'json',
            success: function (data) {
                alert(data['message'] || '失败');
                $this.removeAttr('disabled');
            },
            error: function () {
                $this.removeAttr('disabled');
            }
        });
    });
 })