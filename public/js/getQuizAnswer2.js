$(document).ready(function(){
  $("#btnGetAnswer2").click(function(){
    $('#getTitleData').html("");
    $('#q6Feedback').html("");
    $('#getIdData').html("");
    $.getJSON("/getAnswers", function(result){
		 $.each(result, function(i, answer){
			 
	/*                Answer for Question 6        */
   /*                       START                  */

		if (answer.id == 6 && answer.selection == "Up to Date")
		{
			
			var questionSix = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Great! An up to date security policy is very important, this allows the business to actively deal with current issues."+'</li>';
			$('#q6Feedback').append(questionSix);
			
			console.log("Answer given was UP TO DATE");
		}
		else if (answer.id == 6 && answer.selection == "Recent")
		{
			var questionSix = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q6Feedback').append(questionSix);
			
			console.log("Answer given was RECENT");
		}
		else if (answer.id == 6 && answer.selection == "Somewhat recent")
		{
			var questionSix = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q6Feedback').append(questionSix);
			
			console.log("Answer given was SOMEWHAT RECENT");
		}
		else if (answer.id == 6 && answer.selection == "Not recent")
		{
			var questionSix = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q6Feedback').append(questionSix);
			
			console.log("Answer given was NOT RECENT");
		}
		else if (answer.id == 6 && answer.selection == "No security policy")
		{
			var questionSix = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q6Feedback').append(questionSix);
			
			console.log("Answer given was NO POLICY");
		}
		else
		{
		console.log("Unknown entry");	
		}	
	/*                Answer for Question 6        */
   /*                       END                  */
   
   /* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
  /* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
   
   /*                Answer for Question 7        */
   /*                       START                 */
   if (answer.id == 7 && answer.selection == "Very important")
		{
			
			var questionSeven = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Great! An up to date security policy is very important, this allows the business to actively deal with current issues."+'</li>';
			$('#q7Feedback').append(questionSeven);
			
			console.log("Answer given was UP TO DATE");
		}
		else if (answer.id == 7 && answer.selection == "Important")
		{
			var questionSeven = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Many users do not find a security policy important. Your choice shows that you value your cyber security and the security of your business, this can be an invaluable asset in the current techincal climate. " + '</li>';
			$('#q7Feedback').append(questionSeven);
			
			console.log("Answer given was RECENT");
		}
		else if (answer.id == 7 && answer.selection == "Somewhat important")
		{
			var questionSeven = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "" +'</li>';
			$('#q7Feedback').append(questionSeven);
			
			console.log("Answer given was SOMEWHAT RECENT");
		}
		else if (answer.id == 7 && answer.selection == "Not important")
		{
			var questionSeven = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q7Feedback').append(questionSeven);
			
			console.log("Answer given was NOT RECENT");
		}
		else if (answer.id == 7 && answer.selection == "Dont know")
		{
			var questionSeven = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q7Feedback').append(questionSeven);
			
			console.log("Answer given was NO POLICY");
		}
		else
		{
		console.log("Unknown entry");	
		}
		/*                Answer for Question 7        */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		 /*                Answer for Question 8        */
         /*                       START                 */
   if (answer.id == 8 && answer.selection == "Very well")
		{
			
			var questionEight = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Great! An up to date security policy is very important, this allows the business to actively deal with current issues."+'</li>';
			$('#q8Feedback').append(questionEight);
			
			console.log("Answer given was UP TO DATE");
		}
		else if (answer.id == 8 && answer.selection == "Well")
		{
			var questionEight = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Many users do not find a security policy important, finding a security policy important shows a good attitude towards cyber security." +'</li>';
			$('#q8Feedback').append(questionEight);
			
			console.log("Answer given was RECENT");
		}
		else if (answer.id == 8 && answer.selection == "Somewhat well")
		{
			var questionEight = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is a good start, knowing parts of the security policy can be useful, however it is advised that you should know more of your security policy so the procedure is known for how to deal with cyber security incidents." +'</li>';
			$('#q8Feedback').append(questionEight);
			
			console.log("Answer given was SOMEWHAT RECENT");
		}
		else if (answer.id == 8 && answer.selection == "Not very well")
		{
			var questionEight = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q8Feedback').append(questionEight);
			
			console.log("Answer given was NOT RECENT");
		}
		else if (answer.id == 8 && answer.selection == "Not well")
		{
			var questionEight = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q8Feedback').append(questionEight);
			
			console.log("Answer given was NO POLICY");
		}
		else
		{
		console.log("Unknown entry");	
		}
		/*                Answer for Question 8        */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		/*                Answer for Question 9      */
         /*                       START                 */
   if (answer.id == 9 && answer.selection == "All Nine")
		{
			
			var questionNine = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Great! An up to date security policy is very important, this allows the business to actively deal with current issues."+'</li>';
			$('#q9Feedback').append(questionNine);
			
			console.log("Answer given was UP TO DATE");
		}
		else if (answer.id == 9 && answer.selection == "Only Eight")
		{
			var questionNine = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Many users do not find a security policy important, finding a security policy important shows a good attitude towards cyber security." +'</li>';
			$('#q9Feedback').append(questionNine);
			
			console.log("Answer given was RECENT");
		}
		else if (answer.id == 9 && answer.selection == "Only Seven")
		{
			var questionNine = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is a good start, knowing parts of the security policy can be useful, however it is advised that you should know more of your security policy so the procedure is known for how to deal with cyber security incidents." +'</li>';
			$('#q9Feedback').append(questionNine);
			
			console.log("Answer given was SOMEWHAT RECENT");
		}
		else if (answer.id == 9 && answer.selection == "Only Six")
		{
			var questionNine = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q9Feedback').append(questionNine);
			
			console.log("Answer given was NOT RECENT");
		}
		else if (answer.id == 9 && answer.selection == "NSix")
		{
			var questionNine = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q9Feedback').append(questionNine);
			
			console.log("Answer given was NO POLICY");
		}
		else
		{
		console.log("Unknown entry");	
		}
		/*                Answer for Question 9       */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		/*                Answer for Question 10      */
         /*                       START                 */
   if (answer.id == 10 && answer.selection == "Very important")
		{
			
			var questionTen = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Great! An up to date security policy is very important, this allows the business to actively deal with current issues."+'</li>';
			$('#q10Feedback').append(questionTen);
			
			console.log("Answer given was UP TO DATE");
		}
		else if (answer.id == 10 && answer.selection == "Important")
		{
			var questionTen = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Many users do not find a security policy important, finding a security policy important shows a good attitude towards cyber security." +'</li>';
			$('#q10Feedback').append(questionTen);
			
			console.log("Answer given was RECENT");
		}
		else if (answer.id == 10 && answer.selection == "Somewhat important")
		{
			var questionTen = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is a good start, knowing parts of the security policy can be useful, however it is advised that you should know more of your security policy so the procedure is known for how to deal with cyber security incidents." +'</li>';
			$('#q10Feedback').append(questionTen);
			
			console.log("Answer given was SOMEWHAT RECENT");
		}
		else if (answer.id == 10 && answer.selection == "Not important")
		{
			var questionTen = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q10Feedback').append(questionTen);
			
			console.log("Answer given was NOT RECENT");
		}
		else if (answer.id == 10 && answer.selection == "Dont know")
		{
			var questionTen = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q10Feedback').append(questionTen);
			
			console.log("Answer given was NO POLICY");
		}
		else
		{
		console.log("Unknown entry");	
		}
		/*                Answer for Question 10       */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
					/* END OF CATEGORY (SECURITY POLICY)*/
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
	  });
	 });
    });
  });
  