// SNOTIFICATIONBAR SCRIPT --------------jQuery(document).ready(function() {	 jQuery('.snbar_scroll_btn').click(function() {		jQuery("html, body").animate({ scrollTop: 0 }, 300);		return false;	});                  });function snbar_set_cookiee(){	var exdate =new Date();	var exdays= 1;	exdate.setDate(exdate.getDate() + exdays);	var c_value=escape("hideit") + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());				document.cookie="snbar" + "=" + c_value;	var divexists =(".snbar_section").length;			if (divexists){		jQuery(".snbar_section").slideUp().remove();				}				}//------------------------------------------------------------------------------------