$(function() {

	/**
	 * Set F2.UI config
	 */
	F2.UI.setMaskConfiguration({
		loadingIcon:'./assets/img/ajax-loader.gif'
	});

	/**
	 * Init Container
	 */
	F2.init({

		afterAppRender: function (app, html) {
			var el = $('#' + app.instanceId).append(html);
			F2.UI.hideMask(app.instanceId, el);
			return el;
		},

		beforeAppRender: function(app) {

			var hasSettings = F2.inArray(F2.Constants.Views.SETTINGS, app.views);
			var hasHelp = F2.inArray(F2.Constants.Views.HELP, app.views);
			var hasAbout = F2.inArray(F2.Constants.Views.ABOUT, app.views);
			var showDivider = hasSettings || hasHelp || hasAbout;

			var columns = $("#mainContent div.column");
			var colIndex = 0;
			var appsInCol = columns.eq(0).find('.' + F2.Constants.Css.APP).length;

			// find the shortest column
			$(columns).each(function (i, e) {
				var apps = $(e).find('.' + F2.Constants.Css.APP).length;
				if (apps < appsInCol) {
					colIndex = i;
					appsInCol = apps;
				}
			});

			$(columns).eq(colIndex).append([
				'<section id="' + app.instanceId + '" class="' + F2.Constants.Css.APP + '">',
					'<header class="clearfix">',
						'<h2 class="pull-left ', F2.Constants.Css.APP_TITLE, '">', app.name, '</h2>',
						'<div class="btn-group pull-right">',
							'<button class="btn btn-mini btn-primary dropdown-toggle" data-toggle="dropdown">',
								'<i class="icon-white icon-cog"></i> ',
								'<span class="caret"></span>',
							'</button>',
							'<ul class="dropdown-menu">',
								hasSettings ? '<li><a href="#" class="' + F2.Constants.Css.APP_VIEW_TRIGGER + '" ' + F2.Constants.Views.DATA_ATTRIBUTE + '="' + F2.Constants.Views.SETTINGS + '">Edit Settings</a></li>' : '',
								hasHelp ? '<li><a href="#" class="' + F2.Constants.Css.APP_VIEW_TRIGGER + '" ' + F2.Constants.Views.DATA_ATTRIBUTE + '="' + F2.Constants.Views.HELP + '">Help</a></li>' : '',
								hasAbout ? '<li><a href="#" class="' + F2.Constants.Css.APP_VIEW_TRIGGER + '" ' + F2.Constants.Views.DATA_ATTRIBUTE + '="' + F2.Constants.Views.ABOUT + '">About</a></li>' : '',
								showDivider ? '<li class="divider"></li>' : '',
								'<li><a href="#" class="' + F2.Constants.Css.APP_VIEW_TRIGGER + '" ' + F2.Constants.Views.DATA_ATTRIBUTE + '="' + F2.Constants.Views.REMOVE + '">Remove App</a></li>',
							'</ul>',
						'</div>',
					'</header>',
				'</section>'
			].join(''));

			F2.UI.showMask(app.instanceId, $('#' + app.instanceId), true);
		},

		supportedViews: [F2.Constants.Views.HOME, F2.Constants.Views.SETTINGS, F2.Constants.Views.REMOVE],
		secureAppPagePath: "secure.html" // this should go on a separate domain from index.html
	});

	/**
	 * init symbol lookup in navbar
	 */
	$("#symbolLookup").autocomplete({
		source: function (request, response) {

			$.ajax({
				url: "//dev.markitondemand.com/api/Lookup/jsonp",
				dataType: "jsonp",
				data: {
					input: request.term
				},
				success: function (data) {
					response($.map(data, function (item) {
						return {
							label: item.Name + " (" + item.Exchange + ")",
							value: item.Symbol
						}
					}));
				},
				open: function() {
					$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
				},
				close: function() {
					$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
				}
			});
		},
		minLength: 0,
		select: function (event, ui) {
			F2.Events.emit(F2.Constants.Events.CONTAINER_SYMBOL_CHANGE, { symbol: ui.item.value, name: ui.item.label });
		}
	});

});