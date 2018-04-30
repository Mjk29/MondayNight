





function viewGrade(){ 

	// console.log("HERE IS TEH NAEM");


	studentName='';
	isStudent = 0;
	try{
		studentName = document.getElementById("UCID").value;
		console.log(studentName);
		isStudent =1;
		getRevisedForCheck();

		if(!isChecked){
			alert("Grading in Progress");
			return;
		}


	}
	catch(err){ 
		// console.log("NOTNSET");
		var e = document.getElementById("studentNameDropdown");
		studentName  = e.options[e.selectedIndex].value; 
		console.log("Here is the Student Name"+studentName);
	}

	if (isStudent) {
		console.log("Student is ");
		if (!(confirm("Are you sure you want \nto view your grade?"))) {
				return;
			}
		document.getElementById("viewGButton").classList.add("hidden");
	}
	else{
		console.log("not student");
	}
	// if (uname) {
		// console.log("JERE IOS THE STUDENT NAEM");
		// console.log(studentName);
	// }


	// console.log(uname);
	
	// if (document.getElementById("userType").value == 'student') {
	// 	console.log("()()(()()()()()()()()()()()");
	// 	// getRevised();
	// }

	// try{
	// 	if (document.getElementById("userType").value == 'student'){
	// 		console.log("_______________----------------");
	// 		// getRevised();
			

	// 	}
	// }
	// catch(err){ 
	// 	console.log("NOTNSET");
		
	// }



	// console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++")
	// console.log(studentName);
	runGetTest();
	pointsPerQuestion = [];

    // var cURL = 'getGrade.php?dataToSend='+document.getElementById("UCID").value;
    var cURL = 'getGrade.php?dataToSend='+studentName;
    // var cURL = 'getRevisedGrade.php?dataToSend='+studentName;


	var ajaxData = new XMLHttpRequest();
    ajaxData.open('POST', cURL, true);
    ajaxData.onreadystatechange = function() {
        var DONE = 4;
        var OK = 200;
        if (ajaxData.readyState === DONE) {
            if (ajaxData.status === OK) {
           
           		console.log("####################################");
            	console.log(ajaxData.responseText);
           		console.log("####################################");
 

                receiveGrade = ajaxData.responseText.split('[');
                console.log(receiveGrade);

                studentCode = receiveGrade[2].split('","');
                studentCode[0] = studentCode[0].substring(1);

                scLen = studentCode.length;
                studentCode[scLen-1] = studentCode[scLen-1].substring(0, studentCode[scLen-1].length-4);
                // console.log("here is the lenfgth of student code "+scLen);
                // console.log(studentCode[scLen-1]);

                // console.log(studentCode[scLen-1].substring(0, studentCode[scLen-1].length-4));
                
                // console.log(studentCode[scLen-1].length);

                // console.log("her is the student code");
                // console.log(studentCode);

                // console.log(receiveGrade[0]);
                var gradeVal = receiveGrade[0].split(',');
                newGradeVal=[];	

                for (var i = 0; i < gradeVal.length; i++) {
                	newGradeVal[i]=Number(gradeVal[i]).toFixed(2);
                }
                var totalGrade = Number(newGradeVal.pop());

                sendingGradePoints = newGradeVal.toString();

                // console.log("EHER IS THE GRADCEVAL");
                // console.log(newGradeVal);
                // console.log(newGradeVal.toString());
                // // console.log("here is gradeVal");
                // // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
                // // console.log(gradeVal);
                // // console.log(totalGrade);

                // console.log("RECEIVE GRADE 1");	
                // console.log(receiveGrade[1]);


                commString = receiveGrade[1].slice(2);
                // console.log("COMM STRING FIRST ");
                // console.log(commString);

                commString = receiveGrade[1].replace(/"]/,'');
               
                // commString = receiveGrade[1].substring(2, receiveGrade[1].length - 4);



                // console.log("COMM STRING Second ");
                // console.log(commString);

				// str.replace(/blue/g, "red");


                // console.log("HER IS THE COMM STRING");
                // console.log(commString);

				if (commString[0]  == ',') {
					// console.log("FOUND A COMMA");
					var holder = commString;
					// console.log("HERE IS HOLDER "+holder);
					commString = '"'+ holder;
				}




				var comments = commString.split('","');

				// console.log("HERE IS THE COMMENTS ");
				// if (genComm[0][0] == '"') {
				// 	console.log("asd")
				// 	genComm[0][0] = '';
				// }


				// console.log(comments[0][0]);
				// console.log(comments[0][1]);
				// console.log(comments[0][2]);
				// console.log(comments);



				// comments.shift();
				// console.log("here is the entire comment array")
				// console.log(comments);
				var testComm=[];
				var genComm=[];
				var holdforGen=[]

				// console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");


				for (var i = 0; i < comments.length; i+=2) {
					holdforGen.push(comments[i].replace('"', ''));
					testComm.push(comments[i+1].replace('"', ''));
				}


				// console.log(testComm);



				// console.log("GENCOM LENGTH : "+holdforGen.length);
				var regex2 = /points/g;
				for (var i = 0; i < holdforGen.length; i++) {
					
					// console.log("HERE IS THE NEW TESTING LOOP" + holdforGen[i].length);
					// holdforGen[i] = holdforGen[i].replace('points', 'points <br>');
					// console.log(holdforGen[i]);
					
					var newString = holdforGen[i].split(regex2);
					// console.log(newString);
					genComm[i]='';
					for (var j = 0;j < newString.length; j++) {
						if (newString[j].length < 3 ) {break;}
						var index = newString[j].split(/-/);
						index[1] = Math.ceil(Number(index[1]));
						// console.log("++++++++++++++++++++++++++++++++++");
						// console.log(index[0] +'- '+ index[1] +' points <br>');
						// console.log("----------------------------------");
						genComm[i] += index[0] +'- '+ index[1] + ' points <br>';

						// console.log("HERE IS GENCOM I: "+holdforGen[i]);
					}
				 

				}

				// genComm = holdforGen;

				// console.log("Here is the gen comment array");
				// console.log(genComm);

				

				// console.log("Here is the test comment array");
				// console.log(testComm);


				// console.log("Here is the individual comments.")
				 maxPoints=0;
				 // console.log("GEN COMM LEN : "+genComm.length);

				//This is for handling the incomming data
				for (var i = 0; i < genComm.length; i++) {
					pointsPerQuestion[i] = 0;

					// console.log("Here is comments length : "+comments.length)
					// console.log("Here is the I:"+i);
					document.getElementById("CTable"+i).classList.remove("hidden");
					// var comm = comments[i].split('|');
					// comm.shift();
					// console.log("HERE IST EH COMM");
					// console.log(comm);
					var pointSum=0;
					// maxPoints+=qmp2[i]
					
					document.getElementById("generalComments"+i).innerHTML = genComm[i];
						// console.log("Here is the comment for : "+i+comments[i]);

						// console.log("I VAL IS : "+i);

						if (typeof(testComm[i]) == 'undefined') {
							// console.log("ASJDNLASK");
							testComm[i] = "correct|correct|correct|correct|correct|";
						}


						if (testComm[i].length === 0) {
							testComm[i] = "correct|correct|correct|correct|correct|";
						}

					var QtestComm = testComm[i].split("|");
					console.log("Here is QTestComm");
					QtestComm.shift();
					console.log(QtestComm);


					for (var j = 0; j < QtestComm.length; j++) {
						// jComm = comm[j].split('points');
						pointsPerQuestion[i] ++;


						console.log("Here is COMM J");
						console.log(QtestComm[j]);
						// QtestComm.shift();

						if (QtestComm[j] == '') {
							// console.log("undef jcomm!!!!!!!!!!!!!!!!!!!!!!");
							// console.log(jComm);
							QtestComm[j] += "correct";
							// continue;
						}

						var commtexA = QtestComm[j].split('-');
						var commpointA = commtexA[1].split(' ');

						var commOut = commtexA[0] +'-'+ Math.ceil(commpointA[0]) + ' points';

						console.log("HERE IS COMMOUT : "+commOut);
						// console.log(commpointA);
						
						// console.log("vv HERE IS JCOMM vv ");
						// console.log(jComm);
						// console.log("^^ HERE IS JCOMM ^^");
						// jjComm = jComm[1].split(' points');
						// console.log(i,j)
						// console.log("HERE IS JJCOMM");
						// console.log(typeof(jjComm));
						// console.log(jjComm);



						document.getElementById("commentRow"+i+j).classList.remove("hidden");
						

						// truncNum = Math.ceil(Number(gradeVal[i]));
						document.getElementById("commentText"+i+j).innerHTML = commOut;
						document.getElementById("commentText"+i+j).classList.remove("hidden");
						document.getElementById("commentPoint"+i+j).value = Math.ceil(newGradeVal[0]);
						// console.log("Here is the newGradeVal[i] "+newGradeVal[0]);
						pointSum+=Number(newGradeVal.shift());
						document.getElementById("commentPoint"+i+j).classList.remove("hidden");
					}

					
					if (pointSum > newPointArray[i]) {
						document.getElementById("tpLoss"+i).value = newPointArray[i];
					}
					else{
						document.getElementById("tpLoss"+i).value = pointSum;
					}


					document.getElementById("tpLoss"+i).classList.remove("hidden");
					// console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
					// console.log(typeof(Math.ceil(Number(gradeVal[i]))));
					// document.getElementById("tpQuestion"+i).innerHTML = qmp2[i];
					document.getElementById("tpQuestion"+i).classList.remove("hidden");

					// console.log(i+'----------------');
				}

				totalGrade = parseInt(totalGrade);
				document.getElementById("studentGrade").value = totalGrade;



				for (var i = 0; i < studentCode.length; i++) {
					// console.log("STudent code length ------------------ "+studentCode.length)
					// console.log(studentCode);
					document.getElementById("studentCode"+i).innerHTML = studentCode[i];
					document.getElementById("studentCode"+i).classList.remove("hidden");
					document.getElementById("studentCodeLabel"+i).classList.remove("hidden");
					document.getElementById("Qtable"+i).classList.remove("hidden");



					// console.log(studentCode[i]);
				}

				if (isStudent){
					getRevised();
				}


            
            	// console.log("Here is the start of receive Grade");
            	// for (var i = 0; i < receiveGrade.length; i++) {
            	// 	console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
            	// 	console.log(comments[i]);
            	// 	console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
            	// 	console.log('\n');
            	// }
            	// console.log("Here is the end of receive Grade");
  
					// var grade = receiveGrade[0].search(/\"[0-9]* /);
					// var endgrade = receiveGrade[0].search(/[0-9]\s/);
                    // document.getElementById("totalGrade").innerHTML=
                    // receiveGrade[0].substring(grade+1,endgrade+1);
                    // console.log("here is the grade num :"+grade);
                    // console.log("here is the endgrade num :"+endgrade);

 			// 		 for (var i = 0; i < receiveArray.length; i++) {
				// 	var n = receiveArray[i].search(/[a-z]/);
				// 	// console.log(n);
				// 	// if (receiveArray[i].substring(1,n-1) == 0) {flag = true};
				// 	currentIDArray[i] = receiveArray[i].substring(1,n-1);
				// 	currentQArray[i]  = receiveArray[i].substring(n-1);
				// }


	    // console.log("THIS IS");

	    
			// document.getElementById("studentGrade").value=receiveGrade[0].substring(grade+1,endgrade+1);

   //          document.getElementById("comment0").innerHTML= receiveGrade[0].substring(endgrade+1);
			// document.getElementById("comment1").innerHTML= receiveGrade[1].substring(endgrade);
			// // document.getElementById("comment2").innerHTML= receiveGrade[2].substring(endgrade+1);
			// // document.getElementById("comment3").innerHTML= receiveGrade[3].substring(endgrade+1);
			// // document.getElementById("comment4").innerHTML= receiveGrade[4].substring(endgrade+1);




			// document.getElementById("comment0").classList.remove("hidden");
			// document.getElementById("comment1").classList.remove("hidden");
			// document.getElementById("comment2").classList.remove("hidden");
			// document.getElementById("comment3").classList.remove("hidden");
			// document.getElementById("comment4").classList.remove("hidden");




                   // for (var i = 1; i < receiveGrade.length; i++) {
                 		//  document.getElementById("qComm"+i).innerHTML= 	receiveGrade[i]
                   // }


			// for (var i = 0; i < 5; i++) {
			// gradeC0 = receiveGrade[0].substring(endgrade+1).split('.');
			// var newstr = receiveGrade[0].substring(endgrade+1).replace(/\. /g, "\n");
			// 	// document.getElementById("qComm0").innerHTML= receiveGrade[0].substring(endgrade+1);
			// document.getElementById("qComm0").innerHTML= newstr;


			// }
			// document.getElementById("gradeResult").innerHTML = "asdas";








            //    console.log("===================================================");
                // var dataFromPHP = ajaxData.responseText;
                // receiveArray = ajaxData.responseText.split('|');
                // for (var i = 0; i < receiveArray.length; i++) {
                //     document.getElementById("returnText" + [i]).innerHTML = receiveArray[i];
                //     document.getElementById("returnText" + [i]).style.backgroundColor = "#82ffbc";
                // }
            } else {
                console.log("ERROR : " + ajaxData.status);
            }
        }
    };
    ajaxData.send();
}





function startExam(argument) {
	var cURL = 'getExamQ.php?questionText=';
	var ajaxData = new XMLHttpRequest();
	ajaxData.open('GET', cURL, true);
	ajaxData.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		if (ajaxData.readyState === DONE) {
			if (ajaxData.status === OK) {
			
				var dataFromPHP = ajaxData.responseText;
				// console.log(dataFromPHP);
				// receiveArray = ajaxData.responseText.split('|');
				totalarray = dataFromPHP.split('[');
				// console.log(totalarray);
				// inArray =totalarray[0].split('|');
				// console.log("HERE IS THE SPLOT ON |||");
				// console.log(inArray);

				// questionMaxPointArray = totalarray[1];
				// qmp2 = questionMaxPointArray.split(',');
				
				maxPoints=0;
				pointsArray = totalarray[1].split('"');
				// console.log("!!!!!!!!!!!!!!!!!!!!!!")
				// console.log(pointsArray[0].split(' '));
				newPointArray = pointsArray[0].split(' ');



				for (var i = 0; i < newPointArray.length; i++) {
					maxPoints += Number(newPointArray[i]);
					document.getElementById("tpQuestion"+i).innerHTML = Number(newPointArray[i]);
					// console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
					// console.log(Number(newPointArray[i]));
					// console.log(Number(document.getElementById("tpLoss"+i).innerHTML));

					// if (Number(document.getElementById("tpLoss"+i).innerHTML) > Number(newPointArray[i])) {
					// 	console.log("************(*(*(((((((((((((((((((");
					// }

				}

				document.getElementById("maxPoints").innerHTML = maxPoints;



				// console.log("HERE IS THE QPOINT ARRATY");
				// console.log(qmp2);
				// console.log(maxPoints);

				// inArray.shift();

				// var receiveArray = inArray[0];
				receiveArray = totalarray[0].split('|');
				receiveArray.shift();

				// console.log("here is receiveArray");
				
				// console.log(receiveArray);
				Qnum = receiveArray.length;
				// console.log(Qnum);

				// setNumberQuestions(receiveArray.length);


				currentIDArray = [];
				examIDArray = [];
				currentQArray = [];
				for (var i = 0; i < receiveArray.length; i++) {
					var n = receiveArray[i].search(/[a-z]/);
					// console.log(n);
					currentIDArray[i] = receiveArray[i].substring(1,n-1);
					currentQArray[i]  = receiveArray[i].substring(n-1);	
				}
				numberofQuestion = currentIDArray.length;


				for (var i = 0; i < receiveArray.length; i++) {
					document.getElementById("questionText"+i).innerHTML= currentQArray[i];
					document.getElementById("questionTextLabel"+i).classList.remove("hidden");
					document.getElementById("questionText"+i).classList.remove("hidden");

				}	
			}
			else{
				console.log("ERROR : " + ajaxData.status);
			}
		}
	};
	ajaxData.send();
}





