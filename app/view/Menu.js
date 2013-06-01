Ext.define('Canary.view.Menu', {
	extend: 'Ext.ux.slidenavigation.View',
	xtype: 'mainmenu',
	
	config: {
		fullscreen: true,
		containerSlideDelay: 10,
		selectSlideDuration: 200,
		itemMask: true,
		
		slideButtonDefaults: {
			selector: 'toolbar'
		}
		
	}
	
});