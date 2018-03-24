



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
<!-- <div class="split"> -->
<!--Updated on 10/8/2016; fixed center alignment percentage-->



<ul class="a">
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="ADDQ.php">Add Question</a></li>
  <li><a href="MakeExam.php">Make Exam</a></li> 
  <li><a href="#ChangeGrade.html">Curve grade +10</a></li>
  <li><a href="#ChangeGrade.html">NIT Curve +50pts</a></li>

  <!-- <li><a href="ViewGrade.html">View Grades</a></li> -->

  <li><a onclick="releaseGrades()" >Release Grades</a></li>
  <li><a onclick="logout()" >Logout</a></li>
</ul>


<link rel="stylesheet" type="text/css" href="style.css" />

<html>
<head> <title> CS490 </title> </head>
<body>  

<meta charset="utf-8"/>
<!-- Text boxes and buttons -->
<div align="center">
	<br><br><br><br>
<h1>Instructor Home Page</h1>

<h2>
	Greetings <?=$_SESSION['username']?>




</h2>

</body>
</html> 