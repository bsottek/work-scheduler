var hours = $('.time-block')
var desc = $('.description')
var today = moment().format('LLLL');
$('#currentDay').html(today);


var timeCheck = function(){
    var today = moment().format('LLLL');
    $('#currentDay').html(today);

    for(var i = 0; i < hours.length; i++)   {
        var hoursInt = []
        hoursInt[i] = parseInt(hours[i].textContent.substring(0,2));

        if(hoursInt[i] < parseInt(moment().format('HH'))){
            desc[i].classList.add('past');
        } else if (hoursInt[i] > parseInt(moment().format('HH'))){
            desc[i].classList.add('future');
        } else {
            desc[i].classList.add('present');
        }
    }
};

setInterval(timeCheck(),60000);


timeCheck();


// the time blocks are being interpereted as now rather than their respective times.
// something to do with moment()