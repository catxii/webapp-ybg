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
		controller: status_index_model
	}).
	//配送状态-配送完
	when('/driver/complete', {
		templateUrl: 'driver_index_status_complete.html',
		controller: status_index_model
	}).
	//个人中心
	when('/me/index', {
		templateUrl: 'driver_me_index.html',
		controller: status_index_model
	})
}]);

//登陆模块
function login_model($scope, $http) {
	var login = $scope.login = {
			mobile: "13712345678",
			password: "123456"
		}
		//登陆请求
	var ajaxUrl = publicAjaxUrl+"Mobile/Driver/";
	$scope.submit = function() {
		$.ajax({
			url: ajaxUrl + "login.html",
			type: "post",
			data: {
				"mobile": login.mobile,
				"password": login.password
			},
			error: function(data) {
				alert("无法访问服务器")
			},
			success: function(data) {
				var data = JSON.parse(data);
				if (window.localStorage) {
					localStorage.setItem("userid", data.id);
					//alert(localStorage.getItem("userid") );
					window.location.href = "#/driver/start";
				} else {
					alert("不支持本地存储")
				}
			}
		})
	}
}

function status_index_model($scope, $http) {
	var userid = localStorage.getItem("userid");
	var orderURL = publicAjaxUrl + "index.php?m=Mobile&c=Driver&a=waitSend";
	var myData = {
		params: {
			"id": userid
		}
	};
	$http.get(orderURL, myData).success(function(data) {
		$scope.statusList = data;
		console.log($scope.statusList[0].order.status_pay);
	})
}