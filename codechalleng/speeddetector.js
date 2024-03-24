// speed detec
  function calculate() {
    // get the value of an input field with an id of speed using the document.getElementById() method
    // value is then parsed as an integer using parseInt() and assigned to a variable named speed
    const speed = parseInt(document.getElementById('speed').value);
    let points = 0;
    //test speed is less than 70
    if (speed < 70) {
      document.getElementById('result').textContent = 'Ok';
    } else {
    // dgive driver 1pts for every 5 km/s above the speed limit 70
      points = Math.floor((speed - 70) / 5);
    //test if points is more than 12
      if (points > 12) {
        document.getElementById('result').textContent = 'License suspended';
      } else {
        document.getElementById('result').textContent = 'Points: ' + points;
      }
    }
  }
  
