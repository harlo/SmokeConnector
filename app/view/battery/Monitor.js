Ext.define('Canary.view.battery.Monitor', {
	extend: 'Ext.Panel',
	xtype: 'battery_monitor',
	require: [
		'Canary.view.visualize.ProgressEmbed',
		'Canary.view.navigation.RoomNavigation',
		'Ext.Img'
	],
	config: {
		items: [
			{ xtype: 'room_navigation' },
			{
				xtype:  'container',
				layout: {
					type: 'hbox'
				},
				margin: 10,
				defaults: {
					styleHtmlContent: true
				},
				items: [
					{
						xtype: 'image',
						src: 'resources/images/ic_home_battery.png',
						mode: 'image',
						flex: 1
					},
					{
						xtype: 'progress_embed',
						id: 'battery_progress_embed',
						flex: 3
					}
				]
			}
		]
	}
});