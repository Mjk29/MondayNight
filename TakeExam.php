<?php

	session_start();
	if (!($_SESSION['userType']=='student')) {
		echo "Not logged in";
		exit(1);
	}


?>




<!DOCTYPE html>  

<script src="TakeExam.js"></script>
<script src="instructor.js"></script>


<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8"/>
<link rel="stylesheet" href="split.css">
<!-- <div class="split"> -->
<!--Updated on 10/8/2016; fixed center alignment percentage-->


	<input type="hidden" id="UCID" value="<?=$_SESSION['username']?>"/>

<ul class="a">
  <li><a href="Student.php">Home</a></li>
  <li><a class="active" href="TakeExam.php">Take Exam</a></li>
  <!-- <li><a href="ViewGrade.php">View Grade</a></li>  -->
  <li><a onclick="logout()" >Logout</a></li>
</ul>


<html>
<head> <title> CS490 </title> </head>


<ul class="c">
<div align="center">

			<button type="button" id = "searchQuestion" onclick="submitExam()">Submit Exam</button> 
</div>
</ul>



<!-- Runs startExam on page load, populates the exam question fields -->
<body bgcolor="c0d1ed" onload = "startExam();">  

<!-- <div class="centered codeText"> -->
	<br><br><br><br>

<!-- <div class="split left"> -->
	<div class="centered">
		<!-- <div class="wrap"> -->

			<p class="codeText" id="returnText0">&nbsp</p>
			<textarea cols="60" id="question0" placeholder="Enter question text here" rows="10"></textarea><br>

			<p class="codeText" id="returnText1">&nbsp</p>

			<textarea cols="60" id="question1" placeholder="Enter question text here" rows="10" style='white-space:pre'></textarea><br>

			<p class="codeText" id="returnText2">&nbsp</p>

			<textarea cols="60" id="question2" placeholder="Enter question text here" rows="10" style='white-space:pre'></textarea><br>

			<p class="codeText" id="returnText3">&nbsp</p>

			<textarea cols="60" id="question3" placeholder="Enter question text here" rows="10" style='white-space:pre'></textarea><br>

			<p class="codeText" id="returnText4">&nbsp</p>

			<textarea cols="60" id="question4" placeholder="Enter question text here" rows="10" style='white-space:pre'></textarea><br>



		</div>
	</div>
</div>

</body>





</body>
</html>




</body>
</html> 