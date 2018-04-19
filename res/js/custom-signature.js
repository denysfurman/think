// https://stackoverflow.com/questions/8579643/simple-jquery-scroll-to-anchor-up-or-down-the-page
function scrollToAnchor(aid,speed)
{
	var aTag = $("div[class='"+ aid +"']");
	$('html,body').animate({scrollTop: aTag.offset().top},speed);
}

$(document).ready(function ()
{
	$('.sigPad').signaturePad({drawOnly:true});
	/*
	 * MDA Agreement Scroll Down
	 */
	$("#mda-signature-scroll").click(function(){ scrollToAnchor('sigPad',1400); });
});