function getStudentNames(){
	var cURL = 'getStudentNames.php?dataToSend=';
	var ajaxData = new XMLHttpRequest();
	ajaxData.open('GET', cURL, true);
	ajaxData.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		if (ajaxData.readyState === DONE) {
			if (ajaxData.status === OK) {
				var dataFromPHP = ajaxData.responseText;
				// console.log(dataFromPHP);
				var inArray = dataFromPHP.split('"');
				var names = inArray[1].split(',');
				// console.log(names);
				for (var i = 0; i < names.length; i++) {
					// console.log(names[i]);
					document.getElementById("studentName"+i).innerHTML= names[i];
					document.getElementById("studentName"+i).classList.remove("hidden");
				}
			}
			else{
				console.log("ERROR : " + ajaxData.status);
			}
		}
	};
	ajaxData.send();
}




function submitReviewedExam(argument) {

	if (!confirm("Submit?")) {
		return;
	}

	releaseGrades();
// $tester= array('ucid' => "studentUCID",'grade' => "the new grade",'comments'=>"The updated comments");
	var sendString;
	// console.log("HERE IS THE DATA TO SEND");
	// console.log(studentName);
 //    console.log(document.getElementById("studentGrade").value);
	// console.log(document.getElementById("addComm0").value);
	// console.log("HERE IS THE DATA TO SEND");


	dataString ='';
	dataString = '|'+ studentName+'|';

	// dataString += '['+document.getElementById("studentGrade").value+'|';

	// dataString += "comments: "+"TEST COMMENTS"+'|';

	data2send={};
	data2send['ucid'] = studentName;
	data2send['grade'] = document.getElementById("studentGrade").value;
	// data2send['comments'] = document.getElementById("addComm0").value;

	var commArray={};
	for (var i = 0; i < currentIDArray.length; i++) {
		// commArray[i] =document.getElementById("addComm"+i).value;
		dataString += document.getElementById("addComm"+i).value+'~';
	}

	dataString+= '>';

	for (var i = 0; i < currentIDArray.length; i++) {

		for (var j = 0; j < 6; j++) {
			if (Number(document.getElementById("commentPoint"+i+j).value) != -777) {
				dataString += document.getElementById("commentPoint"+i+j).value + '~';
				// console.log("( "+i+","+j+")");
				// console.log(Number(document.getElementById("commentPoint"+i+j).value));
				
			}
		}
	dataString+= '!';


	}
	dataString += 'released';



	// dataString += '|'+sendingGradePoints;
	console.log(sendingGradePoints);
	console.log("HERE IS TH SEDING STRING")
	console.log(dataString);

	data2send['comments'] = commArray;


	sendingArray = JSON.stringify(data2send);
	// console.log("HERE IS THE JSON DATA");
	// console.log(sendingArray);
	

	// console.log(commArray);

	// data2send=[];
	// data2send.push(studentName);
	// data2send.push(maxPoints);
	// console.log(data2send);

	var cURL = 'sendReview.php?dataToSend='+dataString;
	var ajaxData = new XMLHttpRequest();
	ajaxData.open('GET', cURL, true);
	ajaxData.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		if (ajaxData.readyState === DONE) {
			if (ajaxData.status === OK) {
				var dataFromPHP = ajaxData.responseText;
				// console.log("HERE IS RESPONSE DATA");
				console.log(dataFromPHP);
			}
			else{
				console.log("ERROR : " + ajaxData.status);
			}
		}
	};
	ajaxData.send();
	alert("Review Submitted");

}




