$(document).ready(function() {

	console.log("hello");
	require(["text!template.xml", "text!package.json"], function(hb, gfgf) {
               console.log(hb, gfgf);
	});

});
