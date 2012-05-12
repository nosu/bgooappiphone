Ti.include("styles.js");
Ti.include("../handheld/SchedulerWindow.js");

(function(){
	bz.ui.createApplicationTabGroup = function(){
		var tabGroup = Ti.UI.createTabGroup();

		bz.ui.currentWindow = bz.ui.createSchedulerWindow($$.schedulerWindow);
		bz.ui.schedulerTab = Ti.UI.createTab({
			title:"スケジューラ",
			window:bz.ui.currentWindow
		});
		
		bz.ui.currentWindow.hideTabBar();
		bz.ui.currentWindow.hideNavBar();

		tabGroup.addTab(bz.ui.schedulerTab);
		return tabGroup;

	};
})();
