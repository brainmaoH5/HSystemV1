/**
 * The base of doctorinput.
 * 
 * @author Brainmao
 * @version v0.1
 */

(function(mui, doc) {
	//命名空间
	fnNamespace("com.his.lc.doctorinput");

	/**
	 * 初期化页面
	 */
	com.his.lc.doctorinput.fnMuiInit = function() {
		mui.init({
			statusBarBackground: '#f7f7f7'
		});

		mui.plusReady(function() {
			mui.toast("当前是明细画面");
			com.his.lc.doctorinput.fnGetSetting();
			com.his.lc.doctorinput.fnGetTableDetail();
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
	com.his.lc.doctorinput.fnGetSetting = function() {
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

	com.his.lc.doctorinput.fnGetTableDetail = function() {
		$(document).ready(function() {

		});
	}

	com.his.lc.doctorinput.fnMuiInit();
}(mui, document))