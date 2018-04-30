function logout(){
	if(confirm("Logout?")){
		window.location.href = "logout.php";
	}
}



function viewGrade(){


	document.getElementById("loadingObj").style.visibility = "visible";
	document.getElementById("loadingObj").innerHTML = "GETTING GRADE";
	// document.getElementById("testMessage").innerHTML = "GETTING GRADE";
	console.log("HELLO");
	
	
			// document.getElementById("gradeResult").innerHTML = ajaxData.responseText;
			
				// document.getElementById("returnText").innerHTML= "asd";




	// console.log("DOG");


	// console.log(document.getElementById("UCID").value);

	

	// console.log(variablejs);

    var cURL = 'getGrade.php?dataToSend='+document.getElementById("UCID").value;
    // var cURL = 'getGrade.php?dataToSend=student1';


	var ajaxData = new XMLHttpRequest();
    ajaxData.open('POST', cURL, true);
    ajaxData.onreadystatechange = function() {
        var DONE = 4;
        var OK = 200;
        if (ajaxData.readyState === DONE) {
            if (ajaxData.status === OK) {
            	// console.log("Here is the curl responseText");
            	console.log("===================================================");
                console.log(ajaxData.responseText);
                console.log("===================================================");

                receiveGrade = ajaxData.responseText.split('|');
            
            	for (var i = 0; i < receiveGrade.length; i++) {
            console.log("####################################");

            		console.log(receiveGrade[i]);
            	console.log("******************************");
            	}
  
					var grade = receiveGrade[0].search(/\"[0-9]* /);
					var endgrade = receiveGrade[0].search(/[0-9]\s/);
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


setTimeout(function(){
	    // console.log("THIS IS");

	    	document.getElementById("loadingObj").style.visibility = "hidden";
			document.getElementById("loadingObj").innerHTML = "";


			document.getElementById("totalGrade").innerHTML=
                   "Your total grade :" +receiveGrade[0].substring(grade+1,endgrade+1);

            document.getElementById("qComm0").innerHTML= receiveGrade[0].substring(endgrade+1);



                   for (var i = 1; i < receiveGrade.length; i++) {
                 		 document.getElementById("qComm"+i).innerHTML= 	receiveGrade[i]
                   }


			// for (var i = 0; i < 5; i++) {
			// gradeC0 = receiveGrade[0].substring(endgrade+1).split('.');
			// var newstr = receiveGrade[0].substring(endgrade+1).replace(/\. /g, "\n");
			// 	// document.getElementById("qComm0").innerHTML= receiveGrade[0].substring(endgrade+1);
			// document.getElementById("qComm0").innerHTML= newstr;


			// }
			// document.getElementById("gradeResult").innerHTML = "asdas";

}, 2000);






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



function test(){

	document.getElementById("loadingObj").style.visibility = "visible";


}