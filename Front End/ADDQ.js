

function sendQuestion() {

	// var newDataString=[];
	var newDataString="";
	// var questionText = document.getElementById("question").value.replace(/\[|\]/g,' ');
	var questionText = replaceBrackets(document.getElementById("question").value);

	if (questionText.length === 0) {
		alert("Question Text Cannot be Empty");
		return;
	}

	if (document.getElementById("testCase0").value.length === 0) {
		alert("At least 1 Test Case Required");
		return;
	}
	if (document.getElementById("expectedAnswer0").value.length === 0) {
		alert("At least 1 Expected Answer Required");
		return;
	}




	// newDataString.push(questionText);
	// newDataString.push(encodeURIComponent(questionText));
	newDataString += encodeURIComponent(questionText)+'|';


	var difft = 0;
	//Checks for type checkboxes, ORs it to difft
	for (var i = 0; i < 5; i++) {
		if(ckb = document.getElementById("checkbox"+i).checked){
			difft |= document.getElementById("checkbox"+i).value;
		}
	}	
	var dif = document.getElementById("difficulty");
	difft |= dif.options[dif.selectedIndex].value;

	newDataString+= difft+'|';
	// newDataString+= 'points|';

	var expectedCases = "";
		for (var i = 0; i <= currentTestCase; i++) {
			if(!(document.getElementById("testCase"+i).value == '') && 
				!(document.getElementById("expectedAnswer"+i).value == '')){
				// expectedCases +=  '"'+document.getElementById("testCase"+[i]).value + ':' + document.getElementById("expectedAnswer"+[i]).value +'",' ;
				// dataToSend['testCase'+i] =  document.getElementById("testCase"+[i]).value;
				// dataToSend['testAnswer'+i] =  document.getElementById("expectedAnswer"+[i]).value;

				// newDataString+=(encodeURIComponent(document.getElementById("testCase"+i).value
				// 	.replace(/\[/g,'⌈')))+'|';
				// newDataString+=(encodeURIComponent(document.getElementById("expectedAnswer"+i).value
				// 	.replace(/\[|\]/g,'⌈')))+'|';

				newDataString += encodeURIComponent(replaceBrackets(document.getElementById("testCase"+i).value))+'|';
				newDataString += encodeURIComponent(replaceBrackets(document.getElementById("expectedAnswer"+i).value))+'|';


			}
		}






	
	


	// var dataToSend = {};
	//Checks for difficulty, ORs it to difft
	

	// newDataString.push(difft);

	// console.log("Question Text \n");
	// console.log("============================= \n");
	// console.log(questionText);
	// console.log("============================= \n");

	// This is the question text that includes whitespace
	// var fixedString = questionText.replace(/(?:\r\n|\r|\n)/g, '<br />');
	// var fixedString = encodeURIComponent(questionText) ;
		// console.log(encodeURIComponent(data2Send)); 

	// console.log(decodeURIComponent(fixedString)); 

	// console.log(fixedString);


	// var unencodedata = [];

	// unencodedata[0] = fixedString;
	// unencodedata[1] = difft;
	// unencodedata[2] = 0;

	// // unencodedata[2] = questionPoints;


	// dataToSend.questionText = fixedString;
	// dataToSend.difft = difft;
	// dataToSend.points = 0;
	// dataToSend.points = questionPoints;

	// newDataString.push(difft);

	
	console.log("Type of newDataString");
	console.log(typeof(newDataString));
	console.log(newDataString);

	//Get Test Cases
	var SendThis = JSON.stringify(newDataString);

	
	console.log("Type of newDataString");
	console.log(typeof(newDataString));
	console.log(newDataString);


	// console.log("Type of SendThis");
	// console.log(typeof(SendThis));
	

	
	console.log("Here is send data")
	console.log(newDataString)
	console.log("HERE IS THE JSON DaTA");
	console.log(SendThis);





	// var testSendString = 'Hard%20For%20Loop%20While%20Loop%20Math%20Library%20If%20Statement%20Miscellaneous%20%0AHere%20is%20the%20final%20test%20question%20to%20add%0Ato%20the%20exam%20database%0A%20%20%20%20%20THere%20are%205%20spaces%20at%20this%20line%0ATwo%20newlines%20before%20thuis%20one%0A%20%20%20%20%20%20%20%20%20%20Ten%20spaces%20here.%0A|0|Testing%20spaces%20in%20the%20test%20case%0A|and%20spaces%20in%20the%20epected%20asnswer%0A|NoSpacesHere|OrHereEitehr|What%20If%20I%20want%20a%20comma%2C%20or%20not%3F%0A|Add%20two%20things%20like%20x%2By%20or%20x%20%2B%20y%0A|Checking%20(parenthesiss)%20and%20%5B%20square%20brackets%20%5D%0Aandcurly%20bracketes|CHecking%20a%20*%20for%20w%20*%20z%20and%20W**Z%0A|Here%20is%20a%20line%0Aanother%20line%0A%20%20%20%20%20a%20third%20line%20with%205%20spaces%0A%20%20%20%20%20%20%20%20%20%20a%20fourth%20with%2010%20spaces%0Alast%20line|Check%20for%20%2F%20and%20for%20%5C%20did%20both%20woprk|';

	var cURL = 'addQuestions.php?dataToSend='+newDataString;



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
				
				alert("Question Successfully Added");
				console.log("HERE IS THE RESPONSE TEXT")
				console.log("===================================================");

				console.log(ajaxData.responseText);
				console.log("===================================================");


				var dataFromPHP = ajaxData.responseText;

			}
			//If Bad
			else{
				console.log("ERROR : " + ajaxData.status);
			}
		}
	};
	ajaxData.send();
}




