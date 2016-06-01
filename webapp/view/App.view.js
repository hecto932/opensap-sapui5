sap.ui.jsview("opensap.myapp.view.App", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf opensap.myapp.view.App
	 */
	getControllerName: function() {
		return "opensap.myapp.controller.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf opensap.myapp.view.App
	 */
	createContent: function(oController) {



		var oButton = new sap.m.Button({
			text: "{i18n>showHelloButtonText}",
			press: function(oEvent){
				oController.onShowHello();
			}
		});

		var oInput = new sap.m.Input({
			value: "{helloPanel>/recipient/name}",
			description: "Hello {helloPanel>/recipient/name}",
			valueLiveUpdate: true,
			width: "60%"
		});

		var oCarousel = new sap.m.Carousel({
			pages: [
				new sap.m.Image({
					src: "https://upload.wikimedia.org/wikipedia/commons/9/9f/GEO_Globe.jpg",
					height: "400px"
				}),
				new sap.m.Image({
					src: "https://upload.wikimedia.org/wikipedia/commons/9/9f/GEO_Globe.jpg",
					height: "400px"
				})
			]
		});

/*		var oPage = new sap.m.Page({
			content: [
				oCarousel,
				oInput,
				oButton
			]
		});*/

		var oIconTabBar = new sap.m.IconTabBar("idTopLevelIconTabBar", {
			text: "{i18n>gettingStartedFilter}",
			items: [
				new sap.m.IconTabFilter({
	                key : "Info",
	                icon : "sap-icon://hint",
	                text: "Prueba",
	                content: [
	                	oCarousel,
						oInput,
						oButton
	                ]
	           	}),
	           	new sap.m.IconTabSeparator({}),
	           	new sap.m.IconTabFilter({
	                key : "Info",
	                icon : "sap-icon://hint",
	                text: "Prueba 2",
	                content: [
	                	new sap.m.MessageStrip({
	                		type: "Information",
	                		showIcon: true,
	                		text: "Here's a Form Layout inside an Icon Tab Bar the labels on"
	                	}),
	                	new sap.m.Toolbar({
	                		content: [
	                			new sap.m.Button({
	                				type: "Accept",
	                				text: "Publish"
	                			}),
	                			new sap.m.Button({
	                				text: "Save Draft"
	                			})
	                		]
	                	})
	                ]
	           	})
			]
		});

		var App = new sap.m.App({
			pages: [
				oIconTabBar
			]
		})

		return App;
	}

});