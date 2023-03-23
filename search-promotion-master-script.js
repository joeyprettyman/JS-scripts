/*
 * SEARCH PROMOTION
 * 
 * Function(s): step(1), step(2), step(3)
 * 
 * Author: Joey Prettyman
 * Year: 2018
 * Company: Company
 * Email: Joey.Prettyman@company.com
 *
 */
 
//------------------------------
// Declare site language.
//------------------------------/
var language	=	"english";

//------------------------------
// Declare cookie variables.
//------------------------------/
var cookieName	=	"searchPromotion";
var cookieValue	=	"valid";


 
/********************************************************
 * COOKIE FUNCTIONS
 ********************************************************/

/**************************************
 * COOKIE LIFE CYCLE
 **************************************
 *
 * 	1) On web page load...				=	[undefined]
 * 	2) Does cookie exist?	(call)		=	[null]
 *	3) Cookie created.		(method)	=	[setValue]
 *	4) Cookie deleted.		(method)	=	[undefined]
 *
 **************************************/
	
	//================================
	// Declare getCookie function.
	//================================
	function getCookie() {
		return localStorage.getItem( cookieName );
	};
	
	//================================
	// Declare setCookie function.
	//================================
	function setCookie() {
		localStorage.setItem( cookieName, cookieValue );
	};
	
	//================================
	// Declare removeCookie function.
	//================================
	function removeCookie() {
		localStorage.removeItem( cookieName );
	}


	
/********************************************************
 * URL FUNCTIONS
 ********************************************************/
	
	//------------------------------
	// Declare current url variables.
	//------------------------------/
	var thisPage		=	window.location;
	var port			=	thisPage.port;
	var https			= 	thisPage.protocol;
	var domain			= 	thisPage.host;
	var directories		= 	thisPage.pathname;
	var href			= 	thisPage.href;
	
	//------------------------------
	// Declare page variables for comparison.
	//------------------------------/
	var currentPage		=	https + "//" + domain + directories;

	
	// Does cookie exist?
	if( !getCookie() ) {
		
		// Are we on the login page?
		// [NO]
		var loginPage		=	"https://site.admin.com/sitecore/login";
		
		// If we are NOT on the login page... Go there.
		if( currentPage !== loginPage ) {
			window.location.href = loginPage;
		}
		
		// We are already on the login page...
		else {
			
			cred = []; login = []; input = [];
			
			
			// Declare login credentials...
			cred.user		=	"sitecore\\username";
			cred.pass		=	"password";			
			
			// Declare login form variable.
			login.form		=	document.getElementById( "login" ).getElementsByTagName( "input" );
			
			// Declare inputs for form.
			input.username	=	login.form[0];
			input.password	=	login.form[1];
			login.button	=	login.form[2];
			
			// Begin filling out login form with credentials.
			input.username.value = cred.user;
			input.password.value = cred.pass;
			
			// Before we login, let's set that cookie now.
			setCookie();
			
			// Click the login button.
			login.button.click();
			
		}
	}
	
	// Cookie(s) DO(ES) exist!
	else {
		// Declare objects.
		find = [];
		language = [];
		
		// Are we on searchblox page?
		// [NO]
		var searchPage		=	"https://site.admin.com/sitecore/admin/searchbloxtuning.aspx";
		
		// If we are NOT on the search page... Go there.
		if( currentPage !== searchPage ) {
			window.location.href = searchPage;
		}
		
		// [YES]
		else {
			
			// Was search already performed?
			// If yes.
			if( find.results !== undefined && find.results !== null ) {
				
				console.log( "search was already performed" );
				/*Search for best bets.
				if( bestBets === true ) {
					

					}
					
					
					* Log best bet in array.
				}
				
				else {
					* Perform another search.
				}*/
				
			}
			
			// This is a fresh page.
			else {
					
					if( language === "english" ) {	
						
						// Declare radio buttons.
						find.english	=	document.querySelector( "input[type='radio'][value='Company-Sitecore-English']" );
						find.chinese	=	document.querySelector( "input[type='radio'][value='Company-Sitecore-Chinese']" );		
						
						find.english.click();
						
						// Declare find filters.
						find.results	=	document.getElementsByClassName( "results" )[0];
						find.noresults	=	document.querySelector( "ng-if='searchData.Results.length == 0'" );
						find.input		=	document.querySelector( "input[ng-model='search.phrase']" );
						find.button		=	document.querySelector( "button[ng-click='search()']" );						
						
						find.input.value = "Cybersecurity";
						angular.element( find.input ).triggerHandler('change');
						find.button.click();
						
						
						//var searchVal	=	"Cybersecurity"; // 2 Best Bets
						//var searchVal	=	"Test"; // 0 Best Bets
						//var searchVal	=	"Supreme Court Decides Wilkins v Gaddy"; // 1 Results 1 Best Bet

						// Change input value.
						//$( "input[ng-model='search.phrase']" ).val( searchVal );

						// On input value change...
						//angular.element($( "input[ng-model='search.phrase']" )).triggerHandler('change');

						// Click search button.
						//$( "button[ng-click='search()']" ).triggerHandler("click");
					}
					
					else {
						find.chinese.click();
					}
				
			}
		}
	}