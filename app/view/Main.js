Ext.define('HomeAutomation.view.Main', {
	constructor : function (config) {
		mainPanelObj = this;
		this.createPanel();
		
	},
	
	createPanel : function(){
		var that = this;
		var db = window.openDatabase("Database", "2.0", "Cordova Demo", 200000);
        db.transaction(that.populateDB, that.errorCB, that.successCB);
    },
	
	populateDB : function(tx){
		var that = this;
        tx.executeSql('INSERT INTO DEMO (name,number) VALUES ("gaurav","123412")');
	},
	
	queryDB : function(tx){
		var that =this;
        tx.executeSql('SELECT * FROM DEMO', [], that.querySuccess, that.errorCB);		
	},
	
	errorCB : function(err){
		var that=this;
        alert("Error processing SQL: "+err.code);		
	},
	
    successCB:function() {
    	var that = this;
        var db = window.openDatabase("Database", "2.0", "Cordova Demo", 200000);
        db.transaction(function func (tx){
        				mainPanelObj.queryDB(tx);
        			},function func(tx){
        				mainPanelObj.errorCB(err);
        			});
    },
    
	querySuccess:function(tx, results) {
    	var that = this;
         var len = results.rows.length;
         for (var i = 0; i < len; i++) {
            //alert("Name : "+results.rows.item(i).name);  
         }
         
         var controlPage = Ext.create('HomeAutomation.view.control.Control',{a : ' done'}).panel;
		 var notificationPage = Ext.create('HomeAutomation.view.notification.Notification',{a : ' done'}).panel;
		 var morePage = Ext.create('HomeAutomation.view.more.More',{a : ' done'}).panel;
		 var favoritesPage = Ext.create('HomeAutomation.view.favorites.Favorites',{a : ' done'}).panel;
		 
   		var panel = Ext.create('Ext.TabPanel',{

   			xtype : 'main',
   			tabBarPosition : 'bottom',
   			fullscreen: true,
   			items : [controlPage,notificationPage,favoritesPage,morePage]
   			
   		});
        Ext.Viewport.add(panel);
		Ext.Viewport.setActiveItem(panel);
		
     },
     
     deleteRow : function(tx) {
     	var that = this;
         tx.executeSql('DELETE FROM DEMO WHERE id = ' + currentRow, [], that.queryDB, that.errorCB);
     },
       
     searchQueryDB : function(tx) {
     	var that = this;
           tx.executeSql("SELECT * FROM DEMO where name like ('%"+ document.getElementById("txtName").value + "%')",
                   [], that.querySuccess, that.errorCB);
     },
     
     insertDB:function(tx) {
      	var that = this;
         tx.executeSql('INSERT INTO DEMO (name,number) VALUES ("' +document.getElementById("txtName").value
                 +'","'+document.getElementById("txtNumber").value+'")');
     },

     goInsert:function() {
     	var that = this;
         var db = window.openDatabase("Database", "2.0", "Cordova Demo", 200000);
         db.transaction(that.insertDB, that.errorCB, that.successCB);
     },

     goSearch:function() {
     	var that = this;
         var db = window.openDatabase("Database", "2.0", "Cordova Demo", 200000);
         db.transaction(that.searchQueryDB, that.errorCB);
     },

     goDelete:function() {
     	var that = this;
          var db = window.openDatabase("Database", "2.0", "Cordova Demo", 200000);
          db.transaction(that.deleteRow, that.errorCB);
          document.getElementById('qrpopup').style.display='none';
     },
     
     goPopup:function(row,rowname,rownum) {
     	var that = this;
         currentRow=row;
         document.getElementById("qrpopup").style.display="block";
         document.getElementById("editNameBox").value = rowname;
         document.getElementById("editNumberBox").value = rownum;
     },

     editRow:function(tx) {
     	var that = this;
         tx.executeSql('UPDATE DEMO SET name ="'+document.getElementById("editNameBox").value+
                 '", number= "'+document.getElementById("editNumberBox").value+ '" WHERE id = '
                 + currentRow, [], that.queryDB, that.errorCB);
     },
     
     goEdit:function() {
     	var that = this;
         var db = window.openDatabase("Database", "2.0", "Cordova Demo", 200000);
         db.transaction(that.editRow, that.errorCB);
     }

	
	
	
});
