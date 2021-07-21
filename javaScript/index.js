    
var container = $(".container");
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
// var newTask = JSON.parse(localStorage.getItem("newTask")) || [];
const btnSave = $(".btn-save");
// var userFormEl = document.querySelector("#user-form");




$(".saveBtn").click(function(event) {
    // preventDefault refresh after clicking the save btn
    event.preventDefault();

    var thisBtn = $(this)
    var hour = thisBtn.siblings("span").text()
    var task = thisBtn.siblings("textarea").val()   // value insted of text
    var newTask = {
        hour : hour , 
        textTask : task,
    }

    if (!newTask) {
        alert("You need to fill out the task form!");
        // return false;
      }

      
    // var included = allTask.filter(function(item) {
    //         return item.hour !== newTask.hour
    //     }).length

    // if (
        
    // )
    localStorage.setItem('newTask', JSON.stringify(newTask));     
    localStorage.getItem('newTask', JSON.stringify(newTask));

});

// function to check the due time during the day
function Color() {
    $(".color").each(function () {
        let taskTime = $(".time").val();
        let currentTime = (moment().format("h"));
        if (taskTime > currentTime) {
            $(this).addClass("future")
        } else if (taskTime == currentTime) {
            $(this).addClass("present")
        } else {
            $(this).addClass("past")
        }
    });
}
// interval to check the time 
setInterval(function () {
    Colors()
}, (1000*60)*60*24)

// running the function color 
Color()