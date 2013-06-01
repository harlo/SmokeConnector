Ext.define('Canary.model.Responder', {
	extend: 'Ext.data.Model',
	
	config: {
		identifier: {
			type: 'uuid'
		},
		fields: [
			{
				name: 'name',
				type: 'string'
			},
			{
				name: 'avi',
				type: 'string'
			},
			{
				name: 'phone_number',
				type: 'string'
			},
			{
				name: 'zip',
				type: 'string'
			}
		]
	}
});