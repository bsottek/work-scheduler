var hours = $('.time-block')
var desc = $('.description')
var tasks = [];
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

$(".description").on("click", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control col-8")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".save-btn").click(function () {
    // get form values
    var taskText = this.parentNode.children[1].value.trim();
    console.log(taskText);

    var description = $("<div>")
        .addClass("description col-8")
    description.html('\n \n' + taskText + ' \n');
    $(this.parentNode.children[1]).replaceWith(description);

    timeCheck;

    //     // save in tasks array
    //     tasks.toDo.push({
    //         text: taskText,
    //         date: taskDate
    //     });

    //     saveTasks();
    // }
});

setInterval(timeCheck(),60000);


timeCheck();


// having trouble re-adding class to desc after save