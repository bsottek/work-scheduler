var today = moment().format('LLLL');
console.log(today);
$('#currentDay').html(today);


setInterval(function(){
    var today = moment().format('LLLL');
    console.log(today);
    $('#currentDay').html(today);
}
, 60000);

