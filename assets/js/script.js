$(document).ready(function() {
    $(".row").each(function() {
        var hourKey = $(this).attr("id");
        parseInt(hourKey);
        var currentdate = new Date();
        var moment = currentdate.getHours();
    if (hourKey < moment) {
        $(this).children(".task").children(".form-control").addClass("past");
    }
    else if (hourKey > moment) {
        $(this).children(".task").children(".form-control").addClass("future");
    }
    else {
        $(this).children(".task").children(".form-control").removeClass("past");
        $(this).children(".task").children(".form-control").removeClass("future");
        $(this).children(".task").children(".form-control").addClass("present");
    }
    })
    $(".saveBtn").click(function() {
        console.log(this);
        var hour = $(this).parent().parent().attr("id");
        var activity = $(this).parent().siblings(".task").children(".form-control").val();
        localStorage.setItem(hour, activity);
    });
    
});
 
function getCurrentDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}

getCurrentDate();
for (var i = 9; i < 18; i++) {
    $(`#${i} .form-control`).val(localStorage.getItem(i))
}