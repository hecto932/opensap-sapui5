sap.ui.jsview("opensap.myapp.view.App", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controlActivities.view.App
	 */
	getControllerName: function() {
		return null;
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf controlActivities.view.App
	 */
	createContent: function(oController) {
		return new sap.m.Carousel({
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
	}

});