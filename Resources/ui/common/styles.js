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
		cellBorderWidth:0.3,
		
		schedulerWindow: {
			layout:"vertical",
			backgroundColor: "#fdf6e3",
			width:320
		},
		headerView: {
			height:20, width:320,
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
			height:356, width:320,
			top:0, left:0
		},
		weekDayNameView: {
			height:19, width:44.6,
			borderWidth:0.5, borderColor:"#eee8d5",
			layout: "vertical"
		},
		weekDayNameLabel: {
			width:44.6,
			textAlign:'center', color:"#fff", font:{fontSize:12},
			top:1.5, left:0
		},
		weekDayName: ['日','月','火','水','木','金','土'],
		weekDayNameLabelColor: ['#af1d66','#7a7a7a','#7a7a7a','#7a7a7a','#7a7a7a','#7a7a7a','#334499'],
		dayLabelColor: ["#f8d3e6","#eee8d5","#eee8d5","#eee8d5","#eee8d5","#eee8d5","#d9ddf2", "#e6e6e6", "#586e75"], //日曜-土曜＋前月、翌月用
		
		dayCellView: {
			height:39, width:44.6,
			borderWidth:0.5, borderColor:"#eee8d5",
			layout: "vertical"
		},
		dayCellLabel: {
			color:"#657b83",
		    font:{fontSize:12},
		    top:-2, left:2
		},
		
		//EventView用
		eventView: {
			height:80, width:320,
			top:0, left:0
		}
	};
})();

//bz.ui.propertiesへのショートカットを作っておく
var $$ = bz.ui.properties;