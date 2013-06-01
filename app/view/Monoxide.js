Ext.define('Canary.view.Monoxide', {
	extend: 'Ext.TabPanel',
	xtype: 'monoxide_frame',
	
	config: {
		tabBar: {
			docked: 'top',
			layout: {
				pack: 'center'
			}
		},
		items: [
			{
				title: 'Day',
				items: [
					{
						xtype: 'monoxide_visualize',
						id: 'viz_mo_day'
					}
				]
			},
			{
				title: 'Week',
				items: [
					{
						xtype: 'monoxide_visualize',
						id: 'viz_mo_week'
					}
				]
			},
			{
				title: 'Month',
				items: [
					{
						xtype: 'monoxide_visualize',
						id: 'viz_mo_month'
					}
				]
			},
			{
				title: 'Year',
				items: [
					{
						xtype: 'monoxide_visualize',
						id: 'viz_mo_year'
					}
				]
			}
		]
	}
});