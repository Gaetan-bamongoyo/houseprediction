var locations = [
    ['<div class="product-card"><div class="product-img"><img src="assets/img/inner-page/product-sb-img-01.png" alt="image"></div><div class="product-content"><div class="location"><a href="property-listing-left-sidebar.html"><i class="bi bi-geo-alt"></i>  Sydne City</a></div><h5><a href="poperty-deatils1.html">Harmony House</a></h5><div class="content-btm"><a class="view-btn2" href="poperty-deatils1.html"><img src="assets/img/home1/icon/house.svg" alt="">View Details</a></div></div></div>', 46.8133, -100.7790],
    ['<div class="product-card"><div class="product-img"><img src="assets/img/inner-page/product-sb-img-02.png" alt="image"></div><div class="product-content"><div class="location"><a href="property-listing-left-sidebar.html"><i class="bi bi-geo-alt"></i>  Melbourne City</a></div><h5><a href="poperty-deatils1.html">Evergreen Realty</a></h5><div class="content-btm"><a class="view-btn2" href="poperty-deatils1.html"><img src="assets/img/home1/icon/house.svg" alt="">View Details</a></div></div></div>', 46.8772, -96.7894],
    ['<div class="product-card"><div class="product-img"><img src="assets/img/inner-page/product-sb-img-03.png" alt="image"></div><div class="product-content"><div class="location"><a href="property-listing-left-sidebar.html"><i class="bi bi-geo-alt"></i>  Panama City</a></div><h5><a href="poperty-deatils1.html">Serene Homes</a></h5><div class="content-btm"><a class="view-btn2" href="poperty-deatils1.html"><img src="assets/img/home1/icon/house.svg" alt="">View Details</a></div></div></div>', 44.8133, -95.7790],
    ['<div class="product-card"><div class="product-img"><img src="assets/img/inner-page/product-sb-img-04.png" alt="image"></div><div class="product-content"><div class="location"><a href="property-listing-left-sidebar.html"><i class="bi bi-geo-alt"></i>  Sydne City</a></div><h5><a href="poperty-deatils1.html">Riverside Retreat</a></h5><div class="content-btm"><a class="view-btn2" href="poperty-deatils1.html"><img src="assets/img/home1/icon/house.svg" alt="">View Details</a></div></div></div>', 46.8133, -99.7790],
    ['<div class="product-card"><div class="product-img"><img src="assets/img/inner-page/product-sb-img-05.png" alt="image"></div><div class="product-content"><div class="location"><a href="property-listing-left-sidebar.html"><i class="bi bi-geo-alt"></i>  Sydne City</a></div><h5><a href="poperty-deatils1.html">Lakeside Haven</a></h5><div class="content-btm"><a class="view-btn2" href="poperty-deatils1.html"><img src="assets/img/home1/icon/house.svg" alt="">View Details</a></div></div></div>', 45.8133, -100.7790],
    ['<div class="product-card"><div class="product-img"><img src="assets/img/inner-page/product-sb-img-06.png" alt="image"></div><div class="product-content"><div class="location"><a href="property-listing-left-sidebar.html"><i class="bi bi-geo-alt"></i>  Menchester City</a></div><h5><a href="poperty-deatils1.html">Tranquil Haven</a></h5><div class="content-btm"><a class="view-btn2" href="poperty-deatils1.html"><img src="assets/img/home1/icon/house.svg" alt="">View Details</a></div></div></div>', 47.8133, -100.7790],
    ['<div class="product-card"><div class="product-img"><img src="assets/img/inner-page/product-sb-img-07.png" alt="image"></div><div class="product-content"><div class="location"><a href="property-listing-left-sidebar.html"><i class="bi bi-geo-alt"></i>  Panama City</a></div><h5><a href="poperty-deatils1.html">Harmony House</a></h5><div class="content-btm"><a class="view-btn2" href="poperty-deatils1.html"><img src="assets/img/home1/icon/house.svg" alt="">View Details</a></div></div></div>', 48.8133, -99.7790],
    ['<div class="product-card"><div class="product-img"><img src="assets/img/inner-page/product-sb-img-08.png" alt="image"></div><div class="product-content"><div class="location"><a href="property-listing-left-sidebar.html"><i class="bi bi-geo-alt"></i>  New Delhi</a></div><h5><a href="poperty-deatils1.html">Meadowview Manor</a></h5><div class="content-btm"><a class="view-btn2" href="poperty-deatils1.html"><img src="assets/img/home1/icon/house.svg" alt="">View Details</a></div></div></div>', 48.2133, -98.790],
    ['<div class="product-card"><div class="product-img"><img src="assets/img/inner-page/product-sb-img-09.png" alt="image"></div><div class="product-content"><div class="location"><a href="property-listing-left-sidebar.html"><i class="bi bi-geo-alt"></i>  Sydne City</a></div><h5><a href="poperty-deatils1.html">Mountain View Villa</a></h5><div class="content-btm"><a class="view-btn2" href="poperty-deatils1.html"><img src="assets/img/home1/icon/house.svg" alt="">View Details</a></div></div></div>', 47.2333, -103.7790],
    ['<div class="product-card"><div class="product-img"><img src="assets/img/inner-page/product-sb-img-10.png" alt="image"></div><div class="product-content"><div class="location"><a href="property-listing-left-sidebar.html"><i class="bi bi-geo-alt"></i>  Melbourne City</a></div><h5><a href="poperty-deatils1.html">Sunflower Cottage</a></h5><div class="content-btm"><a class="view-btn2" href="poperty-deatils1.html"><img src="assets/img/home1/icon/house.svg" alt="">View Details</a></div></div></div>', 46.9383, -94.190],
  /*
   * Next point on map
   *   -Notice how the last number within the brackets incrementally increases from the prior marker
   *   -Use http://itouchmap.com/latlong.html to get Latitude and Longitude of a specific address
   *   -Follow the model below:
   *      ['<b>Name 3</b><br>Address Line 1<br>City, ST Zipcode<br>Phone: ###-###-####<br><a href="#" target="_blank">Link<a> of some sort.', ##.####, -##.####, #]
   */
  ];
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    /* Zoom level of your map */
    center: new google.maps.LatLng(47.47021625, -100.47173475),
    /* coordinates for the center of your map */
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  var infowindow = new google.maps.InfoWindow();
  
  var marker, i;
  
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });
  
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
