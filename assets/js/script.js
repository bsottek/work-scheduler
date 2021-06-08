var tasks = [];
var today = moment().format('LLLL');
$('#currentDay').html(today);

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    //loop through array and append values to time blocks
    for (var i = 0; i < tasks.length; i++) {
        var hourDesc = $('#' + tasks[i].time)[0].children[1];
        hourDesc.innerHTML = '\n \n' + tasks[i].text + '\n';
        
    }
}

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var timeCheck = function(){
    var hours = $('.time-block');
    var desc = $('.description');
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
    console.log("timeCheck ran");
};

$(".row").on("click","div.description", function () {
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
    // get values for storage
    var taskText = this.parentNode.children[1].value.trim();
    var timeId = this.parentNode.id;
    console.log(taskText, timeId);

    //replace text area with desc div
    var description = $("<div>")
        .addClass("description col-8")
        .html('\n \n' + taskText + ' \n');
    $(this.parentNode.children[1]).replaceWith(description);

    timeCheck();

    //     // save in tasks array
    if(tasks.find(x => x.time === timeId)){
        tasks.find(x => x.time === timeId).text = taskText;
    } else{
        tasks.push({
            text: taskText,
            time: timeId
        });
    }

    console.log(tasks);

    saveTasks();
});

setInterval(timeCheck,60000);


timeCheck();
loadTasks();

