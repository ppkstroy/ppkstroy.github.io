function initMap() {
  var mapStyles = [
    {
      "featureType": "administrative",
      "elementType": "all",
      "stylers": [
        {
          "saturation": "-100"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 65
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": "50"
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": "-100"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "all",
      "stylers": [
        {
          "lightness": "30"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "all",
      "stylers": [
        {
          "lightness": "40"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "hue": "#ffff00"
        },
        {
          "lightness": -25
        },
        {
          "saturation": -97
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
        {
          "lightness": -25
        },
        {
          "saturation": -100
        }
      ]
    }
  ];
  var location = {lat: 60.029727, lng: 30.236573};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 10,
    styles: mapStyles
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'ППКСТРОЙ'
  });
}

$(document).ready(function() {
  var menuButton = $('#menu-button');
  var hamburger = $('#hamburger');
  var menu = $('#menu');

  $('#nav').onePageNav({
    currenClass: 'current',
    changeHash: true
  });

  menuButton.click(function() {
    hamburger.toggleClass('is-active')
    menu.toggleClass('open');
  });
});
