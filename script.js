document.addEventListener('DOMContentLoaded', () => { // waits until all html content is loaded

    const pins = document.querySelectorAll('.pin');
    const pinboard = document.querySelector('.pinboard');

    function isInWhiteboard(x, y) {
        const rect = drawing.getBoundingClientRect();
        return (
          x >= (rect.left - 40) &&
          x <= (rect.right + 40) &&
          y >= (rect.top - 40) &&
          y <= (rect.bottom + 40)
        );
      }

    pins.forEach(pin => {
    pin.onmousedown = function(event) {

        const dragged = event.currentTarget;
        const offsetX = event.clientX - dragged.getBoundingClientRect().left;
        const offsetY = event.clientY - dragged.getBoundingClientRect().top;

        dragged.style.position = 'absolute';
        dragged.style.zIndex = 1000;
        pinboard.appendChild(dragged);
        dragged.classList.add('dragging')

        //clean up after drag ends
        const cleanup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            dragged.onmouseup = null;
            dragged.ondblclick = null;
            dragged.classList.remove('dragging');
        };

        //helper function to move pin to new location
        function moveAt(pageX, pageY) {
        dragged.style.left = pageX - offsetX + 'px';
        dragged.style.top = pageY - offsetY + 'px';
        }

        //move pin on mouse move
        function onMouseMove(event) {
            if (isInWhiteboard(event.clientX, event.clientY)) {
                cleanup();
            }
            moveAt(event.pageX, event.pageY);
        }

        //handle mouseup
        function onMouseUp() {
            cleanup();
            document.removeEventListener('mouseup', onMouseUp);
        }

        //start drag
        moveAt(event.pageX, event.pageY);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        //prevent default browser drag
        event.preventDefault();
    };
    });
    
});