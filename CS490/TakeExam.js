
	// currentIDArray = [];



function startExam(argument) {
	
	if (!(confirm("Start Exam?"))) {
		return;
	}
	document.getElementById("startButton").classList.add("hidden");
	document.getElementById("submitButton").classList.remove("hidden");




	var cURL = 'getExamQ.php?questionText=';
	var ajaxData = new XMLHttpRequest();
	ajaxData.open('GET', cURL, true);
	ajaxData.onreadystatechange = function(){
		var DONE = 4;
		var OK = 200;
		if (ajaxData.readyState === DONE) {
			if (ajaxData.status === OK) {
				console.log("here is the php data");
				console.log(ajaxData.responseText);
				var dataFromPHP = ajaxData.responseText;



				console.log(typeof dataFromPHP);
				console.log(dataFromPHP.length);
				console.log("HERE IS THE SUBSTINGED DATA ");
				console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
				console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

				newInArray=ajaxData.responseText.split('[');
				console.log(newInArray);
				qPoints = newInArray[1].split('"');
				qqPoints = qPoints[0].split(' ');
				// qPoints = newInArray[1].replace("\n",'');

				console.log(typeof(qqPoints));
				console.log(qqPoints);

				receiveArray = newInArray[0].split('|');
			



				receiveArray.shift();

				currentIDArray = [];

				examIDArray = [];
				currentQArray = [];

				//strip the QID from the receiveArray
				//send the QID to currentIDarray
				//send the question text to currentQArray
				//handle element 0 of input

				for (var i = 0; i < receiveArray.length; i++) {
					// if (i == 0) {
					// 	currentIDArray[i] = receiveArray[i].substring(3,7);
					// 	currentQArray[i]  = receiveArray[i].substring(11);

					// }
					// else{

						var n = receiveArray[i].search(/[a-z]/);
						console.log(n);
						currentIDArray[i] = receiveArray[i].substring(1,n-1);
						currentQArray[i]  = receiveArray[i].substring(n-1);

					// }
					// console.log("length :",receiveArray[i].length);
					console.log("QID :",currentIDArray[i]);
					console.log("QTEXT :",currentQArray[i]);
				}

				for (var i = 0; i < receiveArray.length; i++) {
					document.getElementById("returnText"+[i]).innerHTML= currentQArray[i];
					document.getElementById("returnText"+[i]).classList.remove("hidden");
					document.getElementById("question"+[i]).classList.remove("hidden");
					document.getElementById("label"+[i]).classList.remove("hidden");
					document.getElementById("label2"+[i]).classList.remove("hidden");
					document.getElementById("points"+[i]).classList.remove("hidden");
					document.getElementById("points"+[i]).innerHTML= qqPoints[i];




				}	
			}
			else{
				console.log("ERROR : " + ajaxData.status);
			}
		}
	};
	ajaxData.send();
}



