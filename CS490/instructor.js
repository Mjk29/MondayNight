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




function startFun(argument) {
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        console.log("CLICKED");
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
}
}




function playWhistle() {
    var audio = new Audio('whistle.ogg');
        audio.play();
}
function playBell() {
    var audio = new Audio('bell.ogg');
        audio.play();
}