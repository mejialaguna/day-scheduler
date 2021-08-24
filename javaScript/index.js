$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

$(".saveBtn").click(function(event) {
  //(e) stand for event
  event.preventDefault();
  // this meaning a sibling of the botton class name sabeBtn
  let task = $(this).siblings("textarea").val(); //value of the what is about to be typed in
  let time = $(this).parent().attr("id"); // getting parent Element id
  console.log($(this))
  localStorage.setItem(time, JSON.stringify(task));
});

function colorChange() {
  $(".color").each(function () {
    let taskTime = $(this).parent().attr("id").replace("hr-" , "")
    let currentTime = moment().hour();
    console.log(taskTime)
    if (taskTime < currentTime) {
      $(this).addClass("past");
    } else if (taskTime === currentTime) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

colorChange();

for (let i = 8; i < 17; i++) {  
  var task = localStorage.getItem(`hr-${i}`)
  $(`#hr-${i} textarea`).val(task)  
}
