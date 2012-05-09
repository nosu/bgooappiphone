bz.ui = {};
Ti.include("styles.js");
Ti.include("../handheld/SchedulerWindow.js");

(function(){
	bz.ui.createApplicationTabGroup = function(){
		var tabGroup = Ti.UI.createTabGroup();
		var win1 = bz.ui.createSchedulerWindow();
		var tab1 = Ti.UI.createTab({
			title:"スケジューラ",
			window:win1
		});
		tabGroup.addTab(tab1);
		return tabGroup;
	};
})();