function replaceBrackets(inString) {
	
	var outString = inString.replace(/\[/g,'⌈');
	outString = outString.replace(/\]/g,'⌉');
	outString = outString.replace(/\"/g,'\'\'');
	outString = outString.replace(/\n/g,'<br>');
	return outString;
}



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

	// if (difft == 0) {
	// 	difft = 255;
	// }

	var SendThis = JSON.stringify(dataToSend);
    var cURL = 'getQforMakeExam.php?dataToSend='+SendThis;

	// console.log(difft);

for (var i = 0; i < 50; i++) {
	//Clear page before writing search resuts.
		document.getElementById("returnText"+i).innerHTML= "";
		document.getElementById("returnText"+i).classList.add("hidden");
		document.getElementById("qidLabel"+i).classList.add("hidden");
		document.getElementById("qidLabelText"+i).innerHTML = '';

		// document.getElementById("returnText"+[i]).style.backgroundColor= "transparent";
				
		for (var j = 0; j < 6; j++) {
			//Clear the table first
		document.getElementById("TCRow"+i+j).classList.add("hidden");
		document.getElementById("testCaseText"+i+j).classList.add("hidden");
		document.getElementById("testCaseText"+i+j).innerHTML='&nbsp';
		document.getElementById("expectedAnswer"+i+j).classList.add("hidden");
		document.getElementById("expectedAnswer"+i+j).innerHTML= '&nbsp';
		}
	}

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
				
	// console.log(difft);

				//If good 		
				// console.log("Length");
				// console.log(ajaxData.responseText.length);
				// console.log("Length");
// 				console.log("here is the response dadtya");
				console.log("*****************************");
				console.log(ajaxData.responseText);
				console.log("*****************************");


				var dataFromPHP = ajaxData.responseText;
				if(dataFromPHP.indexOf('|') === -1){return;} 

				// console.log("CHECKING FOR PIPE");
 			// 	console.log(dataFromPHP.indexOf('|')); 
				// console.log("CHECKING FOR PIPE");	

				//Checks for empty dataset



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


				//Removes the blank space at the 0 element if its null. 
				receiveArray = ajaxData.responseText.split('|');

				if (receiveArray[0].length <= 2) {
					receiveArray.shift();
				}


				// console.log("Array length : "+receiveArray.length);



				// var emptyREGEX = new RegExp('\s*|');
				// console.log("HErE IS THE EMPTY REGEX : "+emptyREGEX);
				// console.log(emptyREGEX.test(receiveArray[0]));


				// console.log("HER IS TREST OF 0:"+receiveArray[0].length);


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

				// var flag = false;

				// console.log("HERE IS TEH CIDA");
				// console.log(currentIDArray);

				for (var i = 0; i < receiveArray.length; i++) {
					var n = receiveArray[i].search(/[a-z]/);
					var regexForID = /[0-9]+ /;
					// var n = regexForID.match(receiveArray[i]).length;

					// console.log("here is the regex ");
					// console.log(regexForID.exec(receiveArray[i]));
					// console.log(regexForID.exec(receiveArray[i])[0].length);
					var regLen = regexForID.exec(receiveArray[i])[0].length;


					// console.log("N value : "+n);
					// if (receiveArray[i].substring(1,n-1) == 0) {flag = true};
					currentIDArray[i] = Number(receiveArray[i].substring(0,regLen));
					// console.log("ID : "+currentIDArray[i]);
					currentQArray[i]  = receiveArray[i].substring(regLen);
					// console.log(currentQArray[i]);
				}
				// console.log("here is the Q array");
				// console.log(currentQArray);
				// console.log("Here is the QID array");
				// console.log(currentIDArray)

				// if (flag) {
				// 	currentIDArray.shift();
				// 	currentQArray.shift();
				// }
				// for (var i = 0; i < currentIDArray.length; i++) {
				// 	console.log("QID : ",currentIDArray[i]);
				// 	console.log("Question text : ", currentQArray[i]);
					
				// }
				// if(dataFromPHP.indexOf('|') === -1){return;} 

				//BugFix
				//Remove empty array elements
				//Usually the first element is empty
				// currentIDArray.splice(0,1);
				// currentQArray.splice(0,1);


				// for (var i = 0; i < 10 ; i++) {
				// 	currentIDArray.shift();
				// 	currentQArray.shift();
				// }



				
				
				// for (var i = 0; i < receiveArray.length; i++) {

				// 	document.getElementById("returnText"+i).classList.remove("hidden");

				// 	var underscoreRegex = /_/;

				// 	console.log(underscoreRegex.test(currentQArray[i]));

				// 	if (underscoreRegex.test(currentQArray[i])) {
				// 		document.getElementById("returnText"+[i]).innerHTML= currentIDArray[i]+currentQArray[i].replace(/_/g,' ');

				// 	}
				// 	else{
				// 		document.getElementById("returnText"+[i]).innerHTML= currentIDArray[i]+currentQArray[i];

				// 	}

				// 	// document.getElementById("returnText"+[i]).innerHTML= currentIDArray[i]+currentQArray[i].replace(/_/g,' ');


				// 	// document.getElementById("returnText"+[i]).style.backgroundColor= "#82ffbc";
				// }

				updateIndex = 0;
				updateIDArray = [];
				updateIDArray = currentIDArray;
				console.log("here is theupdate array");
				console.log(updateIDArray);
								console.log("here is theupdate array");


				runGetTest(updateIDArray);

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

	document.getElementById("loadMore").classList.remove("hidden");


}








