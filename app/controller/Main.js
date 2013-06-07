Ext.define('Canary.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	main: 'main',
            canaryMain: 'canaryframe',
            nav: 'main_navigation',
            
            airQualityVisualize: 'airquality_vizualize',            
            monoxideVisualize: 'monoxide_visualize',
            
            chatterIndicator: 'alertservice_frame',
            chatterResponderList: 'alert_chat',
            
            
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
            'button[action=toRoomSelector]': {
            	tap: 'goToRoomSelector',
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
            },
            
            'progress_embed': {
            	initialize: 'initProgressEmbed'
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
    	var html = "";
    	if(record.get('label') == 'Profile') {
    		html = [
    			'<img src="" /> <input type="text" value="Chirpy Canary" />',
    			'<input type="text" value="info@canarydetector.com" />'
    		].join('');
    	}
    	
    	if(record.get('label') == 'About') {
    	
    	}
    	
    	detailCard.setHtml(html);
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
    goToRoomSelector: function(e, event, eOpts) {
    	var updateTo = e;
    	var picker = Ext.create('Ext.Picker', {
    		slots:[
    			{
					name: 'room_selector',
					title: 'Choose a room',
					data: Canary.app.availableRooms
	    		}
	    	],
	    	listeners: {
		    	change: function(e, value, eOpts) {
					updateTo.setText(Canary.app.availableRooms[value.room_selector - 1].text);
				}
		    }
    	});
    	Ext.Viewport.add(picker);
    	picker.show();
    },
    
    initTabWithFirstItem: function(newActiveItem, e, oldActiveItem, eOpts) {
    	var newObj = Ext.getCmp(newActiveItem.innerItems[0].initialConfig.items[0].id);
    	if(newObj != undefined) {
    		console.info("VIZ FOR");
    		console.info(newActiveItem);
    		
			newObj.fireEvent('init', {
				"vizType" : newActiveItem.innerItems[0].title
			});
		}
    },
    setVisualizationType: function(e, newActiveItem, oldActiveItem, eOpts) {
    	if(newActiveItem != 0) {
			var newObj = Ext.getCmp(newActiveItem.initialConfig.items[0].id);
			if(newObj != undefined) {
				console.info("VIZ FOR");
	    		console.info(newActiveItem);
	    		
				newObj.fireEvent('init', {
					"vizType" : newActiveItem.title
				});
			}
    	}
    },
    
    initAlertSession: function(alertObject) {
    	console.info(alertObject);
    	this.getMain().setActiveItem(2);
    	
    	Ext.Msg.alert(
    		'Alert!',
    		'Uh-oh! Your Smoke Connector has gone off at #CityCamp!!',
    		Ext.emptyFn
    	);
    	
    	currentAlertSession.init(1, alertObject.time);
    },
    receiveChatter: function(chatterObject) {
    	console.info("chatter received? hard alert?");
    	console.info(chatterObject);
    },
    addContact: function(contactObject) {
    	contact.info("adding contact");
    	console.info(contactObject);
    	
		var responderStore = Ext.getStore('responderStore_id');
		// if num is not in responder store...
		responderStore.add({
    		phone_number: contactObject.number,
    		zip: contactObject.zip
    	});
    	console.info(responderStore.getCount());
    },
    updateContact: function(contactObject) {
    	console.info("updating contact");
    	console.info(contactObject);
    	
    	if(contactObject.status == "calling") {	
    		var responder = { phone_number: contactObject.number, status: "calling"};
	    	currentAlertSession.addResponder(responder);
	    	
	    	var tpl = [
	    		'<li><span class="alias_' + responder.number + '">',
	    		responder.phone_number + '</span>   -   ',
	    		'<span class="status_' + responder.phone_number + '">',
	    		responder.status + '</span></li>'
	    	].join('');
	    	console.info(tpl);
	    	// get chat_session instance, get html, append this, set html
	    	this.getChatterResponderList().updateHtml(tpl);
	    	
	    } else {
	    	var r = currentAlertSession.getResponder(contactObject.number);
	    	var oldStatus = r.status;
	    	
	    	r.status = contactObject.status;
	    	this.getChatterResponderList().changeStatus(contactObject, oldStatus);
	    }
    	
    	numChatter++;
    	this.getChatterIndicator().updateChatNum();
    },
    
    initProgressEmbed: function(e, eOpts) {
    	if(e.id == "battery_progress_embed") {
    		e.init(8);		// init with whatever data we have for battery strength
    	}
    }
});
