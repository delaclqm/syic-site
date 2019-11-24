// Initialize the SideNav and Tabs
$(document).ready(function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.dropdown-trigger').dropdown();
    $( ".collapsible-header" ).click(function() {
        $(".more",this).toggle()
        $(".less", this).toggle()
    });

    if (page == 'green-score-goals.html') {
        Chart.defaults.global.animation.easing = 'easeInOutCirc';
        Chart.defaults.global.animation.duration = 2000;
        drawChartsForGreenGoalsPage();
    } else if ( page == 'index.html' ||  page == '') {
        Chart.defaults.global.animation.easing = 'easeInOutCirc';
        Chart.defaults.global.animation.duration = 2000;        
        drawChartsForGreenScorePage();
    }

    if(!document.cookie) {
        var instance = M.Modal.getInstance($('#landing'));
        instance.open();
        document.cookie = 'firstVist=false';
    }
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


