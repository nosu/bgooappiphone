(function() {
	bz.ui.createCalendarView = function() {
		var view = Titanium.UI.createView($$.calendarView);
		
		bz.ui.createCalendar = function(year, month, day) {
			var platformWidth = Ti.Platform.displayCaps.platformWidth;
			var platformHeight = Ti.Platform.displayCaps.platformHeight;	
			var buttonWidth = Math.floor(platformWidth/7);
			
			var gridWidth = Math.floor(platformWidth/24);
			var gridHeight = Math.floor(platformHeight/36);
			
			var buttonHeight = Math.floor(gridHeight*2.5);
	
			//月の日数を求める
			var leapYear = false;
			if ((year%4 == 0 && year%100 != 0) || (year%400 == 0)) leap_year=true;
			var monthNumOfDay = [31,28+leap_year,31,30,31,30,31,31,30,31,30,31];
			var thisMonthNumOfDay = monthNumOfDay[month-1];
	
			//前月および翌月の日数を求める
			if(month==1) {
				var prevMonthNumOfDay = monthNumOfDay[11];
			} else {
				var prevMonthNumOfDay = monthNumOfDay[month-2];
			};
			if(month==12){
				var nextMonthNumOfDay = monthNumOfDay[0];
			} else {
				var nextMonthNumOfDay = monthNumOfDay[month];
			};

			//1日の曜日を求める
			if (month==1 || month==2) {
				zMonth = month + 12;
				zYear = year -1;
			} else {
				zMonth = month;
				zYear = year;
			};
			var firstDayOfMonth = (zYear+Math.floor(zYear/4)-Math.floor(zYear/100)+Math.floor(zYear/400)+Math.floor((13*zMonth+8)/5)+1)%7; //Math.floor((year*365.2425+days)%7);
			 
			 //曜日など用配列
			var weekDayName = ['日','月','火','水','木','金','土'];
			var weekDayNameLabelColor = ['#ff5744','#7a7a7a','#7a7a7a','#7a7a7a','#7a7a7a','#7a7a7a','#4343d9'];
			var dayButtonColor = ["#ffe4e1","#dcdcdc","#dcdcdc","#dcdcdc","#dcdcdc","#dcdcdc","#e6e6fa"];

			//カレンダーを生成する
			//曜日ラベルを生成する
			//各曜日表示セルView配列生成
   			bz.ui.cal.weekDayNameViews = new Array(7);
   			bz.ui.cal.weekDayNameLabels = new Array(7);
			for(var i=0;i<7;i++){
				var top = 0;
				var left = 0.4 + $$.cellBorderWidth + $$.cellWidth*i;
		    	bz.ui.cal.weekDayNameViews[i] = Ti.UI.createView(bz.combine($$.weekDayNameView,{
		    		backgroundColor:weekDayNameLabelColor[i],
		    		top:top.toFixed(1), left:left.toFixed(1)
		    	}));
		    	bz.ui.cal.weekDayNameLabels[i] = Ti.UI.createLabel(bz.combine($$.weekDayNameLabel,{
		    		text:weekDayName[i],
		    		backgroundColor:weekDayNameLabelColor[i]
		    	}));
		    	bz.ui.cal.weekDayNameViews[i].add(bz.ui.cal.weekDayNameLabels[i]);
		    	view.add(bz.ui.cal.weekDayNameViews[i]);
		    };
    
    		//日付ボタンを生成する
    		//表示する前月および翌月の日数と最初の日曜日の日付を求める
		    var prevMonthShowDay = firstDayOfMonth;
		    var prevMonthFirstSunday = prevMonthNumOfDay - prevMonthShowDay;
		    var nextMonthShowDay = 42 - (prevMonthShowDay + thisMonthNumOfDay);
    
    		//位置制御用変数初期化
		    var rows = 0;
		    var cols = 0;
		    var top = 0;
		    var left = 0;
		    
		    //各日付のセルView配列生成
   			bz.ui.cal.dayCellViews = new Array(42);
    		//各日付の日にちLabel配列生成
			bz.ui.cal.dayNumLabels = new Array(42);
			//各日付の予定Label配列生成
			bz.ui.cal.eventLabels = new Array(42);
    
    		//前月のView生成
		    for(var i=0;i<prevMonthShowDay;i++) {
		    	var top = 20 + $$.cellBorderWidth;
				var left = 0.4 + $$.cellBorderWidth + $$.cellWidth * cols;
			    bz.ui.cal.dayCellViews[i] = Ti.UI.createView(bz.combine($$.dayCellView,{
		        	backgroundColor: '#7a7a7a',
		            top:top.toFixed(1), left:left.toFixed(1)
	        	}));
		        bz.ui.cal.dayNumLabels[i] = Ti.UI.createLabel(bz.combine($$.dayCellLabel, {
		        	text:String(i+prevMonthFirstSunday)
		        }));
		        bz.ui.cal.dayCellViews[i].add(bz.ui.cal.dayNumLabels[i]);
		        bz.ui.cal.dayCellViews[i].addEventListener("click", function(e) {
		        	//dammy
		        });
		        view.add(bz.ui.cal.dayCellViews[i]);
		        cols++;
		    };
    
		    //当月のView生成
		    cols = prevMonthShowDay;
		    
		    //今日の日付をセット
			bz.ui.cal.currentCell = day + prevMonthShowDay;
		    
		    for(var i=0;i<thisMonthNumOfDay;i++) {
		    	var top = 20 + $$.cellBorderWidth + 40 * rows;
				var left = 0.4 + $$.cellBorderWidth + $$.cellWidth * cols;
		        bz.ui.cal.dayCellViews[i+prevMonthShowDay] = Ti.UI.createView(bz.combine($$.dayCellView, {
		            backgroundColor:bz.ui.cal.dayLabelColor[cols],
		            top:top.toFixed(1), left:left.toFixed(1),
		            dayNum: i+prevMonthShowDay //イベント用に一応用意
		        }));
		        bz.ui.cal.dayNumLabels[i+prevMonthShowDay] = Ti.UI.createLabel(bz.combine($$.dayCellLabel, {
		        	text:String(i+1)
		        }));
		        //起動日のセルに色をつける
		        if(bz.ui.currentDay == i) {
		        	bz.ui.cal.dayNumLabels[i+prevMonthShowDay].backgroundColor = "red";
		        	bz.ui.currentCell = i + prevMonthShowDay;
		        	bz.ui.cal.currentCellColor = bz.ui.cal.dayLabelColor[cols];
		        };
		        bz.ui.cal.dayCellViews[i+prevMonthShowDay].add(bz.ui.cal.dayNumLabels[i+prevMonthShowDay]);
		        
		        bz.ui.cal.dayCellViews[i+prevMonthShowDay].addEventListener("click",
		        (function(i, prevMonthShowDay) {return function(){
		        	//currentCellの選択を解除
		        	bz.ui.cal.dayCellViews[bz.ui.cal.currentCell].backgroundColor = bz.ui.cal.currentCellColor;
		        	//bz.ui.cal.dayCellViews[bz.ui.cal.currentCell].borderColor = "#fff";
		        	
		        	//新しいCellを選択
		        	bz.ui.cal.currentCellColor = bz.ui.cal.dayCellViews[i+prevMonthShowDay].backgroundColor; //通常時の色を保存
		        	bz.ui.cal.currentCell = i+prevMonthShowDay;
		        	bz.ui.cal.dayCellViews[i+prevMonthShowDay].backgroundColor = "yellow";
		        	//bz.ui.cal.dayCellViews[i+prevMonthShowDay].borderColor = "black";
		        	
		        	//イベントViewを更新
		        	//dammy
		        	}}).call(this, i, prevMonthShowDay)
    			);
    			
    			//dammy予定読み込み
    			bz.ui.cal.eventLabels[i+prevMonthShowDay] = new Array(2);
    			bz.ui.cal.eventLabels[i+prevMonthShowDay][0] = Ti.UI.createLabel({
    				text:bz.ui.cal.dayCellViews[i+prevMonthShowDay].width,//"ぷらら"+String(i+prevMonthShowDay), color:"#000",
		            font:{fontSize:8},
		            top:0, left:0
    			});
    			bz.ui.cal.dayCellViews[i+prevMonthShowDay].add(bz.ui.cal.eventLabels[i+prevMonthShowDay][0]);
		        
		        view.add(bz.ui.cal.dayCellViews[i+prevMonthShowDay]);
		        		        
		        if(cols != 6){  //各日付は横4列まで
		            cols++;
		        } else {
		            cols = 0;
		            rows++;
		        };
		    };

		    //翌月Cell生成
		    for(var i=0;i<nextMonthShowDay;i++) {
		    	var top = 20 + $$.cellBorderWidth + 40 * rows;
				var left = 0.4 + $$.cellBorderWidth + $$.cellWidth * cols;
		        bz.ui.cal.dayCellViews[i+prevMonthShowDay+thisMonthNumOfDay] = Ti.UI.createView(bz.combine($$.dayCellView, {
		            backgroundColor:"#7a7a7a",
		            top:top.toFixed(1), left:left.toFixed(1),
		        }));
		        bz.ui.cal.dayNumLabels[i+prevMonthShowDay+thisMonthNumOfDay] = Ti.UI.createLabel(bz.combine($$.dayCellLabel, {
		        	text:String(i+1)
		        }));
		        bz.ui.cal.dayCellViews[i+prevMonthShowDay+thisMonthNumOfDay].add(bz.ui.cal.dayNumLabels[i+prevMonthShowDay+thisMonthNumOfDay]);
		        bz.ui.cal.dayCellViews[i+prevMonthShowDay+thisMonthNumOfDay].addEventListener("click", function(e) {
		        	//dammy
		        });
		        view.add(bz.ui.cal.dayCellViews[i+prevMonthShowDay+thisMonthNumOfDay]);
		        
		        if(cols != 6){  //各日付は横4列まで
		            cols++;
		        } else {
		            cols = 0;
		            rows++;
		        };
		    };

			//今日の日付に色をつける
			var todayCell = day;
			
		
		};  //createCalendar End

		//今日の日付でカレンダー生成
		(function(){
			dd = new Date();
			bz.ui.currentYear = dd.getFullYear();
			bz.ui.currentMonth = dd.getMonth() + 1;
			bz.ui.currentDay = dd.getDay();
			bz.ui.createCalendar(bz.ui.currentYear, bz.ui.currentMonth, bz.ui.currentDay);
		})();

		return view;
	};
})();
