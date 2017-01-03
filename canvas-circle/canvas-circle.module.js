(function() {
	'use strict';

	angular
		.module('supermodular.canvascircle', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.canvas-circle', {
				url: '/canvas-circle',
				views: {
					'menuContent': {
						templateUrl: 'scripts/canvas-circle/canvas-circle.html',
						controller: 'CanvasCircleController as vm'
					}
				}
			});
		});
})();
