Ext.define('Canary.view.battery.Reminder', {
	extend: 'Ext.Panel',
	xtype: 'fire_reminder',
	require: [
		'Ext.field.DatePicker'
	],
	
	config: {
		items: [
			{
				xtype: 'fieldset',
				layout: {
					type: 'vbox',
					align: 'stretch'
				},
				defaults: {
					margin: 10
				},
				items: [
					{
						xtype: 'label',
						html: '<p>Your Canary detector has gone off 5 times. It had 4 false alarms and 1 serious incident. It is currently fully functional.</p><p style="margin-top:10px;">Next Reminder:</p>'
					},
					{
						xtype: 'datepickerfield',
						margin: 10,
						value: new Date(),	// or last set date
						picker: {
							slotOrder: [
								'month','day','year'
							]
						}
					},
					{
						xtype: 'label',
						html: '<p>You installed your Canary Smoke Detector 1 year and 4 months ago.  We\'ll send you a reminder in 3 years and 8 months to replace it.</p><p style="margin-top:10px;">Next Reminder:</p>'
					},
					{
						xtype: 'datepickerfield',
						value: new Date(),
						picker: {
							slotOrder: [
								'month','day','year'
							]
						}
					}
				]
			}
		]
	}
});