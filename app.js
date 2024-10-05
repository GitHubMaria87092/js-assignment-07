// question 01
// var now = new Date()
// {
//     document.write(now);
// }

// question 02
// function currMonth() {
//     var thisMonth = new Date();
//     var monthName = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];
//     var CurrentMonth = monthName[thisMonth.getMonth()];
//     alert("Current Month" + " " + CurrentMonth);
// };

// currMonth();

// question 03
// function currDay() {
//     var now = new Date();
//     var daysName = [
//         "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
//     ];
//     var currentDay = daysName[now.getDay()];
//     alert("Current day" + " " + currentDay);
// };

// currDay();

// question 04
// function checkFunDay() {
//     var now = new Date();
//     var day = now.getDay();

//     if(day == 0 || day == 6){
//         alert("It's Fun day")
//     };
// };

// checkFunDay();

// question 05
// function checkDayofMonth() {
//     var now = new Date();
//     var day = now.getDate();
//     if(day < 16){
//         alert("First Fifteen Days of Month");
//     }
//     else{
//         alert("Last days of month")
//     };
// };

// checkDayofMonth();

// question 06
// var currentDate = new Date();
// document.write("Current Date" + " " + currentDate + "<br>");

// var miliSecondSinceEpoch = currentDate.getTime();
// document.write("Elapsed MilliSecond Since Jan 1, 1970" + " " + miliSecondSinceEpoch + "<br>");

// var minutesSinceEpoch = Math.floor(miliSecondSinceEpoch / (1000 * 60))
// document.write("Elapsed Minutes Since Jan 1, 1970" + " " + minutesSinceEpoch + "<br>");

// question 07
// function checkAMorPM() {
//     var now = new Date();
//     var hours = now.getHours();
//     if(hours < 12){
//         alert("It's PM")
//     }
//     else{
//         alert("It's AM")
//     };
// };

// checkAMorPM();

// question 08
// var now = new Date(2020, 11, 31);

// alert("Later Date" + " " + now);

// question 09

// var ramadanStartDate = new Date(2015, 5, 18);

// var today = new Date();

// var timeDifference = today - ramadanStartDate;

// var daysPastSinceRamadan = Math.floor(timeDifference / (1000 * 60 * 60 *24));

// alert("Number of days passed since 1st Ramadan (June 18, 2015):" + " " + daysPastSinceRamadan);

// question 10

var startOf2015 = new Date(2015, 0, 1);

var today = new Date();

var timeDifference = today - startOf2015;

var secondElapsed = Math.floor(timeDifference / 1000);

alert(secondElapsed + " " + "Seconds elapsed since the beginning of 2015: ");