function runGetTest() {

	testCaseStack=[];

	cID = [];
	for (var i = 0; i < currentIDArray.length; i++) {
		// currentIDArray[i] = currentIDArray[i].replace(/\D/g,'');
		cID[i] = Number(currentIDArray[i]);
	}
	// console.log("HERE IS CID");
	// console.log(cID);
	var itter = cID.length;	


	for (var i = 0; i < itter; i++) {
		

		setTimeout(function(){
			// console.log(currentIDArray);
			// console.log("IN THE FUNCTION");
			cURL = 'getTestCase.php?dataToSend='+cID.shift();
			var ajaxData = new XMLHttpRequest();
			ajaxData.open('GET', cURL, true);
			ajaxData.onreadystatechange = function(){
				var DONE = 4;
				var OK = 200;
				if (ajaxData.readyState === DONE) {
					if (ajaxData.status === OK) {
						var dataFromPHP = ajaxData.responseText;
						// document.getElementById("testCaseText"+i).innerHTML= names[i];
						testCaseStack.push(dataFromPHP);

						console.log("HERE IS THE TEST CASE RETURN");
						console.log(dataFromPHP);
						console.log("HERE IS THE TEST CASE RETURN");

					}
					else{
						console.log("ERROR : " + ajaxData.status);
					}
				}
			};
			ajaxData.send();
		}, 1000);
	}
	parseTestCase();

	// console.log("HERE IS THE TEST CASE STACK");
	// console.log("`````````````````````````````````````````````")
	// console.log(testCaseStack);
	// jsonIncD = JSON.parse(testCaseStack[0]);
	// console.log(jsonIncD);
// console.log("`````````````````````````````````````````````")


}


