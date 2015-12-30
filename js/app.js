//请求地址
var publicAjaxUrl = "http://debug.yunbaogong.cn/";
//创建模块
var ybgapp = angular.module('ybg-app', ['ngRoute']);
//建立模块间的映射关系 
ybgapp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		//默认入口页
	otherwise({
			redirectTo: '/login'
		}).
		//登陆地址
	when('/login', {
			templateUrl: 'login.html',
			controller: login_model
		}).
		//配送状态-未配送
	when('/driver/start', {
			templateUrl: 'driver_index_status_start.html',
			controller: status_index_model
		}).
		//配送状态-配送中
	when('/driver/delivery', {
			templateUrl: 'driver_index_status_delivery.html',
			controller: status_delivery_model
		}).
		//配送状态-配送完
	when('/driver/complete', {
			templateUrl: 'driver_index_status_complete.html',
			controller: status_complete_model
		}).
		//配送-详情页
	when('/driver/detail', {
			templateUrl: 'driver_order_more.html',
			controller: status_detail_model
		}).
		//个人中心
	when('/me/index', {
		templateUrl: 'driver_me_index.html',
		controller: driver_me_model
	})
}]);

//登陆模块
function login_model($scope, $http) {
	var login = $scope.login = {
			mobile: "13612345678",
			password: "123456"
		}
		//登陆请求
	var ajaxUrl = publicAjaxUrl + "Mobile/Login/";
	$scope.submit = function() {
		$.ajax({
			url: ajaxUrl + "index.html",
			type: "post",
			data: {
				"mobile": login.mobile,
				"password": login.password
			},
			error: function(data) {
				alert("无法访问服务器")
			},
			success: function(data) {
				var data = data.data;
				if (data.status == 1) { //登录成功
					if (window.localStorage) {
						//设置保存用户id
						localStorage.setItem("userid", data.id);
						//设置保存司机名称
						localStorage.setItem("username", data.username);
						//设置保存司机手机
						localStorage.setItem("userphone", data.mobile);
						//设置保存司机城市
						localStorage.setItem("usercity", data.city);
						window.location.href = "#/me/index";
						getOrderCount(); //获取订单数量
					} else {
						alert("不支持本地存储")
					}
				} else if (data.status == 2) { //没权限
					alert(data.message)
				} else { //密码错误
					alert(data.message)
				}
			}
		})
	}
}
//获取用户id
var userid = localStorage.getItem("userid");
var userName = localStorage.getItem("username");
var userPhone = localStorage.getItem("userphone");
var userCity = localStorage.getItem("usercity");
var startOrderId; //当前订单的id
//设置用户订单请求参数
var myData = {
	params: {
		"id": userid
	}
};
//获取订单数量
var startNumber, onSendNumber, completeNumber;

function getJsonLength(jsondata) {
	var length = 0;
	for (var i in jsondata) {
		length++;
	}
	return length;
}

function getOrderCount() {
	//获取未配送的订单数量
	var startOrderURL = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=waitSend";
	$.ajax({
			url: startOrderURL,
			type: "get",
			data: {
				"id": userid
			},
			success: function(data) {
				startNumber = getJsonLength(JSON.parse(data));
			}
		})
		//获取配送中的订单数量
	var onSendOrderURL = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=onSend";
	$.ajax({
			url: onSendOrderURL,
			type: "get",
			data: {
				"id": userid
			},
			success: function(data) {
				onSendNumber = getJsonLength(JSON.parse(data));
			}
		})
		//获取已签收的订单数量
	var completeOrderURL = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=completeSend";
	$.ajax({
		url: completeOrderURL,
		type: "get",
		data: {
			"id": userid
		},
		success: function(data) {
			completeNumber = getJsonLength(JSON.parse(data));
		}
	})
	return getOrderCount;
}
//加载loading动画
function loadingModel() {
	$(document).on("ajaxStart", function(e) {
		$.showPreloader();
	}).on('ajaxStop', function(e) {
		$.hidePreloader();
	});
}

//配送开始页面
function status_index_model($scope, $http) {
	loadingModel();
	getOrderCount();
	$scope.startnum = startNumber;
	$scope.deliverynum = onSendNumber;
	$scope.completenum = completeNumber;
	var orderURL = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=waitSend";
	$http.get(orderURL, myData).success(function(data) {
			$scope.statusList = data;
		})
		//获取当前订单ID
	$scope.view_order_detail = function() {
			startOrderId = this.list.id
		}
		//开始配送按钮
	$scope.start_delivery = function() {
		startOrderId = this.list.id;
		$.modal({
			title: '请选择预约到达时间',
			text: '<div class="selectTime">' +
				'<select>' +
				'<option selected value="12:00">上午</option>' +
				'<option value="18:00">下午</option>' +
				'<option value="23:00">晚上</option>' +
				'</select>' +
				'</div>',
			buttons: [{
				text: '取消',
				bold: true
			}, {
				text: '确定',
				bold: true,
				onClick: function() {
					//alert( $('option').not(function(){ return !this.selected }).text() )
					var selected = $('option').not(function() {
						return !this.selected
					}).val();
					var myOrderPs = {
						params: {
							"dispatch_id": startOrderId,
							"selected": selected,
							"driver_id": userid
						}
					};
					var OrderUrl = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=startDispatch";
					$http.get(OrderUrl, myOrderPs).success(function(data) {
						if (data.status == 'y') {
							$.toast('操作成功');
							window.location.href = "#/driver/delivery";
						} else if (data.status == 'n') {
							$.toast('操作失败');
						}
					})
				}
			}, ]
		})

	}

}

