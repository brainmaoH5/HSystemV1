/**
 * The base of nurse.
 * 
 * @author Brainmao
 * @version v0.1
 */

(function(mui, doc, appnurse) {

	/**
	 * 初期化页面
	 */
	appnurse.fnMuiInit = function() {
		mui.init({
			statusBarBackground: '#f7f7f7'
		});

		mui.plusReady(function() {
			mui.toast("当前是通过对象的形式以ajax取得table数据");
			appnurse.fnGetSetting();
			appnurse.fnGetTableList();
		})
	}

	/**
	 * 设置页面功能
	 */
	appnurse.fnGetSetting = function() {
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

	/**
	 * 数据列表取得
	 */
	appnurse.fnGetTableList = function() {
		$(document).ready(function() {
			$('#example').DataTable({
				"ajax": "../data/doctorobjects.txt",
				"bPaginate": true, //翻页功能
				"bLengthChange": false, //改变每页显示数据数量
				"bFilter": true, //过滤功能
				"bSort": false, //排序功能
				"bInfo": true, //页脚信息
				"bAutoWidth": true, //自动宽度
				"columns": [{
						"data": "name"
					},
					{
						"data": "idtype"
					},
					{
						"data": "idcode"
					},
					{
						"data": "birthday"
					},
					{
						"data": "sex"
					},
					{
						"data": "number"
					},
					{
						"data": "statue"
					}
				],
				"oLanguage": {
					"sLengthMenu": "每页显示 _MENU_ 条记录",
					"sZeroRecords": "抱歉， 没有找到",
					"sInfo": "从 _START_ 到 _END_ /共 _TOTAL_ 条数据",
					"sInfoEmpty": "没有数据",
					"sInfoFiltered": "(从 _MAX_ 条数据中检索)",
					"sSearch": "",
					"oPaginate": {
						"sFirst": "首页",
						"sPrevious": "前一页",
						"sNext": "后一页",
						"sLast": "尾页"
					}
				}
			});
			$('#example_filter input').attr('placeholder', '这里输入关键字')

			var table = $('#example').DataTable();

			$('#example tbody').on('click', 'tr', function() {
				mui.openWindow({
					url: '../view/nurseinput.html',
					id: 'nurseinput.html',
					extras: {
						'name': table.row(this).data().name,
						'idtype': table.row(this).data().idtype,
						'idcode': table.row(this).data().idcode
					}
				});
			});

		});
	}

	appnurse.fnMuiInit();
}(mui, document, window.appnurse = {}))