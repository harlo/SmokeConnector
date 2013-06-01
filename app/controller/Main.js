Ext.define('Canary.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            canaryMain: 'canaryframe',
            nav: 'main_navigation',
            
            airQualityVisualize: 'airquality_vizualize',            
            monoxideVisualize: 'monoxide_visualize',
            
        },
        control: {
            'button[action=toAirQualityMain]': {
            	tap: 'goToAirQualityMain',
            },
            'button[action=toFireMain]': {
            	tap: 'goToFireMain',
            },
            'button[action=toBatteryMain]': {
            	tap: 'goToBatteryMain',
            },
            'button[action=toMonoxideMain]': {
            	tap: 'goToMonoxideMain',
            },
            
            'airquality_frame': {
            	activeitemchange: 'setVisualizationType',
            	activate: 'initTabWithFirstItem'
            },
            'monoxide_frame': {
            	activeitemchange: 'setVisualizationType',
            	activate: 'initTabWithFirstItem'
            },
            'main_navigation': {
            	leafitemtap: 'showNavigationLeaf'
            }
            
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },
    
    showNavigationLeaf: function(nestedList, list, index, target, record) {
    	console.info(record);
    	var detailCard = nestedList.getDetailCard();
    	detailCard.setHtml(record.get('label') + " Page");
    },
    
    goToAirQualityMain: function(button, e) {
    	this.getCanaryMain().push({ xtype: 'airquality_frame' });
    },
    goToFireMain: function() {
    	this.getCanaryMain().push({ xtype: 'fire_frame' });
    },
    goToBatteryMain: function() {
    	this.getCanaryMain().push({ xtype: 'battery_frame' });
    },
    goToMonoxideMain: function() {
    	this.getCanaryMain().push({ xtype: 'monoxide_frame' });
    },
    
    initTabWithFirstItem: function(newActiveItem, e, oldActiveItem, eOpts) {
    	var newObj = Ext.getCmp(newActiveItem.innerItems[0].initialConfig.items[0].id);
    	if(newObj != undefined) {
			newObj.fireEvent('init', {
				"vizType" : newActiveItem.innerItems[0].title
			});
		}
    },
    setVisualizationType: function(e, newActiveItem, oldActiveItem, eOpts) {
    	if(newActiveItem != 0) {
			var newObj = Ext.getCmp(newActiveItem.initialConfig.items[0].id);
			if(newObj != undefined) {
				newObj.fireEvent('init', {
					"vizType" : newActiveItem.title
				});
			}
    	}
    }
});
