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

// var startOf2015 = new Date(2015, 0, 1);

// var today = new Date();

// var timeDifference = today - startOf2015;

// var secondElapsed = Math.floor(timeDifference / 1000);

// alert(secondElapsed + " " + "Seconds elapsed since the beginning of 2015: ");

// question 11

// let currentDate = new Date();

// document.write("Current Hours" + " " + currentDate + "<br>");

// currentDate.setHours(currentDate.getHours() + 1);
// document.write("Update Hours" + " " + currentDate + "<br>");

// question 12

// let currentDate = new Date();
// document.write("Current Date" + " " + currentDate + "<br>");

// currentDate.setFullYear(currentDate.getFullYear() - 100);
// document.write("100 years Back, It was" + " " + currentDate + "<br>");

// question 13

// let age = prompt("Enter Your age...");

// let currentYear = new Date().getFullYear();

// let birthYear = currentYear - age;

// document.write("Your Birth Year is" + " " + birthYear);

// question 14

// document.write("<h1>K Electric Bill</h1>");

// let customerName = prompt("Enter Customer Name");
// document.write("Customer Name" + " " + customerName + "<br>");

// let CurrentMonth = new Date().toLocaleString('default', {month: 'long'});
// document.write("Month" + " " + CurrentMonth + "<br>");

// let numberOfUnit = parseFloat(prompt("Enter Number O f Unit"));
// document.write("Number Of Unit" + " " + numberOfUnit + "<br>");

// let chargesPerUnit = parseFloat(prompt("Enter Charges Per Unit"));
// document.write("Charges Per Unit" + " " + chargesPerUnit + "<br>");

// let latePaymentSurcharge = 200.00;

// let netAmountPayable = (numberOfUnit * chargesPerUnit).toFixed(2);
// document.write("Net Amount Pay Able (Within Due Date)" + " " + netAmountPayable + "<br>");

// document.write("Late Payment Sur Charge" + " " + latePaymentSurcharge + "<br>");

// let grossAmountPayable = (parseFloat(netAmountPayable) +latePaymentSurcharge).toFixed(2);
// document.write("Gross Amount Pay Able (After Due Date)" + " " + grossAmountPayable + "<br>");