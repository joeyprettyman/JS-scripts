/*app = [];

app.href = window.location.href;

if( app.href === "https://site.admin.com/sitecore/admin/searchbloxtuning.aspx" ) {
	
	console.log( "We are on the [Search Tuning] page! :)" );
}

else {
	
	//app.href	=	"";
	console.log( "This is the remote text." );
	
}*/

style = []


find = [];
language = [];

// Declare radio buttons.
find.english	=	document.querySelector( "input[type='radio'][value='Company-Sitecore-English']" );
find.chinese	=	document.querySelector( "input[type='radio'][value='Company-Sitecore-Chinese']" );		

find.english.click();

// Declare find filters.
find.results	=	document.getElementsByClassName( "results" )[0];
//find.noresults	=	document.querySelector( "ng-if='searchData.Results.length == 0'" );
find.input		=	document.querySelector( "input[ng-model='search.phrase']" );
find.button		=	document.querySelector( "button[ng-click='search()']" );						

find.input.value = "Cybersecurity";
angular.element( find.input ).triggerHandler('search()');
find.button.click();


var newDiv = document.createElement( 'div' );

style.sheets = '<style>@import url("https://fonts.googleapis.com/css?family=Open+Sans"); body { opacity: 1.0; } #sc-icon:hover { background-position: left bottom !important; } #scLogout:link, #scLogout:visited, #scLogout:active { font-size: 12px; color: #969696; text-decoration: none; } #scLogout:hover { text-decoration: underline !important; }</style>';

style.blackBar = '<div style="color: #ffffff; height: 50px; width: 100%; display: block; background: #2b2b2b; vertical-align: middle; line-height: 50px; position: fixed; top: 0; left: 0;"></div>';

style.scIcon = '<a href="https://site.admin.com/sitecore/shell/sitecore/client/applications/launchpad"><div id="sc-icon" style="position: fixed; top: 0px; left: 0px; color: red; margin-left: 15px; margin-top: 8.5px; line-height: 50px; width: 33px; height: 33px; background: blue; background: url(/sitecore/shell/client/Speak/Assets/img/Speak/GlobalLogo/global_logo.png); background-repeat: no-repeat; background-position: left top; background-size: cover;"></div></a>';

style.scTitle = '<div style="color: #ffffff; font-weight: bold; font-size: 19.2px; text-transform: uppercase; position: fixed; top: 0px; margin-top: 10px; left: 0px; margin-left: 60px; cursor: default; font-family: "Open Sans", Arial, sans-serif; letter-spacing: 0.2px; font-weight: 700;">Production</div>';

style.logOut = '<div style="position: fixed; top: -2px; right: 0px; line-height: 50px; margin-right: 183px;"><a id="scLogout" href="https://site.admin.com/sitecore/shell/sitecore/client/applications/launchpad">Log out</a></div>';

style.splitter = '<div style="color: #ffffff; position: fixed; top: 0px; right: 0px; line-height: 50px; margin-right: 163px; font-size: 12px;">|</div>';

style.userName = '<div style="color: #ffffff; position: fixed; top: 0px; right: 0px; line-height: 50px; margin-right: 63px; font-size: 12px;">Joey Prettyman</div>';

style.profilePic = '<div style="position: fixed; line-height: 50px; height: 50px; top: 0px; right: 0px; "><img src="/temp/iconcache/office/32x32/default_user.png" style="border-radius: 50%; height: 32px; width: 32px; margin-top: 10px; margin-right: 10px;"></div>';

newDiv.innerHTML = style.sheets + style.blackBar + style.scIcon + style.scTitle + style.logOut + style.splitter + style.userName + style.profilePic;

document.body.style.marginTop = "75px";

document.body.appendChild( newDiv );




