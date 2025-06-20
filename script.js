document.addEventListener('DOMContentLoaded', () => { // waits until all html content is loaded
    // Select all pins
    const pins = document.querySelectorAll('.pin');

    function isInWhiteboard(x, y) {
        const rect = root.getBoundingClientRect();
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

        // Move dragged element directly to body to position relative to page
        document.body.append(dragged);

        dragged.classList.add('dragging')

        function moveAt(pageX, pageY) {
        dragged.style.left = pageX - offsetX + 'px';
        dragged.style.top = pageY - offsetY + 'px';
        }

        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
            if (isInWhiteboard(event.clientX, event.clientY)) {
                document.removeEventListener('mousemove', onMouseMove);
                dragged.onmouseup = null;
                dragged.classList.remove('dragging')
                return;
            }
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        dragged.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            dragged.onmouseup = null;
            dragged.classList.remove('dragging')
        };

        event.preventDefault();
    };
    });
});