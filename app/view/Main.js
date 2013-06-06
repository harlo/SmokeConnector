Ext.define('Canary.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    requires: [
		'Canary.view.Canary',
		'Canary.view.navigation.MainNavigation'
	],
	
	
	config: {
		layout: {
			animation: { type: 'fade' }
		},
		
		tabBar: {
			docked: 'top',
			layout: {
				pack: 'center'
			}
		},	
		items: [
			{ xtype: 'main_navigation' },
			{ xtype: 'canaryframe' },	// main view
			{ xtype: 'alertservice_frame' }	// chatter
		]
	}
});