function parseTestCase() {
	// testCaseStack
	setTimeout(function () {
	// console.log("HERE IS TE STACK");
	// console.log(testCaseStack);
	// console.log("TCSTACK SIZE = "+ testCaseStack.length);

	for (var i = 0; i < testCaseStack.length; i++) {
	// console.log("#####################");
		var tcStack = []

	// console.log(testCaseStack[i]);
	testC = testCaseStack[i].split('","');

	// console.log(testC);


	// console.log("HJERE IS TEST C 0");
	// console.log(testC[0].split(':"')[1]);
	tcStack.push(Number(testC[0].split(':"')[1]));

	for (var j = 4; j < 13; j+=2) {
		// console.log("I = "+j);
		var tmpTC = testC[j].split(':"')[1]
		// console.log(tmpTC);
		if (tmpTC == 'NULL') {continue;}
		tcStack.push(tmpTC);
		// tcStack.push(testC[j].split(':')[1]);
	}
	// console.log("HERE ISN THE TC STACK STACK");
	// console.log(tcStack);
	// //Use tcStack[0] to set to proper testCaseText in html
	// console.log("HERE IS THE ID ARRAY");
	// console.log(currentIDArray);

	for (var p = 0; p < currentIDArray.length; p++) {
		if (currentIDArray[p] == tcStack[0]) {
			// console.log("MATCH AT "+tcStack[0]+' '+p);
			tcStack.shift();
			break;
		}
	}

	// console.log("HERE IS P"+p);
	// console.log(tcStack);

	for (var s = 0; s < tcStack.length; s++) {
		document.getElementById("testCaseText"+p+s).innerHTML= tcStack[s];
	}



}

	//Need elements 
	// 4""t1":"adds(4)""
	// 6""t2":"adds(2)""
	// 8""t3":"NULL""
	// 10""t4":"NULL""
	// 12""t5":"NULL""

	// document.getElementById("testCaseText"+i).innerHTML= names[i];





	// for (var i = 0; i < testCaseStack.length; i++) {
	// 	// console.log("here is the stack");
	// 	console.log(testCaseStack[i]);
	// }

  }, 2000);
}




