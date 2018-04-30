


 
<?php
	
	//Session init and check
	session_start();
	if (!$_SESSION['userType'] == "instructor") {
		echo "Not logged in";
		exit(1);
	}

// echo $_SESSION['username'];

?>


<!DOCTYPE html>  

<script src="instructor.js"></script>


<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8"/>
<link rel="stylesheet" href="split.css">
 
<body onload="startFun()"></body>



<div class="blackBorder">
  <li><a class="active" href="Instructor.php">Home</a></li>
  <li><a  href="ADDQ.php">Add Question</a></li>
  <li><a  href="MakeExam.php">Make Exam</a></li> 
  <li><a href="reviewGrade.php">Review Grade</a></li>
  <li><a onclick="logout()" >Logout</a></li>
  <li><a id="myBtn">Bells & Whistles</li>
</div>


<link rel="stylesheet" type="text/css" href="style.css" />

<html>
<head> <title> CS490 </title> </head>
<body>  

<meta charset="utf-8"/>
<!-- Text boxes and buttons -->
<div align="center">
	<br><br><br><br>
	<div id="myModal" class="modal">
	  <!-- Modal content -->
	  <div class="modal-content">
	    <span class="close">&times;</span>
	  <img src="bell.png" width="10%" height="10%" onclick="playBell()" />
	   <img src="whistle.png" width="10%" height="10%" onclick="playWhistle()" />
	   


	 


	  </div>



	</div>

<h1>Instructor Home Page</h1>

<h2>
	Greetings <?=$_SESSION['username']?>




</h2>

</body>
</html> 