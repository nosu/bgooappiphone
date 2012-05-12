bz.ui = {};
Ti.include("styles.js");
Ti.include("../handheld/SchedulerWindow.js");

(function(){
	bz.ui.createApplicationTabGroup = function(){
		bz.ui.tabGroup = Ti.UI.createTabGroup();
		(function(){
			dd = new Date();
			bz.ui.cal.currentYear = dd.getFullYear();
			bz.ui.cal.currentMonth = dd.getMonth() + 1;
			bz.ui.cal.currentDay = dd.getDay();
			bz.ui.cal.currentUser = "井上渉";
		})();
		
		var win = bz.ui.createSchedulerWindow($$.schedulerWindow);
		bz.ui.schedulerTab = Ti.UI.createTab({
			title:"スケジューラ",
			window:win
		});
<<<<<<< HEAD
		bz.ui.tabGroup.addTab(bz.ui.schedulerTab);
		return bz.ui.tabGroup;
=======
		win1.hideTabBar();
		win1.hideNavBar();
		tabGroup.addTab(tab1);
		return tabGroup;
>>>>>>> test
	};
})();
