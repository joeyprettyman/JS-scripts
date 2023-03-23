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
		
		my = [];
		
		console.log( text );
		
		my.life = document.querySelector( "section[class='sc-applicationContent-main']" );
		my.orig = my.life.innerHTML;
		
		// Log the returned information in the console.
		//console.log( text );
		my.life.innerHTML = text + my.orig;
}		
		
		
		this.replace( /src="searchbloxassets/g, 'src="https://site.admin.com/sitecore/admin/' );
		var my = document.querySelector( "div[class='sc-applicationHeader-row1 ']" );
		var my = my.classList.add( "developer-mode" );
		var my = document.querySelector( "div[class='sc-applicationHeader-row1 developer-mode']" );
		var my = my.classList.remove( "sc-applicationHeader-row1" );
		var my = document.querySelector( "div[class='developer-mode']" );
		my.removeChild( my.childNodes[1] );

		my.style.backgroundColor = "#474747";
		my.style.backgroundImage = "none";
		my.style.height = "47px";
		
		var my = document.querySelector( "section[class='sc-applicationContent-main']" ).querySelector( "header[class='sc-globalHeader']" );
		var my = my.classList.add( "developer-mode-header" );
		var my = document.querySelector( "section[class='sc-applicationContent-main']" ).querySelector( "header[class='sc-globalHeader developer-mode-header']" );
		var my = my.classList.remove( "sc-globalHeader" );
		var my = document.querySelector( "div[class='developer-mode-header']" );
		
	});
	
	//var body = document.body.innerHTML;
	//var adder = '<style>header.developer-mode-header { position:absolute; bottom: 0; top: auto; }</style>' + body;
	//document.body.innerHTML= adder;
}





var my = document.querySelector( "div[class='sc-applicationHeader-row1 ']" );
var my = my.classList.add( "developer-mode" );
var my = document.querySelector( "div[class='sc-applicationHeader-row1 developer-mode']" );
var my = my.classList.remove( "sc-applicationHeader-row1" );
var my = document.querySelector( "div[class='developer-mode']" );
my.removeChild( my.childNodes[1] );

my.style.backgroundColor = "#474747";
my.style.backgroundImage = "none";
my.style.height = "47px";




jQuery('#testingthisstuff').load('https://site.admin.com/sitecore/admin/searchbloxtuning.aspx');



var httpRequest = new XMLHttpRequest();
var httpUrl = "https://site.admin.com/sitecore/shell/sitecore/client/applications/launchpad";
var refer = "no-referrer-when-downgrade";

// Send the http request.
httpRequest.open( "GET", httpUrl );
httpRequest.send();

// Pull request.
httpRequest.onreadystatechange = function() {
	
	// Declare variables
	//var text = httpRequest.responseText;
	var text = httpRequest.responseHTML;
	
	// Log the returned information in the console.
	//console.log( text );
	console.log( text );
}





	https://site.admin.com/sitecore/api/ao/aggregates/all/7A9A483F195D4F96AD88473CD6854C4F/all?&dateGrouping=by-week&&keyTop=5&keyOrderBy=visits-Asc&dateFrom=04-07-2018&dateTo=04-10-2018&keyGrouping=by-key
	
	c_bf77bdbcd8455fc4