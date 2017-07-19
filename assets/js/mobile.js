$(document).ready(function() {
    if ($(window).width() > 768) {
        window.location.replace("https://emilyzhong.github.io");
    } else {
        $("body, html").addClass("yes");
    }
    
    $("body, #content, img, #title, #small-text").click(function() {
        console.log("clickled");
        if ($("body").hasClass("blue")) {
            $("html, body").removeClass("blue");
        } else {
            $("html, body").addClass("blue");
        }
    });
});
