Ext.define('Canary.view.AlertChat', {
	extend: 'Ext.Panel',
	xtype: 'alert_chat',
	require: [
		'Ext.form.FieldSet',
		'Ext.dataview.List',
		'Ext.data.Store',
		'Canary.store.Responders'
	],
	
	config: {
		listeners: {
			init: 'init'
		},
		items: [
			{
				xtype: 'list',
				id: 'chat_session',
				config: {
					itemTpl: [
						'<p>{ phone_number }</p>'
					].join(''),
					//store: responderStore,
					
					data: [
						{ phone_number: '12356' },
						{ phone_number: '12356' },
					]
				}
			},
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',
						name: 'chat_content'	// PLS validate this on server!
					}
				]
			}
		]
	},
	
	init: function() {
		console.info("FUCK YOU");
		console.info(responderStore);
	}
});