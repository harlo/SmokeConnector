Ext.define('Canary.view.RoomNavigation', {
	extend: 'Ext.Panel',
	xtype: 'room_navigation',
	
	config: {
		items: [
			{
				xtype: 'label',
				html: '<h1>Home</h1>'
			},
			/*
			{
				xtype: 'picker',
				doneButton: false,
				slots: [
					name: 'choose_room',
					data: [
						{ text: 'Kitchen', value: 1 },
						{ text: 'Living Room', value: 2 }
					]
				]
			}
			*/
		]
	}
});