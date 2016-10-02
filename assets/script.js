function updateScreen() {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

	if (h < 10) { h = "0" + h; }
	if (m < 10) { m = "0" + m; }
	if (s < 10) { s = "0" + s; }

	var hex = "#" + h + m + s;

	document.getElementById("time").innerHTML = (h + " : " + m + " : " + s);
	document.getElementById("hex").innerHTML = hex;
	document.body.style.background = hex;

	octo1.style.fill = hex;
	octo2.style.fill = hex;
}

window.onload = setInterval(updateScreen, 1000);