function updatePoints(){
	// console.log("HERE IS THE ARRATY LENGTRH");
	// console.log(currentIDArray);
	var totalPoints = 0;
	for (var i = 0; i < 10; i++) {
		totalPoints += Number(document.getElementById('tpLoss'+i).value);	
	}
    document.getElementById("studentGrade").value= totalPoints;

	
}

function totalPointsAwardedUpdater() {
	console.log(pointsPerQuestion);

	for (var i = 0; i < pointsPerQuestion.length; i++) {
		var pointPerQuestion=0;
		for (var j = 0; j < pointsPerQuestion[i]; j++) {
			console.log(document.getElementById("commentPoint"+i+j).value);
			pointPerQuestion += Number(document.getElementById("commentPoint"+i+j).value);

		}
		document.getElementById("tpLoss"+i).value = pointPerQuestion;
		updatePoints();
	}

}



function getRevised( ) {


	var sName = '';
	if (isStudent) {
		sName = studentName;
	}


	var cURL = 'getRevisedGrade.php?dataToSend='+sName;
	var ajaxData = new XMLHttpRequest();
	ajaxData.open('GET', cURL, true);
	ajaxData.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		if (ajaxData.readyState === DONE) {
			if (ajaxData.status === OK) {
				var dataFromPHP = ajaxData.responseText;
				console.log("*********************************");
				console.log(dataFromPHP);
				// console.log(typeof(dataFromPHP));
			    // document.getElementById("addComm0").value = dataFromPHP;
				console.log("*********************************");



				var splitData = dataFromPHP.split('>');
				// console.log(splitData);

				// for (var i = 0; i < splitData.length; i++) {
				// 	console.log(splitData[i].toString());
				// }

				var commar = splitData[0].split('~');
				var pointar = splitData[1].split('!');
				// var pointPerQ = pointar.split('!');

				pointar.pop();
				commar.pop();
				commar[0] = commar[0].slice(4);


				console.log(commar);
				console.log(pointar);


				var totalpointVal = 0;
				for (var i = 0; i < commar.length; i++) {
					document.getElementById("addComm"+i).innerHTML= commar[i];
					var pointPerQ = pointar[i].split('~');
					pointPerQ.pop();
					var pointTotal=0;
					for (var j = 0; j < pointPerQ.length; j++) {
						console.log(pointPerQ[j]);
						document.getElementById("commentPoint"+i+j).value= pointPerQ[j];
						pointTotal += Number(pointPerQ[j]);
					}
					document.getElementById("tpLoss"+i).value= pointTotal;
					totalpointVal+=pointTotal;
				}
				document.getElementById("studentGrade" ).value= totalpointVal;




				// commar[0].replace(' "_', '');

				// for (var i = 0; i < commar[0].length; i++) {
				// 	console.log(commar[0][i]);
				// }

				// console.log("here ios the slice");
				// console.log(commar[0].slice(4));


				// console.log(commar);
				// console.log(pointar);

				// for (var i = 0; i < commar.length; i++) {
				// 	console.log(i + ' : ' +commar[i].toString());				
				// }


				// for (var i = 0; i < pointar.length; i++) {
				// 	// console.log(pointar[i]);
				// 	console.log(i + ' : ' +pointar[i].toString());
				// }









				}
			else{
				console.log("ERROR : " + ajaxData.status);
			}
		}
	};
	ajaxData.send();
}





