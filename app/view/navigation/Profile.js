Ext.define('Canary.view.navigation.Profile', {
	extend: 'Ext.Panel',
	xtype: 'profile_frame',
	
	config: {
		items: [
			{
				xtype: 'formset',
				items: [
					{
						xtype: 'textfield',
						name: 'email',
						label: 'email'
					},
					{
						xtype: 'textfield',
						name: 'phone_number',
						label: 'phone number'
					},
					{
						xtype: 'textfield',
						name: 'password',
						label: 'password'
					}
				]
			}
		]
	}
});