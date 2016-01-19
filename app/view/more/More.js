Ext.define('HomeAutomation.view.more.More', {
		constructor : function (config) {
			moreScreen = this;
			this.createPanel();
			
		},
		createPanel : function () {
		
			var data = {
				     text: 'More',
				     items: [{
				         text: 'Themes',
				         items: [ {
				             text: 'Light',
				             leaf: true
				         }, {
				             text: 'Dark',
				             leaf: true
				         }]
				     }, {
				         text: 'Logout',
				         leaf: true
				         
				     }]
				 };

				 Ext.define('ListItem', {
				     extend: 'Ext.data.Model',
				     config: {
				         fields: [{
				             name: 'text',
				             type: 'string'
				         }]
				     }
				 });

				 var store = Ext.create('Ext.data.TreeStore', {
				     model: 'ListItem',
				     defaultRootProperty: 'items',
				     root: data
				 });



			 var nestedList = Ext.create('Ext.NestedList', {
			     title: 'More...',
			     flex: 1,
			     displayField: 'text',
			     store: store,
			     
				 listeners :
					   {
						   itemtap : function (obj, list, index, target, record, e, eOpts){
							  if(record.get('text') == "Light")
							  {
								  HomeAutomation.app.setThemeVariation('light');
								  moreScreen.selectedTheme = 'light';
								  var db = window.openDatabase("Database", "2.0", "Cordova Demo", 200000);
								  db.transaction(function func (tx){
									    moreScreen.savePref(tx);
									},function func(err){
										moreScreen.errorCB(err);
									} , function func(tx){
										moreScreen.onSavePrefSuccess()
										});
							        
							        
							  }
							  else if (record.get('text') == "Dark")
							  {
								  HomeAutomation.app.setThemeVariation('dark');
								  moreScreen.selectedTheme = 'dark';
								  var db = window.openDatabase("Database", "2.0", "Cordova Demo", 200000);
								  db.transaction(function func (tx){
									    moreScreen.savePref(tx);
									},function func(err){
										moreScreen.errorCB(err);
									} , function func(tx){
										moreScreen.onSavePrefSuccess()
										});
							        
							  }
							  
							  else if (record.get('text') == "Logout")
							  {
								  var loginPanel = Ext.getCmp('loginPanel');
								  Ext.Viewport.add(loginPanel);
								  Ext.Viewport.setActiveItem(loginPanel);
							  }
						   }
					   }
			 });

			
			var panel = Ext.create('Ext.Panel', {
					title : 'More',
					iconCls : 'more',
					//height : 1200,
					layout: 'vbox',
					width : '100%',
					fullscreen : true,
					items : [nestedList]
				});
			
			this.panel = panel;
			
		},
		
		onSavePrefSuccess : function(){
			
		},
		
		savePref: function(tx){
			var that =this;
	        tx.executeSql(' UPDATE APP_PREF set value = "'+moreScreen.selectedTheme +'" where name = "theme"');
		},
		
		errorCB : function(err){
			var that=this;
	        alert("Error processing SQL: "+err.code);		
		},
		
	});
