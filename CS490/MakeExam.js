
makeExamIDStack=[];
rightUpdateIndex=0;

function updateExam(questionLocalID){
	//Add to stack

	console.log(parseArray);
	console.log(typeof(parseArray[0]));

	console.log("here is the quiestion local ID");
	console.log(questionLocalID);
	console.log(receiveArray[questionLocalID]);


	console.log("%%%%%%%%%%%%%%%%%%%%%");
	console.log("qidLabelText"+questionLocalID);

	var idNo = document.getElementById("qidLabelText"+questionLocalID).innerHTML;
	console.log("HERE IS IDNO : "+ idNo);
	makeExamIDStack.push(idNo);

	// var result = parseArray.find( id => id.id === idNo );
	// console.log(result);
	writeJsonToTableADDQRight();

	console.log(makeExamIDStack);
	console.log("%%%%%%%%%%%%%%%%%%%%%");


}




function updateExamRemove(questionLocalID) {

	console.log(makeExamIDStack);
	console.log(questionLocalID);
	var idNo = document.getElementById("RqidLabelText"+questionLocalID).innerHTML;

	// delete makeExamIDStack[questionLocalID];

	console.log(idNo);

	for (var i = 0; i < makeExamIDStack.length; i++) {
		if (makeExamIDStack[i] == idNo) {
			makeExamIDStack.splice(i,1);
			break;
		}
	}
	writeJsonToTableADDQRight();
	console.log(makeExamIDStack);

}





function writeJsonToTableADDQRight() {
	
	clearRight();


	for (var q = 0; q < makeExamIDStack.length; q++) {
	
	var jsonDataWrite = parseArray.find( id => id.id === makeExamIDStack[q] );
	



	document.getElementById("RCTable"+q).classList.remove("hidden");
	document.getElementById("RqidLabel"+q).classList.remove("hidden");
	document.getElementById("RqidLabelText"+q).classList.remove("hidden");
	document.getElementById("RreturnText"+q).classList.remove("hidden");
	document.getElementById("RpointsInput"+q).classList.remove("hidden");

	
	document.getElementById("RqidLabelText"+q).innerHTML = jsonDataWrite.id;






	var underscoreRegex = /_/;
	if (underscoreRegex.test(jsonDataWrite.qtext)) 
		document.getElementById("RreturnText"+q).innerHTML= jsonDataWrite.qtext.replace(/_/g,' ');
	else
		document.getElementById("RreturnText"+q).innerHTML = jsonDataWrite.qtext;


	for (var i = 1; i <= 5; i++) {
		// console.log("here is the a data");
		// console.log(parsedJson['a'+i]);
		if (jsonDataWrite['a'+i] !== 'NULL') {
			// console.log("ITS NOT NULL")
			
			console.log("update index : "+q+" i val : "+i);
			document.getElementById("RTCRow"+q+i).classList.remove("hidden");
			document.getElementById("RtestCaseText"+q+i).classList.remove("hidden");
			document.getElementById("RtestCaseText"+q+i).innerHTML= jsonDataWrite['t'+i].replace(/_/g,' ');
			document.getElementById("RexpectedAnswer"+q+i).classList.remove("hidden");
			document.getElementById("RexpectedAnswer"+q+i).innerHTML= jsonDataWrite['a'+i].replace(/_/g,' ');
		}
	}
	rightUpdateIndex++;
	}


}





