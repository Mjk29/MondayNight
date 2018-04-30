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


<div class="blackBorder" style="position: fixed">
  <li><a href="Student.php">Home</a></li>
  <li><a class="active"href="TakeExam.php">Take Exam</a></li>
  <li><a href="studentViewGrade.php">View Grade</a></li>
  <li><a onclick="logout()" >Logout</a></li>

</div>
<html>
<head> <title> CS490 </title> </head>

<div class="fullGreenBorder">
	<table border="0" style="width: 100%; height: 100%; text-align: center;">
	<tr>
	
		<td style="width: 33%;" rowspan="2">
			<button class="blueShadowBR " style="font-size: 30px;" rowspan="2" type="button"  id = "startButton" onclick="startExam()">Start Exam</button>
			<button class="blueShadowBR  hidden" style="font-size: 30px;" rowspan="2" type="button"  id = "submitButton" onclick="submitExam()">Submit Exam</button>
<!-- 			<button  type="button"  id = "searchQuestion" onclick="getRevised()">get reviesed</button>
 -->		</td>
		

	</tr>


	</table>
</div>



<!-- Runs startExam on page load, populates the exam question fields -->
<!-- <body bgcolor="c0d1ed" onload = "startExam();">   -->
	<body bgcolor="c0d1ed">  

<!-- <div class="centered codeText"> -->
	<br><br><br><br>

<!-- <div class="split left"> -->
	<div class="singleCentered">
		<!-- <div class="wrap"> -->



<?php
//Outer loop for entire block 
for ($i = 0; $i < 5; $i++){

	echo "

	<table border='0' style='table-layout:fixed; width: 100%;' class='' id='CTable".$i."'>
		<col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' />
		<col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' />
		<tr class='hidden'>
			<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
			<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
		</tr>

		<tr >
			<td  colspan='6' class='hidden newCodeText greenShadowBR' id='label".$i."'>Question #".$i."</td>
			<td colspan='2'  class='hidden newCodeText greenShadowBR' id='label2".$i."'>Points:</td>
			<td colspan='2' class='hidden newCodeText greenShadowBR' id='points".$i."'>&nbsp</td>
		<tr>
			<td colspan='10' class='codeText hidden greenShadowBR' id='returnText".$i."'>&nbsp</td>
		</tr>
		<tr>
			<td  colspan='10'> <textarea class='hidden greenShadowBR'   placeholder='Enter Code Here' id='question" . $i . "' style='border:none; resize: none; width: 100%; height: 10em;'></textarea></td>
		</tr>
		<tr><td></td></tr>
		



		";
 
	
}
?>




		</div>
	</div>
</div>

</body>





</body>
</html>




</body>
</html> 