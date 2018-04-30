<?php
	session_start();
	if (!$_SESSION['userType'] == "student") {
		echo "Not logged in";
		exit(1);
	}
?>


<!DOCTYPE html>  

<script src="student.js"></script>

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8"/>
<link rel="stylesheet" href="split.css">


<div class="blackBorder" style="position: fixed">
  <li><a class="active" href="Student.php">Home</a></li>
  <li><a href="TakeExam.php">Take Exam</a></li>
  <li><a href="studentViewGrade.php">View Grade</a></li>
  <li><a onclick="logout()" >Logout</a></li>

</div>
<html>
<head> <title> CS490 </title> </head>
<body>  

<meta charset="utf-8"/><div align="center">
	<br><br><br><br>
<h1>Student Home Page</h1>

<h2>
	<input type="hidden" id="UCID" value="<?=$_SESSION['username']?>"/>

	Greetings <?=$_SESSION['username']?>

<!-- <br><br><br><br>
	<p  class="codeText" id="loadingMessage">&nbsp</p>
	<div  id="loadingObj" class="loader"></div>
	<p  class="codeText" id="totalGrade">&nbsp</p>
	<p  class="codeText" id="qComm0">&nbsp</p>
	<p  class="codeText" id="qComm1">&nbsp</p>
	<p  class="codeText" id="qComm2">&nbsp</p>
	<p  class="codeText" id="qComm3">&nbsp</p>
	<p  class="codeText" id="qComm4">&nbsp</p> -->

</h2>

</body>
</html> 