/**
 * The base of login.
 * 
 * @author Brainmao
 * @version v0.1
 */

(function(mui, doc,applogin) {

	//全局变量用于记录开关的状态
	var g_Flag;

	applogin.fnMuiInit = function() {
		//mui初期化顶部的bar颜色为白色背景
		mui.init({
			statusBarBackground: '#f7f7f7'
		});

		mui.plusReady(function() {
			//判断localStorage中是否纯在缓存记录
			var Id = localStorage.getItem("txtId");
			//如果缓存中有数据，则加载出来
			if(Id != null) {
				doc.getElementById("account").value = Id;
				doc.getElementById("password").value = localStorage.getItem("txtPwd");
				doc.getElementById("autoLogin").setAttribute("class", "mui-switch mui-active")
			}
			applogin.switchButton();
			applogin.loginTo();
		});
	}

	/**
	 * 登录跳转
	 */
	applogin.loginTo = function() {
		var login = doc.getElementById("login");
		login.addEventListener('tap', function() {
			if(applogin.checkLogin()) {
				if(g_Flag == true) {
					var id = doc.getElementById("account").value;
					var pwd = doc.getElementById("password").value;
					localStorage.setItem("txtId", id);
					localStorage.setItem("txtPwd", pwd);
				} else {
					localStorage.removeItem("txtId");
					localStorage.removeItem("txtPwd");
				}

				mui.openWindow({
					url: 'index.html',
					id: 'index.html'
				});
			}
		})
	}

	/**
	 * 用户名密码check
	 */
	applogin.checkLogin = function() {
		var accountval = doc.getElementById("account");
		var passwordval = doc.getElementById("password");
		var message = "请输入用户名或密码";
		var message1 = "账号最短为 5 个字符";
		var message2 = "密码最短为 6 个字符";
		if(accountval.value == "" || passwordval.value == "") {
			mui.toast(message);
			return false;
		} else if(accountval.value.length < 5) {
			mui.toast(message1);
			return false;
		} else if(passwordval.value.length < 6) {
			mui.toast(message2);
			return false;
		}
		return true;
	}

	/**
	 * 判断开关状态
	 */
	applogin.switchButton = function() {
		doc.getElementById("autoLogin").addEventListener("toggle", function(event) {
			if(event.detail.isActive) {
				console.log("你启动了开关");
				g_Flag = true;
			} else {
				console.log("你关闭了开关");
				g_Flag = false;
			}
		})
	}
	applogin.fnMuiInit();
}(mui, document,window.applogin={}));