var map, marker, infowindow;

// function initialize() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(25.2518865, 51.5330766),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
// }

function newLocation(location) {
  map.setCenter({
    lat: location.lat,
    lng: location.lng,
  });

  // if marker exists, remove it from the map
  if (marker)
    marker.setMap(null);

  marker = new google.maps.Marker({
    position: new google.maps.LatLng(location.lat,location.lng),
    map: map,
  });

  var contentString =           
        '<h3 >'+ location.info1 +'</h3>'+   
        '<p >'+ location.info2 +'</p>'+         
        '</div>';

  infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  // immediately open the infowindow
  infowindow.open(map, marker);
}

// google.maps.event.addDomListener(window, 'load', initialize);

var Location = {
  albayt: {
    lat: 25.6522101,
    lng: 51.4856588,
    info1: 'al-bayt-1'
  },

  lusail : {
    lat: 25.1148601,
    lng: 55.1949989,
    info1: 'lusail-1'
  },

  khalifa : {
    lat: 25.2652442,
    lng: 51.4467829,
    info1: 'khalifa-1'
  },

  asian : {
    lat: 25.189425,
    lng: 51.4579764,
    info1: 'asian-1'
  },

}

//Setting Location with jQuery
$(document).ready(function() {
  $("#location-1").on('click', function() {
    // alert('hiii');
    newLocation(Location.albayt);
  });

  $("#location-2").on('click', function() {
    newLocation(Location.lusail);
  });

  $("#location-3").on('click', function() {
    newLocation(Location.khalifa);
  });

  $("#location-4").on('click', function() {
    newLocation(Location.asian);
  });

});