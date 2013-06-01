Ext.define('Canary.view.navigation.MainNavigationDetail', {
	extend: 'Ext.Panel',
	xtype: 'main_navigation_detail',
	
	config: {
		layout: 'card',
		items: [
			{
				xtype: 'label',
				html: 'Detail card'
			}
		]
	}
});