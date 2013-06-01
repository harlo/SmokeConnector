Ext.define('Canary.view.navigation.MainNavigation', {
	extend: 'Ext.NestedList',
	xtype: 'main_navigation',
	require: [
		'Canary.view.navigation.MainNavigationDetail'
	],
	
	config: {
		store: 'MainNavigation',
		displayField: 'label',
		detailCard: { html: '' }
		
		
	},
	getItemTextTpl: function() {
		return '{ label }';
	}
	
});