 $(document).ready(function() {
	 console.log("Time until DOMready: ", Date.now()-timerStart);
 });
 $(window).load(function() {
	 console.log("Time until everything loaded: ", Date.now()-timerStart);
 });