// Get Date
var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

const winter = "It's Winter";
const spring = "It's Spring";
const summer = "It's Summer";
const fall = "It's Fall";

// Set Date Number
document.getElementById('month-number').innerHTML = month;
document.getElementById('date-number').innerHTML = day;
document.getElementById('year-number').innerHTML = year;

checkMonth();

// Check Month for What Season It Falls Into
function checkMonth() {
  if (month >= 1 && month <= 3) {
    setMonthWinter();
  } else if (month >= 4 && month <= 6) {
    setMonthSpring();
  } else if (month >= 7 && month <= 9) {
    setMonthSummer();
  } else {
    setMonthFall();
  }
}

// Set Season
function setMonthWinter() {
  document.getElementById('season').innerHTML = winter;
}
function setMonthSpring() {
  document.getElementById('season').innerHTML = spring;
}
function setMonthSummer() {
  document.getElementById('season').innerHTML = summer;
}
function setMonthFall() {
  document.getElementById('season').innerHTML = fall;
}
