function releaseGrades() {
	
	if(confirm("This will release student grades \nAre you sure?")){
		console.log("Send release");
	}

	// console.log(variablejs);

    var cURL = 'releaseGrades.php';


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


function logout(){
	if(confirm("Logout?")){
		window.location.href = "logout.php";
	}
}