// Update description section function
function updateDescription(photoName, softwareUsed, photoDesciption) {
  document.getElementById("photo-name").innerHTML = photoName;
  document.getElementById("photo-software").innerHTML = softwareUsed;
  document.getElementById("photo-description").innerHTML = photoDesciption;
}

// Gallery click event listener
  document.getElementById("all").addEventListener("click", function(event) {
    // Get the unique identifier of the clicked image
    const idImage = event.target.getAttribute("data-id");

    // Find the corresponding photo object in the array

    fetch('info.json')
    .then(response => response.json())
    .then(data => {
      // Find the object with the id1 value
      const photoInfo = data.find(item => item.id === idImage);

      // Check if the object exists
      if (photoInfo) {
        // Print the object's data to the console
        updateDescription(photoInfo.name, photoInfo.software, photoInfo.description);
      } else {
        console.log('Photo not found');
      }
    })
    .catch(error => console.error(error));

  // Update the description section with the selected photo data
  
});

var dummyImage = document.getElementById("dummy-image");
var dummyImageMiddle = document.getElementById("dummy-image-middle");
var galleryImages = document.getElementsByClassName("gallery-image");

      for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener("click", function() {
          var newSrc = this.getAttribute("src");
          dummyImage.setAttribute("src", newSrc);
        });
      }

      for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener("click", function() {
          var newSrc2 = this.getAttribute("src");
          dummyImageMiddle.setAttribute("src", newSrc2);
        });
      }


var exampleImages = document.getElementsByClassName("gallery-image");
var exampleDiv = document.getElementById("example-div");
var focuss = document.getElementById("all");
      
      for (var i = 0; i < exampleImages.length; i++) {
        exampleImages[i].addEventListener("click", function() {
          exampleDiv.style.display = "block";
          focuss.style.opacity = 0.2;
        });
      }

var closeButton = document.getElementById("close-container");
closeButton.addEventListener("click", function() {
  exampleDiv.style.display = "none";
  focuss.style.opacity = 1;
});

