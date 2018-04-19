
$ = jQuery;
var API;
function bottomBox(){
	$('.bottombox').each(function(index, element) {
        $(this).css('margin-bottom', -($(this).outerHeight()/2 + 50))
    });
	
	}

$(document).ready(function(){
	
	//$( ".select" ).selectmenu();
	  	
	
	$('.equal, .step-box').matchHeight();
	
	
	 $("#mm_menu").mmenu({
   		// options
		navbar 		: {
						title		: 'ThinkHuge Menu'
					},
		
		offCanvas: {
               position  : "right",
               //zposition : "front"
            },
	}, {
	   // configuration
	   clone: true
	});
	
	API = $("#mm_menu").data( "mmenu" );
	
	
	
  $('ul.menu').superfish({
		delay:         500,                // the delay in milliseconds that the mouse can remain outside a submenu without it closing
	    speed:         'fast',           // speed of the opening animation. Equivalent to second parameter of jQuery’s .animate() method
	    speedOut:      'fast',	
		animation: {height:'show'}
  });

        
bottomBox();
 });


$(window).resize(function(){
bottomBox();
	//API.close();
	if(!$("#menu-helper").is(":visible"))	{
		if($('#mm-mm_menu').hasClass('mm-opened')) {
		API.close();
		}
		$("#mm-main_menu").trigger("close.mm");
}


});
