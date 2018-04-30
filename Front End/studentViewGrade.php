
 


<?php
	
	//Session init and checkg
	session_start();
	if (!$_SESSION['userType'] == "student") {
		echo "Not logged in";
		exit(1);
	}

// echo $_SESSION['username'];

?>


<!DOCTYPE html>  

<script src="instructor.js"></script>
<!-- <script src="TakeExam.js"></script> -->
<script src="reviewGrade.js"></script>
<body onload="getStudentNames();startExam();getRevisedForCheck();">

	<input type="hidden" id="UCID" value="<?=$_SESSION['username']?>"/>



<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8"/>
<link rel="stylesheet" href="split.css">



<div class="blackBorder">
  <li><a href="Student.php">Home</a></li>
  <li><a href="TakeExam.php">Take Exam</a></li>
  <li><a class="active" href="studentViewGrade.php">View Grade</a></li>
  <li><a onclick="logout()" >Logout</a></li>

</div>

<div class="fullBlueBorder">
	<table border="0" style="width: 100%; text-align: center;">
	<tr>
	
		<td style="width: 33%;" rowspan="2">
			<button class="greenShadowBR" style="font-size: 30px;  " rowspan="2" type="button"  id = "viewGButton" onclick="viewGrade()">View Grade</button>
<!-- 			<button  type="button"  id = "searchQuestion" onclick="getRevised()">get reviesed</button>
 -->		</td>
		<td style="width: 33%;">
			<input readonly style=" text-align: center; width: 5em" type="number" id="studentGrade" >&nbsp</input> /
	
			<span readonly style="text-align: center" id="maxPoints" placeholder="100">&nbsp</span> 
		</td>
		<td></td>

	</tr>
		<tr>

			<td>	points / maxpoints	</td>
		<td></td>

		</tr>	 
	

	</table>
</div>

<link rel="stylesheet" type="text/css" href="style.css" />

<html>
<head> <title> CS490 </title> </head>
<body>  

<meta charset="utf-8"/>
<div align="center">
<div class="split left">
<div class="centered">


<!-- This is for the left side question text and student input text -->
<br>
<?php
	for ($i=0; $i < 5; $i++) { 
		echo "
		<table class=' hidden' id='Qtable".$i."' border='2' style=' border-style:double; width:100%; height:100%'>

		<tr>
		<th class=' hidden' id='questionTextLabel".$i."' cols='60' rows='15'>Question # ".$i." </th>
		</tr>

		<tr>
		<td class='codeText hidden' id='questionText".$i."' cols='60' rows='15'> &nbsp</td>
		</tr>

		<tr>
		<td class=' hidden' id='studentCodeLabel".$i."' cols='60' rows='15'>Student Code</td>					
		</tr>

		<tr>
		<td style='white-space: pre-wrap;' class='codeText hidden' id='studentCode".$i."' cols='60' rows='30'>&nbsp</td>
		</tr>
		</table>
		<br>
		";
	}
?>
			
		</div>

	</div>
</div>
	<div class="split right">
<div class="centered">



<?php
//Outer loop for entire block 
for ($i = 0; $i < 10; $i++){

	echo "

	<table border='1' style='table-layout:fixed; width: 100%;' class='hidden' id='CTable".$i."'>
		<col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' />
		<col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' />
		<tr class='hidden'>
			<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
			<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
		</tr>

		<tr>
			<th colspan='10'>Question #".$i."</th>
		</tr>
		<tr>
			<td colspan='10' >General Comments</td>
		</tr>
			<td class = 'newCodeText' id='generalComments".$i."' colspan='10' >&nbsp</td>
		</tr>
		<tr>
			<th colspan='5'>Test Case</th>
			<th colspan='4'>Comment</th>
			<th colspan='1'>Points Awarded</th>
		</tr>";


for ($j = 0; $j < 6; $j++){
	echo "
		<tr class='hidden' id='commentRow".$i.$j."'>
			<td colspan='5' class = 'newCodeText' id='testCaseText" . $i . $j . "'>loading...</td>
			<td colspan='4' class = 'newCodeText' colspan='4' id='commentText" . $i . $j . "'>&nbsp</td>
			<td colspan='1' ><input readonly type='number' style='width:80%' class = 'newCodeText hidden' id='commentPoint" . $i . $j . "'></input> </td>

		</tr>";
	}

	echo "
	<tr>
		<td rowspan='3' colspan='5'> <textarea readonly placeholder='Additional Comments' id='addComm" . $i . "' style='border:none; resize: none; width: 98%; height: 8em;'></textarea></td>
		<tr >
			<td colspan='3'></td>
			<th colspan='1' >Max points</th>
			<th colspan='1' >Total Points Awarded</th>
		</tr>
		<tr> 
			<td colspan='3'></td>
			<td colspan='1' class = 'newCodeText hidden' id='tpQuestion" . $i . "'>&nbsp</td>
			<td colspan='1'><input readonly type='number' style='width:81%;' onchange='updatePoints()'  class = 'newCodeText hidden' id='tpLoss" . $i . "'></td>
		</tr>
		<br>
		</table >";
	
 
	
}
?>



</table>

</div>


</body>
</html> 