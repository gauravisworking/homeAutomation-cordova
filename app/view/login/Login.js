Ext.define('HomeAutomation.view.login.Login', {
	extend : 'Ext.Panel',
	id : 'loginPanel',
	config : {
		layout : 'fit',
		items : [{
				docked : 'top',
				xtype : 'toolbar',
				title : 'Edge Homes'
			}, {
				xtype : 'panel',
				layout : {
					type : 'vbox',
					align : 'center'
				},
				docked : 'top',
				width : '100%',
				items : [{
						xtype : 'fieldset',
						width : 350,
						itemId : 'loginfield',
						margin : '15 0 0 0',
						items : [{
								xtype : 'textfield',
								id : 'user',
								label : 'Username:',
								listeners : {
									keyup : function (fld, e) {
										//if user hits return button or keyboard-down button
										if (e.browserEvent.keyCode == 13 || e.browserEvent.keyCode == 10) {
											e.stopEvent();
											fld.element.dom.blur();
											window.scrollTo(0, 0); // Scroll to top
											App.checkLogin();
										}
									}
								}
							}, {
								xtype : 'passwordfield',
								id : 'password',
								label : 'Password:',
								listeners : {
									keyup : function (fld, e) {
										//if user hits return button or keyboard-down button
										if (e.browserEvent.keyCode == 13 || e.browserEvent.keyCode == 10) {
											e.stopEvent();
											//fld.fieldEl.dom.blur(); // Hide keyboard
											fld.element.dom.blur();
											window.scrollTo(0, 0); // Scroll to top
											App.checkLogin();
										}
									}
								}
							}
						]//end fieldset items
					}, {
						xtype : 'button',
						itemId : 'loginButton',
						width : 150,
						text : 'Log In',
						margin : 15,
						ui : 'action',
						handler : function () {
							var obj = {
								userName : 'Gaurav',
								password : 'password',
								tokenId : '1234'
							};
							obj = JSON.stringify(obj);
							
							/*
							Ext.Ajax.request({
								withCredentials : true,
								defaultHeaders : 'Access-Control-Allow-Origin: *',
								useDefaultXhrHeader : false,
								url : 'http://127.0.0.1:8888/sign',
								cors : true,
								method : 'GET',
								callback : function (options, success, response) {
									console.log(response.responseText);
								}
							});*/
							
							
							var houseJson = "[{\"id\":2,\"name\":\"Main Hall\",\"boardList\":[{\"id\":2,\"name\":\"Side Door\",\"deviceTypeFk\":1,\"deviceFk\":0,\"pointList\":[{\"id\":7,\"name\":\"Fan\",\"boardFk\":2,\"pointTypeFk\":2,\"pointPinActionList\":[{\"id\":32,\"pointFk\":7,\"perform\":\"Main Hall_Side Door_Fan_ON\",\"pinNumber\":\"1\",\"deviceTypeFk\":1,\"actionFk\":1,\"boardFk\":2,\"deviceFk\":0,\"actionName\":\"ON\"},{\"id\":33,\"pointFk\":7,\"perform\":\"Main Hall_Side Door_Fan_OFF\",\"pinNumber\":\"2\",\"deviceTypeFk\":1,\"actionFk\":2,\"boardFk\":2,\"deviceFk\":0,\"actionName\":\"OFF\"},{\"id\":34,\"pointFk\":7,\"perform\":\"Main Hall_Side Door_Fan_MONITOR\",\"pinNumber\":\"3\",\"deviceTypeFk\":1,\"actionFk\":3,\"boardFk\":2,\"deviceFk\":0,\"actionName\":\"MONITOR\"},{\"id\":56,\"pointFk\":7,\"perform\":\"Main Hall_Side Door_Fan_PWM\",\"pinNumber\":\"37\",\"deviceTypeFk\":1,\"actionFk\":4,\"boardFk\":2,\"deviceFk\":0,\"actionName\":\"PWM\"}]},{\"id\":8,\"name\":\"Tube\",\"boardFk\":2,\"pointTypeFk\":1,\"pointPinActionList\":[{\"id\":35,\"pointFk\":8,\"perform\":\"Main Hall_Side Door_Tube_ON\",\"pinNumber\":\"4\",\"deviceTypeFk\":1,\"actionFk\":1,\"boardFk\":2,\"deviceFk\":0,\"actionName\":\"ON\"},{\"id\":36,\"pointFk\":8,\"perform\":\"Main Hall_Side Door_Tube_OFF\",\"pinNumber\":\"5\",\"deviceTypeFk\":1,\"actionFk\":2,\"boardFk\":2,\"deviceFk\":0,\"actionName\":\"OFF\"},{\"id\":37,\"pointFk\":8,\"perform\":\"Main Hall_Side Door_Tube_MONITOR\",\"pinNumber\":\"6\",\"deviceTypeFk\":1,\"actionFk\":3,\"boardFk\":2,\"deviceFk\":0,\"actionName\":\"MONITOR\"}]},{\"id\":9,\"name\":\"light rgb\",\"boardFk\":2,\"pointTypeFk\":3,\"pointPinActionList\":[{\"id\":38,\"pointFk\":9,\"perform\":\"Main Hall_Side Door_light rgb_ON\",\"pinNumber\":\"7\",\"deviceTypeFk\":1,\"actionFk\":1,\"boardFk\":2,\"deviceFk\":0,\"actionName\":\"ON\"},{\"id\":39,\"pointFk\":9,\"perform\":\"Main Hall_Side Door_light rgb_OFF\",\"pinNumber\":\"8\",\"deviceTypeFk\":1,\"actionFk\":2,\"boardFk\":2,\"deviceFk\":0,\"actionName\":\"OFF\"},{\"id\":40,\"pointFk\":9,\"perform\":\"Main Hall_Side Door_light rgb_MONITOR\",\"pinNumber\":\"9\",\"deviceTypeFk\":1,\"actionFk\":3,\"boardFk\":2,\"deviceFk\":0,\"actionName\":\"MONITOR\"},{\"id\":57,\"pointFk\":9,\"perform\":\"Main Hall_Side Door_light rgb_PWM\",\"pinNumber\":\"38\",\"deviceTypeFk\":1,\"actionFk\":4,\"boardFk\":2,\"deviceFk\":0,\"actionName\":\"PWM\"}]}]},{\"id\":3,\"name\":\"TV Board\",\"deviceTypeFk\":1,\"deviceFk\":0,\"pointList\":[]}]},{\"id\":3,\"name\":\"Kitchen\",\"boardList\":[]},{\"id\":4,\"name\":\"Bed Room\",\"boardList\":[]}]";
							
							var houseVO = Ext.decode(houseJson);
							var loginPanel = Ext.getCmp('loginPanel');
							
							//Ext.Viewport.remove(loginPanel);
							var mainPanel = Ext.create('HomeAutomation.view.Main');
							
							
							
						}
					}
				]//end panel items
			}
		]
	},
	initialize : function () {
		var me = this;
		me.callParent(arguments);
	}
});
