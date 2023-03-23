/*************************************************************************
 *	
 *	SUBSCRIPTION MANAGER FOR WORDPRESS
 *	
 **************************************************************************
 *	
 *	[Author:] Joey Prettyman
 *	[Date:] 12/03/2018 (8:24 PM)
 *	
 *	[Software:] Wordpress (v4.9.8)
 *	[Plugin:] Subscribe2 (10.22.1)
 *	
 **************************************************************************/



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *	Global Functions
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *	
 *	Smaller multi-line text can be placed
 *	in this small section, in order to
 *	further explain your program to people.
 *	
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


//------------------------------------------------
// Define Global Variables
//------------------------------------------------
var debug = true;

// Website variables
var whitelist = {

    site: ["www.website1.com",
        "www.website2.com",
        "www.website3.com"
    ],

    page: ["/wp-admin/admin.php",
        "/admin/google.html"
    ],

    file: ["?page=s2_tools",
        "?browser=Opera",
        "?phone=iPhone",
        "?os=Windows",
        "?location=Texas",
        "?phone=123-456-7890"
    ]

};
/*
	// Other global variables
	var variable = {
		
		variable:	["Value 1.0",
					 "Value 1.1"],
		
		variable:	["Value 2.0"],
		
		variable:	["Value 3.0"]
		
	};
*/

//------------------------------------------------
// Debugging Handler
//------------------------------------------------
function debug(data) {

    // Build the log.
    var data = data;

    // Return value;
    return data;

}

//------------------------------------------------
// Get the Current URL
//------------------------------------------------
function currentURL() {

    // Build the domain.
    var domain = document.location;
    var domain = domain.hostname + domain.pathname + domain.search;

    // Return value.
    return domain;

}

//------------------------------------------------
// Index Item
//------------------------------------------------
function indexItem(item) {

    // Variables
    var itemKeys = Object.keys(item);

    // Create empty container.
    var container = [];

    // For each item key.
    itemKeys.forEach(function(key) {

        // Push each key into the container array.
        container.push(key);

    });

    // Convert the container back to an item.
    var item = container;

    // Return value.
    return item;
}

//------------------------------------------------
// Filters
//------------------------------------------------
function buildFilters() {

    // Setup the target list.
    var theList = indexItem(whitelist);

    // Build container.
    var container = [];

    // Iterate through the list.
    theList.forEach(function(key) {

        // Push the keys through.
        container.push(whitelist[key]);

    });

    // Return container.
    return container;

}

//------------------------------------------------
// Build Whitelist
//------------------------------------------------
function buildWhitelist() {

    // Setup the target list.
    var theList = buildFilters();

    // Build site container.
    var site = [];

    // Iterate through the list.
    theList[0].forEach(function(key) {

        // Push the keys through.
        site.push(key);

    });

    // Build page container.
    var page = [];

    // Iterate through the list.
    theList[1].forEach(function(key) {

        // Push the keys through.
        page.push(key);

    });

    // Build file container.
    var file = [];

    // Iterate through the list.
    theList[2].forEach(function(key) {

        // Push the keys through.
        file.push(key);

    });

    // Build the master container.
    var container = [];

    // Iterate through filters...
    site.forEach(function(key) {

        page.forEach(function(key2) {

            file.forEach(function(key3) {

                container.push(key + key2 + key3);

            });

        });

    });

    // Return whitelist.
    return container;

}

//------------------------------------------------
// Whitelist Checker
//------------------------------------------------
function whitelistCheck(url) {

    // Index the whitelist...
    var theList = buildWhitelist();

    var url = url;

    // Build the master container.
    var container = [];

    // Iterate through the list.
    theList.forEach(function(key) {

        if (key == url) {

            container.push("true");

        }

    });

    return container;

}


// Get the current URL.
var currentURL = currentURL();

// Is this URL approved to run the application?
var currentURL = whitelistCheck(currentURL);

if (currentURL["0"] !== "true") {
    console.log("failure!");
} else {
    console.log("success!");
}




//------------------------------------------------
// Run The Application!!!
//------------------------------------------------
function runApplication() {

    // Get the current URL.
    var currentURL = currentURL();

    // Is this URL approved to run the application?
    var currentURL = whitelistCheck(currentURL);

    if (currentURL["0"] !== "true") {
        console.log("failure!");
    } else {
        console.log("success!");
    }

    /*
    	- Is this URL approved?
    			+ No...
    				- Show error in console...
    					console.log( "This webpage isn't approved to run this script." );
    					console.log( "CURRENT URL: " + [Display Current URL] );
    					
    			+ Yes...
    				- Get value of the select. ( "Unconfirmed (1504)" )
    				- Get row count...
    				- Does EVERY row contain the color red?
    					+ No
    						// Show error in console...
    						// console.log( "Sorry, but it looks like you're on the wrong page." );
    						// console.log( "CURRENT URL: " + [Display Current URL] );
    						
    					+ Yes..
    						// Gather
    						
    */
}


// document.getElementsByName( "what" )[0].value;

//	Public Subscribers	= "public"
// 		Confirmed		= "confirmed"

// Unconfirmed
document.getElementsByName("what")[0].value = "unconfirmed";

// Filter Button
// document.getElementsByClassName( "button-secondary" )[0];
document.getElementsByClassName("button-secondary")[0].click();
// Sorry, but filter had to be applied error.


// How many rows do we have?

// Header
function() {

}
}




function generateStyles() {

    // Begin the index.
    var i = 0;

    // Get count of style entries.
    var stylesCount = Object.keys(styles).length - 1;

    // For each 
    var customStyles = Object.keys(styles);

    // Let's do something with those keys.
    $(customStyles).each(function() {

        // Increase index.
        i++;

        // Only output information that is not undefined.
        if (styles[i] !== undefined) {

            // Give variables reasonable names.
            var styleName = styles[i]["name"];
            var styleCss = styles[i]["css"];

            // Let's format until we reach last entry.
            if (styles[i] !== styles.length) {

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

/////////////////////////////////////////////
// IP Address Variable

var ipAddress = document.getElementsByTagName("abbr")[0]["attributes"][0].value;

var newEmail = document.getElementsByTagName("abbr")[0].innerText;

var ipLength = document.getElementsByTagName("abbr").length;


// Empty container creation.
var newInformation = [];

// For each xyz...
for (i = 0; i < ipLength; i++) {

    // Create variables.
    var ipVal = document.getElementsByTagName("abbr")[i]["attributes"][0].value;
    var emailVal = document.getElementsByTagName("abbr")[i].innerText;

    // Push to array.
    newInformation.push(ipVal + );

    // Push to array.
    emailPool.push(emailVal);

}

// Sub list element.
var subList = document.getElementById("the-list");

// Sub list children.
var subChildren = subList.children;

// Count the number of subscribers.
var subCount = subChildren.length;


// Log all of that shit in the console...
console.log(subList);
console.log(subChildren);
console.log(subCount);

// Now to recreate...
for (i = 0; subCount > i; i++) {

    // Create variables.
    var myCheck = subChildren[0].children[0].children[0].checked; // True or false checked.
    var myEmail = subChildren[1].children[1].innerText.trim(); // Email without trailing space.
    var myIP = subChildren[0].children[1].children[0].children[0]["title"]; // Email IP Address.

    // Sub childrens?
    subChildren[i];

    // Log in the console.
    console.log(subChildren[i]);

}