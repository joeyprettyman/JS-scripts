//==============================================================
// SERVICES INFORMATION
//==============================================================

// Section Title.
var myTitle = "Browse Our Services & Industries";

// Create a list of services.
var myServices = [
    'Business & Transactions',
    'Energy & Natural Resources',
    'Finanacial Services',
    'Food & Agribusiness',
    'Government & Regulatory',
    'Health & Life Sciences',
    'Intellectual Property',
    'Labor & Employment',
    'Litigation & Dispute Resolution',
    'Product Liability',
    'Real Estate, Construction & Environmental',
    'Technology',
    'Wealth Management'
];

//==============================================================
// BUILD SERVICES
//==============================================================

//***********************************
// Create a Section Title
//***********************************
function createSectionTitle(title) {

    // Format the title in HTML.
    var title = "<div class='search-section-row section-title search-block__title'><h3 class='title-style title'>" + title + "</h3></div>";

    // Return the HTML.
    return title;
}

//***********************************
// Clean Content
//***********************************
function cleanStuff(cleanedContent) {

    // Begin cleaning content.
    var cleanedContent = cleanedContent.toLowerCase();
    var cleanedContent = cleanedContent.replace(new RegExp('&', 'g'), "and");
    var cleanedContent = cleanedContent.replace(new RegExp(',', 'g'), "");
    var cleanedContent = cleanedContent.replace(new RegExp(' ', 'g'), "-");

    // Return the cleaned text.
    return cleanedContent;
}

//***********************************
// Further Cleaning
//***********************************
function cleanerStuff(cleanedContent) {

    // Begin cleaning content.
    var cleanedContent = JSON.stringify(cleanedContent);
    var cleanedContent = cleanedContent.replace(/[[\]]/g, '')
    var cleanedContent = cleanedContent.replace(new RegExp('"', 'g'), "");
    var cleanedContent = cleanedContent.replace(new RegExp(',', 'g'), "");

    // Return the cleaned text.
    return cleanedContent;
}

//***********************************
// Create Services Links (Mobile)
//***********************************
function createSectionServices(links) {

    // Create HTML Container.
    var containerForHTML = [];

    // For each of those services, create a link and then button.
    for (i = 0; links.length > i; i++) {

        // Get current service name.
        var original = links[i];

        containerForHTML.push("<li class='linklist__item'><a href='#" +
            cleanStuff(original) + "' class='linklist__title linklist__title--big'>" + original + "</a></li>");

    }

    // Ok, spit those fuckers out.
    var sectionZero = "<ul class='reset-list linklist__columns'>" + cleanerStuff(containerForHTML) + "</ul>";
    var sectionZero = "<div class='linklist'>" + sectionZero + "</div>";
    var sectionZero = "<div class='mobileshowhide__mobile section__subsection'>" + sectionZero + "</div>";
}

createSectionServices(myServices);



