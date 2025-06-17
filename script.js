function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function dragoverHandler(ev) {
    ev.preventDefault();
  }
  
  function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    // Move the pin to where it was dropped
    draggedElement.parentElement.style.left = ev.clientX + 'px' - 100;
    draggedElement.parentElement.style.top = ev.clientY + 'px' - 100;
  }