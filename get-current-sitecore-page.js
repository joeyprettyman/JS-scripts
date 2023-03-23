/*
function addScript( src ) {
		
	// If the script processing failed... Return an error.
	if ( !document.getElementsByTagName || !document.createElement || !document.appendChild ) {
		console.log( "Gotta create these damn elements!" );
		return false;
	}
	
	else {
		var script = document.createElement( "script" );
		script.type = "text/javascript";
		script.src = src;
		document.getElementsByTagName( "head" )[0].appendChild( script );
		console.log( "[CURRENT PAGE]: Loaded script successfully!" );
		return true;
	}
}*/



/*if ( document.location.host + document.location.pathname === "site.admin.com/sitecore/admin/searchbloxtuning.aspx" ) {
	console.log( "[CURRENT PAGE]: We're currently on the search page!" );
}

/*if ( document.location.host + document.location.pathname === "site.admin.com/sitecore/shell/sitecore/client/applications/launchpad" ) {
	console.log( "[CURRENT PAGE]: We're currently on the admin page!" );
	exit;
}*/

// Otherwise, inject that script into our page.
//else {
//var script = document.createElement( "script" );
//script.type = "text/javascript";
//script.src = src;
//document.getElementsByTagName( "head" )[0].appendChild( script );
//console.log( "loaded dat shit" );
//return true;
var test = document.getElementsByClassName("scRibbonToolbarText")[0].children[0].children[1].innerText;
test = test.replace("site.admin.com", "www.website");
document.getElementsByClassName("scRibbonToolbarText")[0].children[0].children[1].innerText = test;


console.log("[CURRENT PAGE]: Loading next page!");
// }
setTimeout(function() {
    document.querySelector("div[class='scContentTreeNode']").children[3].children[0].children[0].click();

    setTimeout(function() {
        document.querySelector("div[class='scContentTreeNode']").children[3].children[0].children[3].children[0].children[0].click();
    }, 250);

}, 10);