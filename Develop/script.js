// Wrap all code that interacts with the DOM in a call to jQuery
$(document).ready(function () {
  let today = dayjs();
  let timeBlockID;
  let newEvent;
  let storageEvents;
  let timeBlockDataAttr;
  let timeBlockIDClicked;
  let textAreaValue;
  
 

  // TODO: Add code to display the current date in the header of the page.
  // Define an array to hold the events
  $('#currentDay').text(today.format('dddd, MMMM D'));


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  $('.saveBtn').click(function (event) {
    timeBlockIDClicked = parseInt($(this).parent().attr("data-time"));
    console.log(timeBlockIDClicked);
    textAreaValue = $(this).siblings(".description").val();
    console.log(textAreaValue);

    storageEvents = readEventsFromStorage();

    saveEventtoStorage();

    function saveEventtoStorage() {
      localStorage.setItem(timeBlockIDClicked, textAreaValue);
    }
  });
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function colorTimeBlock() {
    let currentHour = parseInt(today.format('HH'));

    $(".time-block").each(function () {
      timeBlockID = parseInt($(this).attr("data-time"));
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
  function readEventsFromStorage() {
    $('.time-block').each(function () {
      timeBlockDataAttr = parseInt($(this).attr("data-time"));
      keyStorage = localStorage.getItem(timeBlockIDClicked);
      console.log(keyStorage);

      if (timeBlockDataAttr = keyStorage) {
        $("textarea").val() = localStorage.getItem(timeBlockIDClicked);
      }
      else if (keyStorage != null){
      }
      else {

      }
    })

  }
});