function releaseGrades() {
	
var cURL = 'releaseGrades.php?dataToSend=';
	var ajaxData = new XMLHttpRequest();
	ajaxData.open('GET', cURL, true);
	ajaxData.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		if (ajaxData.readyState === DONE) {
			if (ajaxData.status === OK) {
				var dataFromPHP = ajaxData.responseText;
					console.log(dataFromPHP);
					console.log("Grades Released");

				
			}
			else{
				console.log("ERROR : " + ajaxData.status);
			}
		}
	};
	ajaxData.send();

}



var isChecked;
function getRevisedForCheck( ) {



	sName = document.getElementById("UCID" ).value;


	var cURL = 'getRevisedGrade.php?dataToSend='+sName;
	var ajaxData = new XMLHttpRequest();
	ajaxData.open('GET', cURL, true);
	ajaxData.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		if (ajaxData.readyState === DONE) {
			if (ajaxData.status === OK) {
				var dataFromPHP = ajaxData.responseText;
				console.log("*********************************");
				console.log(dataFromPHP);
				// console.log(typeof(dataFromPHP));
			    // document.getElementById("addComm0").value = dataFromPHP;
				console.log("*********************************");

				var regexForMatch = /released/;

				isChecked = regexForMatch.test(dataFromPHP);
				console.log("HERES IS ISCHECDK IN FUNCIONT"+isChecked);




				}
			else{
				console.log("ERROR : " + ajaxData.status);
			}
		}
	};
	ajaxData.send();
}


