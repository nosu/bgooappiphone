(function() {
	bz = {};
	bz.ui = {};
	bz.ui.properties = {};

	bz.ui.properties.osname = Ti.Platform.osname,
	bz.ui.properties.version = Ti.Platform.version,
	bz.ui.properties.height = Ti.Platform.displayCaps.platformHeight,
	bz.ui.properties.width = Ti.Platform.displayCaps.platformWidth;
	//iphoneの場合、960x640または480x320
	
	Ti.include("lib/init.js");
	Ti.include("ui/common/ui.js");
	Ti.include("ui/common/styles.js");
	Ti.include("lib/mixin.js");
	
	var isTablet = bz.ui.properties.osname === 'ipad' || (bz.ui.properties.osname === 'android' && (bz.ui.properties.width > 899 || bz.ui.properties.height > 899));
	
	var Window;
	if (isTablet) {
		//ipad
	}
	else {
		// Android uses platform-specific properties to create windows.
		// All other platforms follow a similar UI pattern.
		if (bz.ui.properties.osname === 'android') {
			//Android
		}
		else {
			//iPhone
			bz.ui.tabGroup = bz.ui.createApplicationTabGroup();
			bz.ui.tabGroup.open();
		}
	}
})();