function startTC(argument) {
	document.getElementById("testCase0").classList.remove("hidden");
	document.getElementById("expectedAnswer0").classList.remove("hidden");
}


var currentTestCase = 0;


function addNewTestCase(argument) {
	if (currentTestCase == 4) {
		alert("You have reached the maximum number of test cases");
		return;
	}
	currentTestCase ++;


	document.getElementById("testCase"+currentTestCase).classList.remove("hidden");
	document.getElementById("expectedAnswer"+currentTestCase).classList.remove("hidden");
}

function removeNewTestCase(argument) {
	if (currentTestCase == 0 ) {
		alert("At least 1 test case is required");
		return;
	}
	document.getElementById("testCase"+currentTestCase).classList.add("hidden");
	document.getElementById("expectedAnswer"+currentTestCase).classList.add("hidden");
	currentTestCase --;

}



function loadMore() {
	runGetTest(updateIDArray);
}




function runGetTest(argArray) {




	testCaseStack=[];

	// console.log(currentQArray);

	// console.log("here si the CID A");
	// console.log(argArray);
	// console.log(argArray.toString());


	cID = [];
	for (var i = 0; i < argArray.length; i++) {
		// argArray[i] = argArray[i].replace(/\D/g,'');
		cID[i] = Number(argArray[i]);
	}
	// console.log("HERE IS CID");
	// console.log(cID.toString());
	  itter = cID.length;	
	// console.log("CID LENGTH : "+cID.length);

	if (itter == 0) {
		alert("No more available");
	}

	if (itter > 10) {
		itter = 10;
	}

	for (var i = 0; i < itter; i++) {

		setTimeout(function(){
			// console.log(argArray);
			// console.log("IN THE FUNCTION");
			cURL = 'getTestCase.php?dataToSend='+argArray.shift();
			console.log(cURL);
			console.log(argArray);
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
						// console.log(typeof(dataFromPHP));
						console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
						console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
						console.log(dataFromPHP);
						console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
						console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
						setJSONhtml(dataFromPHP);

						// console.log("HERE IS THE TEST CASE RETURN");
						// console.log(testCaseStack);
						// console.log("HERE IS THE TEST CASE RETURN");

					}
					else{
						console.log("ERROR : " + ajaxData.status);
					}
				}
			};
			ajaxData.send();
		}, 1000);
	}
	// parseTestCase(argArray);

	console.log("here is the update array at the endo of runGetTest");
	console.log(argArray.toString());

