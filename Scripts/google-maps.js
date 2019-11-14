/**
 * Function to initialize the map for google
 */
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(39.510510, -84.743011),
        zoom: 17,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    // All properties global to markers
    var markerProps = {
        map: map,
        icon: {
            url: "~/assets/GreenSealLogo.png", // url
            scaledSize: new google.maps.Size(40, 40), // scaled size
        }
    };

    // ============================================= Markers
    // =================== Kofenya
    var kofenyaMarker = new google.maps.Marker({
        ...markerProps,
        position: new google.maps.LatLng(39.510712, -84.743683),
        title: 'Kofenya',
    });
    var contentString = '<div>' +
        '<h5 class="ft-green-text bold">Kofenya</h5>' +
        '<div id="bodyContent">' +
        '<p>Here is a Fifth Third Green Seal approved business.</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    kofenyaMarker.addListener('click', function () {
        infowindow.open(map, kofenyaMarker);
    });
}