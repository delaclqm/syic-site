/**
 * Function to initialize the map for google
 */
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(39.510510, -84.743011),
        zoom: 17,
        styles: [
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    { "visibility": "off" }
                ]
            }
        ],
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    // All properties global to markers
    var markerProps = {
        map: map,
        icon: {
            url: "assets/GreenSealLogo.png", // url
            scaledSize: new google.maps.Size(40, 40), // scaled size
        }
    };

    // ============================================= Markers
    // =================== Kofenya
    var kofenyaMarker = new google.maps.Marker({
        ...markerProps,
        position: new google.maps.LatLng(39.510689, -84.743758),
        title: 'Kofenya',
    });
    var contentString = '<div class="center-align">' +
        '<h5 class="ft-green-text bold">Kofenya</h5>' +
        '<div id="bodyContent">' +
        '<p>Known for sourcing sustainably grown beans and limiting single-use plastics, ' +
        'but also with some of the best coffee in town!</p>' +
        '<div><img src="assets/kofenya.jpg" alt="Kofenya GS Approved" style="width: 80%;"></div>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    kofenyaMarker.addListener('click', function () {
        infowindow.open(map, kofenyaMarker);
    });
}