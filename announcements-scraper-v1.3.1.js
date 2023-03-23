// ==UserScript==
// @name         IPB 1.3.1 Download
// @namespace    https://web.archive.org/web/
// @version      0.1
// @description  Downloads release notes information.
// @author       You
// @match        https://web.archive.org/web/*/http://forums.invisionpower.com*/index.php?showtopic=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=archive.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	// Topic Title
	var title = document.getElementsByClassName( 'maintitle' )[0].innerText;
	var title = title.replace( '\t', '');

	// Archive URL
	var archiveURL = window.location.href;

	// Announcement URL
	var announcementURL = archiveURL.split( 'http://' )[1];

	// User URL
	var userURL = document.getElementsByClassName( 'normalname' )[0].innerHTML.split( /[""]/ )[1];

	// User Name
	var userName = document.getElementsByClassName( 'normalname' )[0].innerText;

	// Avatar
	if( typeof avatar !== 'undefined' ) {
		var avatar = document.getElementsByClassName( 'postdetails' )[1].children[0].src;
	};

	// Team Icon
	var teamIcon = document.getElementsByClassName( 'postdetails' )[1].children[4].src;

	// Timestamp
	var timestamp = document.getElementsByClassName( 'postdetails' )[0].innerText.replace( 'Posted: ', '' );

	// Date
	var date = timestamp.split( ', ' )[0];

	// Time
	var time = timestamp.split( ', ' )[1];

	// Post
	var post = document.getElementsByClassName( 'postcolor' )[0].innerHTML;
	var post = encodeURI( post );

	// File Safe Name
	var fileName = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();

	// Complete URI
	var myURI = JSON.stringify({"title" : title, "archiveurl" : archiveURL, "announcementurl" : announcementURL, "userurl" : userURL, "username" : userName, "avatar" : avatar, "teamicon" : teamIcon, "date" : date, "time" : time, "post" : post });
	var myURI = encodeURIComponent( myURI );

	// Create the download link
	function downloadWithName( uri, name ) {
	var link = document.createElement( 'a' );
	link.download = name;
	link.href = uri;
	link.click();
	}

	// Download the file
	downloadWithName( "data:," + myURI, date + " - " + fileName + ".json" );
})();