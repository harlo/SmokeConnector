Ext.define('Canary.view.visualize.ProgressEmbed', {
	extend: 'Ext.Container',
	xtype: 'progress_embed',
	
	config: {
		layout: {
			type: 'hbox',
			align: 'stretch'
		},
		listeners: {
			init: 'init'
		},
		defaults: {
			flex: 1
		}
	},
	
	init: function(percent) {
		this.removeAll();
		
		var filledIn = 0;
		for(var p=0;p < 10;p++) {
			var appliedStyle = 'background-color: #b22222; margin-right:0.15em;';
			
			if(filledIn >= percent) {
				appliedStyle = 'background-color: #cccccc; margin-right:0.15em;';
			} else {
				filledIn++;
			}
			
			var slice = Ext.create('Ext.Container', {
				html: '<span>&nbsp;&nbsp;&nbsp;</span>',
				style: appliedStyle,
			});
			this.add([slice]);
			
			
		}
	}
});