

document.addEventListener("DOMContentLoaded", function (event) {
    document.documentElement.setAttribute("data-theme", "dark");
    
    var themeSwitcher = document.getElementById("theme-switcher");
    
    themeSwitcher.onclick = function () {
       
        var currentTheme = document.documentElement.getAttribute("data-theme");

                var switchToTheme = currentTheme === "light" ? "dark" : "light"

        document.documentElement.setAttribute("data-theme", switchToTheme);
    }
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

$("#reserveButton").click(function () {
    $("#reserveModal").modal("toggle");
});

$("#signinButton").click(function () {
    $("#signinModal").modal("toggle")

});