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
	mCtrl.addContact(data);
});

socket.on('newEvent', function(data) {
	mCtrl.receiveChatter(data);
	if(data.status == "softAlert") {
		if(currentAlertSession == null) {
			currentAlertSession = new AlertSession();
			mCtrl.initAlertSession(data);
		} else {
			console.info("PLS EXPUNGE CURRENT ALERT TO RESET");
		}
	} else if(data.status == "hardAlert") {
		// show responders as being called
	}
});

var AlertSession = function() {
	var type = null;
	var duration = 0;
	
	this.init = function(type) {
		this.duration = 0;
		this.type = type;
	};
};

var mCtrl = null;
var currentAlertSession = null;
var numChatter = 0;

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
        'AirQuality', 'Monoxide', 'Battery',
        'visualize.AirQuality', 'visualize.Monoxide',
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

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('Canary.view.Main'));
        mCtrl = this.getController('Main');
        
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
    }
});
