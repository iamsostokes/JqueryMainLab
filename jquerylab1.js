
$('#reservation-form').hide();
var currentTable;
$('.table').on('click',function(){
  var number = $(this).find('.tableNum').text();
  $('#reservation-form h2').text('Table Number: ' + number);
  $('#reservation-form').show();
  currentTable = $(this);
  
});

$('.close').on('click', function(){
  $('#reservation-form').hide();
});


var customer_reservation = [];
$('#savebtn').on('click', function(){
  var input1 = $('#one');
  var input2 = $('#two');
  var input3 = $('#three');
  // var reserved = {
  //   name: input1.val(),
  //   number: input2.val(),
  //   size: input3.val()
  // };
  currentTable.addClass('reserved');
  currentTable.append(`
  <div class="hidden">
    <p>Name: ${input1.val()}</p>
    <p>Seats: ${input3.val()}</p>
  </div>
  `);
  // customer_reservation.push(reserved);
  $('#reservation-form').hide();
});
  
