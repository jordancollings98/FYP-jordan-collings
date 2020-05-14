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
		}
		else if (answer.id == 1 && answer.selection == "Recent")
		{
			var questionOne = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "A recently updated security policy is a core requirement for a business which concerns itself with cyber security, it is fundamental to keeping rules by which staff should follow." +'</li>';
			$('#q1Feedback').append(questionOne);
		}
		else if (answer.id == 1 && answer.selection == "Somewhat recent")
		{
			var questionOne = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "That's good, however, if your business's security policy is not up to date there could be holes in security or there will be more workload for security staff." +'</li>';
			$('#q1Feedback').append(questionOne);
		}
		else if (answer.id == 1 && answer.selection == "Not recent")
		{
			var questionOne = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If your security policy has not been updated for a long time this could mean it is out to date in terms of new technology. Therefore, the policy should be reviewed and adapted immediately. " +'</li>';
			$('#q1Feedback').append(questionOne);
		}
		else if (answer.id == 1 && answer.selection == "No security policy")
		{
			var questionOne = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "For a business in the technological world of 2020, there is serious concern that a lack of security policy could lead to possible attacks and loss of information." +'</li>';
			$('#q1Feedback').append(questionOne);
		}
			
	/*                Answer for Question 1        */
   /*                       END                  */
   
   /* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
  /* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
   
   /*                Answer for Question 2        */
   /*                       START                 */
   if (answer.id == 2 && answer.selection == "Very important")
		{
			var questionTwo = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Making a security policy a very important asset in the business is a great advantage, it means that employees may take it more seriously and be more likely to adhere to the guidelines the policy sets out. "+'</li>';
			$('#q2Feedback').append(questionTwo);
		}
		else if (answer.id == 2 && answer.selection == "Important")
		{
			var questionTwo = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Many users do not find a security policy important. Your choice shows that you value your cyber security and the security of your business, this can be an invaluable asset in the current techincal climate. " + '</li>';
			$('#q2Feedback').append(questionTwo);
		}
		else if (answer.id == 2 && answer.selection == "Somewhat important")
		{
			var questionTwo = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "It is good that there is some knowledge of the importance of a security policy, and that employees know about why the security policy is in place and how it can help." +'</li>';
			$('#q2Feedback').append(questionTwo);
		}
		else if (answer.id == 2 && answer.selection == "Not important")
		{
			var questionTwo = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If the security policy is seen as not important it means that staff will not see the reason in adhering to it. If staff do not adhere to the policy this can cause serious issues for the business, education on why security policy is necessary should be undertaken." +'</li>';
			$('#q2Feedback').append(questionTwo);
		}
		else if (answer.id == 2 && answer.selection == "Dont know")
		{
			var questionTwo = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If you don't know how you feel about the policy, that's ok. It would be helpful for you to refresh yourself on your company security policy, help should also be requested to business security staff if employees are unsure of what the policy means." +'</li>';
			$('#q2Feedback').append(questionTwo);
		}
		
		/*                Answer for Question 2        */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		 /*                Answer for Question 3        */
         /*                       START                 */
   if (answer.id == 3 && answer.selection == "Very well")
		{
			var questionThree = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Great! A very good knowledge of your security policy puts you ahead of the game, you should not find any issues with cyber security based on your company policies."+'</li>';
			$('#q3Feedback').append(questionThree);
		}
		else if (answer.id == 3 && answer.selection == "Well")
		{
			var questionThree = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "A decent knowledge of the cyber security policy in your business is a necessity when it comes to keeping you and your business safe from computer and cyber attacks." +'</li>';
			$('#q3Feedback').append(questionThree);
		}
		else if (answer.id == 3 && answer.selection == "Somewhat well")
		{
			var questionThree = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is a good start, knowing parts of the security policy can be useful, however it is advised that you should know more of your security policy so the procedure is known for how to deal with cyber security incidents." +'</li>';
			$('#q3Feedback').append(questionThree);
		}
		else if (answer.id == 3 && answer.selection == "Not very well")
		{
			var questionThree = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "A lack of knowledge of cyber security issues can lead to attacks and breaches which will reflect badly on employees and on the business alike, it is suggested to have atleast a moderate level of security policy knowledge." +'</li>';
			$('#q3Feedback').append(questionThree);
		}
		else if (answer.id == 3 && answer.selection == "Not well")
		{
			var questionThree = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If there is only a small amount or not any knowledge of security policy this must be improved, education of security policy is necessary to create baseline knowledge for personal and corporate safety." +'</li>';
			$('#q3Feedback').append(questionThree);
		}
		
		/*                Answer for Question 3        */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		/*                Answer for Question 4      */
         /*                       START                 */
   if (answer.id == 4 && answer.selection == "All four")
		{
			var questionFour = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "A wide range of guidelines in your business security shows the value of security within the business, and also a commitment to keeping employees and customers safe."+'</li>';
			$('#q4Feedback').append(questionFour);
		}
		else if (answer.id == 4 && answer.selection == "Only three")
		{
			var questionFour = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Having atleast three of these guidelines shows that the company has looked into cyber security policy and adopted the essential policies. Possible revision into the necessity for more guidelines should be looked into." +'</li>';
			$('#q4Feedback').append(questionFour);
		}
		else if (answer.id == 4 && answer.selection == "Only two")
		{
			var questionFour = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is the minimum amount of guidelines that should be covered in a security policy, any less than this and it is not a comprehensive enough security policy to serve a business, especially with the advent of bring your own device into the work environment and the many types of attacks that may happen online. " +'</li>';
			$('#q4Feedback').append(questionFour);
		}
		else if (answer.id == 4 && answer.selection == "Only one")
		{
			var questionFour = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Having only one security policy guideline shows that the security policy is not being taken seriously or education on the topic has not been effective, security education should be found and a more suitable and comprehensive security policy put in place." +'</li>';
			$('#q4Feedback').append(questionFour);
		}
		else if (answer.id == 4 && answer.selection == "None")
		{
			var questionFour = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If none of the mentioned security guidelines are covered within a security policy then there is either not enough information in the security policy, or the correct guidelines are not being chosen. Any existing policy should be revised drastically and kept up to date with standard security guidelines. " +'</li>';
			$('#q4Feedback').append(questionFour);
		}
		
		/*                Answer for Question 4       */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		/*                Answer for Question 5      */
         /*                       START                 */
   if (answer.id == 5 && answer.selection == "In the last 3 months")
		{
			var questionFive = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Most security policies will only change a few times a year, the best practice is to check your policy atleast once every 3 months to keep up to date."+'</li>';
			$('#q5Feedback').append(questionFive);
		}
		else if (answer.id == 5 && answer.selection == "In the last 6 months")
		{
			var questionFive = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Reading the security policy atleast once every 6 months gives an appropriate chance to be able to stay up to date with policy, it is advised that this should be done once every 3 months as sometimes new laws, regulations and company policy can be added without notice." +'</li>';
			$('#q5Feedback').append(questionFive);
		}
		else if (answer.id == 5 && answer.selection == "A year ago")
		{
			var questionFive = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "The security policy being read atleast once a year shows a baseline knowledge of the policies in place, however, it is possible that many changes to policy could not be seen and especially any which are in regard to new technologies. " +'</li>';
			$('#q5Feedback').append(questionFive);
		}
		else if (answer.id == 5 && answer.selection == "More than a year ago")
		{
			var questionFive = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If it has been over a year since the policy has been read this means that vital policy changes will have happened. This can be in regard to new technologies and new company policy, with reference to new types of attack and breach and how your business advises you to behave online." +'</li>';
			$('#q5Feedback').append(questionFive);
		}
		else if (answer.id == 5 && answer.selection == "Dont know")
		{
			var questionFive = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If you don't know the last time you read your business security policy, the advice would be to get the latest copy of your security policy and read through the most important and newest guidelines first, if help understanding the policy is needed you should contact your cyber security/IT team." +'</li>';
			$('#q5Feedback').append(questionFive);
		}
		
		/*                Answer for Question 5       */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
					/* END OF CATEGORY (SECURITY POLICY)*/
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
				 
	/*                Answer for Question 6        */
   /*                       START                  */

		if (answer.id == 6 && answer.selection == "More than Five")
		{
			var questionSix = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Having five or more passwords is a very good habit, not just in the workplace but also at home, having less passwords can leave you vulnerable if your password is uncovered."+'</li>';
			$('#q6Feedback').append(questionSix);
		}
		else if (answer.id == 6 && answer.selection == "Four")
		{
			var questionSix = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "With atleast four passwords it gives you a much higher chance, whether on your own devices or company devices to be secure and have increased safety from attacks and breaches of your own or customer information." +'</li>';
			$('#q6Feedback').append(questionSix);
		}
		else if (answer.id == 6 && answer.selection == "Three")
		{
			var questionSix = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Having three passwords is a minimum when working within a business setting, in many businesses work will be done with many different people and companies potentially leaving you open to breaches, as many malicious cyber attacks are looking to scam employees into giving away information including passwords and company data." +'</li>';
			$('#q6Feedback').append(questionSix);
		}
		else if (answer.id == 6 && answer.selection == "Two")
		{
			var questionSix = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Two passwords will usually not suffice, this is because if one of your passwords is breached access to many private data could be uncovered including banking passwords, company passwords and other sensitive areas." +'</li>';
			$('#q6Feedback').append(questionSix);
		}
		else if (answer.id == 6 && answer.selection == "One")
		{
			var questionSix = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Using the same password for everything can make it easy to remember, not just for you but for malicious vendors, if they get hold of your password everything will be open to them. It is recommended to use a password manager to make passwords you don't need to remember." +'</li>';
			$('#q6Feedback').append(questionSix);
		}
			
	/*                Answer for Question 6        */
   /*                       END                  */
   
   /* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
  /* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
   
   /*                Answer for Question 7        */
   /*                       START                 */
   if (answer.id == 7 && answer.selection == "Eight with symbols")
		{
			var questionSeven = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Having symbols, upper and lower case characters and numbers is an industry password security standard, this gives the biggest chance that hackers will be unable to find your password as they break up the automated flow of password cracking techniques. This is due to not using only 'normal' dictionary words."+'</li>';
			$('#q7Feedback').append(questionSeven);
		}
		else if (answer.id == 7 && answer.selection == "Eight with uppercase")
		{
			var questionSeven = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Having uppercase/lowercase characters and/or numbers in your password gives you a distinct advantage when setting passwords, this is because it allows for more unique passwords that take much longer to crack." + '</li>';
			$('#q7Feedback').append(questionSeven);
		}
		else if (answer.id == 7 && answer.selection == "Eight with numbers")
		{
			var questionSeven = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Numbers being available in the password means that numbers would have to be guessed by a potential hacker, if the password is just letters it can lead to much faster times to crack by experienced hackers." +'</li>';
			$('#q7Feedback').append(questionSeven);
		}
		else if (answer.id == 7 && answer.selection == "Eight")
		{
			var questionSeven = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "It is good that the policy does cover passwords, atleast to the point where passwords need to be longer, however, there is a serious concern that this password can still be found using dictionary attacks which check for word usage. In this instance it may be advisable to avoid dictionary words and create a more unique password." +'</li>';
			$('#q7Feedback').append(questionSeven);
		}
		else if (answer.id == 7 && answer.selection == "None")
		{
			var questionSeven = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "A password policy is vital to protecting company assets, both customer information and business information can be revealed if a password is cracked, keeping a policy on passwords allows the business to mitigate the risk of infiltration via leaked/cracked passwords." +'</li>';
			$('#q7Feedback').append(questionSeven);
		}
		
		/*                Answer for Question 7        */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		 /*                Answer for Question 8        */
         /*                       START                 */
   if (answer.id == 8 && answer.selection == "Long and strong")
		{
			var questionEight = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Correct! You should always aspire to make a long password that includes symbols and numbers."+'</li>';
			$('#q8Feedback').append(questionEight);
		}
		else if (answer.id == 8 && answer.selection == "Easy to remember")
		{
			var questionEight = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Incorrect! Having a password that is easy to remember can be very valuable, however, you should never use the name of a pet or of a family member, birthday or anything that is directly relatable to you." +'</li>';
			$('#q8Feedback').append(questionEight);
		}
		else if (answer.id == 8 && answer.selection == "One for work")
		{
			var questionEight = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Incorrect! Having one password for work and one for home leaves you open to attacks and breaches. This is because the chance of one of your passwords being found is very high and it gives access to many different accounts." +'</li>';
			$('#q8Feedback').append(questionEight);
		}
		else if (answer.id == 8 && answer.selection == "Never more than one")
		{
			var questionEight = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This can be very dangerous as only having one password leaves you very vulnerable to attacks and only one attack is necessary to breach all of your private information. A password manager can be used to allow you to have more passwords, that way you don't need to remember every password and will help you keep yourself and your business secure." +'</li>';
			$('#q8Feedback').append(questionEight);
		}
		
		/*                Answer for Question 8        */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		/*                Answer for Question 9      */
         /*                       START                 */
   if (answer.id == 9 && answer.selection == "In the last month")
		{
			var questionNine = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is a very good approach to cyber security, changing your password atleast once a month means that it is very difficult for your password to be breached as it doesn't stay the same. Although if you find this difficult to remember a password manager may be a more suitable option to minimise the risk of forgetting passwords due to frequent changes."+'</li>';
			$('#q9Feedback').append(questionNine);
		}
		else if (answer.id == 9 && answer.selection == "In the last 3 months")
		{
			var questionNine = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is a good start, passwords should be changed atleast once a month for work and sensitive information, however, the password being changed in the last 3 months shows that there is thought for cyber security in your business." +'</li>';
			$('#q9Feedback').append(questionNine);
		}
		else if (answer.id == 9 && answer.selection == "In the last 6 months")
		{
			var questionNine = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If the work account is insensitive and doesn't have much usage this can be the baseline of when to change a password, assuming the correct security guidelines are used on the password, however this is not acceptable for accounts which have sensitive data." +'</li>';
			$('#q9Feedback').append(questionNine);
		}
		else if (answer.id == 9 && answer.selection == "More than a year ago")
		{
			var questionNine = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Whether the data is sensitive or insensitive a password should be changed at minimum once a year, any longer than a year the the password has a high probability of being cracked and information being leaked." +'</li>';
			$('#q9Feedback').append(questionNine);
		}
		else if (answer.id == 9 && answer.selection == "Dont know")
		{
			var questionNine = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If you don't know when you last changed your work passwords you should change them at the soonest convenient time to do so, otherwise you could have the potential to lose information in a breach due to an outdated password." +'</li>';
			$('#q9Feedback').append(questionNine);
		}
		
		/*                Answer for Question 9       */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		/*                Answer for Question 10      */
         /*                       START                 */
   if (answer.id == 10 && answer.selection == "Not at all")
		{
			var questionTen = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is the best practice, as duplicate passwords may have been cracked in the past which if they were used again could mean unwanted access is obtained, especially if you only use a limited selection of passwords." +'</li>';
			$('#q10Feedback').append(questionTen);
		}
		else if (answer.id == 10 && answer.selection == "After a year")
		{
			var questionTen = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Allowing passwords to be reused after a year is good practice as in general a password that may have been cracked will not be kept for over a year if it doesn't work. It would be better to not reuse a password though. " +'</li>';
			$('#q10Feedback').append(questionTen);
		}
		else if (answer.id == 10 && answer.selection == "After 6 months")
		{
			var questionTen = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Allowing the reusage of a password after 6 months is not advised, this is because there are only a limited variation of passwords that are used meaning that there is a higher chance the password could be cracked the longer it is used. " +'</li>';
			$('#q10Feedback').append(questionTen);
		}
		else if (answer.id == 10 && answer.selection == "No policy on duplicate passwords")
		{
			var questionTen = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "A policy on duplicate passwords or passwords in general is vital, because, passwords are the key to all accounts and to all sensitive data online and it is of vital importance that staff make an effort to keep their passwords secure." +'</li>';
			$('#q10Feedback').append(questionTen);
		}
		
		/*                Answer for Question 10       */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
					/* END OF CATEGORY (SECURITY POLICY)*/
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
			/*                Answer for Question 11        */
			/*                       START                  */

		if (answer.id == 11 && answer.selection == "Extremely helpful")
		{
			var questionEleven = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is a very good practice for any business, if security awareness is seen to be extremely helpful then this leads to reduced chances of a security breach and increased employee morale."+'</li>';
			$('#q11Feedback').append(questionEleven);
		}
		else if (answer.id == 11 && answer.selection == "Very helpful")
		{
			var questionEleven = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If your awareness training leaves you feeling like it has been very helpful, this  can mean that in the future you may think about and use cyber security procedures when working and in home life." +'</li>';
			$('#q11Feedback').append(questionEleven);
		}
		else if (answer.id == 11 && answer.selection == "Helpful")
		{
			var questionEleven = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "At the very least, awareness being seen as helpful can start to make a difference, where otherwise staff may not think as much about cyber security the awareness training is now making staff think about cyber security within their actions." +'</li>';
			$('#q11Feedback').append(questionEleven);
		}
		else if (answer.id == 11 && answer.selection == "Unhelpful")
		{
			var questionEleven = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If security awareness training is being described as unhelpful, this could mean that the wrong areas are being targeted or that the awareness training is not fit for purpose or relevant to staff or the company, future training sessions may benefit from new strategies which apply to the business directly." +'</li>';
			$('#q11Feedback').append(questionEleven);
		}
		else if (answer.id == 11 && answer.selection == "Very unhelpful")
		{
			var questionEleven = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Awareness training being very unhelpful is a serious issue, as this could mean that awareness may not be being taken seriously or is potentially counter-productive to the message of security awareness. A rethink of strategy in awareness is necessary, a security specialist could be brought in to restructure the awareness campaign." +'</li>';
			$('#q11Feedback').append(questionEleven);
		}
			
	/*                Answer for Question 11        */
   /*                       END                  */
   
   /* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
  /* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
   
   /*                Answer for Question 12        */
   /*                       START                 */
   if (answer.id == 12 && answer.selection == "Once two to three")
		{
			var questionTwelve = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Conducting awareness training once every two to three months is the industry standard when it comes to awareness, this is because training being conducted either too often or not often enough means that the information is often forgotten or ignored due to the repetitive nature." +'</li>';
			$('#q12Feedback').append(questionTwelve);
		}
		else if (answer.id == 12 && answer.selection == "Monthly")
		{
			var questionTwelve = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Monthly awareness training can be useful, particularly in businesses where cyber security is highly necessary, such as businesses in the financial industry which handle sensitive data. However, for most businesses this level of frequency is not necessary." + '</li>';
			$('#q12Feedback').append(questionTwelve);
		}
		else if (answer.id == 12 && answer.selection == "Anually")
		{
			var questionTwelve = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Annual awareness training is at an acceptable level, however, this may be too distanced for awareness sessions as many members of staff will not retain the information and will forget it after a few months, a better strategy would be to have awareness training once every two to three months to ensure maximum engagement." +'</li>';
			$('#q12Feedback').append(questionTwelve);
		}
		else if (answer.id == 12 && answer.selection == "Weekly")
		{
			var questionTwelve = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Security awareness training is a vital asset in any business, if there is no awareness training then employees and clients could be at risk from cyber security breaches due to poor knowledge of security.</br></br>It is essential that awareness training is held as soon as possible by security professionals." +'</li>';
			$('#q12Feedback').append(questionTwelve);
		}
		else if (answer.id == 12 && answer.selection == "Never")
		{
			var questionTwelve = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Security awareness training is a vital asset in any business, if there is no awareness training then employees and clients could be at risk from cyber security breaches due to poor knowledge of security. <br>It is essential that awareness training is held as soon as possible by security professionals." +'</li>';
			$('#q12Feedback').append(questionTwelve);
		}
		
		/*                Answer for Question 12        */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		 /*                Answer for Question 13        */
         /*                       START                 */
   if (answer.id == 13 && answer.selection == "More than Five")
		{
			var questionThirteen = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This shows a business dedication to keeping employees aware of cyber security, showing comittment to the safety and security of business and of clients information."+'</li>';
			$('#q13Feedback').append(questionThirteen);
		}
		else if (answer.id == 13 && answer.selection == "Four")
		{
			var questionThirteen = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Having been to atleast four security awareness training events, shows that your business believes in refreshing staff on security to make sure they are working up to policy and continue to stay aware." +'</li>';
			$('#q13Feedback').append(questionThirteen);
		}
		else if (answer.id == 13 && answer.selection == "Three")
		{
			var questionThirteen = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Going to atleast 3 security awareness events at your business is a baseline standard for keeping staff refreshed with company policy and ensuring the safety and security of customers and staff alike." +'</li>';
			$('#q13Feedback').append(questionThirteen);
		}
		
		else if (answer.id == 13 && answer.selection == "Two")
		{
			var questionThirteen = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Having atleast two events shows that there is some considerable thought toward cyber security, however the frequency of events should be increased to make sure that staff are refreshed on policies and they are continuing to work in a secure fashion." +'</li>';
			$('#q13Feedback').append(questionThirteen);
		}
		else if (answer.id == 13 && answer.selection == "One")
		{
			var questionThirteen = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If there have only been one(or less) security events, then the business is not taking security awareness as seriously as necessary, this will lead to most staff not caring or remembering about cyber security which will then lead to a large risk of data breaches and staff misconduct in regard to security. " +'</li>';
			$('#q13Feedback').append(questionThirteen);
		}

		/*                Answer for Question 13        */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		/*                Answer for Question 14      */
         /*                       START                 */
   if (answer.id == 14 && answer.selection == "All of the above")
		{
			var questionFourteen = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Having all the proposed methods used is a very good sign that cyber security awareness is a serious topic for the business, and, that the safety of everyone involved is of top priority." +'</li>';
			$('#q14Feedback').append(questionFourteen);
		}
		else if (answer.id == 14 && answer.selection == "Many of the above")
		{
			var questionFourteen = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "If many of the methods described have been used, then there is a good chance there is a strong cyber security focus within the workspace. A strong security focus also bring the benefit of much reduced risk of breaches due to staff knowledge." +'</li>';
			$('#q14Feedback').append(questionFourteen);
		}
		else if (answer.id == 14 && answer.selection == "Most of the above")
		{
			var questionFourteen = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Having most of the methods in use allows for a comprehensive view of cyber security, however, the business may consider using some more of the techniques to make sure that cyber security awareness is prevalent to all staff in densely populated working areas." +'</li>';
			$('#q14Feedback').append(questionFourteen);
		}
		else if (answer.id == 14 && answer.selection == "Some of the above")
		{
			var questionFourteen = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is a good start to atleast include some techniques, although, more techniques will make it much easier to keep your business cyber secure, if too few are in use this could lead to lack of awareness and therefore an increased risk of a security breach." +'</li>';
			$('#q14Feedback').append(questionFourteen);
		}
		else if (answer.id == 14 && answer.selection == "None of the above")
		{
			var questionFourteen = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "None of the above methods being used is a serious concern, a cyber security professional should be contacted to arrange for awareness meetings or at the bare minimum a poster could be created to raise awareness." +'</li>';
			$('#q14Feedback').append(questionFourteen);
		}
		
		/*                Answer for Question 14       */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
		/*                Answer for Question 15      */
         /*                       START                 */
   if (answer.id == 15 && answer.selection == "Very aware")
		{
			var questionFifteen = '<li id="titleList" class="titleListGreen">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Being very aware of measures and practices is very good for a business as this means that staff are thinking about cyber security in their work, significantly reducing the likelihood of security incidents occurring." +'</li>';
			$('#q15Feedback').append(questionFifteen);
		}
		else if (answer.id == 15 && answer.selection == "Aware")
		{
			var questionFifteen = '<li id="titleList" class="titleListYellow">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "A member of staff that is aware of cyber security, means that they understand the importance of cyber security, and, that they will also use secure procedures when conducting work activity." +'</li>';
			$('#q15Feedback').append(questionFifteen);
		}
		else if (answer.id == 15 && answer.selection == "Somewhat aware")
		{
			var questionFifteen = '<li id="titleList" class="titleListOrange">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "Being somewhat aware is the base standard that employees should have to be able to apply secure procedures in day to day activity. Employees should however, strive to become more aware of their cyber security to reduce the chances of security incidents. " +'</li>';
			$('#q15Feedback').append(questionFifteen);
		}
		else if (answer.id == 15 && answer.selection == "Not very aware")
		{
			var questionFifteen = '<li id="titleList" class="titleListRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This is below the standard that many businesses would deem acceptable in the current technological climate, if you selected this you should try to familiarise yourself more with your business security policies, through awareness training or other means." +'</li>';
			$('#q15Feedback').append(questionFifteen);
		}
		else if (answer.id == 15 && answer.selection == "Unaware")
		{
			var questionFifteen = '<li id="titleList" class="titleListDarkRed">' + "ID:"+ "\xa0" + answer.id + "\xa0" + "This shows a serious lack of commitment to cyber awareness in the workplace, it is necessary to contact a security professional and to have more cyber awareness training to consolidate knowledge." +'</li>';
			$('#q15Feedback').append(questionFifteen);
		}
		
		/*                Answer for Question 15       */
        /*                       END                  */
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
					/* END OF CATEGORY (SECURITY AWARENESS)*/
		
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		/* /\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\ */
		
	  });
	 });
    });
  });
  