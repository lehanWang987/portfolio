const fixed = document.getElementById('fixed-eye');
const move = document.getElementById("moving-eye");

let eyeImage = document.querySelector('#fixed-eye img');


function getElementOffset(element) 
{
    let offsetTop = 0;
    let offsetLeft = 0;

    while (element) {
      offsetTop += element.offsetTop;
      offsetLeft += element.offsetLeft;
      element = element.offsetParent; 
    }

    return { top: offsetTop, left: offsetLeft };
  }


 eyeImage.addEventListener('load',function(){
    const area = document.getElementById("fixed-eye");
    const { top: minY, left: minX } = getElementOffset(area);
    const rect = area.getBoundingClientRect()
    const maxX = minX + area.offsetWidth;
    const maxY = minY + area.offsetHeight;
    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    const ballArea = document.getElementById("moving-eye");
    const { top: ballMinY, left: ballMinX } = getElementOffset(ballArea);
    const ballWidth = ballArea.offsetWidth;
    const ballHeight = ballArea.offsetHeight;



   document.body.onpointermove = function(event) 
   {
      const clientX = event.clientX;
      const clientY = event.clientY;
      if (clientX >= minX && clientX <= maxX && clientY >= minY && clientY <= maxY) 
      {
        let eyeSize = window.innerWidth * 0.15
        move.animate(
        {
          left: `${clientX - eyeSize/2}px`,
          top: `${clientY - eyeSize/2}px`
        }, 
        {duration: 500, fill: "forwards"})


        
      }
      
    };  
 })

 function hideElement(element)
 {
  element.style.opacity = "0";
 }

 function showElement(element)
 {
  element.style.opacity = "1";
 }

document.addEventListener('DOMContentLoaded', () => {
     const popups = document.querySelectorAll('.pop-up');

   window.addEventListener('click', (e) => {
        popups.forEach((popUp, index) => {
          if (e.target === popUp) 
          {
            popUp.style.display = 'flex'; 
          }
          else
          {
            popUp.style.display = 'none';
          }
        });
      });
    });

var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


