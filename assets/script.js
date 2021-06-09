// post current date
var currentDate = moment().format('MMMM Do, YYYY');
$('#currentDay').text(currentDate);

// size all input-group-prepends the same
var biggest = Math.max.apply(Math, $('.input-group-text').map(function(){ return $(this).width(); }).get());
$('.input-group-text').width(biggest);

// format color based on what time it is
$(document).ready(function(){
    const textAreaIDs = $(`textarea`).map(function () {
        return this.id;
    }).get();
    for (var i = 0; i < textAreaIDs.length; i++) {
        $(`#${textAreaIDs[i]}`).text(localStorage.getItem(textAreaIDs[i]))
    }
    const currentTime = parseInt(moment().format('HH'))
    $('.content').each((_i, content) => {
        const id = parseInt(content.id)
        let bgColor = ''
        if (currentTime > id){
            bgColor = '#d3d3d3'
        } else if (currentTime == id) {
            bgColor = '#d2f8d2'
        } else if (currentTime < id) {
            bgColor = '#e1f1ff'
        }
        $(content).css('background-color', bgColor);
    });
});

// save input to localStorage
function saveText(e) {
    const slot = $(e.target).attr("data-timeslot");
    const saveT = $(`textarea[data-timeslot=${slot}]`).val();
    localStorage.setItem(slot, saveT);
}
                          
// clear text area
function clearText(e) {
    const slot = $(e.target).attr("data-timeslot");
    $(`textarea[data-timeslot=${slot}]`).val('');
    localStorage.removeItem(slot);
};

$('.clear').on('click', clearText);
$('.save').on('click', saveText);