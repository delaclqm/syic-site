
// Initialize the SideNav and Tabs
$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
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
