/**
 * Constants used throughout the Open Financial Framework
 * @class F2.Constants
 * @static
 */
F2.extend("Constants", {
	/**
	 * CSS class constants
	 * @class F2.Constants.Css
	 */
	Css:(function() {

		/** @private */
		var _PREFIX = "f2-";

		return {
			/**
			 * The APP class should be applied to the DOM Element that surrounds the entire App,
			 * including any extra html that surrounds the APP\_CONTAINER that is inserted 
			 * by the Container. See appWrapper property in the {{#crossLink "F2.ContainerConfiguration"}}{{/crossLink}}
			 * object.
			 * @property APP
			 * @type string
			 * @static
			 * @final
			 */
			APP:_PREFIX + "app",
			/**
			 * The APP\_CONTAINER class should be applied to the outermost DOM Element
			 * of the App.
			 * @property APP_CONTAINER
			 * @type string
			 * @static
			 * @final
			 */
			APP_CONTAINER:_PREFIX + "app-container",
			/**
			 * The APP\_TITLE class should be applied to the DOM Element that contains
			 * the title for an App.  If this class is not present, the {{#crossLink "F2.App/setTitle"}}{{/crossLink}}
			 * will not function.
			 * @property APP_TITLE
			 * @type string
			 * @static
			 * @final
			 */
			APP_TITLE:_PREFIX + "app-title",
			/**
			 * The APP\_VIEW class should be applied to the DOM Element that contains
			 * a view for an App. The DOM Element should also have a {{#crossLink "F2.Constants.Views"}}{{/crossLink}}.DATA_ATTRIBUTE
			 * attribute that specifies which {{#crossLink "F2.Constants.Views"}}{{/crossLink}} it is. 
			 * @property APP_VIEW
			 * @type string
			 * @static
			 * @final
			 */
			APP_VIEW:_PREFIX + "app-view",
			/**
			 * APP\_VIEW\_TRIGGER class shuld be applied to the DOM Elements that
			 * trigger an {{#crossLink "F2.Constants.Events"}}{{/crossLink}}.APP_VIEW_CHANGE event. The DOM Element
			 * should also have a {{#crossLink "F2.Constants.Views"}}{{/crossLink}}.DATA_ATTRIBUTE attribute that
			 * specifies which {{#crossLink "F2.Constants.Views"}}{{/crossLink}} it will trigger.
			 * @property APP_VIEW_TRIGGER
			 * @type string
			 * @static
			 * @final
			 */
			APP_VIEW_TRIGGER:_PREFIX + "app-view-trigger"
		};
	})(),
	
	/**
	 * Events constants
	 * @class F2.Constants.Events
	 */
	Events:(function() {
		/** @private */
		var _APP_EVENT_PREFIX = "App.";
		/** @private */
		var _CONTAINER_EVENT_PREFIX = "Container.";

		return {
			/**
			 * The APPLICATION\_LOAD event is fired once an App's Styles, Scripts, Inline 
			 * Scripts, and HTML have been inserted into the DOM. The App's instanceId should
			 * be concatenated to this constant.
			 *
			 *     F2.Events.once(F2.Constants.Events.APPLICATION_LOAD + app.instanceId, function (app, appAssets) {
			 *       var HelloWorldApp = new HelloWorldApp_Class(app, appAssets);
			 *       HelloWorldApp.init();
			 *     });
			 *
			 * @property APPLICATION_LOAD
			 * @type string
			 * @static
			 * @final
			 */
			APPLICATION_LOAD:"appLoad.",
			/**
			 * The APP\_WIDTH\_CHANGE event will be fired by the Container when the width
			 * of an App is changed. The App's instanceId should be concatenated to this
			 * constant.
			 * Returns an object with the gridSize and width in pixels:
			 *
			 *     { gridSize:8, width:620 }
			 *
			 * @property APP_WIDTH_CHANGE
			 * @type string
			 * @static
			 * @final
			 */
			APP_WIDTH_CHANGE:_APP_EVENT_PREFIX + "widthChange.",
			/**
			 * The APP\_SYMBOL\_CHANGE event is fired when the symbol is changed in an App. It 
			 * is up to the App developer to fire this event.
			 * Returns an object with the symbol and company name:
			 *
			 *     { symbol: "MSFT", name: "Microsoft Corp (NASDAQ)" }
			 *
			 * @property APP_SYMBOL_CHANGE
			 * @type string
			 * @static
			 * @final
			 */
			APP_SYMBOL_CHANGE:_APP_EVENT_PREFIX + "symbolChange",
			/**
			 * The APP\_VIEW\_CHANGE event will be fired by the Container when a user clicks
			 * to switch the view for an App. The App's instanceId should be concatenated
			 * to this constant.
			 * @property APP_VIEW_CHANGE
			 * @type string
			 * @static
			 * @final
			 */
			APP_VIEW_CHANGE:_APP_EVENT_PREFIX + "viewChange.",
			/**
			 * The CONTAINER\_SYMBOL\_CHANGE event is fired when the symbol is changed at the Container
			 * level. This event should only be fired by the Container or Container Provider.
			 * Returns an object with the symbol and company name:
			 *
			 *     { symbol: "MSFT", name: "Microsoft Corp (NASDAQ)" }
			 *
			 * @property CONTAINER_SYMBOL_CHANGE
			 * @type string
			 * @static
			 * @final
			 */
			CONTAINER_SYMBOL_CHANGE:_CONTAINER_EVENT_PREFIX + "symbolChange",
			/**
			 * The CONTAINER\_WIDTH\_CHANGE event will be fired by the Container when the width
			 * of the Container has changed.
			 * @property CONTAINER_WIDTH_CHANGE
			 * @type string
			 * @static
			 * @final
			 */
			CONTAINER_WIDTH_CHANGE:_CONTAINER_EVENT_PREFIX + "widthChange"
		};
	})(),

	/**
	 * Constants for use with cross-domain sockets
	 * @class F2.Constants.Sockets
	 * @protected
	 */
	Sockets:{
		/**
		 * The APP\_RPC message is sent when a method on an App object is called.
		 * @property APP_RPC
		 * @type string
		 * @static
		 * @final
		 */
		APP_RPC:"__appRpc__",
		/**
		 * The LOAD message is sent when an iframe socket initially loads.
		 * Returns a JSON string that represents:
		 *
		 *     [ App, AppAssets]
		 * 
		 * @property LOAD
		 * @type string
		 * @static
		 * @final
		 */
		LOAD:"__socketLoad__"
	},

	/**
	 * The available view types to Apps. The view should be specified by applying
	 * the {{#crossLink "F2.Constants.Css"}}{{/crossLink}}.APP_VIEW class to thecontaining DOM Element. A 
	 * DATA_ATTRIBUTE attribute should be added to the Element as well which defines
	 * what view type is represented.
	 * @class F2.Constants.Views
	 */
	Views:{
		/**
		 * 
		 * @property DATA_ATTRIBUTE
		 * @type string
		 * @static
		 * @final
		 */
		DATA_ATTRIBUTE:"data-f2-view",
		/**
		 * The ABOUT view gives details about the App.
		 * @property ABOUT
		 * @type string
		 * @static
		 * @final
		 */
		ABOUT:"about",
		/**
		 * The HELP view provides users with help information for using an App.
		 * @property HELP
		 * @type string
		 * @static
		 * @final
		 */
		HELP:"help",
		/**
		 * The HOME view is the main view for an App. This view should always
		 * be provided by an App.
		 * @property HOME
		 * @type string
		 * @static
		 * @final
		 */
		HOME:"home",
		/**
		 * The REMOVE view is a special view that handles the removal of an App
		 * from the Container.
		 * @property REMOVE
		 * @type string
		 * @static
		 * @final
		 */
		REMOVE:"remove",
		/**
		 * The SETTINGS view provides users the ability to modify advanced settings
		 * for an App.
		 * @property SETTINGS
		 * @type string
		 * @static
		 * @final
		 */
		SETTINGS:"settings"
	}
});