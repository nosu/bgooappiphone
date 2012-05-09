bz.ui = {};
Ti.include("styles.js");
Ti.include("../handheld/SchedulerWindow.js");

(function(){
	bz.ui.createApplicationTabGroup = function(){
		var tabGroup = Ti.UI.createTabGroup();
		(function(){
			dd = new Date();
			bz.ui.currentYear = dd.getFullYear();
			bz.ui.currentMonth = dd.getMonth() + 1;
			bz.ui.currentDay = dd.getDay();
			bz.ui.currentUser = "井上渉";
		})();
		
		var win1 = bz.ui.createSchedulerWindow();
		var tab1 = Ti.UI.createTab({
			title:"スケジューラ",
			window:win1
		});
		tabGroup.addTab(tab1);
		return tabGroup;
	};
})();
