Ext.define('Canary.view.visualize.AirQuality', {
	extend: 'Ext.Panel',
	xtype: 'airquality_visualize',
	
	config: {
		listeners: {
			init: 'init'
		}
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
		/*
		var vizMap = Ext.create('Ext.Map', {
			useCurrentLocation: true,
			config: {
				mapOptions: {
					disableDefaultUI: true,
					zoom: 13,
					mapTypeControl: false,
					streetViewControl: false,
					scaleControl: true
				}
			}
		});
		*/
		
		this.add([vizPanel]);
	}
	
});