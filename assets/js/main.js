$(document).ready(function () {
    // Twitter popup
    $('.ui .dropdown').dropdown({on: 'hover'});
    
    // Fix menu when passed
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function () {
            $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
            $('.fixed.menu').transition('fade out');
        }
    });

    // Make social buttons sticky
    $('.ui.sticky').sticky({context: '#content'});
});