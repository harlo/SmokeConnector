Ext.define('Canary.view.monoxide.Alert', {
	extend: 'Ext.Panel',
	xtype: 'monoxide_alert',
	require: [
		'Ext.Label'
	],
	
	config: {
		items: [
			{
				xtype: 'label',
				html: [
					'<h1>Monoxide Detected</h1>',
					'<p>Duration - 0:39</p>',
					'<ol><li>Open windows.</li><li>Leave House</li></li>Call 911</li></ol>'
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