//配送中页面
function status_delivery_model($scope, $http) {
	loadingModel();
	getOrderCount();
	$scope.startnum = startNumber;
	$scope.deliverynum = onSendNumber;
	$scope.completenum = completeNumber;
	//	alert(myData.params.id)
	var orderURL = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=onSend";
	$http.get(orderURL, myData).success(function(data) {
			$scope.statusList = data;
		})
		//获取当前订单ID
	$scope.view_order_detail = function() {
			startOrderId = this.list.id
		}
		// 编辑搬运费
	$scope.editCarryPay = function($scope2) {
		var that = this;
		$.prompt('请输入金额(元)', '建议修改搬运费',
			function(value) {
				var carryData = {
					params: {
						"dispatch_id": that.list.id,
						"money": value,
						"driver_id": userid
					}
				};
				var carryUrl = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=deliveryFee";
				$http.get(carryUrl, carryData).success(function(data) {
					if (data.success == 1) {
						$.alert('搬运费修改为' + value + '元,等用户确认后生效');
						that.list.carryRecord = {
							"status": 0
						};
					} else if (data.success == 0) {
						$.alert('搬运费输入错误或者不能为空');
					}
				})
			}
		);
	}

	//客户签收
	$scope.confirmtake = function() {
		var that = this;
		var takeData = {
			params: {
				"dispatch_id": that.list.id,
				"driver_id": userid
			}
		};
		var carryUrl = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=customerSign";
		$http.get(carryUrl, takeData).success(function(data) {
			if (data.status == "y") {
				$.toast("签收成功");
				window.location.href = "#/driver/complete";
			} else if (data.status == "n") {
				$.toast(data.info);
			}

		})
	}

	//查询过滤
}

//配送完成页面
function status_complete_model($scope, $http) {
	loadingModel();
	getOrderCount();
	$scope.startnum = startNumber;
	$scope.deliverynum = onSendNumber;
	$scope.completenum = completeNumber;

	function getList() {
		var orderURL = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=completeSend";
		$http.get(orderURL, myData).success(function(data) {
			$scope.statusList = data;
		})
	}
	getList();
	//点击当前订单，获取当前订单ID
	$scope.view_order_detail = function() {
			startOrderId = this.list.id
		}
		//上传图片
	$scope.uploadImg = function($index) {
			var that = this;
			// 调取相册照片
			function galleryImg() {
				// 从相册中选择图片
				// outSet("从相册中选择图片:");
				plus.gallery.pick(function(path) {
					var imgURL = publicAjaxUrl + "Mobile/Driver/uploadFile.html?dispatch_id=" + that.statusList.id + "&driver_id=" + userid;
					//var imgURL = "http://demo.dcloud.net.cn/helloh5/uploader/upload.php";
					$.showPreloader("开始上传");
					var task = plus.uploader.createUpload(imgURL, {
							method: "POST"
						},
						function(t, status) { //上传完成
							if (status == 200) {
								$.hidePreloader();
								var files = JSON.parse(t.responseText).files.ybgimg;
								var success = files.success;
								if (success == 1) {
									$.toast("上传成功");
									//把图片传到数据库
									var imgUpUrl = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=downphotograph";
									var myImgData = {
										params: {
											"dispatch_id": that.list.id,
											"driver_id": userid,
											"site_info_id": that.list.order.site_info_id, //工地地址
											"media_id": files.url //图片地址
										}
									}
									$http.get(imgUpUrl, myImgData).success(function(data) {
										if (data.success == 1) {
											// var imgDetail = "<li class='img' ng-click='viewImgFun($index)'><img src='"+files.url+"'></li>";
											// $(".img-brower-list").prepend(imgDetail);
											getList();
										} else {
											$.toast("发生错误了，请联系云包猿")
										}
									})
								} else {
									$.toast("上传失败");
								}

							} else {
								$.hidePreloader();
								$.alert("上传失败：" + status);
							}
						}
					);
					task.addFile(path, {
						key: "ybgimg"
					});
					task.start();

				}, function(e) {
					// $.alert( "取消选择图片" );
				}, {
					filter: "image"
				});
			}
			galleryImg();
		}
		//查看图片
		//调用图片浏览器方法
		//点击打开图片
	$scope.viewImgFun = function($index) {

		var that = this;
		var imglist = that.list.dispatch_image;
		var imgArray = [];
		for (var k in imglist) {
			imgArray.push(imglist[k].image_path)
		}
		imgBrower(imgArray, $index);

		function imgBrower(img, index) {
			var myPhotoBrowserPopup = $.photoBrowser({
				photos: img, //显示的图片
				type: 'popup',
				theme: 'light',
				type: 'standalone'
			});

			//获取点击的图片索引
			//console.log(index);
			//打开图片显示
			myPhotoBrowserPopup.open(index);
			//增加删除按钮
			$(".photo-browser .bar-nav").append("<a class='icon icon-remove pull-right' ng-click='del($index)'></a>");

			//删除图片按钮
			$(".icon-remove").click(function() {
				imglist.splice(index, 1);
				$.confirm('你确认要删除吗?', function() {
					var indexNumber = $(".photo-browser-current").text() - 1;
					var imgId = imglist[indexNumber].id;
					$.post(publicAjaxUrl + "mobile/driver/delimage", {
						image_id: imgId
					}, function(data) {
						//console.log( data );
						if (data.status == '1') {
							$(".img-brower-list li").eq(indexNumber).remove();
						} else if (data.status == '0') {
							$.alert("失败了，请联系云包猿");
						} else {
							$.alert('未知错误');
						}
					});
					$(".photo-browser").remove();
				});
			});

		}
	};

}

