Ext.define('Canary.view.visualize.Monoxide', {
	extend: 'Ext.Panel',
	xtype: 'monoxide_visualize',
		
	config: {
		listeners: {
			init: 'init'
		}
	},
	
	init: function(opts) {
		this.removeAll();
		var vizPanel = Ext.create('Ext.Panel', {
			tpl: new Ext.XTemplate(
				[
					'<h1>Monoxide</h1>',
					'<p>{ vizType } view</p>'
				].join('')
			),
			data: opts
		});
		
		
		var vizExpl = Ext.create('Ext.Panel', {
			html: [
				'<p><b>Mild exposure:</b> Flu-like symptoms including slight headache, nausea, vomiting and fatigue.</p>',
				'<p><b>Medium exposure:</b> Severe throbbing headache, drowsiness, confusion and fast heart rate.</p>',
				'<p><b>Extreme exposure:</b> Unconciousness, convulsions, respiratory failure and death</p>'
			].join('')
		});
		
		var vizGuage = Ext.create('Ext.Panel', {
			html: 'guage goes here...'
		});
		
		this.add([vizPanel, vizExpl, vizGuage]);
		
	}
});