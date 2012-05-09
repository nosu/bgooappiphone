Ti.include("HeaderView.js");
Ti.include("CalendarView.js");

(function(){
	bz.ui.createSchedulerWindow = function(){
		var win = Titanium.UI.createWindow($$.schedulerWindow);
		var headerView = bz.ui.createHeaderView();
		var calendarView = bz.ui.createCalendarView();
		//var eventListView = bz.ui.createEventListView();
		
		win.add(headerView);
		win.add(calendarView);
		//win.add(eventListView);
		return win;
	};
})();
