/**
 * 动作：拖动移动
 *
 **/
function createDragManager(element) {
        
        var moveEvent = null;

        var oldLeft = 0;
        var oldTop = 0;

        function mousePress(event) {
            
            moveEvent = event;

            oldLeft = element.style.left;
            oldTop = element.style.top;

            $(document)
                .bind('mousemove', mouseMove)
                .bind('mouseup', mouseRelease)
        }

        function mouseRelease() {
            $(document)
                .unbind('mousemove', mouseMove)
                .unbind('mouseup', mouseRelease)

            if(oldLeft != element.style.left || oldTop != element.style.top)
                dragDone(element);
        }

        function mouseMove(event) {
            var left = parseInt(element.style.left, 10) || 0;
            var top = parseInt(element.style.top, 10) || 0;

            var moveX = event.pageX - moveEvent.pageX;
            var moveY = event.pageY - moveEvent.pageY;

            element.style.left = (left + moveX) + 'px'; 
            element.style.top = (top + moveY) +'px';

            moveEvent = event;
        }

        $(element).bind('mousedown', mousePress);
}

window.createDragManager = createDragManager;