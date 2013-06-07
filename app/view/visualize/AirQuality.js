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
					'<h1 class="tab_h1">Home</h1>',
					'<table class="whole_screen">',
					'<tr><td>Air Value</td><td>44</td><td>Good</td></tr>',
					'</table><h1 class="tab_h1">Neighborhood</h1>',
					'<table class="whole_screen">',
					'<tr><td>Air Quality Index</td><td>52</td><td>Moderate</td></tr>',
					'<tr><td>Pollen</td><td>0.8</td><td>Low</td></tr>',
					'<tr><td>Particles (PM2.5)</td><td>52</td><td>Moderate</td></tr>',
					'<tr><td>Ozone</td><td>38</td><td>Good</td></tr>',
					'</table>'
				].join('')
			),
			data: opts
		});
		
		this.add([vizPanel]);
		
	},
	
	viz: function() {
		
	}
	
});