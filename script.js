var countDownDate = new Date("Mar 12, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  var DAYS = Math.floor(distance / (1000 * 60 * 60 * 24));
  var HOURS = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var MINS = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var SECS = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("DAYS").innerHTML = DAYS + "D";
  document.getElementById("HOURS").innerHTML = HOURS + "H";
  document.getElementById("MINS").innerHTML = MINS + "M";
  document.getElementById("SECS").innerHTML = SECS + "S";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Countdown-container").innerHTML = "EXPIRED";

  }
}, 1000);