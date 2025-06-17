document.addEventListener('DOMContentLoaded', () => {
    // Select all pins
    const pins = document.querySelectorAll('.pin');

    pins.forEach(pin => {
    pin.onmousedown = function(event) {
        const dragged = event.currentTarget;

        dragged.style.position = 'absolute';
        dragged.style.zIndex = 1000;

        // Move dragged element directly to body to position relative to page
        document.body.append(dragged);

        function moveAt(pageX, pageY) {
        dragged.style.left = pageX - dragged.offsetWidth / 2 + 'px';
        dragged.style.top = pageY - dragged.offsetHeight / 2 + 'px';
        }

        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        dragged.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        dragged.onmouseup = null;
        };

        event.preventDefault();
    };
    });
});