function clearRight() {
	



	for (var i = 0; i < 10; i++) {
	//Clear page before writing search resuts.
		document.getElementById("RCTable"+i).classList.add("hidden");
		document.getElementById("RqidLabel"+i).classList.add("hidden");
		document.getElementById("RqidLabelText"+i).classList.add("hidden");
		document.getElementById("RreturnText"+i).classList.add("hidden");
		document.getElementById("RpointsInput"+i).classList.add("hidden");



		document.getElementById("RreturnText"+i).innerHTML= '&nbsp';
		document.getElementById("RqidLabelText"+i).innerHTML = '0';


		// document.getElementById("returnText"+[i]).style.backgroundColor= "transparent";
				
			for (var j = 0; j < 6; j++) {
				//Clear the table first
			document.getElementById("RTCRow"+i+j).classList.add("hidden");
			document.getElementById("RtestCaseText"+i+j).classList.add("hidden");
			document.getElementById("RtestCaseText"+i+j).innerHTML='&nbsp';
			document.getElementById("RexpectedAnswer"+i+j).classList.add("hidden");
			document.getElementById("RexpectedAnswer"+i+j).innerHTML= '&nbsp';
			}
	}
		rightUpdateIndex = 0;




}



function sendExamQuestions() {
	

	if (confirm("Submit Exam?")){

		console.log(makeExamIDStack);


		if (makeExamIDStack.length == 0) {
			alert("Add questions to exam");
			return;
		}

	// for (var i = 0; i < 5; i++) {
	// 	if (document.getElementById("questionPoints"+(i)).innerHTML === "");
	// 	alert("MISSING");
	// 	return;
	// }


	// var difft = 0;
	
	//Checks for type checkboxes, ORs it to difft
	// for (var i = 0; i < 5; i++) {
	// 	if(ckb = document.getElementById("Rcheckbox"+[i]).checked){
	// 		difft |= document.getElementById("Rcheckbox"+[i]).value;
	// 	}	
	// }
	//Checks for difficulty, ORs it to difft
	// var dif = document.getElementById("Rdifficulty");
	// difft |= dif.options[dif.selectedIndex].value;
	
	var sendStack = [];
	sendStack.length=0;
	// sendStack = makeExamIDStack;

	for (var i = 0; i < makeExamIDStack.length; i++) {
		sendStack[i] =  makeExamIDStack[i];
	}

	console.log('MakeExamLength OUT : ' + makeExamIDStack.length);


	


	sendStack.push('9999');
	var pointsList=[];
	//Get the points values
	for (var i = 0; i < makeExamIDStack.length; i++) {
			console.log('MakeExamLength : ' + makeExamIDStack.length);


// console.log(document.getElementById("Rpoints"+i).value);
			// console.log(typeof(document.getElementById("Rpoints"+i).value))


		if (Number(document.getElementById("Rpoints"+i).value) < 1) {
			// console.log("LESS THAN 1 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
			// console.log(document.getElementById("Rpoints"+i).value);
			// console.log(typeof(document.getElementById("Rpoints"+i).value))
			alert("Enter question point value > 0 for question # "+i);
			return;
		}
		sendStack.push(document.getElementById("Rpoints"+(i)).value);
		// console.log(i-5);
	}




	// console.log("HERE IS SEND STACK");
	// console.log("++++++++++++++++++++++++++++++++++++++++++++");
	// console.log(pointsList);
	// console.log(pointsList.length);
	

// 	console.log(sendStack);
// 	console.log(sendStack.length);
// console.log("++++++++++++++++++++++++++++++++++++++++++++");
// console.log("HERE IS EXAM QID STACK");
// 	console.log("++++++++++++++++++++++++++++++++++++++++++++");
	// console.log(pointsList);
	// console.log(pointsList.length);
	

// 	console.log(examQIDStack);
// 	console.log(examQIDStack.length);
// console.log("++++++++++++++++++++++++++++++++++++++++++++");


	// console.log("HERE IS TEH POITNS ID LENGTH");
	// console.log(examQIDStack.length);

	// var jsonPArray = JSON.stringify(pointsList);



	var jsonQArray = JSON.stringify(sendStack);
	console.log(jsonQArray);

    var cURL = 'sendExamQuestions.php?dataToSend='+jsonQArray;

	console.log(cURL);

    var ajaxData = new XMLHttpRequest();
    ajaxData.open('POST', cURL, true);
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

    alert("Exam Created")
}

	

}


