Ext.define('HomeAutomation.view.control.AddRoom', {
	extend : 'Ext.Panel',
	xtype : 'addRoom',
	config : {
		content : 'null',
		items : [{
				docked : 'top',
				xtype : 'titlebar',
				title : 'Add New Room',
				items : [{
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
					}
				]
			}
		]
	},
	initialize : function () {
		this.callParent();
		var val = this.config.content;
		console.log(val);
	}
	
});
