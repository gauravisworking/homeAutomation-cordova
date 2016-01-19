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

Ext.application({
    name: 'HomeAutomation',

    requires: [
        'Ext.MessageBox','Ext.Ajax'
    ],

    views: [
       /* 'Main',
		'notification.Notification',
		'more.More',
		'favorites.Favorites',
		'control.Control'*/
    ],

	controllers: [
	'Main'
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
    	
    	var that= this;

    	function createDBObject(){
    		databaseInstance = window.openDatabase("Database", "2.0", "HomeAutometion", 200000);
    	}

    	function queryFail(err){
    		alert("Error processing SQL: "+err.code);
    	}
    	
    	createDBObject();
    	
    	databaseInstance.transaction(that.createDB, that.errorCB, that.successCB);

    },
    
    
    createDB : function(tx){
		var that = this;
		tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id INTEGER PRIMARY KEY AUTOINCREMENT, name,number)');
		tx.executeSql('CREATE TABLE IF NOT EXISTS APP_PREF (id INTEGER PRIMARY KEY AUTOINCREMENT, name,value)');

	},
	
	queryDB : function(tx){
		var that =this;
        tx.executeSql('SELECT value FROM APP_PREF where name = "theme"', [], HomeAutomation.app.querySuccess,HomeAutomation.app.errorCB);		
	},
	
	createEntries :  function(tx){
		var that = this;
		tx.executeSql('INSERT INTO APP_PREF (name,value) VALUES ("theme","dark")');

	},
	
	errorCB : function(err){
		var that=this;
		if(err.code == 0)
			{
				databaseInstance.transaction(HomeAutomation.app.createEntries,HomeAutomation.app.errorCB,HomeAutomation.app.querySuccess);
			}
		else
			{
				alert("Error processing SQL: "+err.code);
			}	
	},
	
	querySuccess:function(tx, results) {
    	 var that = this;
         var len = results.rows.length;
         
         for (var i = 0; i < len; i++) {
        	 var   theme = results.rows.item(i).value;
         }
         
         Ext.fly('appLoadingIndicator').destroy();
         
         HomeAutomation.app.setThemeVariation(theme);

         Ext.Viewport.add(Ext.create('HomeAutomation.view.login.Login'));
        
     },
	
    successCB:function() {
    	var that = this;
    	databaseInstance.transaction(HomeAutomation.app.queryDB,HomeAutomation.app.errorCB);
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
