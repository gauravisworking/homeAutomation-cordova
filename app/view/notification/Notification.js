Ext.define('HomeAutomation.view.notification.Notification', {
	constructor : function (config) {
		
		this.createPanel();
		
	},
	createPanel : function () {
	
		
		
		var panel = Ext.create('Ext.Panel', {
				title : 'Notifications',
				iconCls : 'time',
				height : 1200,
				width : '100%',
				fullscreen : true,
				html : '<center>No Notitfication to show for now</center>'
			});
		
		this.panel = panel;
		
	}
	
});
