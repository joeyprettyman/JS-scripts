//------------------------------------------------
// INJECT CODE LIBRARY
//------------------------------------------------
function injectLibrary( url ) {
	
	// Define variables.
	var thisPage	= document;
	var head		= thisPage.getElementsByTagName("head")[0];
	var script		= thisPage.createElement( "script" );

	// Add information to the injection.
	script.src		= url;
	script.type		= "text/javascript";
	
	// Visual indicator that the script has been loaded.
/*	script.onload = function() {
		
		console.log( "jQuery has been injected successfully!" );
		
	} */
	
	// Append the script to the head section.
	head.appendChild( script );
	
}

// Run the injection function.
injectLibrary( "https://code.jquery.com/jquery-3.3.1.js" ); // Example injects jQuery script.