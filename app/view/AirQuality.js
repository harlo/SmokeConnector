Ext.define('Canary.view.AirQuality', {
	extend: 'Ext.TabPanel',
	xtype: 'airquality_frame',
		
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
						xtype: 'airquality_visualize',
						id: 'viz_aq_day'
					}
				]
			},
			{
				title: 'Week',
				items: [
					{ 
						xtype: 'airquality_visualize',
						id: 'viz_aq_week'
					}
				]
			},
			{
				title: 'Month',
				items: [
					{ 
						xtype: 'airquality_visualize',
						id: 'viz_aq_month'
					}
				]
			},
			{
				title: 'Year',
				items: [
					{ 
						xtype: 'airquality_visualize',
						id: 'viz_aq_year'
					}
				]
			}
		]
	}
});