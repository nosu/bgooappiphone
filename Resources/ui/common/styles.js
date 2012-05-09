(function() {
	var platformWidth = Ti.Platform.displayCaps.platformWidth;
	var platformHeight = Ti.Platform.displayCaps.platformHeight;	
	var buttonWidth = Math.floor((platformWidth - 10) / 7);
	var gridWidth = Math.floor(platformWidth/24);
	var gridHeight = Math.floor(platformHeight/36);
	var buttonHeight = Math.floor(gridHeight*2.5);
	
	var headerViewHeight = gridHeight*4;
	var monthSelectorViewHeight = gridHeight*4;
	var calendarViewHeight = buttonHeight*6.5;
	var calendarViewWidth = platformWidth-10;
	var eventViewHeight = gridHeight*6;
	
	//Globally available theme object to hold theme colors/constants
	bz.ui.theme = {
		textColor:'#000000',
		grayTextColor:'#888888',
		headerColor:'#333333',
		lightBlue:'#006cb1',
		darkBlue:'#93caed',
		fontFamily: 'Droid Sans'
	};
	
	bz.ui.cal = {
		weekDayName: ['日','月','火','水','木','金','土'],
		weekDayNameLabelColor: ['#ff5744','#7a7a7a','#7a7a7a','#7a7a7a','#7a7a7a','#7a7a7a','#4343d9'],
		dayLabelColor: ["#ffe4e1","#dcdcdc","#dcdcdc","#dcdcdc","#dcdcdc","#dcdcdc","#e6e6fa"]
	};
	

	//All shared property sets are declared here.
	bz.ui.properties = {
		//grab platform dimensions only once to save a trip over the bridge
		platformWidth: platformWidth,
		platformHeight: platformHeight,
		gridWidth: gridWidth,
		gridHeight: gridHeight,
		cellWidth: 45.6,
		cellBorderWidth:0.3,
		
		//we use these for default components
		Button: {
			backgroundImage:'images/button_bg.png',
			height:50,
			width:250,
			color:'#000000',
			font: {
				fontSize:18,
				fontWeight:'bold'
			}
		},
		Label: {
			color:bz.ui.theme.textColor,
			font: {
				fontFamily:bz.ui.theme.fontFamily,
				fontSize:12
			},
			height:'auto'
		},
		
		//we use these as JS-based 'style classes'
		schedulerWindow: {
			layout:"vertical",
			backgroundColor:"#fff",
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
		eventView: {
			height:eventViewHeight, width:platformWidth,
			top:0, left:0
		}
	};
})();

//global shortcut for UI properties, since these get used A LOT. polluting the global
//namespace, but for a good cause (saving keystrokes)
var $$ = bz.ui.properties;