//配送详情页面
function status_detail_model($scope, $http) {

	//设置用户订单请求参数
	var myorder = {
		params: {
			"dispatch_id": startOrderId,
			"driver_id": userid
		}
	};
	var orderURL = publicAjaxUrl + "/index.php?m=Mobile&c=Driver&a=dispatchDetail";
	$http.get(orderURL, myorder).success(function(data) {
		$scope.detailList = data;
	})

	//开始配送按钮
	$scope.start_delivery = function() {
		$.modal({
			title: '请选择预约到达时间',
			text: '<div class="selectTime">' +
				'<select>' +
				'<option selected value="12:00">上午</option>' +
				'<option value="18:00">下午</option>' +
				'<option value="23:00">晚上</option>' +
				'</select>' +
				'</div>',
			buttons: [{
				text: '取消',
				bold: true
			}, {
				text: '确定',
				bold: true,
				onClick: function() {
					//alert( $('option').not(function(){ return !this.selected }).text() )
					var selected = $('option').not(function() {
						return !this.selected
					}).val();
					var myOrderPs = {
						params: {
							"dispatch_id": startOrderId,
							"selected": selected,
							"driver_id": userid
						}
					};
					var OrderUrl = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=startDispatch";
					$http.get(OrderUrl, myOrderPs).success(function(data) {
						if (data.status == 'y') {
							$.toast('操作成功');
							window.location.href = "#/driver/delivery";
						} else if (data.status == 'n') {
							$.toast('操作失败');
						}
					})
				}
			}, ]
		})
	}

	//客户签收按钮
	$scope.confirmtake = function() {
		var that = this;
		var takeData = {
			params: {
				"dispatch_id": startOrderId,
				"driver_id": userid
			}
		};
		var carryUrl = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=customerSign";
		$http.get(carryUrl, takeData).success(function(data) {
			alert(JSON.stringify(data));
			if (data.status == "y") {
				$.toast("签收成功");
				window.location.href = "#/driver/complete";
			} else if (data.status == "n") {
				$.toast(data.info);
			}

		})
	}

}

//个人中心页面
function driver_me_model($scope, $http) {
	$scope.me = {
		name: userName,
		tel: userPhone,
	}
	var pushServer = "http://demo.dcloud.net.cn/helloh5/push/";
	var message = null;
	document.addEventListener("plusready", function() {
		message = document.getElementById("message");
		// 监听点击消息事件

		plus.push.addEventListener("click", function(msg) {
			// 判断是从本地创建还是离线推送的消息
			switch (msg.payload) {
				case "LocalMSG":
					outSet("点击本地创建消息启动：");
					break;
				default:
					outSet("点击离线推送消息启动：");
					break;
			}
			// 提示点击的内容
			plus.ui.alert(msg.content);
			// 处理其它数据
			logoutPushMsg(msg);
		}, false);
		// 监听在线消息事件
		plus.push.addEventListener("receive", function(msg) {
			if (msg.aps) { // Apple APNS message
				outSet("接收到在线APNS消息：");
			} else {
				outSet("接收到在线透传消息：");
			}
			logoutPushMsg(msg);
		}, false);
	}, false);

	function getPushInfo() {
		var info = plus.push.getClientInfo();
		$.alert("获取客户端推送标识信息：");
		$.alert("token: " + info.token);
		$.alert("clientid: " + info.clientid);
		$.alert("appid: " + info.appid);
		$.alert("appkey: " + info.appkey);
	}

	$scope.getPush = function() {
		getPushInfo();
	}

	function createLocalPushMsg() {
		var options = {
			cover: false
		};
		var str = new Date();
		str += ": 欢迎使用Html5 Plus创建本地消息！";
		plus.push.createMessage(str, "LocalMSG", options);
		$.alert("创建本地消息成功！");
		$.alert("请到系统消息中心查看！");
		if (plus.os.name == "iOS") {
			$.alert('*如果无法创建消息，请到"设置"->"通知"中配置应用在通知中心显示!');
		}
	}
	$scope.createLocalPush = function() {
		createLocalPushMsg();
	}
}