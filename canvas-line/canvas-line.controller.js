(function() {
	'use strict';

	angular
		.module('supermodular.canvasline')
		.controller('CanvasLineController', CanvasLineController);

	CanvasLineController.$inject = ['$scope', '$rootScope', 'canvasLineService'];

	/* @ngInject */
	function CanvasLineController($scope, $rootScope, canvasLineService) {
		var vm = angular.extend(this, {
			path: null,
			rect: null,
            line: null,
			startPoint: null,
			rectShape: null,
            lineShape: null,
			tool: null,
			onMouseDown: onMouseDown,
			onMouseDrag: onMouseDrag,
			onMouseUp: onMouseUp,
			rects: [],
            lines: [],
			shapes: [],
		});

		// Initialize
		(function(){
			initPaper();
		})()

		// ********************************* //

		function initPaper() {
			paper.install(window);
			paper.setup('canvasLine');
			var textItem = new PointText({
				content: 'Click and drag to select with line.',
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

		function drawLine(startPoint, endPoint){
			var line = new Rectangle(startPoint, endPoint);
			vm.lines.push(line);
			var lineShape = new Shape.Rectangle(line);
			lineShape.strokeColor = 'green';
			vm.shapes.push(lineShape);
		}


		var path;
    
        function onMouseDown(event) {
            path = new Path();
            path.strokeColor = 'black';
            path.add(event.point);
        };

        function onMouseDrag(event) {
            path.add(event.point);
        }
		// While the user drags the mouse, points are added to the path
		// at the position of the mouse:
		

		// When the mouse is released, we simplify the path:
		function onMouseUp(event) {
			// alert('Select area: ' + JSON.stringify(vm.rect));
			for (var i in vm.lines) {
				if (vm.line.intersects(vm.lines[i])){
					vm.shapes[i].strokeColor = 'red';
					// alert('Intersects with: ' + JSON.stringify(vm.rects[i]));
					console.log('Intersects with: ', vm.lines[i]);
				}
			}
			console.log(vm.line);
		}

	}
})();
