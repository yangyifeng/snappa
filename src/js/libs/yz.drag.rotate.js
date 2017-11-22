/**
 * 动作：拖动旋转
 *
 **/

function createRotateManager(element) {
        
        var context = this;
        
        var pressAngle = null;
        var moveAngle = null;
        
        var rotateHandler = $(document.createElement('div')).addClass('moveHandle rotateHandler').appendTo(element);
        var firstAngle = parseFloat($(element).attr('data-angle'));
        var firstDegree = (firstAngle > 0 ? firstAngle : (2 * Math.PI + firstAngle)) * 360 / (2 * Math.PI);
        var degreePrinter = $(document.createElement('span')).addClass('degreePrinter').text(Math.round(firstDegree)).appendTo(element);

        this.angle = firstAngle;
        
        function mousePress(event) {
            event.preventDefault();
            event.stopImmediatePropagation(); 
            
            var boundBox = element.getBoundingClientRect(); 
            
            var centerX = boundBox.left + (boundBox.width / 2);
            var centerY = boundBox.top + (boundBox.height / 2);

            pressAngle = moveAngle = Math.atan2(event.pageY - centerY, event.pageX - centerX);

            degreePrinter.css('display', 'block');

            $(document)
                .bind('mousemove', mouseMove)
                .bind('mouseup', mouseRelease)
        }

        function mouseRelease() { 
        
            context.angle = (moveAngle - pressAngle) + context.angle;

            degreePrinter.css('display', 'none');
            $(element).attr('data-angle', context.angle);
            
            $(document)
                .unbind('mousemove', mouseMove)
                .unbind('mouseup', mouseRelease)

            dragDone(element);
        } 
        
        function getCurrentMatrix() {
            var computedStyle = window.getComputedStyle(element, null);

            var currentMatrix = computedStyle.getPropertyValue("-webkit-transform") ||
                                computedStyle.getPropertyValue("-moz-transform") ||
                                computedStyle.getPropertyValue("-ms-transform") ||
                                computedStyle.getPropertyValue("-o-transform") ||
                                computedStyle.getPropertyValue("transform") ||
                                null;
            
            currentMatrix = String(currentMatrix)
                    .replace('matrix(', '').replace(')', '').replace(' ', '');
            
            currentMatrix = currentMatrix.split(',');
        
            return Matrix([
                parseFloat(currentMatrix[0], 10) || 1,
                parseFloat(currentMatrix[1], 10) || 0,
                parseFloat(currentMatrix[2], 10) || 0,
                parseFloat(currentMatrix[3], 10) || 1,
                parseFloat(currentMatrix[4], 10) || 0,
                parseFloat(currentMatrix[5], 10) || 0,
            ])
        }
        
        function mouseMove(event) {
            var boundBox = element.getBoundingClientRect(); 
            
            var centerX = boundBox.left + (boundBox.width / 2);
            var centerY = boundBox.top + (boundBox.height / 2);

            var width = $(element).width();
            var height = $(element).height(); 
            
            var angle = (moveAngle - pressAngle) + context.angle;
            var degree = (angle > 0 ? angle : (2 * Math.PI + angle)) * 360 / (2 * Math.PI);
            
            element.style.transform = getCurrentMatrix().setRotation(angle, [ width / 2, height / 2 ]).toCSSTransform();
            
            moveAngle = Math.atan2(event.pageY - centerY, event.pageX - centerX);
            
            degreePrinter.text(Math.round(degree));
        }
        
        rotateHandler.bind('mousedown', mousePress);
}

window.createRotateManager = createRotateManager;