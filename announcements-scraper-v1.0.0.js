// ==UserScript==
// @name         IPB 1.0.0 Download
// @namespace    https://web.archive.org/web/
// @version      0.1
// @description  Downloads release notes information.
// @author       You
// @match        https://web.archive.org/web/*/http://www.invisionboard.com*/forums/index.php?act=ST&f=1&t=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=archive.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Topic Title
    var title = document.getElementById( 'maintitle' ).innerText;
    var title = title.replace( '\t', '');

    // Archive URL
    var archiveURL = window.location.href;

    // Announcement URL
    var announcementURL = archiveURL.split( 'http://' )[1];

    // User URL
    var userURL = document.getElementById( 'normalname' ).children[0].href;

    // User Name
    var userName = document.getElementById( 'normalname' ).children[0].innerText;

    // Avatar
    var avatar = document.getElementById( 'post1' ).children[0].src;
    if( typeof avatar !== 'undefined' ) {
        var avatar = avatar.split( /[""]/ );
    };

    // Team Icon
    var teamIcon = document.getElementById( 'post1' ).children[4].src;

    // Timestamp
    var timestamp = document.getElementsByTagName( 'td' )[23].children[0].children[0].children[0].children[0].innerText;
    var timestamp = timestamp.replace( 'Posted: ', '' );

    // Date
    var date = timestamp.split( ', ' )[0];

    // Time
    var time = timestamp.split( ', ' )[1];

    // Post
    var post = document.getElementById( 'postcolor' ).innerHTML;
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