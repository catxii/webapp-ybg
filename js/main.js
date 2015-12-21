require.config({
	paths:{
		'zepto':"../libs/sui/js/zepto.min",
		'sm':"../libs/sui/js/sm.min",
		'app':"app"
	}
})

//zepto.min.js
//sm.min.js
//app.js

require(['zepto', 'sm', 'app'], function (moduleA, moduleB, moduleC){
		//订单轨迹js
			var firstStatusBigBox = $(".card-message").eq(0);
			var firststatusBox = firstStatusBigBox.find(".ps-status-box");
			firststatusBox.show();
			firstStatusBigBox.find(".order_status_btn").attr("data-status","关闭记录").removeClass("close");
			$(document).on("click",".card-header",function(){
				var that = $(this).find(".order_status_btn");
				if( that.attr("data-status") =="查看记录" ){
					that.attr("data-status","关闭记录").removeClass("close");
					that.closest(".card-header").siblings(".card-content").find(".ps-status-box").show();
				}else{
					that.attr("data-status","查看记录").addClass("close");
					that.closest(".card-header").siblings(".card-content").find(".ps-status-box").hide();
				}
				
			})


		var kitListBtn = $(".kit-list-index li"); //获取按钮的变量
        if( kitListBtn.length<4 ){ //如果按钮的数量小于4个
          kitListBtn.parent().addClass("three"); //添加three
        }
});