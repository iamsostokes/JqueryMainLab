$('#reservation-form').hide();

$('.table').on('click',function(){
  var number = $(this).find('.tableNum').text();
  $('#reservation-form h2').text('Table Number: ' + number);
  $('#reservation-form').show();
  
  $('table').addClass(reserved);
  
});

$('.close').on('click', function(){
  $('#reservation-form').hide();
});


var customer_reservation = [];
$('#subbtn').on('click', function(){
  var input1 = $('#one');
  var input2 = $('#two');
  var input3 = $('#three');
  var reserved = {
    name: input1.val(),
    number: input2.val(),
    size: input3.val()
  };
  customer_reservation.push(reservation-form);
  $('#reservation-form').hide();
});
  
