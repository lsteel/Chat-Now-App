// FILE: MAIN.js | PROJECT NAME: Enter Project Name Here | BY: @LorinSteel - 97th Floor

// Start Custom Scripts

window.onload = function() {

	project.init();

};

var project = {},
		winWidth,
		winHeight,
    url = window.location.href,
    urlEncode = url.replace(/:/g, "%3A").replace(/\./g, "%2e"),
    urlDomainOnly = url.replace(/.*?:\/\//, "").replace(/\.com.*$/, "");

project.init = function(){

  winWidth = $(window).width();
  winHeight = $(window).height();

	everySize();

};

$('a').bind('click',function(e){
			if ($(this).attr('href').indexOf("#") > -1) {
				e.preventDefault();
			}
});

$(window).resize(function() {
  winWidth = $(window).width();
  winHeight = $(window).height();
  everySize();
	showResolution();
});

function everySize() {
}
