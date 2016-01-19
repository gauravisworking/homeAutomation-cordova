Ext.define('HomeAutomation.view.control.Control', {
	constructor : function (config) {
		
		this.createPanel();
		
	},
	createPanel : function () {
	
		var data = {
			     text: 'Rooms',
			     items: [{
			         text: 'Main Hall',
			         pointTypeFk : 0,
			         items: [ {
			             text: 'Main Tube Light',
			             pointTypeFk : 1,
			             leaf: true
			         }, {
			             text: 'Night Lamp',
			             pointTypeFk : 3,
			             leaf: true
			         }, {
			             text: 'Fan 1',
			             pointTypeFk : 2,
			             leaf: true
			         }, {
			             text: 'Fan 2',
			             pointTypeFk : 2,
			             leaf: true
			         }, {
			             text: 'CFL',
			             pointTypeFk : 1,
			             leaf: true
			         }]
			     }, {
			         text: 'Kitchen',
			         pointTypeFk : 0,
			         items: [{
			             text: 'Fan',
			             pointTypeFk : 2,
			             leaf: true
			         }, {
			             text: 'Tube Light',
			             pointTypeFk : 1,
			             leaf: true
			         }]
			     }, {
			         text: 'Bed Room',
			         pointTypeFk : 0,
			         items: [{
			             text: 'Fan',
			             pointTypeFk : 2,
			             leaf: true
			         }, {
			             text: 'AC',
			             pointTypeFk : 1,
			             leaf: true
			         }, {
			             text: 'Light',
			             pointTypeFk : 3,
			             leaf: true
			         }]
			     }]
			 };

			 Ext.define('ListItem', {
			     extend: 'Ext.data.Model',
			     config: {
			         fields: [{
			             name: 'text',
			             type: 'string'
			         },{
			             name: 'pointTypeFk',
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
		     title: 'Rooms',
		     flex: 3,
		     displayField: 'text',
		     store: store,
		     
			 listeners :
				   {
					   itemtap : function (obj, list, index, target, record, e, eOpts){
						   
						if(record.get('pointTypeFk') == "1")
						{
						   var actionFieldSet = Ext.getCmp('actionFieldSet');
						   actionFieldSet.removeAll(true,true);
						   actionFieldSet.add({
				                xtype: 'button',
				                name: 'action',
				                text: record.get('text'),
				                labelWidth: '80%',
								handler : function () {

									cordova.exec(sayHelloSuccess, sayHelloFailure, "TestPlugin", "startPin4", ["test data"]);

									function sayHelloSuccess(data) {
										Ext.Msg.alert(data.toString());
									};

									function sayHelloFailure(data) {
										Ext.Msg.alert(data.toString());
									}

								}
				            })
						}
						else if (record.get('pointTypeFk') == "2"){
							
							 var actionFieldSet = Ext.getCmp('actionFieldSet');
							   actionFieldSet.removeAll(true,true);
							   actionFieldSet.add([{
					                xtype: 'togglefield',
					                name: 'action',
					                label: record.get('text'),
					                labelWidth: '80%'
					            },
					            
                                Ext.create('Ext.Container', {
					                layout: 'hbox',
					                items : [{
		                                    html : 'Speed',
		                                    padding : '16 0 8 0'
		                                	},{
			                                    xtype: 'radiofield',
			                                    name : 'speed',
			                                    value: '1',
			                                    checked: true
			                                },
			                                {
			                                    xtype: 'radiofield',
			                                    name : 'speed',
			                                    value: '2'
			                                },
			                                {
			                                    xtype: 'radiofield',
			                                    name : 'speed',
			                                    value: '3'
			                                },
			                                {
			                                    xtype: 'radiofield',
			                                    name : 'speed',
			                                    value: '4'
			                                }
			                            ]
					            })]);
						}
						else if (record.get('pointTypeFk') == "3"){
							

							
							
							 var actionFieldSet = Ext.getCmp('actionFieldSet');
							   actionFieldSet.removeAll(true,true);
							   actionFieldSet.add([{
					                xtype: 'togglefield',
					                name: 'action',
					                label: record.get('text'),
					                labelWidth: '80%'
					            }]);
						           
						        
						}
					   }
				   }
		 });
		 
		 var bottomPanel =  Ext.create('Ext.form.Panel', {
			    fullscreen: false,
			    flex : 1,
			    layout : 'fit',
			    items: [
			        {
			            xtype: 'fieldset',
			            title: 'Details',
			            layout : 'vbox',
			            scrollable : false,
			            id : 'actionFieldSet',
			            instructions: 'No alerts for now'
			            
			        }
			    ]
			});
		
		var panel = Ext.create('Ext.Panel', {
				title : 'Control',
				iconCls : 'home',
				//height : 1200,
				layout: 'vbox',
				width : '100%',
				fullscreen : true,
				items : [nestedList,bottomPanel]
			});
		
		this.panel = panel;
		
	}
	
});
