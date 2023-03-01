// Wrap all code that interacts with the DOM in a call to jQuery
$(document).ready(function () {
  let today = dayjs();
  let timeBlockID;
//   let newEvent;
//   let storageEvents;
//   let timeBlockDataAttr;
  let timeBlockIDClicked;
  let textAreaValue;
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('dddd, MMMM D'));
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  // SLA >>>>> changed this to an .on event, removed 'event' var because we're not actually using it.
  $('.saveBtn').on('click',function () {
    timeBlockIDClicked = parseInt($(this).parent().attr("data-time"));
    textAreaValue = $(this).siblings(".description").val();
    textAreaTime = $(this).parent().attr("id");
    localStorage.setItem(textAreaTime, textAreaValue);
    // SLA >>>>>> got rid of saveEventtoStorage() function
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  function colorTimeBlock() {
    let currentHour = parseInt(today.format('HH'));
    $(".time-block").each(function () {
    // SLA >>>>>> Changed this:
    //   timeBlockID = parseInt($(this).attr("data-time"));
      // SLA >>>>>> to this, let me know what you think this does.
      timeBlockID = parseInt($(this).attr('id').split('-')[1])
      if (timeBlockID === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }
      else if (timeBlockID < currentHour) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      };
    });
  }
  colorTimeBlock();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  // SLA >>>>>>>> this is what we were doing:
  // $("#hour-9 .description").val = localStorage.getItem('hour-9'). We didn't get an error for this tho', don't know why.
  // SLA >>>>>>>> this is the actual syntax:
  $("#hour-9 .description").val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  /// SLA >>>>>>> Also, we were asking for elements on the page that don't exist; there is no hour 6 - 8. Again, no errors logged.
  $("#hour-8 .description").val(localStorage.getItem("hour-8"))
  $("#hour-7 .description").val(localStorage.getItem("hour-7"))
  $("#hour-6 .description").val(localStorage.getItem("hour-6"))
});
