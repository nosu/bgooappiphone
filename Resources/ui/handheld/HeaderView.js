(function() {
	bz.ui.createHeaderView = function() {
		var view = Titanium.UI.createView($$.headerView);
		var label = Titanium.UI.createLabel($$.Label);
		label.setText("電電太郎");
		view.add(label);
		return view;
	};
})();
