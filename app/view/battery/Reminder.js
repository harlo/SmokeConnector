Ext.define('Canary.view.battery.Reminder', {
	extend: 'Ext.Panel',
	xtype: 'battery_reminder',
	
	config: {
		items: [
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'label',
						html: '<p>You replaced your battery 4 months ago.  We\'ll ship you a pair and send you a reminder to replace it in 8 months.</p>'
					},
					{
						xtype: 'datepickerfield',
						label: 'next reminder',
						value: new Date(),	// or last set date
						picker: {
							slotOrder: [
								'month','day','year'
							]
						}
					},
					{
						xtype: 'label',
						html: '<p>You installed your Canary Smoke Detector 1 year and 4 months ago.  We\'ll send you a reminder in 3 years and 8 months to replace it.</p>'
					},
					{
						xtype: 'datepickerfield',
						label: 'next reminder',
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