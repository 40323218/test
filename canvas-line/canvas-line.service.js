(function() {
	'use strict';

	angular
		.module('supermodular.canvasline')
		.factory('canvasLineService', canvasLineService);

	canvasLineService.$inject = [];

	/* @ngInject */
	function canvasLineService() {
		var data = {
			origin: {
					latitude : 37.407,
					longitude : -122.1
			},
			zoomLevel: 15,
			annotations : [{
					title : 'Molestie et wisi.',
					latitude : 37.407,
					longitude : -122.1
			}, {
					title : 'Ullamcorper eros.',
					latitude : 37.41,
					longitude : -122.1
			}]
		};
		return data;
	}
})();
