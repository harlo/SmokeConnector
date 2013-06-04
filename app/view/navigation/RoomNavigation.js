Ext.define('Canary.view.navigation.RoomNavigation', {
	extend: 'Ext.Container',
	xtype:  'room_navigation',
	
	config: {
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
	}
});