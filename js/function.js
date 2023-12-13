$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map').setView([51.505, -0.09], 13); // Set the initial coordinates and zoom level
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); // Add OpenStreetMap tiles
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}