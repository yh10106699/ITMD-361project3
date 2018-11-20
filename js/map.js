function initMap(){
  var el = document.getElementById('map');
  var qibao = new google.maps.LatLng(31.157839,121.361133);
  var chenghuang = new google.maps.LatLng(31.231994,121.498188)
//map setting parameters
  var mapOptions = {
    center: new google.maps.LatLng(31.192209,121.442245),
    zoom: 12,
  };
  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: qibao,
    map: myMap,
    animation:google.maps.Animation.BOUNCE,
  });

  var marker1 = new google.maps.Marker({
    position: chenghuang,
    map: myMap,
    animation:google.maps.Animation.BOUNCE,
  });

}