function totalPointUpdater() {
	console.log("TESTING");
	var pointTotal = 0;

	for (var i = 0; i < makeExamIDStack.length; i++) {
		pointTotal += Number(document.getElementById("Rpoints"+i).value);
	}

	console.log(pointTotal);
	document.getElementById("pointTotal").innerHTML = pointTotal;

}



// window.onload=updatePoints;



// window.onload=function(){
// 	document.getElementById('questionPoints0').addEventListener("keyup", function (evt) {
//     document.getElementById("Total Points").innerHTML= this.value;

//     // console.log(this.value);
// }, false);
// }


// function updatePoints(){
// 	var totalPoints = 0;
// 	for (var i = 0; i < 10; i++) {
// 		totalPoints += Number(document.getElementById('questionPoints'+[i]).value);	
// 	}
//     document.getElementById("Total Points").innerHTML= totalPoints;

	
// }



// function testpointA(){
// 	for (var i = 0; i < 10; i++) {
// 		document.getElementById("questionPoints"+[i]).classList.remove("hidden");
// 	}
	


// }
// function testpointR(){
// 	for (var i = 0; i < 10; i++) {
// 		document.getElementById("questionPoints"+[i]).classList.add("hidden");
// 	}
	


// }







// 	if (operation == 1) {
// 		examQuestionStack.push(currentQArray[questionLocalID]);
// 		examQIDStack.push(currentIDArray[questionLocalID]);

// 	}
// 	//Remove from stack
// 	if (operation == 0) {
// 		examQuestionStack.splice(questionLocalID,1);
// 		examQIDStack.splice(questionLocalID,1);
// 	}

// 	//Clear
// 	for (var i = 0; i < 10 ; i++) {
// 			// document.getElementById("questionPoints"+i).style.display = "block";
// 			document.getElementById("RreturnText"+i).innerHTML= "";
// 			document.getElementById("RreturnText"+i).classList.add("hidden");

// 			// document.getElementById("examQuestion"+i).style.backgroundColor= "transparent";
// 			// document.getElementById("questionPoints"+i).classList.add("hidden");

// 		}

// 	//rewrite
// 	for (var i = 0; i < examQuestionStack.length; i++) {
			
// 			// console.log("writing this to the stack");
// 			// console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
// 			// console.log(document.getElementById("examQuestion"+i).innerHTML= examQuestionStack[i]);
			
// 			// document.getElementById("questionPoints"+i).classList.remove("hidden");
			
// 			document.getElementById("RreturnText"+i).classList.remove("hidden");
// 			document.getElementById("RreturnText"+i).innerHTML= examQuestionStack[i];
// 			// document.getElementById("examQuestion"+i).style.backgroundColor= "#82ffbc";
// 		}



// 		console.log("Updated stack ");
// 	for (var i = 0; i < examQIDStack.length; i++) {
// 		console.log(examQIDStack[i]);
// 	}

// }


// function logout(){
// 	if(confirm("Logout?")){
// 		window.location.href = "logout.php";
// 	}
// }

// function addToExam(questionLocalID){

// 	examQuestionStack.push(questionLocalID);

// 	// console.log("ADD length is : ",examQuestionStack.length);

// 	printQuestionStack();

// 	// console.log(examQuestionStack[0]);


// 	// for (var i = 0; i < examQuestionStack.length; i++) {
	
// 	// 	document.getElementById("examQuestion"+i).innerHTML= receiveArray[examQuestionStack[i]];
// 	// 	document.getElementById("examQuestion"+i).style.backgroundColor= "#82ffbc";

// 	// }

// 	// console.log(questionLocalID);
// }


// function removeFromExam(questionLocalID){

// 		examQuestionStack.splice(questionLocalID,1);
// 	// console.log("REMOVE  length is : ",examQuestionStack.length);
// 		printQuestionStack();


// // 	for (var i = 0; i < examQuestionStack.length; i++) {

// // 		document.getElementById("examQuestion"+i).innerHTML= "";
// // 		document.getElementById("examQuestion"+i).style.backgroundColor= "transparent";
// // }

