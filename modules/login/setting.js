 /**
 * The base of setting.
 * 
 * @author Brainmao
 * @version v0.1
 */

(function(mui, doc) {
	//命名空间
	fnNamespace("com.his.lc.setting");
	
	//mui初期化顶部的bar颜色为白色背景
	mui.init({
		statusBarBackground: '#f7f7f7'
	});

	mui.plusReady(function() {
		//客服电话
		doc.getElementById("tel").addEventListener('tap', function() {
			plus.device.dial("114");
		});
		//退出操作
		doc.getElementById('exit').addEventListener('tap', function() {
			if(mui.os.ios) {
				/*localStorage.removeItem("txtId");
				localStorage.removeItem("txtPwd");*/
				mui.openWindow({
					url: 'login.html',
					id: 'login',
					show: {
						aniShow: 'pop-in'
					},
					waiting: {
						autoShow: false
					}
				});
				return;
			}
			var btnArray = [{
				title: "注销当前账号"
			}, {
				title: "直接关闭应用"
			}];
			plus.nativeUI.actionSheet({
				cancel: "取消",
				buttons: btnArray
			}, function(event) {
				var index = event.index;
				switch(index) {
					case 1:
						//注销账号
						localStorage.removeItem("txtId");
						localStorage.removeItem("txtPwd");
						mui.openWindow({
							url: 'login.html',
							id: 'login',
							show: {
								aniShow: 'pop-in'
							},
							waiting: {
								autoShow: false
							}
						});
						break;
					case 2:
						plus.runtime.quit();
						break;
				}
			});
		}, false);
	});

}(mui, document));