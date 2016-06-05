$(document).ready(function(){

  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);

  function illuminateRed() {
    //clear the other bulbs by making them back to the 'bulb' class
    $('#slowLight').attr('class', 'bulb');
    $('#goLight').attr('class', 'bulb');

    //switch the light color by adding another class
    $('#stopLight').addClass('red');
  }

  function illuminateYellow() {
    //clear the other bulbs by making them back to the 'bulb' class
    $('#stopLight').attr('class', 'bulb');
    $('#goLight').attr('class', 'bulb');

    //switch the light color by adding another class
    $('#slowLight').addClass('yellow');
  }

  function illuminateGreen() {
    //clear the other bulbs by making them back to the 'bulb' class
    $('#stopLight').attr('class', 'bulb');
    $('#slowLight').attr('class', 'bulb');

    //switch the light color by adding another class
    $('#goLight').addClass('green');
  }


});