$(document).ready(function(){
    var cursor = $('.cursor');

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        })
    })
})
$(".water").click(function() {
    $("#normal").removeClass("shown")
    $("#normal").addClass("hidden")
    $("#thirst").removeClass("hidden")
    $("#thirst").addClass("shown")
    $("#wet").removeClass("shown")
    $("#wet").addClass("hidden")
    $("#empty").removeClass("shown")
    $("#empty").addClass("hidden")
    $("#filled").removeClass("hidden")
    $("#filled").addClass("shown")
})
$(".klk-quench").click(function() {
    $("#normal").removeClass("hidden")
    $("#normal").addClass("shown")
    $("#thirst").removeClass("shown")
    $("#thirst").addClass("hidden")
    $("#wet").removeClass("shown")
    $("#wet").addClass("hidden")
    $("#empty").removeClass("hidden")
    $("#empty").addClass("shown")
    $("#filled").removeClass("shown")
    $("#filled").addClass("hidden")
})
$(".klk-dump").click(function() {
    $("#normal").removeClass("shown")
    $("#normal").addClass("hidden")
    $("#thirst").removeClass("shown")
    $("#thirst").addClass("hidden")
    $("#wet").removeClass("hidden")
    $("#wet").addClass("shown")
    $("#empty").removeClass("hidden")
    $("#empty").addClass("shown")
    $("#filled").removeClass("shown")
    $("#filled").addClass("hidden")
})