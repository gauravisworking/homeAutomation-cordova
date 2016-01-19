Ext.define('HomeAutomation.view.favorites.Favorites', {
	constructor : function (config) {
		
		this.createPanel();
		
	},
	createPanel : function () {
		
		

		var panel = Ext.create('Ext.Panel', {
				title : 'Favorites',
				iconCls : 'favorites',
				height : 1200,
				width : '100%',
				fullscreen : true,
				html : '<center>Most used actions here...</center>'
			});
		
		this.panel = panel;
		
	}
	
});
