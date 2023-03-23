function loadFonts() {

    // Setup move variables.
    var url = '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">' +
        '<style type="text/css" >' +
        '#customButton { display: none; opacity: 0; width: 0px;}' +
        '</style>';

    var destination = $("head").children()[39];

    // Perform the move.
    $(url).insertAfter(destination);
}

loadFonts();

function moveServicesUp() {

    // Create hidden container.
    var newDiv = '<div class="insertion" style="position: absolute; top: 25px; right: 176px; padding: 0; z-index: 3; background: red; width: 100px; height: 100px;"></div>';

    // Setup move variables.
    var target = $("section")[1];
    var destination = $("div#scrollToTarget")[0];

    // Perform the move.
    $(newDiv).insertAfter(destination);
    $(target).insertAfter(destination);

    var customButtons = '<div class="insertion" style="position: absolute; top: 25px; right: 176px; padding: 0; z-index: 3;"><input id="animationButton()" class="btn btn-arrow" type="button" value="animate" onclick="animationButton()" style="height: 75px;"></input><input id="undoButton" class="btn btn-arrow" type="button" value="Undo" onclick="undo();" style="height: 75px; margin-left: 5px;"></input></div>';

}

moveServicesUp();

function createCustomButton() {

    // Setup move variables.
    var url = '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">' +
        '<style type="text/css" >' +
        '#customButton { display: none; opacity: 0; width: 0px; background: #f69d00; color: #ffffff !important; border-right: none; }' +
        '</style>';

    var destination = $("head").children()[39];

    // Perform the move.
    $(url).insertAfter(destination);

    // Create hidden container.
    var myLink = '<button id="customButton" class="link-block ng-scope" onClick="customFunction()"><i class="icon open fas fa-cog" data-ng-class="{true: ' + '\'' + 'active' + '\' }[trigger.active]" style="color: #ffffff !important;"></i><i class="icon close icon-x" style="color: #ffffff !important;"></i><span class="title open" style="color: #ffffff !important;">FagreBD</span><span class="title close" style="color: #ffffff !important;">Close </span></button>';

    // Setup move variables.
    var destination = $($("div.header-link-blocks")[0]).children()[1];

    // Perform the move.
    $(myLink).insertBefore(destination);

    var newVar = $($("div.header-link-blocks")[0]).children()[1];


    $($(newVar)[0]).animate({
        width: '62px'
    }, 100);
    $($(newVar)[0]).delay(250);
    $($(newVar)[0]).slideDown(1000);
    $($(newVar)[0]).animate({
        opacity: '1'
    }, 100);
    //$( $( newVar )[0] ).delay( 250 );
    //$( $( newVar )[0] ).fadeIn( 500 );

}
createCustomButton();

// Remove the container for the selection options.
$("div.reduced-inner-limit").hasClass("reduced-inner-limit");
$("div.reduced-inner-limit").removeClass("reduced-inner-limit");