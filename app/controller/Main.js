Ext.define('HomeAutomation.controller.Main', {
    extend: 'Ext.app.Controller',
    views: [
        'HomeAutomation.view.Main'
    ],
    config: {
		 views: ['HomeAutomation.view.Main'],

        refs: {
            mainView: 'main',
            btnSettings: 'main button[action=add1]',
            btnBack: 'main button[action=add]',
            initilized : 'main in'
		},
        control: {
            'btnSettings': {
                tap: 'onSettingsBtnTap'
            },
            'btnBack': {
                tap: 'onBackBtnTap'
            },
            'mainView': {
                activeitemchange: 'onCarouselChange'
            }
        }
    },
    onSettingsBtnTap: function() {
        //this.getMainView().setActiveItem(0);
		alert("hi");
    },
	onBackBtnTap: function() {
        this.getMainView().setActiveItem(1);
    },
	onCarouselChange: function(carousel, newVal, oldVal) {
       //alert("bye");
    },
    launch: function(app) {
    	
    	
    }
});
