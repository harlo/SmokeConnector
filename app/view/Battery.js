Ext.define('Canary.view.Battery', {
	extend: 'Ext.Panel',
	xtype: 'battery_frame',
	requires: [
		'Canary.view.battery.Monitor',
		'Canary.view.battery.Reminder'
	],
	
	config: {
		items: [
			{ xtype: 'battery_monitor' },
			{ xtype: 'battery_reminder' }
		]
	}
});