// console.log("HERE IS THE CID AT THE END ");
// 	console.log(argArray);

	// console.log("HERE IS THE TEST CASE STACK");
	// console.log("`````````````````````````````````````````````")
	// console.log(testCaseStack);
	// jsonIncD = JSON.parse(testCaseStack[0]);
	// console.log(jsonIncD);
// console.log("`````````````````````````````````````````````")


}
parseArray = [];


function setJSONhtml(jsonString) {

	console.log("updateIndex : "+updateIndex);
	console.log(updateIDArray);
	// console.log(jsonString);
	
	var parsedJson = JSON.parse(jsonString);
	parseArray.push(parsedJson);

	writeJsonToTable(parsedJson);
	// console.log(parsedJson);
	// console.log(parsedJson.qtext);

	// document.getElementById("returnText"+updateIndex).classList.remove("hidden");
	// document.getElementById("qidLabel"+updateIndex).classList.remove("hidden");
	// document.getElementById("qidLabelText"+updateIndex).innerHTML = parsedJson.id;

	


	// var underscoreRegex = /_/;
	// if (underscoreRegex.test(parsedJson.qtext)) 
	// 	document.getElementById("returnText"+updateIndex).innerHTML= parsedJson.qtext.replace(/_/g,' ');
	// else
	// 	document.getElementById("returnText"+updateIndex).innerHTML = parsedJson.qtext;


	// for (var i = 1; i <= 5; i++) {
	// 	// console.log("here is the a data");
	// 	// console.log(parsedJson['a'+i]);
	// 	if (parsedJson['a'+i] !== 'NULL') {
	// 		// console.log("ITS NOT NULL")
			
	// 		console.log("update index : "+updateIndex+" i val : "+i);
	// 		document.getElementById("TCRow"+updateIndex+i).classList.remove("hidden");
	// 		document.getElementById("testCaseText"+updateIndex+i).classList.remove("hidden");
	// 		document.getElementById("testCaseText"+updateIndex+i).innerHTML= parsedJson['t'+i].replace(/_/g,' ');
	// 		document.getElementById("expectedAnswer"+updateIndex+i).classList.remove("hidden");
	// 		document.getElementById("expectedAnswer"+updateIndex+i).innerHTML= parsedJson['a'+i].replace(/_/g,' ');
	// 	}
	// }

		// document.getElementById("TCRow"+p+s).classList.remove("hidden");
		// document.getElementById("testCaseText"+p+s).classList.remove("hidden");
		// document.getElementById("testCaseText"+p+s).innerHTML= tcStack[s];
		// document.getElementById("expectedAnswer"+p+s).classList.remove("hidden");
		// document.getElementById("expectedAnswer"+p+s).innerHTML= "p : "+p+"s : "+s;
	
	updateIndex++;
	console.log(updateIDArray);
}




