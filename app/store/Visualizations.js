Ext.define('Canary.store.Visualizations', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'Canary.model.Visualization',
		data: [
			{ vizType: 1, vizLabel: 'Day', vizREST : null },
			{ vizType: 1, vizLabel: 'Week', vizREST: null },
			{ vizType: 1, vizLabel: 'Month', vizREST: null },
			{ vizType: 1, vizLabel: 'Year', vizREST: null }
		]
	}
});