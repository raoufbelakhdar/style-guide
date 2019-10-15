jQuery(document).ready(function() {
    jQuery('.navbar_toggle').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.navbar').toggleClass('active');
        e.preventDefault();
    });
});