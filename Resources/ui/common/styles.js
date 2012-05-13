/**
 * レイアウト、色などを以下で
 * 一括定義する
 */

(function() {
	//テーマ色定義
	bz.ui.theme = {
		textColor:'#000000',
		fontFamily: 'Droid Sans'
	};
	
	//レイアウトプロパティを定義
	bz.ui.properties = {
		//プラットフォームのサイズ
		platformWidth: 320,
		platformHeight: 480,
		
		//UI要素のデフォルトプロパティ
		Label: {
			color:bz.ui.theme.textColor,
			font: {
				fontFamily:bz.ui.theme.fontFamily,
				fontSize:12
			},
			height:'auto'
		},
		
		//SchedulerWindow用
		cellWidth: 45.6,
		cellHeight: 45,
		cellBorderWidth:0.5,
		
		schedulerWindow: {
			layout:"vertical",
			backgroundColor: "#fdf6e3",
			width:320
		},
		headerView: {
			height:30, width:320,
			top:0, left:0
		},
		yearMonthShowLabels: [
			{font: {fontSize:12}, top:5, left:5},
			{font: {fontSize:10}, top:9, left:34},
			{font: {fontSize:16}, top:3, left:50},
			{font: {fontSize:10}, top:9, left:62},
			45 //月数が二桁の場合のleft
		],
		
		calendarView: {
			height:288, width:320,
			top:0, left:0
		},
		weekDayNameView: {
			height:17, width:44.6,
			borderWidth:0.5, borderColor:"#eee8d5",
			layout: "vertical"
		},
		weekDayNameLabel: {
			width:44.6,
			textAlign:'center', color:"#fff", font:{fontSize:12},
			top:1, left: 0
		},
		weekDayName: ['日','月','火','水','木','金','土'],
		weekDayNameLabelColor: ['#af1d66','#7a7a7a','#7a7a7a','#7a7a7a','#7a7a7a','#7a7a7a','#334499'],
		dayLabelColor: ["#f8d3e6","#eee8d5","#eee8d5","#eee8d5","#eee8d5","#eee8d5","#d9ddf2", "#e6e6e6", "#586e75"], //日曜-土曜＋前月、翌月用
		
		dayCellView: {
			height:44, width:44.6,
			borderWidth:0.5, borderColor:"#eee8d5",
			layout: "vertical"
		},
		dayCellLabel: {
			color:"#657b83",
		    font:{fontSize:12},
		    top:-2, left:2
		},
		
		//EventListView用
		eventListView: {
			height:100, width:320,
			top:0, left:0
		},
		eventListTableView: {
			height: 100, width: 320,
			top: 0, left: 0,
			backgroundColor: "#fdf6e3",
			style: Titanium.UI.iPhone.TableViewStyle.GROUPED
		},
		tableViewSection: {
			height: 20
		},
		tableViewSectionHeaderView: {
			font: {fontSize:12}
		},
		tableViewRow: {
			height: 20
		},
		eventTime: {
			font: {fontSize:10},
			left: 10
		},
		eventTitle: {
			font: {fontSize:10},
			left: 80
		}
	};
})();

//bz.ui.propertiesへのショートカットを作っておく
var $$ = bz.ui.properties;