// function readyCheck( ) {


// var cURL = 'gradeReadyCheck.php?dataToSend='+ document.getElementById("UCID").value;
// 	var ajaxData = new XMLHttpRequest();
// 	ajaxData.open('GET', cURL, true);
// 	ajaxData.onreadystatechange = function(){
// 		var DONE = 4;
// 		var OK = 200;
// 		if (ajaxData.readyState === DONE) {
// 			if (ajaxData.status === OK) {
			
// 				// console.log("Checking if grade is ready");
// 				console.log(ajaxData.responseText);
				
 

// 				var readyCheckString =/GRADING IN PROGRESS/;
// 				isChecked = readyCheckString.test(ajaxData.responseText);
// 				console.log("HERE IS ISCHECKED : "+isChecked);


// 				// if (readyCheckString.test(ajaxData.responseText)) {
// 				// 	console.log("ITS TRUE");
// 				// 	console.log(readyCheckString.test(ajaxData.responseText));
// 				// 	return 'true';
// 				// }




// 				// var check = readyCheckString.test(ajaxData.responseText);
// 				// console.log("HER IS THE CHECK IN FUCNTION "+check);
// 				// return check;

// 				// return (readyCheckString.test(ajaxData.responseText));

// 			}
// 			else{
// 				console.log("ERROR : " + ajaxData.status);
// 			}
// 		}
// 	};
// 	ajaxData.send();


// }