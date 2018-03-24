

function sendRequest(argument) {

difft =0;
//Checks for type checkboxes, ORs it to difft
	for (var i = 0; i < 5; i++) {
		if(ckb = document.getElementById("Rcheckbox"+[i]).checked){
			difft |= document.getElementById("Rcheckbox"+[i]).value;
		}	
	}
	//Checks for difficulty, ORs it to difft
	var dif = document.getElementById("Rdifficulty");
	difft |= dif.options[dif.selectedIndex].value;
	
	var dataToSend = {};

	dataToSend.difft = difft;

	var SendThis = JSON.stringify(dataToSend);
    var cURL = 'getQforMakeExam.php?dataToSend='+SendThis;

	console.log(difft);



	// var cURL = 'Qstart.php?questionText=';
	//Init AJAX 
	var ajaxData = new XMLHttpRequest();
	//This sends the url with data as a GET
	ajaxData.open('GET', cURL, true);
	ajaxData.onreadystatechange = function(){
		//Set return code so I remember what is what
		var DONE = 4;
		var OK = 200;
		//Checks return codes for error
		if (ajaxData.readyState === DONE) {
			if (ajaxData.status === OK) {
				//If good 		
				console.log(ajaxData.responseText);
				var dataFromPHP = ajaxData.responseText;






				// // var dataFromPHP = JSON.parse(ajaxData.responseText);
				// // document.getElementById("returnText").innerHTML= dataFromPHP.status
				// if (dataFromPHP.status === 1) {
				// 	window.location.assign("Student.html");
				// 	return;
				// }
				// if (dataFromPHP.status === 2) {
				// 	window.location.assign("Instructor.html");
				// 	return;
				// }
				// if (dataFromPHP.status === 0) {
				// 	document.getElementById("returnText").innerHTML= "Username or Password Incorrect";
				// 	console.log(dataFromPHP.status);
				// 	return;
				// }


				// console.log(ajaxData.responseText.split('|'));

				receiveArray = ajaxData.responseText.split('|');
				// jsondata = JSON.stringify(receiveArray);
// 
				// console.log(jsondata);
				// sendArray("MakeExam.php", jsondata);

				// console.log("Heres teh first 4 characters in each");
				// console.log("assgoblins".substring(0,4));
				// console.log(typeof receiveArray[0]);

				//********************************
				//ELEMENT 0 QUESTION ID IS BETWEEN CHARACTERS 8 & 11
				//********************************

				// console.log(receiveArray[0].substring(8,11));
				// console.log(receiveArray[0]);

				// newArray = JSON.stringify(receiveArray[0]);

				// for (var i =15; i < 18; i++) {
				// 	console.log(newArray[i]);
				// }

				currentIDArray = [];
				examIDArray = [];
				currentQArray = [];

				//strip the QID from the receiveArray
				//send the QID to currentIDarray
				//send the question text to currentQArray
				//handle element 0 of input

				// for (var i = 0; i < receiveArray.length; i++) {
				// 	if (i == 0) {
				// 		currentIDArray[i] = receiveArray[i].substring(8,11);
				// 		currentQArray[i]  = receiveArray[i].substring(11);

				// 	}
				// 	else{
				// 		currentIDArray[i] = receiveArray[i].substring(1,4);
				// 		currentQArray[i]  = receiveArray[i].substring(4);

				// 	}
				// 	console.log("length :",receiveArray[i].length);
				// 	// console.log()
				// }

				var flag = false;
				for (var i = 0; i < receiveArray.length; i++) {
					var n = receiveArray[i].search(/[a-z]/);
					// console.log(n);
					// if (receiveArray[i].substring(1,n-1) == 0) {flag = true};
					currentIDArray[i] = receiveArray[i].substring(1,n-1);
					currentQArray[i]  = receiveArray[i].substring(n-1);
				}

				// if (flag) {
				// 	currentIDArray.shift();
				// 	currentQArray.shift();
				// }
				for (var i = 0; i < currentIDArray.length; i++) {
					console.log("QID : ",currentIDArray[i]);
					console.log("Question text : ", currentQArray[i]);
				}




				//Clear page before writing search resuts.
				for (var i = 0; i < 10; i++) {
					document.getElementById("returnText"+[i]).innerHTML= "";
					document.getElementById("returnText"+[i]).style.backgroundColor= "transparent";
				}
				for (var i = 0; i < receiveArray.length; i++) {
					document.getElementById("returnText"+[i]).innerHTML= currentQArray[i];
					document.getElementById("returnText"+[i]).style.backgroundColor= "#82ffbc";
				}

					// document.getElementById("returnText"+[6]).innerHTML= "assgoblins";
					// document.getElementById("returnText"+[6]).style.backgroundColor= "#82ffbc";
					// console.log("testing ass goblins");

					// document.getElementById("returnTexthello0").innerHTML= receiveArray[0];

				// for (var i = 0; i < receiveArray.length; i++) {
				// 	console.log(receiveArray[i]);
				// }

				// for (var i = 0; i < ajaxData.responseText.length; i++) {
				// 	console.log(ajaxData.responseText[i]);
				// }
				// console.log(ajaxData.responseText[i]);
			}
			//If Bad
			else{
				console.log("ERROR : " + ajaxData.status);
			}
		}
	};
	ajaxData.send();
}










	var examQuestionStack = [];
	var examQIDStack = [];





function updateExam(questionLocalID, operation){
	//Add to stack


	console.log("here is the quiestion local ID");
	console.log(questionLocalID);
	console.log(receiveArray[questionLocalID]);


	if (operation == 1) {
		examQuestionStack.push(currentQArray[questionLocalID]);
		examQIDStack.push(currentIDArray[questionLocalID]);
	}
	//Remove from stack
	if (operation == 0) {
		examQuestionStack.splice(questionLocalID,1);
		examQIDStack.splice(questionLocalID,1);
	}

	//Clear
	for (var i = 0; i < 10 ; i++) {
			document.getElementById("examQuestion"+i).innerHTML= "";
			document.getElementById("examQuestion"+i).style.backgroundColor= "transparent";
		}

	//rewrite
	for (var i = 0; i < examQuestionStack.length; i++) {
			
			// console.log("writing this to the stack");
			// console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
			// console.log(document.getElementById("examQuestion"+i).innerHTML= examQuestionStack[i]);
			

			document.getElementById("examQuestion"+i).innerHTML= examQuestionStack[i];
			document.getElementById("examQuestion"+i).style.backgroundColor= "#82ffbc";
		}



		console.log("Updated stack ");
	for (var i = 0; i < examQIDStack.length; i++) {
		console.log(examQIDStack[i]);
	}

}


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







function sendExamQuestions() {
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

	var jsonQArray = JSON.stringify(examQIDStack);
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
}