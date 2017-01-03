(function() {
	'use strict';

	angular
		.module('supermodular.canvascircle')
		.factory('canvasCircleService', canvasCircleService);

	canvasCircleService.$inject = [];

	/* @ngInject */
	function canvasCircleService() {
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