// }


// function printQuestionStack(){
	
// 	for (var i = 0; i < examQuestionStack.length; i++) {
// 			document.getElementById("examQuestion"+i).innerHTML= receiveArray[examQuestionStack[i]];
// 			document.getElementById("examQuestion"+i).style.backgroundColor= "#82ffbc";
// 		}

// 	for (var i = examQuestionStack.length; i < 10 ; i++) {
// 			document.getElementById("examQuestion"+i).innerHTML= "";
// 			document.getElementById("examQuestion"+i).style.backgroundColor= "transparent";
// 		}

// }







// function sendRequest(argument) {

// difft =0;
// //Checks for type checkboxes, ORs it to difft
// 	for (var i = 0; i < 5; i++) {
// 		if(ckb = document.getElementById("Rcheckbox"+[i]).checked){
// 			difft |= document.getElementById("Rcheckbox"+[i]).value;
// 		}	
// 	}
// 	//Checks for difficulty, ORs it to difft
// 	var dif = document.getElementById("Rdifficulty");
// 	difft |= dif.options[dif.selectedIndex].value;
	
// 	var dataToSend = {};

// 	dataToSend.difft = difft;

// 	// if (difft == 0) {
// 	// 	difft = 255;
// 	// }

// 	var SendThis = JSON.stringify(dataToSend);
//     var cURL = 'getQforMakeExam.php?dataToSend='+SendThis;

// 	console.log(difft);



// 	// var cURL = 'Qstart.php?questionText=';
// 	//Init AJAX 
// 	var ajaxData = new XMLHttpRequest();
// 	//This sends the url with data as a GET
// 	ajaxData.open('GET', cURL, true);
// 	ajaxData.onreadystatechange = function(){
// 		//Set return code so I remember what is what
// 		var DONE = 4;
// 		var OK = 200;
// 		//Checks return codes for error
// 		if (ajaxData.readyState === DONE) {
// 			if (ajaxData.status === OK) {
				
// 	console.log(difft);

// 				//If good 		
// 				// console.log("Length");
// 				// console.log(ajaxData.responseText.length);
// 				// console.log("Length");
// 				console.log(ajaxData.responseText);

// 				var dataFromPHP = ajaxData.responseText;
// 				if(dataFromPHP.indexOf('|') === -1){return;} 

// 				// console.log("CHECKING FOR PIPE");
//  			// 	console.log(dataFromPHP.indexOf('|')); 
// 				// console.log("CHECKING FOR PIPE");	

// 				//Checks for empty dataset



// 				// // var dataFromPHP = JSON.parse(ajaxData.responseText);
// 				// // document.getElementById("returnText").innerHTML= dataFromPHP.status
// 				// if (dataFromPHP.status === 1) {
// 				// 	window.location.assign("Student.html");
// 				// 	return;
// 				// }
// 				// if (dataFromPHP.status === 2) {
// 				// 	window.location.assign("Instructor.html");
// 				// 	return;
// 				// }
// 				// if (dataFromPHP.status === 0) {
// 				// 	document.getElementById("returnText").innerHTML= "Username or Password Incorrect";
// 				// 	console.log(dataFromPHP.status);
// 				// 	return;
// 				// }


// 				// console.log(ajaxData.responseText.split('|'));

// 				receiveArray = ajaxData.responseText.split('|');

// 				console.log("Array length : "+receiveArray.length);


// 				// jsondata = JSON.stringify(receiveArray);
// // 
// 				// console.log(jsondata);
// 				// sendArray("MakeExam.php", jsondata);

// 				// console.log("Heres teh first 4 characters in each");
// 				// console.log("assgoblins".substring(0,4));
// 				// console.log(typeof receiveArray[0]);

// 				//********************************
// 				//ELEMENT 0 QUESTION ID IS BETWEEN CHARACTERS 8 & 11
// 				//********************************

