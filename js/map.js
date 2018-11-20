function init(){
  var el = document.getElementById('map');
  var myLocation = new google.maps.LatLng("39.913724,116.443683");
//map setting parameters
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPostition.BOTTOM_CENTER
    }
  };
  var myMap = new google.maps.Map(el, mapOptions);
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation:google.maps.Animation.BOUNCE,
  })

  var contentString ='<h1> Spaces you can go in Shanghai </h1>'
  var infowindow = new google.maps.infowindow({
    content: contentString
  });

}

//google.maps.event.addDomListener(window, 'load', init);
