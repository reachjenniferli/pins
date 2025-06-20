document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    const resetCanvas = document.getElementById("resetCanvas");
  
    const component = Signature(root, {
      width: 360,
      height: 480,
      //instructions: "Please sign in the box above"
    });
  
    resetCanvas.addEventListener("click", () => {
      component.value = [];
    });
  
  });
  