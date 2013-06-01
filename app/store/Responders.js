Ext.define('Canary.store.Responders', {
	extend: 'Ext.data.Store',
	require: [
		'Ext.data.proxy.LocalStorage'
	],
	xtype: 'responder_store',
	
	config: {
		model: 'Canary.model.Responder',
		storeId: 'responderStore_id',
		proxy: {
			type: 'localstorage',
			id: 'rs_ls'
		},
		autoLoad: true,
		autoSync: true,
		reader: {
			rootProperty: 'data',
			type: 'json'    
		},
		writer: {
			type: 'json'    
		}
	}
});