$(document).ready(function() {
    if ($(window).width() > 768) {
        window.location.replace("https://emilyzhong.github.io");
    } else {
        $("body, html").addClass("yes");
    }
    
    $(window).click(function() {
        console.log("clickled");
        if ($("body").hasClass("blue")) {
            $("body").removeClass("blue");
        } else {
            $("body").addClass("blue");
        }
    });
});
