document.addEventListener('DOMContentLoaded', () => {
    const drawing = document.getElementById("drawing");
    const resetCanvas = document.getElementById("resetCanvas");
  
    const component = Signature(drawing, {
      width: 360,
      height: 480,
      //instructions: "Please sign in the box above"
    });
  
    resetCanvas.addEventListener("click", () => {
      component.value = [];
    });
  
  });
  