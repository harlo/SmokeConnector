Ext.define('Canary.view.AlertService', {
	extend: 'Ext.Panel',
	xtype: 'alertservice_frame',
	require: [
		'Canary.view.battery.Alert',
		'Canary.view.fire.Alert',
		'Canary.view.monoxide.Alert',
		'Canary.view.AlertChat'
	],
	
	config: {
		iconCls: 'home',
		badgeText: '0',
		listeners: {
			updateChatNum: 'updateChatNum',
			initAlertSession: 'initAlertSession'
		},
		items: [
			{ xtype: 'fire_alert' },	// or whatever alert it is!
			{ xtype: 'alert_chat' }	// TODO, the chatting window
		]
	},
	
	updateChatNum: function() {
		this.tab.setBadgeText(numChatter);
	},
	initAlertSession: function() {
		console.info('initing a new alert session!');
		
		// load up responders
		
	}
});