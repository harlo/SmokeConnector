Ext.define('Canary.view.visualize.AirQuality', {
	extend: 'Ext.Panel',
	xtype: 'airquality_visualize',
	
	config: {
		listeners: {
			init: 'init'
		},
		flex: 1
	},
	
	init: function(opts) {
		this.removeAll();
		var vizPanel = Ext.create('Ext.Panel', {
			tpl: new Ext.XTemplate(
				[
					'<h1>Air Quality</h1>',
					'<p>{ vizType } view</p>'
				].join('')
			),
			data: opts
		});
		
		this.add([vizPanel]);
	}
	
});