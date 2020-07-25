// Get Date
function clock() {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const hours = d.getHours(); // (0-23)
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  // Set Date Number
  document.getElementById('month-number').innerHTML = month;
  document.getElementById('date-number').innerHTML = day;
  document.getElementById('year-number').innerHTML = year;

  // Set Time
  function setTime(x) {
    if (x === hours) {
      if (hours > 12) {
        x = '0' + (hours - 12);
      }
      if (hours < 10) {
        x = '0' + hours;
      }
      document.getElementById('hour').innerHTML = x;
    } else if (x === minutes) {
      if (minutes < 10) {
        x = '0' + minutes;
      }
      document.getElementById('minutes').innerHTML = x;
    } else {
      if (x < 10) {
        x = '0' + x;
      }
      document.getElementById('seconds').innerHTML = x;
    }
  }

  // Check AM/PM
  function checkNoon() {
    if (hours > 12) {
      document.getElementById('am-pm').innerHTML = 'PM';
    } else {
      document.getElementById('am-pm').innerHTML = 'AM';
    }
  }

  setTime(hours);
  setTime(minutes);
  setTime(seconds);
  checkNoon();

  // Set Season
  const winter = "It's Winter";
  const spring = "It's Spring";
  const summer = "It's Summer";
  const fall = "It's Fall";

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
  checkMonth(); // Sets the season tagline
}

setInterval(clock, 1000);
