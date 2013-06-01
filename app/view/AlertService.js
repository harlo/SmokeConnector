Ext.define('Canary.view.AlertService', {
	extend: 'Ext.Panel',
	xtype: 'alertservice_frame',
	
	config: {
		items: [
			{ xtype: 'battery_alert' },	// or whatever alert it is!
			{ xtype: 'alert_chat' }	// TODO, the chatting window
		]
	}
});