function writeJsonToTable(jsonDataWrite) {

	document.getElementById("CTable"+updateIndex).classList.remove("hidden");
	document.getElementById("returnText"+updateIndex).classList.remove("hidden");
	document.getElementById("qidLabel"+updateIndex).classList.remove("hidden");
	document.getElementById("qidLabelText"+updateIndex).classList.remove("hidden");

	document.getElementById("qidLabelText"+updateIndex).innerHTML = jsonDataWrite.id;

	console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
	console.log(jsonDataWrite);
	console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");


	var underscoreRegex = /_/;
	if (underscoreRegex.test(jsonDataWrite.qtext)) 
		document.getElementById("returnText"+updateIndex).innerHTML= jsonDataWrite.qtext.replace(/_/g,' ');
	else
		document.getElementById("returnText"+updateIndex).innerHTML = jsonDataWrite.qtext;


	for (var i = 1; i <= 5; i++) {
		// console.log("here is the a data");
		// console.log(parsedJson['a'+i]);
		if (jsonDataWrite['a'+i] !== 'NULL') {
			// console.log("ITS NOT NULL")
			
			// console.log("update index : "+updateIndex+" i val : "+i);
			document.getElementById("TCRow"+updateIndex+i).classList.remove("hidden");
			document.getElementById("testCaseText"+updateIndex+i).classList.remove("hidden");
			document.getElementById("testCaseText"+updateIndex+i).innerHTML= jsonDataWrite['t'+i].replace(/_/g,' ');
			document.getElementById("expectedAnswer"+updateIndex+i).classList.remove("hidden");
			document.getElementById("expectedAnswer"+updateIndex+i).innerHTML= jsonDataWrite['a'+i].replace(/_/g,' ');
		}
	}
}




function writeJsonToTableADDQRight(jsonDataWrite) {
	
	document.getElementById("RreturnText"+updateIndex).classList.remove("hidden");
	document.getElementById("RqidLabel"+updateIndex).classList.remove("hidden");
	document.getElementById("RqidLabelText"+updateIndex).innerHTML = jsonDataWrite.id;

	


	var underscoreRegex = /_/;
	if (underscoreRegex.test(jsonDataWrite.qtext)) 
		document.getElementById("RreturnText"+updateIndex).innerHTML= jsonDataWrite.qtext.replace(/_/g,' ');
	else
		document.getElementById("RreturnText"+updateIndex).innerHTML = jsonDataWrite.qtext;


	for (var i = 1; i <= 5; i++) {
		// console.log("here is the a data");
		// console.log(parsedJson['a'+i]);
		if (jsonDataWrite['a'+i] !== 'NULL') {
			// console.log("ITS NOT NULL")
			
			// console.log("update index : "+updateIndex+" i val : "+i);
			document.getElementById("RTCRow"+updateIndex+i).classList.remove("hidden");
			document.getElementById("RtestCaseText"+updateIndex+i).classList.remove("hidden");
			document.getElementById("RtestCaseText"+updateIndex+i).innerHTML= jsonDataWrite['t'+i].replace(/_/g,' ');
			document.getElementById("RexpectedAnswer"+updateIndex+i).classList.remove("hidden");
			document.getElementById("RexpectedAnswer"+updateIndex+i).innerHTML= jsonDataWrite['a'+i].replace(/_/g,' ');
		}
	}
}








