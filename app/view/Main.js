Ext.define('Canary.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    requires: [
		'Canary.view.Canary',
		'Canary.view.navigation.MainNavigation'
	],
	
	scrollable: true,
	
	config: {
		tabBar: {
			docked: 'top',
			layout: {
				pack: 'center'
			}
		},	
		items: [
			{
				iconCls: 'user',
				//xtype: 'slidenavigationview'	// profile
				xtype: 'main_navigation'
				
			},
			{ xtype: 'canaryframe' },	// main view
			{ xtype: 'alertservice_frame' }	// chatter
		]
	}
});
