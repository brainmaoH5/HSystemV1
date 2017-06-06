/**
 * The base of nurseinput.
 * 
 * @author Brainmao
 * @version v0.1
 */

(function(mui, doc, nurseinput) {

	/**
	 * 初期化页面
	 */
	nurseinput.fnMuiInit = function() {
		mui.init({
			statusBarBackground: '#f7f7f7'
		});
		mui.plusReady(function() {
			mui.toast("当前是明细画面");
			nurseinput.fnGetSetting();
			nurseinput.fnGetTableDetail();
			var sData = plus.webview.currentWebview();
			var nameObj = mui('#name');
			nameObj[0].value = sData.name;
			var postionObj = mui('#idtype');
			postionObj[0].value = sData.idtype;
			var idcodeObj = mui('#idcode');
			idcodeObj[0].value = sData.idcode;
		})
	}
	/**
	 * 设置页面功能
	 */
	nurseinput.fnGetSetting = function() {
		var settingPage = mui.preload({
			"id": 'setting',
			"url": 'setting.html'
		});

		var settingButton = doc.getElementById('setting');
		settingButton.addEventListener('tap', function(event) {
			mui.openWindow({
				id: 'setting',
				show: {
					aniShow: 'pop-in'
				},
				styles: {
					popGesture: 'hide'
				},
				waiting: {
					autoShow: false
				}
			});
		});
	}

	nurseinput.fnGetTableDetail = function() {
		$(document).ready(function() {

		});
	}

	nurseinput.fnMuiInit();

}(mui, document, window.nurseinput = {}))