Ti.include("HeaderView.js");
Ti.include("CalendarView.js");
Ti.include("EventListView.js");

(function(){
	bz.ui.createSchedulerWindow = function(){
		var win = Titanium.UI.createWindow($$.schedulerWindow);
		bz.ui.headerView = bz.ui.createHeaderView();
		bz.ui.calendarView = bz.ui.createCalendarView();
		bz.ui.eventListView = bz.ui.createEventListView();
		
		win.add(bz.ui.headerView);
		win.add(bz.ui.calendarView);
		win.add(bz.ui.eventListView);
		return win;
	};
})();
