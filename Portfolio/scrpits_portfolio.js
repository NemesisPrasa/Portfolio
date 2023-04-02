const photos = [
  { id: 1, name: 'Photo 1', software: 'Clip Studio Paint' },
  { id: 2, name: 'Photo 2', software: 'Clip Studio Paint' },
  { id: 3, name: 'Photo 3', software: 'Clip Studio Paint' },
  { id: 4, name: 'Photo 4', software: 'Clip Studio Paint' },
  { id: 5, name: 'Photo 5', software: 'Adobe Photoshop' },
  { id: 6, name: 'Photo 6', software: 'Clip Studio Paint , Adobe Photoshop' },
  { id: 7, name: 'Photo 7', software: 'Adobe Photoshop' },
  { id: 8, name: 'Photo 8', software: 'Adobe Photoshop' },
  { id: 9, name: 'Photo 9', software: 'Blender' },
  { id: 10, name: 'Photo 10', software: 'Blender' },
  { id: 11, name: 'Photo 11', software: 'Blender' },
  { id: 12, name: 'Photo 12', software: 'Blender' },
  { id: 13, name: 'Photo 13', software: 'Clip Studio Paint' },
  { id: 14, name: 'Photo 14', software: 'Clip Studio Paint' },
  { id: 15, name: 'Photo 15', software: 'Adobe Photoshop' },
  { id: 16, name: 'Photo 16', software: 'Clip Studio Paint , Adobe Photoshop' },
  { id: 17, name: 'Photo 17', software: 'Adobe Photoshop' },
  { id: 18, name: 'Photo 18', software: 'Adobe Photoshop' }
];

// Update description section function
function updateDescription(photoName, softwareUsed) {
  document.getElementById("photo-name").innerHTML = photoName;
  document.getElementById("photo-software").innerHTML = softwareUsed;
}

// Gallery click event listener
document.getElementById("all").addEventListener("click", function(event) {
  // Get the unique identifier of the clicked image
  const id = event.target.getAttribute("data-id");

  // Find the corresponding photo object in the array
  const photo = photos.find(p => p.id == id);

  // Update the description section with the selected photo data
  updateDescription(photo.name, photo.software);
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
      
      for (var i = 0; i < exampleImages.length; i++) {
        exampleImages[i].addEventListener("click", function() {
          exampleDiv.scrollIntoView();
        });
      }