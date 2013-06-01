Ext.define('Canary.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	main: 'main',
            canaryMain: 'canaryframe',
            nav: 'main_navigation',
            
            airQualityVisualize: 'airquality_vizualize',            
            monoxideVisualize: 'monoxide_visualize',
            
            chatterIndicator: 'alertservice_frame'
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
        this.getMain().setActiveItem(1);
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
    },
    
    initAlertSession: function(alertObject) {
    	console.info(alertObject);
    	this.getMain().setActiveItem(2);
    },
    receiveChatter: function(chatterObject) {
    	console.info(chatterObject);
    	
    	numChatter++;
    	this.getChatterIndicator().updateChatNum();
    },
    addContact: function(contactObject) {
    	console.info(contactObject);
    	
    	/*
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
			*/
		var responderStore = Ext.getStore('responderStore_id');
		// if num is not in responder store...
		responderStore.add({
    		phone_number: contactObject.number,
    		zip: contactObject.zip
    	});
    	console.info(responderStore.getCount());
    	console.info(responderStore.getData());
    	
    }
});
