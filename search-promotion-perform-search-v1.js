app = [];

app.searchpromotion = document.querySelector( "section[class='sc-applicationContent-main']" );
app.original = app.searchpromotion.innerHTML;

app.html = "<div data-sc-id='RowIdentifier' class='row'><div data-sc-id='ColumnIdentifier' class='col-md-12'><div data-sc-id='ColumnOrder' class='sc-launchpad'><div class='sc-launchpad-group first'><!-- Header --><header class='sc-launchpad-group-title'>Custom Applications</header><!-- Icon & Text --><div class='sc-launchpad-group-row'><a href='#' onClick= 'launchSearchblox()' class='sc-launchpad-item' title='Experience Analytics'><!-- Icon --><span class='icon' style='margin-bottom: 5px !important;'><img src='/temp/iconcache/people/32x32/cube_blue.png' width='32' height='32' alt='Experience Analytics' style='height: 32px !important; width: 32px !important; margin: 30px !important;'></span><!-- Text --><span class='sc-launchpad-text'>Search Promotion</span></a></div></div></div></div></div>";

if( !document.querySelector( "div[data-sc-id='RowIdentifier']" ) ) {
	app.searchpromotion.innerHTML = app.html + app.original;
}

function launchSearchblox() {
//jQuery('.sc-applicationContent-main').load('https://site.admin.com/sitecore/admin/searchbloxtuning.aspx').replace( /src="searchbloxassets/g, 'src="https://site.admin.com/sitecore/admin/searchbloxassets' );
//jQuery('.sc-applicationContent-main').load('https://site.admin.com/sitecore/admin/searchbloxtuning.aspx');
		

		
		
		var httpRequest = new XMLHttpRequest();
		var httpUrl = "https://site.admin.com/sitecore/admin/searchbloxtuning.aspx";
		var refer = "no-referrer-when-downgrade";

		
		// Pull request.
		httpRequest.onreadystatechange = function() {
			
			// Declare variables
			var text = httpRequest.responseText;
			var text = httpRequest.responseText;
			var text = text.replace( /src="searchbloxassets/g, 'src="https://site.admin.com/sitecore/admin/searchbloxassets' );
			var text = text.replace( /href="searchbloxassets/g, 'src="https://site.admin.com/sitecore/admin/searchbloxassets' );
			var text = text.replace( /<\!DOCTYPE html>/g, '' );
			console.log( text );
			document.body.innerHTML += text;
		};
		
		// Send the http request.
		httpRequest.open( "GET", httpUrl, true );
		httpRequest.send();
		
}