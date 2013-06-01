Ext.define('Canary.store.MainNavigation', {
	extend: 'Ext.data.TreeStore',
	
	config: {
		model: 'Canary.model.MainNavigation',
		data: [
			{ 
				label: 'Profile',
				leaf: true
			},
			{ label: 'Home' },
			{ label: 'Neighborhood' },
			{ label: 'Friends' },
			{
				label: 'Settings',
				leaf: true
			},
			{
				label: 'About',
				leaf: true
			}
		]
	}
});