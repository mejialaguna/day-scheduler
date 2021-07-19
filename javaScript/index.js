    
var container = $(".container");
var currentDay = $("#currentDay");
var convertedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
currentDay.text(convertedDate);
var allTask = []
const btnSave = $(".btn-save");
const task = $("#task");




$(".saveBtn").click(function() {
    var thisBtn = $(this)
    var hour = thisBtn.siblings("span").text()
    var task = thisBtn.siblings("textarea").val()   // value insted of text
    var newTask = {
        hour : hour , 
        textTask : task,
    } 
    if (!newTask) {
        alert("You need to fill out the task form!");
        return false;
      }

      
    // var included = allTask.filter(function(item) {
    //         return item.hour !== newTask.hour
    //     }).length

    // if (
        
    // )
    localStorage.setItem('newTask', JSON.stringify(newTask));
    localStorage.getItem('newTask', JSON.stringify(newTask));

});




