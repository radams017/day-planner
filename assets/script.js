// post current date
var currentDate = moment().format('MMMM Do, YYYY');
$('#currentDay').text(currentDate);

// size all input-group-prepends the same
var biggest = Math.max.apply(Math, $('.input-group-text').map(function(){ return $(this).width(); }).get());
$('.input-group-text').width(biggest);

$(function timeColor() {
    $('.content')
})