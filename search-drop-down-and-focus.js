//====================================================================
// 
// GLOBAL - VARIABLES
// 
//====================================================================

	//------------------------------------------------
	// [Variables] - Search
	//------------------------------------------------
	var search				=	$( "div.search-block" );
	var searchSection		=	$( search ).children()[0];
	var searchField			=	$( "input#input-keyword" );
	
	//------------------------------------------------
	// Create Block Box div element.
	//------------------------------------------------
	$( search ).append( "<div class='blockout' style='display: none;'></div>" );	
	
	var searchBlockout		=	$( "div.blockout" );
	var	searchTypeahead		=	$( "div.typeahead-list" )[2];
	var searchVisible 		=	$( searchTypeahead ).is( ":visible" );
 
	//------------------------------------------------
	// [Variables] - Site Colors
	//------------------------------------------------
	var colors = { 
		black: "000000",
		darkBlue: "003150",
		gray: "878787",
		lighterDarkblue: "09314f",
		offWhite: "eececec",
		orange: "eeb301",
		white: "ffffff"
	};
	
	//------------------------------------------------
	// [Variables] - Site Styles
	//------------------------------------------------
	var styles = 
	{
		
		// Create a container for later.
		css: "",
		
		// Array to hold various CSS styles.
		1: {name:	".typeahead-list-item",
			css:	"color: #" + colors['gray'] + " !important;"},
		
		2: {name:	".typeahead-list .typeahead-list-item:focus, .typeahead-list .typeahead-list-item:hover",
			css:	"color: #" + colors['gray'] + " !important; " + 
					"background: #" + colors['offWhite'] + " !important;"},
		
		3: {name:	".linkText",
			css:	"color: #" + colors['orange'] + " !important;"},
		
		4: {name:	".typeahead-list-item:hover",
			css:	"color: #" + colors['black'] + " !important;"},
		
		5: {name:	".search-block.search-section.print--hide",
			css:	"z-index: 110 !important;"},
		
		6: {name:	".search-section-row.form-group.jumbo-input.search-field",
			css:	"z-index: 110 !important;"},
		
		7: {name:	".blockout",
			css:	"background: #" + colors['black'] + "; " + 
					"width: 100%; " +  
					"height: 100%; " + 
					"position: fixed; " + 
					"top: 0; " + 
					"left: 0; " + 
					"opacity: 0.2; " + 
					"z-index: 2 !important; " + 
					"display: none;"},
		
		8: {name:	".typeahead-list.typeahead-list--undefined.ng-scope",
			css:	"padding-bottom: 25px;"},
		
		9: {name:	".loading-overlay",
			css:	"display: none !important;"},
		
		10: {name:	".link-block",
			 css:	"min-width: 0px !important;"},
		
		11: {name:	".search-field",
			 css:	"z-index: 3 !important;"}
		
	};
	
	
	
//====================================================================
// 
// GLOBAL - FUNCTIONS
// 
//====================================================================
	
	//------------------------------------------------
	// [Function] - Create Styles
	//------------------------------------------------
	function generateStyles() { 
	
		// Begin the index.
		var i = 0;

		// Get count of style entries.
		var stylesCount = Object.keys( styles ).length - 1;
		
		// For each 
		var customStyles = Object.keys( styles );

		// Let's do something with those keys.
		$( customStyles ).each( function() {
			
			// Increase index.
			i++;
			
			// Only output information that is not undefined.
			if( styles[i] !== undefined ) {
				
				// Give variables reasonable names.
				var styleName = styles[i]["name"];
				var styleCss = styles[i]["css"];
				
				// Let's format until we reach last entry.
				if( styles[i] !== styles.length ) {
					
					// Create new variable.
					styles["css"] += styleName + " { " + styleCss + " } ";
					
				}
				
				// Okay, this is the last one.
				else {
					
					// Remove trailing space.
					styles["css"] += styleName + " { " + styleCss + " }";
					
				}
			}
			
		});
		
		// Generate Styles
		return styles["css"];
		
	};
	
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
			
			// [Blockout] - Animation: Fade In
			$( searchBlockout ).fadeIn( 250 );
		
		});

		//------------------------------------------------
		// [SEARCH] - Blurred
		//------------------------------------------------
		$( searchField ).blur( function() {
			
			// [Type Ahead] - Animation: Slide Up
			$( searchTypeahead ).slideUp( 250 );
			
			
			// [Blockout] - Animation: Fade Out
			$( searchBlockout ).fadeOut( 250 );
			
		});	
		
	};
	
	//------------------------------------------------
	// APPEND CSS
	//------------------------------------------------
	$( "head" ).append( "<style type='text/css'>" + generateStyles() + "</style>" );
	
//====================================================================
//
// RUN FUNCTIONS
//
//====================================================================

	//Animate the searchbox.
	searchInteractions();