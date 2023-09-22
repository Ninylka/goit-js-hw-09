
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  const bodyColor = document.querySelector('body');
  const butStart = document.querySelector("button[data-start]");
  const butStop = document.querySelector("button[data-stop]");

  butStart.addEventListener("click", changeColor);
  butStop.addEventListener("click", stopColor);

  let colorVariable;
  
  function changeColor () {
   colorVariable = setInterval(() => {
         bodyColor.style.backgroundColor = getRandomHexColor();
   
    },1000)
    butStart.disabled = true ;
    butStop.disabled = false;

      }
    
      function stopColor() { 
        clearInterval(colorVariable);
        butStop.disabled = true;
        butStart.disabled = false ;
        }
      
    