// 				// console.log(receiveArray[0].substring(8,11));
// 				// console.log(receiveArray[0]);

// 				// newArray = JSON.stringify(receiveArray[0]);

// 				// for (var i =15; i < 18; i++) {
// 				// 	console.log(newArray[i]);
// 				// }

// 				currentIDArray = [];
// 				examIDArray = [];
// 				currentQArray = [];

// 				//strip the QID from the receiveArray
// 				//send the QID to currentIDarray
// 				//send the question text to currentQArray
// 				//handle element 0 of input

// 				// for (var i = 0; i < receiveArray.length; i++) {
// 				// 	if (i == 0) {
// 				// 		currentIDArray[i] = receiveArray[i].substring(8,11);
// 				// 		currentQArray[i]  = receiveArray[i].substring(11);

// 				// 	}
// 				// 	else{
// 				// 		currentIDArray[i] = receiveArray[i].substring(1,4);
// 				// 		currentQArray[i]  = receiveArray[i].substring(4);

// 				// 	}
// 				// 	console.log("length :",receiveArray[i].length);
// 				// 	// console.log()
// 				// }

// 				// var flag = false;
// 				for (var i = 0; i < receiveArray.length; i++) {
// 					var n = receiveArray[i].search(/[a-z]/);
// 					console.log("N value : "+n);
// 					// if (receiveArray[i].substring(1,n-1) == 0) {flag = true};
// 					currentIDArray[i] = Number(receiveArray[i].substring(0,n-1));
// 					console.log("ID : "+currentIDArray[i]);
// 					currentQArray[i]  = receiveArray[i].substring(n-1);
// 					console.log(currentQArray[i]);
// 				}
// 				console.log("here is the Q array");
// 				console.log(currentQArray);
// 				console.log("Here is the QID array");
// 				console.log(currentIDArray)

// 				// if (flag) {
// 				// 	currentIDArray.shift();
// 				// 	currentQArray.shift();
// 				// }
// 				// for (var i = 0; i < currentIDArray.length; i++) {
// 				// 	console.log("QID : ",currentIDArray[i]);
// 				// 	console.log("Question text : ", currentQArray[i]);
					
// 				// }
// 				// if(dataFromPHP.indexOf('|') === -1){return;} 

// 				//BugFix
// 				//Remove empty array elements
// 				//Usually the first element is empty
// 				// currentIDArray.splice(0,1);
// 				// currentQArray.splice(0,1);



// 				//Clear page before writing search resuts.
// 				for (var i = 0; i < 20; i++) {
// 					document.getElementById("returnText"+[i]).innerHTML= "";
// 					document.getElementById("returnText"+i).classList.add("hidden");

// 					// document.getElementById("returnText"+[i]).style.backgroundColor= "transparent";
// 				}
// 				for (var i = 0; i < receiveArray.length-1; i++) {
// 					document.getElementById("returnText"+i).classList.remove("hidden");
// 					document.getElementById("returnText"+[i]).innerHTML= currentQArray[i];

// 					// document.getElementById("returnText"+[i]).style.backgroundColor= "#82ffbc";
// 				}

// 					// document.getElementById("returnText"+[6]).innerHTML= "assgoblins";
// 					// document.getElementById("returnText"+[6]).style.backgroundColor= "#82ffbc";
// 					// console.log("testing ass goblins");

// 					// document.getElementById("returnTexthello0").innerHTML= receiveArray[0];

// 				// for (var i = 0; i < receiveArray.length; i++) {
// 				// 	console.log(receiveArray[i]);
// 				// }

// 				// for (var i = 0; i < ajaxData.responseText.length; i++) {
// 				// 	console.log(ajaxData.responseText[i]);
// 				// }
// 				// console.log(ajaxData.responseText[i]);
// 			}
// 			//If Bad
// 			else{
// 				console.log("ERROR : " + ajaxData.status);
// 			}
// 		}
// 	};
// 	ajaxData.send();
// }