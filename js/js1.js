$(document).ready(function(){
    $('.spoiler_links').click(function(){
        $(this).parent().children('div.spoiler_body').toggle('normal');
        return false;
    });
});

//ACCORDION SCRIPT FROM https://jqueryui.com/accordion/#custom-icons
$( function() {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
        icons: icons
    });
    $( "#toggle" ).button().on( "click", function() {
        if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
            $( "#accordion" ).accordion( "option", "icons", null );
        } else {
            $( "#accordion" ).accordion( "option", "icons", icons );
        }
    });
} );

$( function() {
    $( "#accordion" ).accordion({
        heightStyle: "content",
        collapsible: true
    });
} );

