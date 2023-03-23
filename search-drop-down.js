//====================================================================
// 
// GLOBAL - VARIABLES
// 
//====================================================================

//------------------------------------------------
// [Variables] - Search
var searchField			=	$( "input#input-keyword" );
var	searchTypeahead		=	$( "div.typeahead-list" )[2];

//------------------------------------------------
// [Function] - Create Search Interactions
//------------------------------------------------
function searchInteractions() { 

	//------------------------------------------------
	// [SEARCH] - Focused
	//------------------------------------------------
	$( searchField ).focus( function() {
		
		// [Type Ahead] - Animation: Slide Down
		$( searchTypeahead ).slideDown( 190 );
	
	});

	//------------------------------------------------
	// [SEARCH] - Blurred
	//------------------------------------------------
	$( searchField ).blur( function() {
		
		// [Type Ahead] - Animation: Slide Up
		$( searchTypeahead ).slideUp( 250 );
		
	});	
	
};

// Animate the searchbox.
searchInteractions();