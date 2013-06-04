Ext.define('Canary.view.AlertChat', {
	extend: 'Ext.Panel',
	xtype: 'alert_chat',
	require: [
		'Ext.form.FieldSet',
		'Ext.dataview.List',
		'Ext.data.Store',
		'Canary.store.Responders'
	],
	
	config: {
		listeners: {
			updateHtml: 'updateHtml',
			changeStatus: 'changeStatus'
		},
		items: [
			{
				xtype: 'panel',
				id: 'chat_session',
				html: ''
			},
			{
				xtype: 'fieldset',
				items: [
					{
						xtype: 'textfield',
						name: 'chat_content'	// PLS validate this on server!
					}
				]
			}
		]
	},
	
	updateHtml: function(newHtml) {
		var htmlHolder = this.getAt(0);
		var oldHtml = htmlHolder.getHtml();
		htmlHolder.setHtml(oldHtml + newHtml);

	},
	
	changeStatus: function(contactObject, oldStatus) {
		var htmlHolder = this.getAt(0);
		var oldHtml = htmlHolder.getHtml();
		
		console.info("OLD:" + oldStatus + ", new: " + contactObject.status);
		console.info(contactObject);
		
		var oldStuff = [
			'<span class="status_' + contactObject.number + '">',
	    	oldStatus + '</span>'
	    ].join('');
	    console.info("OLD HTML:" + oldStuff);
	    var newHtml = oldHtml.replace(oldStuff, oldStuff.replace(oldStatus, contactObject.status));
	    console.info("NEW:" + newHtml);
	    
		htmlHolder.setHtml(newHtml);
	}
});