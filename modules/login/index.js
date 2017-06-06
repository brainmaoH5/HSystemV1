/**
 * The base of index.
 * 
 * @author Brainmao
 * @version v0.1
 */

(function(mui, doc) {
	//命名空间
	fnNamespace("com.his.lc.index");

	//mui初期化顶部的bar颜色为白色背景
	mui.init({
		statusBarBackground: '#f7f7f7'
	});

	mui.plusReady(function() {
		com.his.lc.index.fnGetSetting();

		doc.getElementById("table1").addEventListener('tap', function() {
			mui.openWindow({
				url: 'view/tablfordoctor.html',
				id: 'tablfordoctor.html'
			});
		})
		doc.getElementById("table2").addEventListener('tap', function() {
			mui.openWindow({
				url: 'view/tablefornurse.html',
				id: 'tablefornurse.html'
			});
		})
	})
	/**
	 * 设置页面功能
	 */
	com.his.lc.index.fnGetSetting = function() {
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
}(mui, document))