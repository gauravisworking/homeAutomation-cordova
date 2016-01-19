Ext.define('HomeAutomation.view.Main', {
	extend : 'Ext.tab.Panel',
	xtype : 'main',
	requires : [
		'Ext.TitleBar',
		'Ext.Video'
	],

	tabBarPosition : 'bottom',

	items : [{
			iconCls : 'time',
			title : 'Notifications',

			styleHtmlContent : true,
			scrollable : true,

			items : {
				docked : 'top',
				xtype : 'titlebar',
				title : 'Welcome to Smart Home'
			},

			html : [
				"You do not have any notification for now"
			].join("")
		}, {
			title : 'Control',
			iconCls : 'home',
			scrollable : {
				direction : 'vertical'
			},
			items : [{
					docked : 'top',
					xtype : 'titlebar',
					title : 'Rooms',
					items : [{
							iconCls : 'add',
							align : 'right',
							action : 'add1'
						}
					]
				}, {
					xtype : 'button',
					text : 'Send',
					ui : 'confirm',
					action : 'add' /*
					handler : function () {

					cordova.exec(sayHelloSuccess, sayHelloFailure, "TestPlugin", "startPin4", ["test data"]);

					function sayHelloSuccess(data) {
					Ext.Msg.alert(data.toString());
					}

					function sayHelloFailure(data) {
					Ext.Msg.alert(data.toString());
					}

					}*/
				}, {
					xtype : 'fieldset',
					id : 'fieldset1',
					title : 'Personal Info',
					instructions : 'Please enter the information above.',
					defaults : {
						labelWidth : '35%'
					},
					items : [{
							xtype : 'textfield',
							name : 'name',
							label : 'Name',
							placeHolder : 'Tom Roy',
							autoCapitalize : true,
							required : true,
							clearIcon : true
						}, {
							xtype : 'passwordfield',
							name : 'password',
							label : 'Password'
							//clearIcon : !Ext.theme.is.Blackberry
						}, {
							xtype : 'emailfield',
							name : 'email',
							label : 'Email',
							placeHolder : 'me@sencha.com',
							clearIcon : true
						}, {
							xtype : 'urlfield',
							name : 'url',
							label : 'Url',
							placeHolder : 'http://sencha.com',
							clearIcon : true
						}, {
							xtype : 'spinnerfield',
							name : 'spinner',
							label : 'Spinner',
							minValue : 0,
							maxValue : 10,
							stepValue : 1,
							cycle : true
						}, {
							xtype : 'checkboxfield',
							name : 'cool',
							label : 'Cool'
						}, {
							xtype : 'datepickerfield',
							destroyPickerOnHide : true,
							name : 'date',
							label : 'Start Date',
							value : new Date(),
							picker : {
								yearFrom : 1990
							}
						}, {
							xtype : 'selectfield',
							name : 'rank',
							label : 'Rank',
							options : [{
									text : 'Master',
									value : 'master'
								}, {
									text : 'Journeyman',
									value : 'journeyman'
								}, {
									text : 'Apprentice',
									value : 'apprentice'
								}
							]
						}, {
							xtype : 'textareafield',
							name : 'bio',
							label : 'Bio'
						}
					]
				}, {
					xtype : 'fieldset',
					id : 'fieldset2',
					title : 'Favorite color',
					defaults : {
						xtype : 'radiofield',
						labelWidth : '35%'
					},
					items : [{
							name : 'color',
							value : 'red',
							label : 'Red'
						}, {
							name : 'color',
							label : 'Blue',
							value : 'blue'
						}, {
							name : 'color',
							label : 'Green',
							value : 'green'
						}, {
							name : 'color',
							label : 'Purple',
							value : 'purple'
						}
					]
				}
			]
		}, {
			iconCls : 'favorites',
			title : 'Favorites'
		}, {
			iconCls : 'more',
			title : 'More'
		}
	]

});