function parseTestCase(argArray) {
	
	console.log("HJERES ARGARRAY IN PARSE");
	console.log(argArray.toString());

	// testCaseStack
	setTimeout(function () {
	// console.log("HERE IS TE STACK");
	// console.log(testCaseStack);
	// console.log("TCSTACK SIZE = "+ testCaseStack.length);

	// console.log(typeof(testCaseStack));
	// console.log(JSON.parse(testCaseStack));

	// for (var i = 0; i < testCaseStack.length; i++) {
	// 	console.log(i+testCaseStack[i]);
	// }


	for (var i = 0; i < 50; i++) {
		for (var j = 0; j < 5; j++) {
			//Clear the table first
		document.getElementById("TCRow"+i+j).classList.add("hidden");
		document.getElementById("testCaseText"+i+j).classList.add("hidden");
		document.getElementById("testCaseText"+i+j).innerHTML='';
		document.getElementById("expectedAnswer"+i+j).classList.add("hidden");
		document.getElementById("expectedAnswer"+i+j).innerHTML= '';
		}
	}





	for (var i = 0; i < testCaseStack.length; i++) {
	// console.log("#####################");
		var tcStack = []

console.log("********************************************* TOP ");
	console.log(testCaseStack[i]);
	testC = testCaseStack[i].split('","');
	console.log(testC);

console.log("*********************************************8");

	// console.log("HJERE IS TEST C 0");
	// console.log(testC[0].split(':"')[1]);
	// 	console.log("HJERE IS TEST C 0");
//This gives the QID
	tcStack.push(Number(testC[0].split(':"')[1]));


	// console.log(tcStack);

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
	// console.log(argArray);


	// console.log("ID ARRATY SIZE :" + argArray.length);

	var CIDASize = argArray.length;

	for (var p = 0; p < CIDASize; p++) {
		if (argArray[p] == tcStack[0]) {
			console.log("MATCH AT "+tcStack[0]+' '+p);
			tcStack.shift();
			break;
		}
	}

	console.log("HERE IS P"+p);
	console.log(tcStack);

	for (var s = 0; s < tcStack.length; s++) {
		
		


	var regexConstructor = new RegExp("NULL","i");
	// console.log(regexConstructor);

	// console.log(regexConstructor.test(tcStack[s]));

	// if (regexConstructor.test(tcStack[s])) {
	// 	// break;
	// 	console.log("asd");
	// }
		


		// document.getElementById("TCRow"+p+s).classList.remove("hidden");
		// document.getElementById("testCaseText"+p+s).classList.remove("hidden");
		// document.getElementById("testCaseText"+p+s).innerHTML= tcStack[s];
		// document.getElementById("expectedAnswer"+p+s).classList.remove("hidden");
		// document.getElementById("expectedAnswer"+p+s).innerHTML= "p : "+p+"s : "+s;

		// console.log(tcStack[s])
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

  }, 1500);
}






















// function sendQuestion() {

// 	var newDataString=[];
	


// 	var questionText = document.getElementById("question").value;

// 	newDataString.push(encodeURIComponent(questionText));

// 	// var questionText = document.getElementById("easy").value;
// 	// var questionText = document.getElementById("medium").value;
// 	// var questionText = document.getElementById("hard").value;



// 	// var difft = 0;






// 	// console.log(difft);
// 		// <!-- difft -->
// 		// <!-- 2^0   1== for -->
// 		// <!-- 2^1   2== while -->
// 		// <!-- 2^2   4 == Import -->
// 		// <!-- 2^3   8== If -->
// 		// <!-- 2^4  16== misc -->
// 		// <!-- 2^5  32 == easy -->
// 		// <!-- 2^6  64== medium -->
// 		// <!-- 2^7 128 == hard -->


// 	// var forLoopisCheck= 	document.getElementById("forLoop").checked;
// 	// var whileLoopisChecked= document.getElementById("whileLoop").checked;
// 	// var dictisChecked= 		document.getElementById("dict").checked;
// 	// var ifStatementisChecked= document.getElementById("ifStatement").checked;
// 	// var miscisChecked= 		document.getElementById("misc").checked;
	
// 	var difft = 0;
	
// 	//Checks for type checkboxes, ORs it to difft
// 	for (var i = 0; i < 5; i++) {
// 		if(ckb = document.getElementById("checkbox"+[i]).checked){
// 			difft |= document.getElementById("checkbox"+[i]).value;
// 		}

// 		// console.log(document.getElementById("checkbox"+[i]).checked);
// 		// console.log('checkbox'+[i]);
// 	}

		


// 	var dataToSend = {};


// 	// if(document.getElementById("forLoop").checked){
// 	// 	difft |= 1;
// 	// }if(document.getElementById("whileLoop").checked){
// 	// 	difft |= 2;
// 	// }if(document.getElementById("dict").checked){
// 	// 	difft |= 4;
// 	// }if(document.getElementById("ifStatement").checked){
// 	// 	difft |= 8;
// 	// }if(document.getElementById("misc").checked){
// 	// 	difft |= 16;
// 	// }


// 	//Checks for difficulty, ORs it to difft
// 	var dif = document.getElementById("difficulty");
// 	difft |= dif.options[dif.selectedIndex].value;

// 	newDataString.push(difft);


// // var e = document.getElementById("ddlViewBy");
// // var strUser = e.options[e.selectedIndex].text;


// // console.log(difft);

// 	console.log("Question Text \n");
// 	console.log("============================= \n");
// 	console.log(questionText);
// 	console.log("============================= \n");

// 	// This is the question text that includes whitespace
// 	// var fixedString = questionText.replace(/(?:\r\n|\r|\n)/g, '<br />');
// 	var fixedString = encodeURIComponent(questionText) ;
// 		// console.log(encodeURIComponent(data2Send)); 

// 	// console.log(decodeURIComponent(fixedString)); 

// 	console.log(fixedString);

// 	//Get DIFFt
// 	// difft

// 	//GET POINTS
// 	// var questionPoints = document.getElementById("questionPoints").value;



// 	// console.log($questionPoints);

// 	var unencodedata = [];

// 	unencodedata[0] = fixedString;
// 	unencodedata[1] = difft;
// 	unencodedata[2] = 0;

// 	// unencodedata[2] = questionPoints;


// 	dataToSend.questionText = fixedString;
// 	dataToSend.difft = difft;
// 	dataToSend.points = 0;
// 	// dataToSend.points = questionPoints;

// 	// newDataString.push(difft);


// 	//Get Test Cases

// 	var expectedCases = "";
// 	for (var i = 0; i < 5; i++) {
// 		if(!(document.getElementById("testCase"+[i]).value == '') && 
// 			!(document.getElementById("expectedAnswer"+[i]).value == '')){
// 			// expectedCases +=  '"'+document.getElementById("testCase"+[i]).value + ':' + document.getElementById("expectedAnswer"+[i]).value +'",' ;
// 			dataToSend['testCase'+i] =  document.getElementById("testCase"+[i]).value;
// 			dataToSend['testAnswer'+i] =  document.getElementById("expectedAnswer"+[i]).value;

// 			newDataString.push(document.getElementById("testCase"+[i]).value);
// 			newDataString.push(document.getElementById("expectedAnswer"+[i]).value);


// 		}

// 		// console.log(document.getElementById("checkbox"+[i]).checked);
// 		// console.log('checkbox'+[i]);
// 	}


// // console.log("here is the unencodedata");

// 	// console.log(unencodedata);	








// 	// dataToSend.outputCase = JSON.stringify(expectedCases,difft);



// 	// console.log("here is")
// 	// console.log(dataToSend);

// 	// console.log(JSON.stringify(dataToSend));
// 	// console.log(outputCase);

// 	// var testNew = JSON.parse(outputCase);

// 	// console.log(outputCase.asd);

// 	// var SendThis = JSON.stringify(dataToSend);
// 	var SendThis = JSON.stringify(newDataString);
	
// 	console.log("Here is send data")
// 	console.log(newDataString)
// 	console.log("HERE IS THE JSON DaTA");
// 	console.log(SendThis);

// 	var cURL = 'addQuestions.php?dataToSend='+newDataString;

// 	// console.log("here uis the java string");
// 	// console.log(cURL);






// 	//Init AJAX 
// 	var ajaxData = new XMLHttpRequest();
// 	//This sends the url with data as a GET
// 	ajaxData.open('POST', cURL, true);
// 	ajaxData.onreadystatechange = function(){

// 		//Set return code so I remember what is what
// 		var DONE = 4;
// 		var OK = 200;
	
// 		//Checks return codes for error
// 		if (ajaxData.readyState === DONE) {
// 			if (ajaxData.status === OK) {
// 				//If good 
// 				console.log("===================================================");
				
// 				alert("Question Successfully Added");

// 				console.log(ajaxData.responseText);


// 				var dataFromPHP = ajaxData.responseText;

// 					// console.log(dataFromPHP);
//      //        	console.log("===================================================");

// 				// document.getElementById("returnText").innerHTML= dataFromPHP.status
				
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

// 				// console.log(ajaxData.responseText);


// 			}
// 			//If Bad
// 			else{
// 				console.log("ERROR : " + ajaxData.status);
// 			}
// 		}
// 	};
// 	ajaxData.send();
	



// }

