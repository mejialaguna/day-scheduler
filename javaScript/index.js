// var container = $(".container");
// const btnSave = $(".btn-save");
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
var allTask = [];

$(".saveBtn").click(function (event) {
  // preventDefault refresh after clicking the save btn
  event.preventDefault();

  var thisBtn = $(this);
  var hour = thisBtn.siblings("span").text();
  var task = thisBtn.siblings("textarea").val(); // value insted of text
  var newTask = {
    hour: hour,
    textTask: task,
  };

  
  // if (!newTask) {
      //     alert("You need to fill out the task form!");
      //     return false;
      //   }
      
      var included = allTask.filter(function (item) {
          return item.hour === newTask.hour;
        })
        
        
        console.log(included)
        if (!included.length){
            allTask.push(newTask);
            
        }else{
      const oldTasks = allTask.filter(item => item.hour !== newTask.hour)
      allTask = [newTask, ...oldTasks]
    } 
  
  
  localStorage.setItem("newTask", JSON.stringify(allTask));
  // localStorage.getItem('allTask', JSON.stringify(newTask));
});

var loadtasks = function () {
  newTask = JSON.parse(localStorage.getItem("newtask"));
};

// function to check the due time during the day
function Color() {
  $(".color").each(function () {
    let taskTime = $(".time").val();
    let currentTime = moment().format("hA");
    if (taskTime > currentTime) {
      $(this).addClass("future");
    } else if (taskTime == currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

// interval to check the time
setInterval(function () {
  Color();
}, 1000);

// running the function color
Color();
