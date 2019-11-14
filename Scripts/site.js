
// Initialize the SideNav and Tabs
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.modal').modal();
    $('.collapsible').collapsible();
    drawCharts();
});

/**
    Function to switch to a different tab using the Materialize function
    @param tabToSwitchTo - String refernece to the ID of the content's div
*/
function switchTab(tabToSwitchTo) {
    var elem = document.querySelector('.tabs');
    var instance = M.Tabs.getInstance(elem);
    instance.select(tabToSwitchTo);
}

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
            url: "../assets/GreenSealLogo.png", // url
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

/**
 * Charts to draw
 */
function drawCharts() {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['May', 'June', 'July', 'August', 'September', 'October'],
            datasets: [
                {
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: '#00af66'
                }
            ],
        },
        options: {
            title: {
                display: true,
                text: 'My Savings by Month',
                fontColor: '#ffffff'
            },
            legend: {
                display: false
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            fontColor: '#ffffff',
                            callback: function (value, index, values) {
                                return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
                            }
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            fontColor: '#ffffff'
                        }
                    }
                ]
            }
        }
    });
}
