

function sendQuestion() {
	var $questionText = document.getElementById("question").value;
	// var $questionText = document.getElementById("easy").value;
	// var $questionText = document.getElementById("medium").value;
	// var $questionText = document.getElementById("hard").value;



	// var difft = 0;






	// console.log(difft);
		// <!-- difft -->
		// <!-- 2^0   1== for -->
		// <!-- 2^1   2== while -->
		// <!-- 2^2   4 == Import -->
		// <!-- 2^3   8== If -->
		// <!-- 2^4  16== misc -->
		// <!-- 2^5  32 == easy -->
		// <!-- 2^6  64== medium -->
		// <!-- 2^7 128 == hard -->


	// var forLoopisCheck= 	document.getElementById("forLoop").checked;
	// var whileLoopisChecked= document.getElementById("whileLoop").checked;
	// var dictisChecked= 		document.getElementById("dict").checked;
	// var ifStatementisChecked= document.getElementById("ifStatement").checked;
	// var miscisChecked= 		document.getElementById("misc").checked;
	
	var difft = 0;
	
	//Checks for type checkboxes, ORs it to difft
	for (var i = 0; i < 5; i++) {
		if(ckb = document.getElementById("checkbox"+[i]).checked){
			difft |= document.getElementById("checkbox"+[i]).value;
		}

		// console.log(document.getElementById("checkbox"+[i]).checked);
		// console.log('checkbox'+[i]);
	}
	var dataToSend = {};


	// if(document.getElementById("forLoop").checked){
	// 	difft |= 1;
	// }if(document.getElementById("whileLoop").checked){
	// 	difft |= 2;
	// }if(document.getElementById("dict").checked){
	// 	difft |= 4;
	// }if(document.getElementById("ifStatement").checked){
	// 	difft |= 8;
	// }if(document.getElementById("misc").checked){
	// 	difft |= 16;
	// }


	//Checks for difficulty, ORs it to difft
	var dif = document.getElementById("difficulty");
	difft |= dif.options[dif.selectedIndex].value;

// var e = document.getElementById("ddlViewBy");
// var strUser = e.options[e.selectedIndex].text;


// console.log(difft);

	// console.log("Question Text \n");
	// console.log("============================= \n");
	// console.log($questionText);
	// console.log("============================= \n");

	// This is the question text that includes whitespace
	var fixedString = $questionText.replace(/(?:\r\n|\r|\n)/g, '<br />');
	// console.log($fixedString);

	//Get DIFFt
	// difft

	//GET POINTS
	var questionPoints = document.getElementById("questionPoints").value;



	// console.log($questionPoints);

	var unencodedata = [];

	unencodedata[0] = fixedString;
	unencodedata[1] = difft;
	unencodedata[2] = questionPoints;


	dataToSend.questionText = fixedString;
	dataToSend.difft = difft;
	dataToSend.points = questionPoints;



	//Get Test Cases

	var expectedCases = "";
	for (var i = 0; i < 5; i++) {
		if(!(document.getElementById("testCase"+[i]).value == '') && 
			!(document.getElementById("expectedAnswer"+[i]).value == '')){
			// expectedCases +=  '"'+document.getElementById("testCase"+[i]).value + ':' + document.getElementById("expectedAnswer"+[i]).value +'",' ;
			dataToSend['testCase'+i] =  document.getElementById("testCase"+[i]).value;
			dataToSend['testAnswer'+i] =  document.getElementById("expectedAnswer"+[i]).value;

			unencodedata.push( document.getElementById("testCase"+[i]).value);
			unencodedata.push(document.getElementById("expectedAnswer"+[i]).value);


		}

		// console.log(document.getElementById("checkbox"+[i]).checked);
		// console.log('checkbox'+[i]);
	}


// console.log("here is the unencodedata");

	// console.log(unencodedata);	








	// dataToSend.outputCase = JSON.stringify(expectedCases,difft);



	// console.log("here is")
	// console.log(dataToSend);

	// console.log(JSON.stringify(dataToSend));
	// console.log(outputCase);

	// var testNew = JSON.parse(outputCase);

	// console.log(outputCase.asd);

	var SendThis = JSON.stringify(dataToSend);

	var cURL = 'addQuestions.php?dataToSend='+SendThis;

	// console.log("here uis the java string");
	// console.log(cURL);


	//Init AJAX 
	var ajaxData = new XMLHttpRequest();
	//This sends the url with data as a GET
	ajaxData.open('POST', cURL, true);
	ajaxData.onreadystatechange = function(){

		//Set return code so I remember what is what
		var DONE = 4;
		var OK = 200;
	
		//Checks return codes for error
		if (ajaxData.readyState === DONE) {
			if (ajaxData.status === OK) {
				//If good 
				// console.log("===================================================");

				console.log(ajaxData.responseText);


				var dataFromPHP = ajaxData.responseText;

					// console.log(dataFromPHP);
     //        	console.log("===================================================");

				// document.getElementById("returnText").innerHTML= dataFromPHP.status
				
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

				// console.log(ajaxData.responseText);


			}
			//If Bad
			else{
				console.log("ERROR : " + ajaxData.status);
			}
		}
	};
	ajaxData.send();
}



function sendRequest(argument) {
	var difft = 0;
	
	//Checks for type checkboxes, ORs it to difft
	for (var i = 0; i < 5; i++) {
		if(ckb = document.getElementById("Rcheckbox"+[i]).checked){
			difft |= document.getElementById("Rcheckbox"+[i]).value;
		}	
	}
	//Checks for difficulty, ORs it to difft
	var dif = document.getElementById("Rdifficulty");
	difft |= dif.options[dif.selectedIndex].value;


    var cURL = 'getQforMakeExam.php?dataToSend='+difft;

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
                var dataFromPHP = ajaxData.responseText;
                receiveArray = ajaxData.responseText.split('|');
                for (var i = 0; i < receiveArray.length; i++) {
                    document.getElementById("returnText" + [i]).innerHTML = receiveArray[i];
                    document.getElementById("returnText" + [i]).style.backgroundColor = "#82ffbc";
                }
            } else {
                console.log("ERROR : " + ajaxData.status);
            }
        }
    };
    ajaxData.send();
}





function checkUser(userN){
	console.log(userN);
}

