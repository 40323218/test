(function() {
	'use strict';

	angular
		.module('supermodular.canvasline', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.canvas-line', {
				url: '/canvas-line',
				views: {
					'menuContent': {
						templateUrl: 'scripts/canvas-line/canvas-line.html',
						controller: 'CanvasLineController as vm'
					}
				}
			});
		});
})();