function submitExam(){

	if (!(confirm("Are you sure you want \nto submit this exam?"))) {
		return;
	}

	// alert("Exam submitted");

	console.log("testing");

	//Get array of question ID
	//Get array of answer Text
	//Merge them together in JSON object
	//Send to php

	// var qIDArray = [];
	var sendData = [];
	var answerText = [];
// var i = 0;
	// var	submitArray = [];
		// console.log(document.getElementById("question"+i).value);


	for (var i = 0; i < 5; i++) {
		// submitArray[i] = qIDArray[j];
		// answerText [i] = currentIDArray[i];
		// string = string
		answerText [i] = document.getElementById("question"+i).value.replace(/\"/g,'\'');
		// console.log(i);
	}

	// AArray = ['a','b','c','d','e'];
	// QArray = ['1','2','3','4','5'];
	var j =0;
	for (var i = 0; i < 10; i+=2) {
		// console.log(i);
		// console.log(j);
		sendData[i] = currentIDArray[j];
		sendData[i+1] = answerText[j++];
		// j++;

	}

	// var ucid = document.getElementById("UCID").value;

	sendData.unshift(document.getElementById("UCID").value);

	data2Send = JSON.stringify(sendData);


	console.log("HERE IS THE JAVASCRIPT CRAP")
	console.log("*******************************************")

	console.log("\nHere is send data \n");
	console.log(data2Send);
	console.log("\nHere is send data \n");

	console.log("\nHere is ENCODED send data \n");
	console.log(encodeURIComponent(data2Send)); 
	console.log("\nHere is ENCODED send data \n");
		
	console.log("\nHere is DECODED send data \n");
	console.log(decodeURIComponent(data2Send)); 
	console.log("\nHere is DECODED send data \n");


	console.log("HERE IS THE JAVASCRIPT CRAP")
	console.log("*******************************************")

	
	data3send = encodeURIComponent(data2Send); 
 var cURL = 'submitStudentExam.php?dataToSend='+data3send;

	console.log(cURL);

    var ajaxData = new XMLHttpRequest();
    ajaxData.open('GET', cURL, true);
    ajaxData.onreadystatechange = function() {
        var DONE = 4;
        var OK = 200;
        if (ajaxData.readyState === DONE) {
            if (ajaxData.status === OK) {
            	// console.log("Here is the curl responseText");
            	// console.log("===================================================");
                console.log(ajaxData.responseText);
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
    submitReviewedExam();
}








function submitReviewedExam(argument) {

// 	if (!confirm("Submit?")) {
// 		return;
// 	}

// 	releaseGrades();
// // $tester= array('ucid' => "studentUCID",'grade' => "the new grade",'comments'=>"The updated comments");
// 	var sendString;
// 	// console.log("HERE IS THE DATA TO SEND");
// 	// console.log(studentName);
//  //    console.log(document.getElementById("studentGrade").value);
// 	// console.log(document.getElementById("addComm0").value);
// 	// console.log("HERE IS THE DATA TO SEND");


// 	dataString ='';
// 	dataString = '|'+ studentName+'|';

// 	// dataString += '['+document.getElementById("studentGrade").value+'|';

// 	// dataString += "comments: "+"TEST COMMENTS"+'|';

// 	data2send={};
// 	data2send['ucid'] = studentName;
// 	data2send['grade'] = document.getElementById("studentGrade").value;
// 	// data2send['comments'] = document.getElementById("addComm0").value;

// 	var commArray={};
// 	for (var i = 0; i < currentIDArray.length; i++) {
// 		// commArray[i] =document.getElementById("addComm"+i).value;
// 		dataString += document.getElementById("addComm"+i).value+'~';
// 	}

// 	dataString+= '>';

// 	for (var i = 0; i < currentIDArray.length; i++) {

// 		for (var j = 0; j < 6; j++) {
// 			if (Number(document.getElementById("commentPoint"+i+j).value) != -777) {
// 				dataString += document.getElementById("commentPoint"+i+j).value + '~';
// 				// console.log("( "+i+","+j+")");
// 				// console.log(Number(document.getElementById("commentPoint"+i+j).value));
				
// 			}
// 		}
// 	dataString+= '!';


// 	}
// 	dataString += 'released';



// 	// dataString += '|'+sendingGradePoints;
// 	console.log(sendingGradePoints);
// 	console.log("HERE IS TH SEDING STRING")
// 	console.log(dataString);

// 	data2send['comments'] = commArray;


// 	sendingArray = JSON.stringify(data2send);
// 	// console.log("HERE IS THE JSON DATA");
// 	// console.log(sendingArray);
	

// 	// console.log(commArray);

// 	// data2send=[];
// 	// data2send.push(studentName);
// 	// data2send.push(maxPoints);
// 	// console.log(data2send);



	var cURL = 'sendReview.php?dataToSend=|'+document.getElementById("UCID").value+'|~~~~>0~0~0~!0~0~0~0~0~!0~0~0~!0~0~!';
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
	// alert("Review Submitted");

}


// console.log(":here is the sendtata\n");
// 	for (var i = 0; i < sendData.length; i++) {
// 		console.log(sendData[i]);
// 	}


// 	for (var i = 0; i < currentIDArray.length; i++) {
// 		// console.log(currentIDArray[i]);
// 	}

	// for (var i = 0; i < answerText.length; i++) {
	// 	console.log(currentIDArray[i]);
	// 	console.log(answerText[i]);
	// }


	// testArray = [];

	// var j =0;
	// for (var i = 0; i < 10; i+2) {
	// 	// testArray[i] = AArray[i];
	// 	// testArray[i+1] = QArray[j++];

	// 	// console.log(AArray[i]);
	// 	// console.log(QArray[j++]);


	// 	// console.log(i);
	// 	// console.log(j++)
	// }


	// for (var i = 0; i < testArray.length; i++) {
	// 	console.log(testArray[i]);
	// }


