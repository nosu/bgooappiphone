(function() {
	bz.ui.createHeaderView = function() {
		var view = Ti.UI.createView($$.headerView);
		
		//年月表示
		/*
		for(var i=0;i<4;i++){
			bz.ui.cal.yearMonthLabels[i] = Ti.UI.createLabel(bz.combine($$.Label, {
				left:2
			}));
		};
		bz.ui.cal.yearMonthLabel[0].font = {fontSize:12},
		bz.ui.cal.yearMonthLabel[1].font = {fontSize:10},
		bz.ui.cal.yearMonthLabel[2].font = {fontSize:16},
		bz.ui.cal.yearMonthLabel[3].font = {fontSize:10},
		*/
		
		//ユーザ名表示
		bz.ui.cal.nameLabel = Ti.UI.createLabel($$.Label);
		bz.ui.cal.nameLabel.text= "電電太郎";
		view.add(bz.ui.cal.nameLabel);
		
		//年月移動
		(function(){
			var selectPrevMonth = Ti.UI.createLabel(bz.combine($$.Label, {
				text:"<",
				left:300
			}));
			view.add(selectPrevMonth);
			selectPrevMonth.addEventListener("click", function(){
				bz.ui.currentMonth--;
				var win = bz.ui.createSchedulerWindow();
				bz.ui.schedulerTab.open(win);
			});
		})();
		
		return view;
	};
})();
