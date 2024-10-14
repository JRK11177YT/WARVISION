let sliderImages = document.querySelectorAll('.slider img');
let currentImageIndex = 0;

setInterval(function() {
  sliderImages[currentImageIndex].style.display = 'none';
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  sliderImages[currentImageIndex].style.display = 'block';
}, 3000); // Change image every 3 seconds