//==============================================================
// EXECUTE FUNCTIONS
//==============================================================
function buildServicesSection() {


    // Section Two

    // Create HTML Container.
    var containerForHTML = [];

    // For each of those services, create a link and then button.
    for (i = 0; myServices.length > i; i++) {

        // Get current service name.
        var original = myServices[i];

        // Print out the cleaning in the Console.
        console.log("[" + original + "] ==> [" + cleanStuff(original) + "]");

        containerForHTML.push("<li class='linklist__item'><a href='#" + cleanStuff(original) + "' class='linklist__title linklist__title--big'>" + original + "</a></li>");

    }

    // Ok, spit those fuckers out.
    var sectionZero = "<ul class='reset-list linklist__columns'>" + cleanerStuff(containerForHTML) + "</ul>";
    var sectionZero = "<div class='linklist'>" + sectionZero + "</div>";
    var sectionZero = "<div class='mobileshowhide__mobile section__subsection'>" + sectionZero + "</div>";


    /********************************************************************/
    /********************************************************************/
    /********************************************************************/


    // Create HTML Container.
    var containerForHTML2 = [];
    //var containerForHTML3 = [];

    // For each of those services, create a link and then button.
    for (i = 0; myServices.length > i; i++) {

        // Get current service name.
        var original = myServices[i]; // "Real Estate, Construction & Environmental"
        i++;
        var original2 = myServices[i];;
        var original2 = original2; // "Real Estate, Construction & Environmental"

        containerForHTML2.push("<div class='tabs-list tabs-list-middle'><button class='tabs-list-item ng-scope'><span class='tabs-list-title'>" + original + "</span></button><button class='tabs-list-item ng-scope'><span class='tabs-list-title'>" + original2 + "</span></button></div>");

    }

    function isOdd(num) {
        return num % 2;
    }

    if (isOdd(containerForHTML2.length) == 1) {
        var getTheEmpties = containerForHTML2.indexOf("<button class='tabs-list-item ng-scope'><span class='tabs-list-title'>undefined</span></button></div>");

        if (getTheEmpties < 1) {
            console.log("exists");
            var containerForHTML2 = JSON.stringify(containerForHTML2);
            var containerForHTML2 = containerForHTML2.replace("<button class='tabs-list-item ng-scope'><span class='tabs-list-title'>undefined</span></button></div>", "");

        } else {
            var containerForHTML2 = JSON.stringify(containerForHTML2);
        }
    };


    // Put the links through the state-of-the-art filtering machine...
    var containerForHTML2 = containerForHTML2.replace(/[[\]]/g, '');
    var containerForHTML2 = containerForHTML2.replace(new RegExp('"', 'g'), "");
    var containerForHTML2 = containerForHTML2.replace(new RegExp(',', 'g'), "");
    var containerForHTML2 = containerForHTML2.replace(/[[\]]/g, '');

    var containerForHTML2 = "<div class='tabs-list tabs-list-top'><div class='filterBy'>Filter By:</div><button class='tabs-list-item ng-scope' onClick='allFilter()'><span class='tabs-list-title'>All</span></button><button class='tabs-list-item ng-scope' onClick='servicesFilter()'><span class='tabs-list-title'>Services</span></button><button class='tabs-list-item ng-scope' onClick='industriesFilter()'><span class='tabs-list-title'>Industries</span></button></div>" + containerForHTML2;



    // Ok, now it's time to build the rest of the page...
    var sectionOne = "<div class='tabs ng-scope'>" + containerForHTML2 + "</div>";
    var sectionOne = "<div class='mobileshowhide__desktop'>" + sectionOne + "</div>";

    var sectionOne = "<div class='mobileshowhide'>" + sectionZero + sectionOne + "</div>";
    var sectionOne = "<div class='page-limit-narrow'>" + sectionOne + "</div>";


    // Find the section we'd like to add our items ABOVE.
    var sectionTwo = document.getElementsByClassName("section-title")[0];

    // Insert Element Above
    $("<insertion-point style='height: 0px; width: 100%; margin-bottom: 50px;'>" + createSectionTitle(myTitle) + sectionOne + "</insertion-point>").slideDown().insertBefore(sectionTwo)[0];

    // Remove Old Services Section
    document.getElementsByTagName("section")[1].innerHTML = "";

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML =
        '.tabs-list-item:only-of-type { display: inline-block; }' +
        '.tabs-list-item:hover { background: #003150 !important; color: #ffffff !important; }' +
        '.filterBy { position: relative; flex: 1 1 auto; min-width: calc( 50% + 1px ); padding: 24px 30px 24px 16px; border: 1px solid white; background: #ffffff; line-height: 1.1; margin-top: -2px; margin-left: -1px; display: block; text-align: right; letter-spacing: 1px; font-family: "Gill Sans W01"; font-weight: 500; border-bottom: 10px solid #09314f; }' +
        'button:focus { outline: 0 !important; }' +
        '.title-style { margin: 64px 0px; }';
    document.getElementsByClassName("search-section-row")[3].style.marginTop = "50px";
    document.getElementsByTagName('head')[0].appendChild(style);

    // FILTER TABS
    var filterAll = document.getElementsByClassName('tabs-list-item')[0];
    var filterServices = document.getElementsByClassName('tabs-list-item')[1];
    var filterIndustries = document.getElementsByClassName('tabs-list-item')[2];

    // [ALL] Filter styles.
    filterAll.style.background = "#003150";
    filterAll.style.borderWidth = "1px 1px 10px 1px";
    filterAll.style.borderColor = "#09314f";
    filterAll.style.color = "#ffffff";
    filterAll.style.marginLeft = "calc( 50% + 1px )";
    filterAll.style.textAlign = "right !important";
    filterAll.style.marginLeft = "calc( 0% - 1px )";

    // [Services] Filter styles.
    filterServices.style.borderWidth = "1px 1px 10px 1px";
    filterServices.style.borderColor = "#09314f";

    // [Industries] Filter styles.
    filterIndustries.style.borderWidth = "1px 1px 10px 1px";
    filterIndustries.style.borderColor = "#09314f";

    // Insert... But like... Make it pretty.
    $("insertion-point").animate({
        height: '650px'
    }, 1000);

    //header-link-blocks

};

// Execute... Function, not self.
buildServicesSection();

function allFilter() {

    // FILTER TABS
    var filterAll = document.getElementsByClassName('tabs-list-item')[0];
    var filterServices = document.getElementsByClassName('tabs-list-item')[1];
    var filterIndustries = document.getElementsByClassName('tabs-list-item')[2];

    var first = document.getElementsByClassName("tabs-list-item")[0];
    var second = document.getElementsByClassName("tabs-list-item")[1];
    var third = document.getElementsByClassName("tabs-list-item")[2];

    first.style.backgroundColor = "#003150";
    first.style.color = "#FFFFFF";

    second.style.backgroundColor = "#FFFFFF";
    second.style.color = "#003150";

    third.style.backgroundColor = "#FFFFFF";
    third.style.color = "#003150";

    console.log("All");

};


function servicesFilter() {

    var first = document.getElementsByClassName("tabs-list-item")[0];
    var second = document.getElementsByClassName("tabs-list-item")[1];
    var third = document.getElementsByClassName("tabs-list-item")[2];

    first.style.backgroundColor = "#FFFFFF";
    first.style.color = "#003150";

    second.style.backgroundColor = "#003150";
    second.style.color = "#FFFFFF";

    third.style.backgroundColor = "#FFFFFF";
    third.style.color = "#003150";

    console.log("Services");

};


function industriesFilter() {

    var first = document.getElementsByClassName("tabs-list-item")[0];
    var second = document.getElementsByClassName("tabs-list-item")[1];
    var third = document.getElementsByClassName("tabs-list-item")[2];

    first.style.backgroundColor = "#FFFFFF";
    first.style.color = "#003150";

    second.style.backgroundColor = "#FFFFFF";
    second.style.color = "#003150";

    third.style.backgroundColor = "#003150";
    third.style.color = "#FFFFFF";

    console.log("Industries");

};


$(document.getElementsByTagName("button")[1].children).fadeOut();
$(document.getElementsByTagName("button")[1].children).remove();
$(document.getElementsByTagName("button")[1].childNodes).remove();

$(document.getElementsByTagName("button")[1]).animate({

    width: '0px',
    padding: '0px',
    border: '0px'

}, 500);