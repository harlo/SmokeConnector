Ext.define('Canary.view.Battery', {
	extend: 'Ext.Container',
	xtype: 'battery_frame',
	requires: [
		'Canary.view.battery.Monitor',
		'Canary.view.battery.Reminder'
	],
	
	config: {
		layout: {
			type: 'vbox',
			align: 'stretch'
		},
		items: [
			{
				xtype: 'battery_monitor',
				flex: 1
			},
			{
				xtype: 'battery_reminder',
				flex: 2
			}
		]
	}
});