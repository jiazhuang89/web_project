  //卷去高度
$(document).ready(function(){
   window.scrollTo(0,$('.home-swiper').height()-205);
  });
  // 留言提交
$(document).ready(function(){
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