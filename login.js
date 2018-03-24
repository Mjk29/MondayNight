


function attemptLogin(){



https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link

	//Gets UserName and password
	var inputUserName = document.getElementById("userName").value;
	var inputPassword = document.getElementById("passW").value;

	//Changing input data to JSON value makes it not work with login. 
	// var inputUserName = JSON.stringify(document.getElementById("userName").value);
	// var inputPassword = JSON.stringify(document.getElementById("passW").value);


	//Checks for uisername and pass entry
	if (!document.getElementById("userName").value) {
		document.getElementById("returnText").innerHTML= "Username Required";
		return;
	}
	if (!document.getElementById("passW").value) {
		document.getElementById("returnText").innerHTML= "Password Required";
		return;
	}

	//Sets url appendix for CURL transfer
	var cURL = 'login.php?userName='+inputUserName+'&passW='+inputPassword;


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

				// var dataFromPHP = ajaxData.responseText;

				// var dataFromPHP = ajaxData.responseText;
				var dataFromPHP = JSON.parse(ajaxData.responseText);
				// document.getElementById("returnText").innerHTML= dataFromPHP.status
				
				if (dataFromPHP.status === 1) {
					console.log("STUDENT LOGIN");
					window.location.assign("Student.php");
					return;
				}

				if (dataFromPHP.status === 2) {
					window.location.assign("Instructor.php");
					return;
				}

				if (dataFromPHP.status === 0) {
					document.getElementById("returnText").innerHTML= "Username or Password Incorrect";
					console.log(dataFromPHP.status);
					return;
				}

				console.log(ajaxData.responseText);


			}
			//If Bad
			else{
				console.log("ERROR : " + ajaxData.status);
			}
		}
	};
	//This executes the send command?
	//Required but not sure exactly what it does. 
	ajaxData.send();
}


function logout(){
	if(confirm("Logout?")){
		window.location.href = "logout.php";
	}
}


// ajaxData.open("GET", "ajax.php?fname=Henry&lname=Ford", true);
// xhttp.send();

















// function attemptLogin(){


// 	var inputUserName = document.getElementById("userName").value;

// 	// console.log(inputUserName);


//   //   xhr = new XMLHttpRequest();


//   //   var data = "crackhead" + inputUserName;
//  	// xhr.open("GET", "ajax.php", true); 
//   //    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");                  


//   //    console.log(xhr.responseText);
//   //    xhr.send(data);


// // var testtext = document.getElementById("userName");
// // //This results with testtext being
// // //<input type="text" name="userID" id="userName" placeholder="UserID">
// // //Can get filled value with testtest.value
// // // console.log(testtext.value);



// // //Change value of text if there is text, does not work for != null
// // if (testtext.value != "") {
// // 	document.getElementById("returnText").innerHTML = testtext.value;
// // 	//Can set the text value of a field like this. 
// // 	}

// // 	// console.log(testtext);
// // var testArray = JSON.stringify(testtext.value);
// // //Converts string to JSON type
// // // console.log(testArray);







// // 	var ajaxData = new XMLHttpRequest();
// // 	ajaxData.open('GET', 'ajax.php', true);



// // // document.getElementById("ajaxButton").onclick = function() { 
// // //       var userName = document.getElementById("ajaxTextbox").value;
// // //       makeRequest('test.php',userName); 
// // //   };


// // 	var data = "crackhead" + inputUserName;


// // 	ajaxData.onreadystatechange = function(){
// // 			ajaxData.send(data);

// // 			console.log(ajaxData.responseText);
			

// // 	};





// // }





// 	var ajaxData = new XMLHttpRequest();
// 	ajaxData.open('GET', 'ajax.php', true);
// 	ajaxData.onreadystatechange = function(){

// 		var DONE = 4;
// 		var OK = 200;
	
// 		if (ajaxData.readyState === DONE) {
// 			if (ajaxData.status === OK) {
// 				console.log(ajaxData.responseText);
// 			}else{
// 				console.log("ERROR : " + ajaxData.status);
// 			}
// 		}
// 	};
// 	ajaxData.send();
// }















// // function myFunction() {
// // var name = document.getElementById("name").value;
// // var email = document.getElementById("email").value;
// // var password = document.getElementById("password").value;
// // var contact = document.getElementById("contact").value;
// // // Returns successful data submission message when the entered information is stored in database.
// // var dataString = 'name1=' + name + '&email1=' + email + '&password1=' + password + '&contact1=' + contact;
// // if (name == '' || email == '' || password == '' || contact == '') {
// // alert("Please Fill All Fields");
// // } else {
// // // AJAX code to submit form.
// // $.ajax({
// // type: "POST",
// // url: "ajaxjs.php",
// // data: dataString,
// // cache: false,
// // success: function(html) {
// // alert(html);
// // }
// // });
// // }
// // return false;
// // }





// // function attemptLogin(){

// 	// document.getElementById("returnText").innerHTML = "ASSGOBLINS";


// 	// alert("GoblinDicks");


// 	// var xhttp = new XMLHttpRequest();
// 	// xhttp.onreadystatechange = function(){
// 	// 	if (this.readyState == 4 && this.status == 200) {
// 	// 		document.getElementById("returnTest").innerHTML = this.responseText;
// 	// 	}
// 	// };


// 	// xhttp.open("GET", "https://web.njit.edu/~mjk29/README.txt", true);
// 	// xhttp.send();


// // }