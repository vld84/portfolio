// Initialize and add the map
function initMap() {
  // The location of Houston
  const houston = { lat: 29.760062, lng:-95.370088 };
  // The map, centered at Houston
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: houston,
  });
  // The marker, positioned at Houston
  const marker = new google.maps.Marker({
    position: houston,
    map: map,
  });
}

window.initMap = initMap;