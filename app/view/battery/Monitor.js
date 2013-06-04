Ext.define('Canary.view.battery.Monitor', {
	extend: 'Ext.Panel',
	xtype: 'battery_monitor',
	require: [
		'Canary.view.visualize.ProgressEmbed',
		'Ext.Img'
	],
	config: {
		items: [
			{
				xtype:  'container',
				layout: {
					type: 'hbox'
				},
				margin: 10,
				items: [
					{
						xtype: 'label',
						html: '<h2>Home</h2>',
						flex: 1
					},
					{
						xtype: 'button',
						text: 'Kitchen',
						action: 'toRoomSelector',
						id: 'battery_room_selector',
						flex: 3
					}
				]
			},
			
			{
				xtype:  'container',
				layout: {
					type: 'hbox'
				},
				margin: 10,
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