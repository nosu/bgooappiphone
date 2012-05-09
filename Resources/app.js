(function() {
	bz = {};
		
	var empty = {};
	function mixin(/*Object*/ target, /*Object*/ source){
		var name, s, i;
		for(name in source){
			s = source[name];
			if(!(name in target) || (target[name] !== s && (!(name in empty) || empty[name] !== s))){
				target[name] = s;
			}
		}
		return target; // Object
	};
	bz.mixin = function(/*Object*/ obj, /*Object...*/ props){
		if(!obj){ obj = {}; }
		for(var i=1, l=arguments.length; i<l; i++){
			mixin(obj, arguments[i]);
		}
		return obj; // Object
	};
	
	//create a new object, combining the properties of the passed objects with the last arguments having
	//priority over the first ones
	bz.combine = function(/*Object*/ obj, /*Object...*/ props) {
		var newObj = {};
		for(var i=0, l=arguments.length; i<l; i++){
			mixin(newObj, arguments[i]);
		}
		return newObj;
	};

	bz.ui = {};
	bz.ui.properties = {};	
	//determine platform and form factor and render approproate components
	bz.ui.properties.osname = Ti.Platform.osname,
	bz.ui.properties.version = Ti.Platform.version,
	bz.ui.properties.height = Ti.Platform.displayCaps.platformHeight,
	bz.ui.properties.width = Ti.Platform.displayCaps.platformWidth;
	//iphoneの場合、960x640または480x320

	
	Ti.include("ui/common/ui.js");
	Ti.include("ui/common/styles.js");
				
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
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
			bz.tabGroup = bz.ui.createApplicationTabGroup();
			bz.tabGroup.open();
		}
	}
})();