app = [];
app.href = document.location.href;

app.searchpromotion = document.querySelector( "section[class='sc-applicationContent-main']" );

if( app.searchpromotion !== null ) {
	app.original = app.searchpromotion.innerHTML;
	
	app.html = "<div data-sc-id='RowIdentifier' class='row'><div data-sc-id='ColumnIdentifier' class='col-md-12'><div data-sc-id='ColumnOrder' class='sc-launchpad'><div class='sc-launchpad-group first'><!-- Header --><header class='sc-launchpad-group-title'>Custom Applications</header><!-- Icon & Text --><div class='sc-launchpad-group-row'><a href='https://site.admin.com/sitecore/admin/searchbloxtuning.aspx' class='sc-launchpad-item' title='Experience Analytics'><!-- Icon --><span class='icon' style='margin-bottom: 5px !important;'><img src='/temp/iconcache/people/32x32/cube_blue.png' width='32' height='32' alt='Experience Analytics' style='height: 32px !important; width: 32px !important; margin: 30px !important;'></span><!-- Text --><span class='sc-launchpad-text'>Search Promotion</span></a><a href='#' class='sc-launchpad-item' title='Add Custom Applications' style='opacity: 0.25;'><!-- Icon --><span class='icon' style='margin-bottom: 5px !important;'><img src='/temp/iconcache/applications/32x32/add2.png' width='32' height='32' alt='Experience Analytics' style='height: 32px !important; width: 32px !important; margin: 30px !important;'></span><!-- Text --><span class='sc-launchpad-text'>Add Custom Applications</span></a><a href='#' class='sc-launchpad-item' title='Add Custom Applications' style='opacity: 0.25;'><!-- Icon --><span class='icon' style='margin-bottom: 5px !important;'><img src='/temp/iconcache/applications/32x32/add2.png' width='32' height='32' alt='Experience Analytics' style='height: 32px !important; width: 32px !important; margin: 30px !important;'></span><!-- Text --><span class='sc-launchpad-text'>Add Custom Applications</span></a></div></div></div></div></div>";
	
	app.html = '<div style="color: #ffffff; height: 30px; width: 30px; background: #db3227; border: 3px solid white; box-shadow: 0px 1px 2px grey; border-radius: 50%; text-align: center; font-size: 12px; font-weight: bold; line-height: 25px; letter-spacing: 1px; position: absolute; left: 142.5px; top: 202.5px; z-index: 99; padding-left: 1px; text-shadow: 0px 1px 1px #57140f;">10</div>' + app.html;


	if( !document.querySelector( "div[data-sc-id='RowIdentifier']" ) ) {
		app.searchpromotion.innerHTML = app.html + app.original;
		
		console.log( "[FIRST TIME]: First time running, installing the icon!" );
	}	
}