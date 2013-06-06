/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>

// STUFF FOR SOCKET CONNECTIONS
/*
var socket = io.connect('http://smokeconnector.nodejitsu.com:80');
socket.on('connect', function() {
	console.info('AYO TECHNOLOGY');
});

socket.on('testSock', function(data) {
	//mCtrl.receiveChatter(data);
	// is this always being received on testSock? if so, add contact
	mCtrl.addContact(data);
});

socket.on('newContact', function(data) {
	console.info("new contact");
	mCtrl.addContact(data);
});

socket.on('update', function(data) {
	console.info("updating contact status");
	mCtrl.updateContact(data);
});

socket.on('softAlert', function(data) {
	mCtrl.receiveChatter(data);
	if(currentAlertSession == null) {
		currentAlertSession = new AlertSession();
		mCtrl.initAlertSession(data);
		console.info(currentAlertSession);
	} else {
		console.info("PLS EXPUNGE CURRENT ALERT TO RESET");
	}
});

socket.on('hardAlert', function(data) {
	mCtrl.receiveChatter(data);
});
*/

Ext.Loader.setConfig({ enabled: true });
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Ext.ux': 'app/ux'
});

//</debug>

Ext.application({
    name: 'Canary',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main', 'Wizard', 'Login', 'Canary',
        'AirQuality', 'Monoxide', 'Battery', 'Fire',
        'navigation.RoomNavigation',
        'visualize.AirQuality', 'visualize.Monoxide', 'visualize.ProgressEmbed',
        'AlertService', 'AlertChat', 'battery.Alert', 'fire.Alert', 'monoxide.Alert'
    ],
    controllers: [
    	'Main'
    ],
    models: [
    	'Visualization',
    	'MainNavigation',
    	'Responder',
    ],
    stores: [
    	'Visualizations',
    	'MainNavigation',
    	'Responders',
    ],
    
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    
    availableRooms: [
			{ text: 'Kitchen', value: 1 },
			{ text: 'Living Room', value: 2 },
			{ text: 'Dining Room', value: 3 },
			{ text: 'Bedroom', value: 4 }
	],
	
	AlertSession: function() {
		var type = null;
		var duration = 0;
		var timeStarted = 0;
		var respondersOnline;

		this.init = function(type, timeStarted) {
			this.duration = 0;
			this.type = type;
			this.timeSarted = timeStarted;
			this.respondersOnline = new Array();
		};

		this.addResponder = function(responder) {
			for(var i=0; i<currentAlertSession.respondersOnline.length; i++) {
				var r = currentAlertSession.respondersOnline[i];
				if(responder.phone_number == r.phone_number) {
					return;
				}
			}
	
			currentAlertSession.respondersOnline.push(responder);
		};

		this.getResponder = function(num) {
			console.info("getting responder for " + num + ":");
			console.info(currentAlertSession.respondersOnline);
	
			for(var i=0; i<currentAlertSession.respondersOnline.length; i++) {
		
				var responder = currentAlertSession.respondersOnline[i];
				if(num == responder.phone_number) {
					console.info("found responder");
					return responder;
				}
			}
	
			return null;
		};
	},
	
	mCtrl: null,
	currentAlertSession: null,
	numChatter: 0,
	responderStore: null,

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Canary.view.Main'));
        this.mCtrl = this.getController('Main');
        responderStore = Ext.create('Canary.store.Responders');
        
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    
    canaryObjs: {
    	availableRooms: [
			{ text: 'Kitchen', value: 1 },
			{ text: 'Living Room', value: 2 },
			{ text: 'Dining Room', value: 3 },
			{ text: 'Bedroom', value: 4 }
		]
    }
});
