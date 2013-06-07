Ext.define('Canary.view.Canary', {
	extend: 'Ext.NavigationView',
	xtype: 'canaryframe',
	fullscreen: true,
	requires: [
		'Canary.view.AirQuality',
		'Canary.view.Monoxide'
	],
	
	config: {
		title: 'canary',
		itemId: 'canaryframe_id',
		
		items: [
			{
				xtype: 'container',
				layout: {
					type: 'vbox',
					align: 'stretch'
				},
				items: [
					{
						xtype: 'container',
						layout: {
							type: 'vbox',
							pack: 'center'
						},
						flex: 4,
						items: [
							{
								xtype: 'button',
								action: 'toAirQualityMain',
								margin: 6,
								flex:1,
								cls: 'airQuality_indicator_canary',
								style: "background-image:url('resources/images/img_home2_good.png')"
							},
							{
								xtype: 'label',
								cls: 'airQuality_indicator_label_canary',
								html: ' <center><p><b>Air Quality Index = 42</p><p><b>GOOD</p></center>'
							}
						]
					},
					{
						xtype: 'container',
						flex: 1,
						layout: {
							type: 'hbox',
							pack: 'center'
						},
						defaults: {
							flex: 1,
							margin: 6,
							cls: 'other_indicator_canary'
						},
						items: [
							{
								xtype: 'button',
								action: 'toFireMain',								
								style: "background-image:url('resources/images/ic_home_fire.png')"
							},
							{
								xtype: 'button',
								action: 'toBatteryMain',
								style: "background-image:url('resources/images/ic_home_battery.png')"
							},
							{
								xtype: 'button',
								action: 'toMonoxideMain',
								style: "background-image:url('resources/images/ic_home_monoxide.png')"
							}
						]
					}
					
				]
			}
		]
	}
});