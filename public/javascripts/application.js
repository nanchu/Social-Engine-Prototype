$(document).ready(function() {

	var numPatients = window.location.search.substring(1);
	for(var i = 2; i<=numPatients; i++){
		$(".results .menu>div:last-child").before($("<div class='patients count'>"+i+"</div>"));
	}

//patients
  $("#addNew").click( function() {
  	var numItems = $('.count').length + 1
  	$(this).siblings().removeClass('selected');
  	$(".menu>div:last-child").before($("<div class='patients count selected'>"+numItems+"</div>"));
  	$(".wrapper h2").html("Patient " + numItems + " Data")
  });

  $(".menu").delegate(".patients.count","click", function() {
  	$(this).addClass('selected');
    $(this).siblings().removeClass('selected');
    var patientNum =  $(this).text()
    $(".wrapper h2").html("Patient " + patientNum + " Data")
  });


	$("#calculate").click(function(){
		var numItems = $('.count').length
		window.location="/results?" + numItems;
	});

	$("#back").click(function(){
		var numItems = $('.count').length;
		history.back(-1);

	});



 });

