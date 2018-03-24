
	// currentIDArray = [];

function startExam(argument) {
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
				receiveArray = ajaxData.responseText.split('|');
			
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
					document.getElementById("returnText"+[i]).style.backgroundColor= "#82ffbc";
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
		answerText [i] = document.getElementById("question"+i).value;
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

	console.log("\nHere is send data \n");
	console.log(data2Send);
	console.log("\nHere is send data \n");


 var cURL = 'submitStudentExam.php?dataToSend='+data2Send;

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


