(function () {
	bz.ui.createEventListView = function() {
		var view = Ti.UI.createView(bz.combine($$.eventListView, {}));
		bz.ui.eventListTableView = Ti.UI.createTableView($$.eventListTableView);
		
		view.add(bz.ui.eventListTableView);
		//bz.ui.setEventList(bz.ui.todayYear, bz.ui.todayMonth, bz.ui.todayDay);
		
		return view; 
	};
	
	bz.ui.setEventList = function (year, month, day) {
		var data = [],
			time = [],
			title = [];
			
		var tableViewSectionHeaderView = Ti.UI.createView(bz.combine($$.tableViewSectionHeaderView, {
			text: year + "年" + month + "月" + day + "日",
		}));	
		var section = Ti.UI.createTableViewSection(bz.combine($$.tableViewSection, {
			headerView: tableViewSectionHeaderView	
		}));
		
		for (var i=0;i<3;i++) {
			var row = Ti.UI.createTableViewRow($$.tableViewRow);
			time[i] = Ti.UI.createLabel($$.eventTime);
			title[i] = Ti.UI.createLabel($$.eventTitle);
			
			time[i].text = "13:15";
			title[i].text = "ダミー予定" + bz.ui.currentCell;
			
			row.add(time[i]);
			row.add(title[i]);
			section.add(row);
		};
		data.push(section);
		bz.ui.eventListTableView.setData(data);
	};
})();
