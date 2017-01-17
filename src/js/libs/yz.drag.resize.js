//动作：拖动改变尺寸
function createResizeManager(element) {

        var centerRightHandler  = $(document.createElement('div')).addClass('moveHandle centerRightHandler').appendTo(element);
        var bottomRightHandler  = $(document.createElement('div')).addClass('moveHandle bottomRightHandler').appendTo(element);
        var bottomCenterHandler = $(document.createElement('div')).addClass('moveHandle bottomCenterHandler').appendTo(element);

        var type = $(element).attr('data-type');

        //img icon 只能等比例改变尺寸
        if(type == 'image' || type == 'icon'){
            centerRightHandler.css('display', 'none');
            bottomCenterHandler.css('display', 'none');
        }
                    
        var moveEvent;
        var resizeHandler;

        var oldWidth = 0;
        var oldHeight = 0;
        
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

        function mousePress(event) {
            event.preventDefault(); 
            event.stopImmediatePropagation();
            
            moveEvent = event;
            resizeHandler = event.target;

            oldWidth = $(element).width();
            oldHeight = $(element).height();

            $(document)
                .bind('mousemove', mouseMove)
                .bind('mouseup', mouseRelease)
        }

        function mouseRelease() {

            $(document)
                .unbind('mousemove', mouseMove)
                .unbind('mouseup', mouseRelease)

            dragDone(element);
        }

        function mouseMove(event) {
            
            var angle = parseFloat($(element).attr('data-angle')); 

            var moveX = event.pageX - moveEvent.pageX; 
            var moveY = event.pageY - moveEvent.pageY;

            var deltaX = Math.round(moveX * Math.cos(angle) + moveY * Math.sin(angle));
            var deltaY = Math.round(moveY * Math.cos(angle) - moveX * Math.sin(angle)); 
            
            var newWidth = $(element).width();
            var newHeight = $(element).height();
            
            var currentMatrix = getCurrentMatrix()
            
            if(centerRightHandler.is(resizeHandler)) {
                newWidth += deltaX;
            }
            else if(bottomRightHandler.is(resizeHandler)) {
                newWidth += deltaX;
                newHeight = newWidth * oldHeight / oldWidth;
            }
            else if(bottomCenterHandler.is(resizeHandler)) {
                newHeight += deltaY;
            }
            
            moveEvent = event; 

            //形状
            if(type == 'div'){
                var borderWidth = parseInt($(element).find('.edit-content').css('borderWidth'))*2;

                //不得小于 1 像素
                if (newWidth < (1 + borderWidth) || newHeight < (1 + borderWidth)) {
                    return;
                }

                $(element).width(newWidth).height(newHeight)
                    .find('.edit-content').css({
                        'width': newWidth - borderWidth,
                        'height': newHeight - borderWidth
                    });
            }
            //图标
            else if(type == 'icon'){
                if (newWidth < 20 || newHeight < 20) {
                    return;
                }

                $(element).width(newWidth).height(newHeight);

                var icon = $(element).find('i');
                icon.css('fontSize', newWidth);
                while(icon.width() > newWidth){
                    var newSize = parseInt(icon.css('fontSize'));
                    newSize--;
                    icon.css('fontSize', newSize)
                }

            }
            //图片
            else{
                if (newWidth < 1 || newHeight < 1) {
                    return;
                }
                
                $(element).width(newWidth).height(newHeight);
            }

            element.style.transform = currentMatrix.toCSSTransform();
        }
        
        centerRightHandler.bind('mousedown', mousePress)
        bottomRightHandler.bind('mousedown', mousePress)
        bottomCenterHandler.bind('mousedown', mousePress)
}

window.createResizeManager = createResizeManager;