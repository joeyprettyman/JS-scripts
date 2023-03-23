
// The Code
window.addEventListener("resize", function() {
	console.log( window.innerHeight );
	console.log( window.innerWidth );
});

// Get window size
function testingMode() {
	function myFunction() {
		console.log( window.innerHeight );
		console.log( window.innerWidth );
	}
	
	// Add event listener.
	window.addEventListener("resize", myFunction);
}

testingMode();
console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');