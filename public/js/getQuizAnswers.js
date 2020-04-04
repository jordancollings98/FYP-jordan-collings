$(document).ready(function(){
  $("#btnGetAnswer").click(function(){
    $('#getTitleData').html("");
    $('#q1Feedback').html("");
    $('#getIdData').html("");
    $.getJSON("/getAnswers", function(result){
		 $.each(result, function(i, answer){
			 
	/*                Answer for Question 1        */
   /*                       START                  */

		if (answer.id == 1 && answer.selection == "Up to Date")
		{
			
			var questionOne = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Great! An up to date security policy is very important, this allows the business to actively deal with current issues."+'</li>';
			$('#q1Feedback').append(questionOne);
			
			console.log("Answer given was UP TO DATE");
		}
		else if (answer.id == 1 && answer.selection == "Recent")
		{
			var questionOne = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q1Feedback').append(questionOne);
			
			console.log("Answer given was RECENT");
		}
		else if (answer.id == 1 && answer.selection == "Somewhat recent")
		{
			var questionOne = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q1Feedback').append(questionOne);
			
			console.log("Answer given was SOMEWHAT RECENT");
		}
		else if (answer.id == 1 && answer.selection == "Not recent")
		{
			var questionOne = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q1Feedback').append(questionOne);
			
			console.log("Answer given was NOT RECENT");
		}
		else if (answer.id == 1 && answer.selection == "No security policy")
		{
			var questionOne = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q1Feedback').append(questionOne);
			
			console.log("Answer given was NO POLICY");
		}
		else
		{
		console.log("Unknown entry");	
		}	
	/*                Answer for Question 1        */
   /*                       END                  */
   
   /* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
  /* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
   
   /*                Answer for Question 2        */
   /*                       START                 */
   if (answer.id == 2 && answer.selection == "Very important")
		{
			
			var questionTwo = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Great! An up to date security policy is very important, this allows the business to actively deal with current issues."+'</li>';
			$('#q2Feedback').append(questionTwo);
			
			console.log("Answer given was UP TO DATE");
		}
		else if (answer.id == 2 && answer.selection == "Important")
		{
			var questionTwo = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Many users do not find a security policy important. Your choice shows that you value your cyber security and the security of your business, this can be an invaluable asset in the current techincal climate. " + '</li>';
			$('#q2Feedback').append(questionTwo);
			
			console.log("Answer given was RECENT");
		}
		else if (answer.id == 2 && answer.selection == "Somewhat important")
		{
			var questionTwo = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "" +'</li>';
			$('#q2Feedback').append(questionTwo);
			
			console.log("Answer given was SOMEWHAT RECENT");
		}
		else if (answer.id == 2 && answer.selection == "Not important")
		{
			var questionTwo = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q2Feedback').append(questionTwo);
			
			console.log("Answer given was NOT RECENT");
		}
		else if (answer.id == 2 && answer.selection == "Dont know")
		{
			var questionTwo = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q2Feedback').append(questionTwo);
			
			console.log("Answer given was NO POLICY");
		}
		else
		{
		console.log("Unknown entry");	
		}
		/*                Answer for Question 2        */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		 /*                Answer for Question 3        */
         /*                       START                 */
   if (answer.id == 3 && answer.selection == "Very well")
		{
			
			var questionThree = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Great! An up to date security policy is very important, this allows the business to actively deal with current issues."+'</li>';
			$('#q3Feedback').append(questionThree);
			
			console.log("Answer given was UP TO DATE");
		}
		else if (answer.id == 3 && answer.selection == "Well")
		{
			var questionThree = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Many users do not find a security policy important, finding a security policy important shows a good attitude towards cyber security." +'</li>';
			$('#q3Feedback').append(questionThree);
			
			console.log("Answer given was RECENT");
		}
		else if (answer.id == 3 && answer.selection == "Somewhat well")
		{
			var questionThree = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is a good start, knowing parts of the security policy can be useful, however it is advised that you should know more of your security policy so the procedure is known for how to deal with cyber security incidents." +'</li>';
			$('#q3Feedback').append(questionThree);
			
			console.log("Answer given was SOMEWHAT RECENT");
		}
		else if (answer.id == 3 && answer.selection == "Not very well")
		{
			var questionThree = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q3Feedback').append(questionThree);
			
			console.log("Answer given was NOT RECENT");
		}
		else if (answer.id == 3 && answer.selection == "Not well")
		{
			var questionThree = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q3Feedback').append(questionThree);
			
			console.log("Answer given was NO POLICY");
		}
		else
		{
		console.log("Unknown entry");	
		}
		/*                Answer for Question 3        */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		/*                Answer for Question 4      */
         /*                       START                 */
   if (answer.id == 4 && answer.selection == "All four")
		{
			
			var questionFour = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Great! An up to date security policy is very important, this allows the business to actively deal with current issues."+'</li>';
			$('#q4Feedback').append(questionFour);
			
			console.log("Answer given was UP TO DATE");
		}
		else if (answer.id == 4 && answer.selection == "Only three")
		{
			var questionFour = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Many users do not find a security policy important, finding a security policy important shows a good attitude towards cyber security." +'</li>';
			$('#q4Feedback').append(questionFour);
			
			console.log("Answer given was RECENT");
		}
		else if (answer.id == 4 && answer.selection == "Only two")
		{
			var questionFour = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is a good start, knowing parts of the security policy can be useful, however it is advised that you should know more of your security policy so the procedure is known for how to deal with cyber security incidents." +'</li>';
			$('#q4Feedback').append(questionFour);
			
			console.log("Answer given was SOMEWHAT RECENT");
		}
		else if (answer.id == 4 && answer.selection == "Only one")
		{
			var questionFour = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q4Feedback').append(questionFour);
			
			console.log("Answer given was NOT RECENT");
		}
		else if (answer.id == 4 && answer.selection == "None")
		{
			var questionFour = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q4Feedback').append(questionFour);
			
			console.log("Answer given was NO POLICY");
		}
		else
		{
		console.log("Unknown entry");	
		}
		/*                Answer for Question 4       */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		/*                Answer for Question 5      */
         /*                       START                 */
   if (answer.id == 5 && answer.selection == "Very important")
		{
			
			var questionFive = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Great! An up to date security policy is very important, this allows the business to actively deal with current issues."+'</li>';
			$('#q5Feedback').append(questionFive);
			
			console.log("Answer given was UP TO DATE");
		}
		else if (answer.id == 5 && answer.selection == "Important")
		{
			var questionFive = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Many users do not find a security policy important, finding a security policy important shows a good attitude towards cyber security." +'</li>';
			$('#q5Feedback').append(questionFive);
			
			console.log("Answer given was RECENT");
		}
		else if (answer.id == 5 && answer.selection == "Somewhat important")
		{
			var questionFive = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is a good start, knowing parts of the security policy can be useful, however it is advised that you should know more of your security policy so the procedure is known for how to deal with cyber security incidents." +'</li>';
			$('#q5Feedback').append(questionFive);
			
			console.log("Answer given was SOMEWHAT RECENT");
		}
		else if (answer.id == 5 && answer.selection == "Not important")
		{
			var questionFive = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q5Feedback').append(questionFive);
			
			console.log("Answer given was NOT RECENT");
		}
		else if (answer.id == 5 && answer.selection == "Dont know")
		{
			var questionFive = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or more workload for security staff." +'</li>';
			$('#q5Feedback').append(questionFive);
			
			console.log("Answer given was NO POLICY");
		}
		else
		{
		console.log("Unknown entry");	
		}
		/*                Answer for Question 5       */
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
  