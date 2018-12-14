/**
 * 演示程序当前的 “注册/登录” 等操作，是基于 “本地存储” 完成的
 * 当您要参考这个演示程序进行相关 app 的开发时，
 * 请注意将相关方法调整成 “基于服务端Service” 的实现。
 **/
(function($) {
	$.AjaxR = function() {
		if(arguments.length == 2) {
			new AjaxRequest(arguments[0], arguments[1]).init();
		} else {
			var opts = {
				data: arguments[1],
				success: arguments[2],
				dataType: arguments[3] || "json"
			};
			new AjaxRequest(arguments[0], opts).init();
		}

	}
	
	var AjaxRequest = function(url, opts) {
		var me = this;
		this.type = opts.type || "post";
		this.url = url;
		this.data = opts.data || {};
		this.loader = opts.loader || true;
		this.dataType = opts.dataType || "json";
		this.success = opts.success;

	}
	AjaxRequest.prototype = {
		init: function() {
			this.sendRequest();
		},
		beforeSend: function() {
			if(this.loader) {
				plus.nativeUI.showWaiting("请等待,数据加载中！");
			}
		},
		complete: function() {

		},
		error: function(data) {
			$.alert('服务器连接超时，请稍后再试');
		},
		//发送请求
		sendRequest: function() {
			var self = this;
			$.ajax(this.url, {
				data: this.data,
				async: true,
				dataType: this.dataType, //服务器返回json格式数据
				type: this.type, //HTTP请求类型
				beforeSend: this.beforeSend(),
				complete: this.complete(),
				success: function(res) {
					if(self.loader) {
						plus.nativeUI.closeWaiting();
					}
					self.success(res);
				},
				error: this.error
			});

		}
	};
	return $;
}(mui));

function createLocalPushMsg(content, type) {
	var options = {
		cover: false
	};
	plus.push.createMessage(content, type, options);
	if(plus.os.name == "iOS") {
		$.alert('*如果无法创建消息，请到"设置"->"通知"中配置应用在通知中心显示!');
	}
}

function dealpush(){
	plus.push.addEventListener("click", function(msg) {
		logoutPushMsg(msg); 
	}, false);

	plus.push.addEventListener("receive", function(msg) {
		logoutPushMsg(msg); 
	}, false);
}
function clearpush(){
	plus.push.clear();
	 
}

function logoutPushMsg(msg) {
}