var logoText = document.querySelector(".logo");
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var colorIndex = 0;
      
setInterval(function() {
    var currentColor = colors[colorIndex];
    logoText.style.color = currentColor;
        
        // Find all elements with the same text content and update their colors too
    var logoTextElements = document.querySelectorAll(".logo");
        for (var i = 0; i < logoTextElements.length; i++) {
          if (logoTextElements[i].textContent === logoText.textContent) {
            logoTextElements[i].style.color = currentColor;
          }
        }
        
        colorIndex = (colorIndex + 1) % colors.length;
}, 10000);