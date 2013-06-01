Ext.define('Canary.view.Canary', {
	extend: 'Ext.NavigationView',
	xtype: 'canaryframe',
	fullscreen: true,
	requires: [
		'Canary.view.AirQuality',
		'Canary.view.Monoxide',
	],
	
	config: {
		title: 'Canary',
		itemId: 'canaryframe_id',
		items: [
			{
				title: 'main screen',
				items: [
					{
						xtype: 'button',	// should be image
						text: 'Air Quality',
						action: 'toAirQualityMain',
					},
					{
						xtype: 'button',
						text: 'Fire',
						action: 'toFireMain',
					},
					{
						xtype: 'button',
						text: 'Battery',
						action: 'toBatteryMain',
					},
					{
						xtype: 'button',
						text: 'Monoxide',
						action: 'toMonoxideMain',
					}
				]
			}
		]
		/*
		
		*/
	}
});