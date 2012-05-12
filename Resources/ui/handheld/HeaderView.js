(function() {
	bz.ui.createHeaderView = function() {
		view = Ti.UI.createView($$.headerView);
		
		//年月表示
		var text = [String(bz.ui.currentYear), "年", String(bz.ui.currentMonth), "月"]
		bz.ui.yearMonthShowLabels = [];
		for(var i=0; i<4; i++) {
			bz.ui.yearMonthShowLabels[i] = Ti.UI.createLabel(bz.combine($$.yearMonthShowLabels[i], {
				text: text[i]
			}));
			view.add(bz.ui.yearMonthShowLabels[i]);
		};
		
		//ユーザ名表示
		bz.ui.nameLabel = Ti.UI.createLabel($$.Label);
		bz.ui.nameLabel.text= "電電太郎";
		view.add(bz.ui.nameLabel);
		
		//年月移動用矢印
		(function(){
			var selectPrevMonth = Ti.UI.createLabel(bz.combine($$.Label, {
				text:"<",
				left:270
			}));
			view.add(selectPrevMonth);
			selectPrevMonth.addEventListener("click", function(){
				if (bz.ui.currentMonth == 1) {
					bz.ui.currentMonth = 12;
					bz.ui.currentYear--;
				} else {
					bz.ui.currentMonth--;
				};
				var tab = bz.ui.createApplicationTabGroup();
				tab.open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
				bz.ui.currentTabGroup = tab;
			});
			
			var selectNextMonth = Ti.UI.createLabel(bz.combine($$.Label, {
				text:">",
				left:300
			}));
			view.add(selectNextMonth);
			selectNextMonth.addEventListener("click", function(){
				if (bz.ui.currentMonth == 12) {
					bz.ui.currentMonth = 1;
					bz.ui.currentYear++;
				} else {
					bz.ui.currentMonth++;
				};
				var tab = bz.ui.createApplicationTabGroup();
				tab.open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});
				bz.ui.currentTabGroup = tab;
			});
		})();
		
		return view;
	};
})();
