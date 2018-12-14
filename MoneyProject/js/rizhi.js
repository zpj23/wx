var f1 = null;
var picarr = new Array();
var basearr = new Array();
var lat = "",
	longt = "";
var files = [];
// 上传文件 
function upload() {

	var wt = plus.nativeUI.showWaiting();
	var task = plus.uploader.createUpload(server + "?action=dynamicadd", {
			method: "POST"
		},
		function(t, status) { //上传完成 
			if(status == 200) {
				//                      console.log("上传成功：" + t.responseText); 
				mui.toast("发表成功");
				//插入本地数据库 
				wt.close();
				mui.back();
			} else {
				console.log("上传失败：" + status);
				wt.close();
			}
		}
	);
	var title = $("#tbxtitle").val();
	if(title.length < 1) {
		wt.close();
		mui.toast("内容不能为空");
	} else {
		task.addData("title", title);
		task.addData("uid", getUid());
		task.addData("userid", plus.storage.getItem("policeid"));
		//task.addData("lat", lat.toString()); 
		//task.addData("longt", longt.toString()); 
		//              console.log("准备上传"+files.length+"个图片"); 
		for(var i = 0; i < files.length; i++) {
			var f = files[i];
			//                  console.log("准备上传的图片路径："+f.path); 
			task.addFile(f.path, {
				key: f.name
			});
		}
		task.start();
	}

}

// 添加文件 
var index = 1;
var newUrlAfterCompress;

function appendFile(p) {
	files.push({
		name: "uploadkey" + index, //这个值服务器会用到，作为file的key 
		path: p
	});
	index++;
}
// 产生一个随机数 
function getUid() {
	return Math.floor(Math.random() * 100000000 + 10000000).toString();
}

function getposition() {
	plus.geolocation.getCurrentPosition(function(p) {
		var codns = p.coords; // 获取地理坐标信息； 
		lat = codns.latitude; //获取到当前位置的纬度； 
		longt = codns.longitude; //获取到当前位置的经度 
	}, function(e) {
		//alert("获取百度定位位置信息失败：" + e.message); 
	}, {
		provider: 'baidu'
	});
}

function galleryImgs() { // 从相册中选择图片 
	plus.gallery.pick(function(e) {
		$(".dynamic_images ul li").remove(".pickimg");
		//              console.log("选择了"+e.files.length+"个图片"); 
		for(var i = 0; i < e.files.length; i++) {
			if(i < 9) {
				picarr[i] = e.files[i];
				$("#tplist").append("<img src='" + e.files[i] + "' style='width:30%' />");
//				var dstname = "_downloads/" + getUid() + ".jpg"; //设置压缩后图片的路径 
//				newUrlAfterCompress = compressImage(e.files[i], dstname);
//				appendFile(dstname);
				//console.log(e.files[i]); 
				//console.log(dstname); 
			}
		}
	}, function(e) {
		console.log("取消选择图片");
	}, {
		filter: "image",
		multiple: true
	});
}

//压缩图片，这个比较变态的方法，无法return 
function compressImage(src, dstname) {
	//var dstname="_downloads/"+getUid()+".jpg"; 
	plus.zip.compressImage({
			src: src,
			dst: dstname,
			overwrite: true,
			quality: 20
		},
		function(event) {
			//console.log("Compress success:"+event.target); 
			return event.target;
		},
		function(error) {
			console.log(error);
			return src;
			//alert("Compress error!"); 
		});

}
//旋转图片，本文没用到 
function rotateImage() {
	plus.zip.compressImage({
			src: "_www/a.jpg",
			dst: "_doc/a.jpg",
			rotate: 90 // 旋转90度 
		},
		function() {
			alert("Compress success!");
		},
		function(error) {
			alert("Compress error!");
		});
}

function showActionSheet() {
	var bts = [{
		title: "拍照"
	}, {
		title: "从相册选择"
	}];
	plus.nativeUI.actionSheet({
			cancel: "取消",
			buttons: bts
		},
		function(e) {
			if(e.index == 1) {
				getImage();
			} else if(e.index == 2) {
				galleryImgs();
			}
		}
	);
}
//拍照 
function getImage() {
	var cmr = plus.camera.getCamera();
	cmr.captureImage(function(p) {
		plus.io.resolveLocalFileSystemURL(p, function(entry) {
			var localurl = entry.toLocalURL(); // 
			$("#tplist").append("<img src='" + localurl + "' style='width:30%' />");
		});
	}, function(e) {
		//outLine('失败：'+e.message);
	}, {
		filename: '_doc/camera/',
		index: 1
	});
}