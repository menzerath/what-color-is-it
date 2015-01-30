function updateScreen() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	if (h < 10) { h = "0" + h };
	if (m < 10) { m = "0" + m };
	if (s < 10) { s = "0" + s };

	var hex = "#" + h + m + s;

	document.getElementById("time").innerHTML = (h + " : " + m + " : " + s);
	document.getElementById("hex").innerHTML = hex;
	document.body.style.background = hex;

	// Check Fullscreen-Mode
	if (Math.abs(screen.height - window.innerHeight) < 50 && Math.abs(screen.width - window.innerWidth) < 10) {
		document.getElementById("github-badge").style.display = "none";
		document.body.style.cursor = "none";
	} else {
		document.getElementById("github-badge").style.display = "block";
		document.body.style.cursor = "default";
	}
}

var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
	var u="//piwik.menzerath.eu/";
	_paq.push(['setTrackerUrl', u+'piwik.php']);
	_paq.push(['setSiteId', 9]);
	var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
	g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();

window.onload = setInterval(function () { updateScreen() }, 100);