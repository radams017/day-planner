// post current date
var currentDate = moment().format('MMMM Do, YYYY');
$('#currentDay').text(currentDate);

// size all input-group-prepends the same
var biggest = Math.max.apply(Math, $('.input-group-text').map(function(){ return $(this).width(); }).get());
$('.input-group-text').width(biggest);

// format color based on what time it is
var currentTime = moment().format('HH');

$(document).ready(function(){
    var idArr = [];
        $(".content").each(function(){
            idArr.push($(this).attr("id"));
        });
        for (var i = 0; i < idArr.length; i++) {
            if (currentTime > idArr[i]){
                $('.content').css("background-color", "#d3d3d3");
            } if (currentTime == idArr[i]) {
                $('.content').css("background-color", "#d2f8d2");
            } if (currentTime < idArr[i]) {
                $('.content').css("background-color", "#e1f1ff");
            }
        };
});

// save input to localStorage

