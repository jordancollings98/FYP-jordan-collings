$(document).ready(function(){
  $("#btnGetAnswer").click(function(){
    $('#getTitleData').html("");
    $('#getMessageData').html("");
    $('#getIdData').html("");
    $.getJSON("/getAnswers", function(result){
		
	$("#displayData").css("display", "block");
      var answerTitle = '<h3 id="getanswerTitle">' + "Answer" + '</h3>';
      var idTitle = '<h3 id="getanswerTitle">' + "ID" + '</h3>';

        $('#getTitleData').append(answerTitle);
        $('#getIdData').append(idTitle);


      $.each(result, function(i, answer){
        var option_result = '<li id="titleList">'+ answer.selection + '</li>';
        var option_result2 = '<li id="titleList">' + answer.id + '</li>';
          $('#getTitleData').append(option_result);
          $('#getIdData').append(option_result2);
      });
    });
  });
  $("#btnStart").click(function(){
	  window.location.href = "http://localhost:9000/security-test";
  });
  $("#btnNext1").click(function(){
	  window.location.href = "http://localhost:9000/security-test-2";
  });
  $("#btnNext2").click(function(){
	  window.location.href = "http://localhost:9000/security-test-3";
  });
  $("#btnNext3").click(function(){
	  window.location.href = "http://localhost:9000/security-test-4";
  });
  $("#btnNext4").click(function(){
	  window.location.href = "http://localhost:9000/security-test-5";
  });
   $("#btnNext5").click(function(){
	  window.location.href = "http://localhost:9000/results";
  });
  $("#btnNext6").click(function(){
	  window.location.href = "http://localhost:9000/security-test-6";
  });
  $("#btnNext7").click(function(){
	  window.location.href = "http://localhost:9000/security-test-7";
  });
  $("#btnNext8").click(function(){
	  window.location.href = "http://localhost:9000/security-test-8";
  });
  $("#btnNext9").click(function(){
	  window.location.href = "http://localhost:9000/security-test-9";
  });
  $("#btnNext10").click(function(){
	  window.location.href = "http://localhost:9000/security-test-10";
  });
  $("#btnNext11").click(function(){
	  window.location.href = "http://localhost:9000/results2";
  });
});
