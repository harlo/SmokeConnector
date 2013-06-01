Ext.define('Canary.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    requires: [
		'Canary.view.Canary',
		'Ext.ux.slidenavigation.View'
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
				
			},
			{ xtype: 'canaryframe' },	// main view
			{
				title: 'MSG',	// notifications
				badgeText: '3'
			}
		]
	}
});
