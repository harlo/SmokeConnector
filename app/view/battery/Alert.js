Ext.define('Canary.view.battery.Alert', {
	extend: 'Ext.Panel',
	xtype: 'battery_alert',
	
	config: {
		items: [
			{
				xtype: 'label',
				html: [
					'<h1>Battery Low</h1>',
					'<p>We\'ve sent you a replacement.</p>',
					'<p>You have 1 week to replace it.</p>',
					'<p>Otherwise, we\'re telling your mom.<br/>On Facebook</p>'
				].join('')
			}
		]
	}
});