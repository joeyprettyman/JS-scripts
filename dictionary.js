//====================================================================
// 
//		D I C T I O N A R Y
// 
//====================================================================

//===================================
// DICTIONARY VARIABLES
//===================================

// Build the myDictionary array.
var myDictionary = {

    litigate: [
        "litigation",
        "litigations",
        "litigate",
        "litigated",
        "litigates",
        "litigator",
        "litigators"
    ],

    dispute: [
        "dispute",
        "disputed",
        "disputes",
        "disputer"
    ]
};


//===================================
// Search Box Searching Dictionary
//===================================	
// Every time the user presses a key down
$("input#input-keyword").keydown(function() {

    // Convert search to lowercase.
    var mySearch = $(this).val().toLowerCase();

    // Set 700ms timeout.
    setTimeout(function() {

        // Do results show up?
        var myResults = $(".typeahead-list.typeahead-list--undefined.ng-scope.active");

        // If the results menu appears...
        if (myResults.length > 0) {

            // Get new results.
            var tempResults = $("button.typeahead-list-item");

            // Run the function.
            tempResults.each(function(e) {

                // Setup variables.
                var i = $("button.typeahead-list-item")[e].innerText;

                // Something...
                console.log(i);


            });

        }

    }, 700);

});


// For every result...
for (x = 0; myResults.length > x; x++) {

    // Go through our dictionary...
    for (i = 0; myDictionary.length > i; i++) {

        var myContainer = [];

        // And search for our search phrase.
        if (myResults[x].innerText.search(myDictionary[i]) !== -1) {

            //console.log( 'SUCCESS   - "' + myDictionary[i] + '" in [' + myResults[x].innerText + '].' );

            var theHTML = String($(myResults[x].outerHTML)[0].innerHTML);
            var theHTML = theHTML.replace(myDictionary[i], "<div class='linkText' style='display: inline; letter-spacing: 1px;'>" + myDictionary[i] + "</div>");

            myContainer.push(theHTML);

        }

    }

    // Change those colors.
    myResults[x].innerHTML = theHTML;
}
}, 700);
});