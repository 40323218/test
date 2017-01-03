(function() {
	'use strict';

	angular
		.module('supermodular.canvasline')
		.controller('CanvasCircleController', CanvasCircleController);

	CanvasCircleController.$inject = ['$scope', '$rootScope', 'canvasCircleService'];

	/* @ngInject */
	function CanvasCircleController($scope, $rootScope, canvasCircleService) {
		var vm = angular.extend(this, {
			path: null,
			rect: null,
            line: null,
            circle: null,
			startPoint: null,
			rectShape: null,
            lineShape: null,
            circleShape: null,
			tool: null,
			onMouseDown: onMouseDown,
			onMouseDrag: onMouseDrag,
			onMouseUp: onMouseUp,
			rects: [],
            lines: [],
            circles: [],
			shapes: [],
		});

		// Initialize
		(function(){
			initPaper();
		})()

		// ********************************* //

		function initPaper() {
			paper.install(window);
			paper.setup('canvasCircle');
			var textItem = new PointText({
				content: 'Click and drag to select with circle.',
				point: new Point(20, 30),
				fillColor: 'black',
			});

			// Sample draws
		

			// Empty the tools
			// paper.tools = [];
			// vm.tool = new Tool();
			initTool();
			vm.tool = $rootScope.tool;

			// Define a mousedown and mousedrag handler
			vm.tool.onMouseDown 	= onMouseDown;
			vm.tool.onMouseDrag 	= onMouseDrag;
			vm.tool.onMouseUp 		= onMouseUp;

			paper.view.update();
    } // initPaper

		function initTool(){
			if (!$rootScope.tool){
				$rootScope.tool = new Tool();
			}else {
				!$rootScope.tool.remove();
				$rootScope.tool = new Tool();
			}
		}

		function resetShapes(){
			for (var i in vm.shapes) {
					vm.shapes[i].strokeColor = 'green';
			}
		}

		function drawCircle(startPoint, endPoint){
			var circle = new Rectangle(startPoint, endPoint);
			vm.circles.push(line);
			var circleShape = new Shape.Rectangle(circle);
			circleShape.strokeColor = 'green';
			vm.shapes.push(circleShape);
		}


		

        function onMouseDrag(event) {
            // The radius is the distance between the position
            // where the user clicked and the current position
            // of the mouse.
            var path = new Path.Circle({
                center: event.downPoint,
                radius: (event.downPoint - event.point).length,
                fillColor: 'white',
                strokeColor: 'black'
            });

            // Remove this path on the next drag event:
            path.removeOnDrag();
        };
		// While the user drags the mouse, points are added to the path
		// at the position of the mouse:
	
	}
})();
