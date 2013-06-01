Ext.define('Canary.view.fire.Alert', {
	extend: 'Ext.Panel',
	xtype: 'fire_alert',
	require: [
		'Ext.Label'
	],
	
	config: {
		items: [
			{
				xtype: 'label',
				html: [
					'<h1>Smoke Detected</h1>',
					'<p>Duration - 0:39</p>'
				].join('')
			},
			{
				xtype: 'button',
				text: 'Emergency: Call 911',
				action: 'lauchCall911'
			}
		]
	}
});