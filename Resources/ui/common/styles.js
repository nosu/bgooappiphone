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
			height:20, width:platformWidth,
			top:0, left:0
		},
		calendarView: {
			height:356, width:320,
			top:0, left:0
		},
		weekDayNameView: {
			height:19, width:44.6,
			borderWidth:0.5, borderColor:"#fff",
			layout: "vertical"
		},
		weekDayNameLabel: {
			width:44.6,
			textAlign:'center', color:"#fff", font:{fontSize:12},
			top:0, left:0
		},
		weekDayName: ['日','月','火','水','木','金','土'],
		weekDayNameLabelColor: ['#ff5744','#7a7a7a','#7a7a7a','#7a7a7a','#7a7a7a','#7a7a7a','#4343d9'],
		dayLabelColor: ["#ffe4e1","#eee8d5","#eee8d5","#eee8d5","#eee8d5","#eee8d5","#e6e6fa"],
		
		dayCellView: {
			height:39, width:44.6,
			borderWidth:0.5, borderColor:"#fff",
			layout: "vertical"
		},
		dayCellLabel: {
			color:"#000",
		    font:{fontSize:12},
		    top:0, left:2
		},
		
		//EventView用
		eventView: {
			height:eventViewHeight, width:platformWidth,
			top:0, left:0
		}
	};
})();

//global shortcut for UI properties, since these get used A LOT. polluting the global
//namespace, but for a good cause (saving keystrokes)
var $$ = bz.ui.properties;