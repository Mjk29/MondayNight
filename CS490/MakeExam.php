<?php

	session_start();
	if (!$_SESSION['userType'] == "instructor") {
		echo "Not logged in";
		exit(1);
	}

?>





<!DOCTYPE html>
<head>

	<script src="ADDQ.js"></script>
	<script src="instructor.js"></script>
	<script src="MakeExam.js"></script>


	<meta charset="utf-8">
	<link href="split.css" rel="stylesheet">
	<title>Add Question</title>
</head>


<body onload="startTC()"></body>

<div class="blackBorder">
  <li><a  href="Instructor.php">Home</a></li>
  <li><a  href="ADDQ.php">Add Question</a></li>
  <li><a  class="active" href="MakeExam.php">Make Exam</a></li> 
  <li><a href="reviewGrade.php">Review Grade</a></li>
  <li><a onclick="logout()" >Logout</a></li>
</div>









	</div>
	<div class="split left">
		<div class="blueBorder "> 
			
		<table style="width: 100%; height: 100%; text-align: center; font-size: .75em; color: white;" border="0">
		<tr>

			<td>
				<table width="100%">
					<tr>
						<td>
							<button type="button" id = "searchQuestion" onclick="sendRequest()">Search for Questions</button>
						</td>
					</tr>
					<tr>
						<td>
							<button class="hidden" type="button" id = "loadMore" onclick="loadMore()">Load More</button>
						</td>
					</tr>
				</table>
			</td>


			<td><select id="Rdifficulty">
				<option>Difficulty</option>
				<option id="easy" value="32">
					easy
				</option>
				<option id="medium" value="64">
					medium
				</option>
				<option id="hard" value="128">
					hard
				</option>
				</select>
			</td>

			 <form action="/action_page.php"> 
				<td><input id="Rcheckbox0" name="forLoop" type="checkbox" value="1">For Loop</td>
				<td><input id="Rcheckbox1" name="whileLoop" type="checkbox" value="2">While Loop</td>
				<td><input id="Rcheckbox2" name="mathLib" type="checkbox" value="4">Math Library</td>
				<td><input id="Rcheckbox3" name="ifStatement" type="checkbox" value="8">If Statement</td>
				<td><input id="Rcheckbox4" name="misc" type="checkbox" value="16">Miscellaneous</td>
			</form></td>
		</tr>


	</table >

	</div>
		<div class="centered">

<table border="0"  >
<?php
//Outer loop for entire block 
for ($i = 0; $i < 50; $i++){

	echo "

	<table border='0' style='table-layout:fixed; width: 100%;' class='hidden' id='CTable".$i."'>
		<col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' />
		<col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' />
		<tr class='hidden'>
			<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
			<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
		</tr>

		<tr>
		<td class='   blueCodeText   blueShadowBR'>
			<table width='100%'>
				<tr>
					<td id='qidLabel".$i."' class=' hidden    '>Q ID: </td>
				</tr>
				<tr>
					<td id='qidLabelText".$i."' class=' hidden    '>&nbsp</td>
				</tr>
			</table>
		</td>
			<td colspan='9' id='returnText".$i."' class='blueCodeText hidden blueShadowBR'  ondblclick='updateExam(".$i.")'>&nbsp</td>
		<tr>


";


for ($j = 0; $j < 6; $j++){
	echo "
		<tr class=' hidden ' id='TCRow".$i.$j."'>
			<td colspan='5' class = 'newBlueCodeText' id='testCaseText" . $i . $j . "'>loading...</td>
			<td colspan='5' class = 'newBlueCodeText' id='expectedAnswer" . $i . $j . "'>&nbsp</td>
			 

		</tr>";
	}

	 
	echo "<br>";
 
	
}
?>


</table>




		</div>
	</div>



<div class="split right ">
				<!-- <div class="fleft"> -->
		<div class="greenBorder ">
			<table border='0' style='table-layout:fixed; width: 100%;>
				<col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' />
				<col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' />
		<tr class='hidden'>
			<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
			<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
		</tr>
				<tr>
					<td></td><td></td><td></td> 
					<td colspan="1" class="blueShadowBR  " > Total Points : </td>
					<td width="10%" id="pointTotal" value='0' class="blueShadowBR  ">&nbsp</td>
					<th><button input type="submit" id="submitExam" onclick="sendExamQuestions()" type="button" class="blueShadowBR">Submit Exam</button></th>
				
				
					
				</tr>
			</table>
		</div>



		<div class="centered">


<!-- <table border="1"> -->
<?php
//Outer loop for entire block 
for ($i = 0; $i < 10; $i++){

	echo "

	<table border='0' style='table-layout:fixed; width: 100%;' class='hidden' id='RCTable".$i."'>
		<col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' />
		<col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' /><col width='20%' />
		<tr class='hidden'>
			<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
			<td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td><td>&nbsp</td>
		</tr>

		<tr>
		<td class='   newCodeText   greenShadowBR'>
			<table width='100%'>
				<tr>
					<td id='RqidLabel".$i."' class='hidden'>Q ID: </td>
				</tr>
				<tr>
					<td id='RqidLabelText".$i."' class='hidden'>&nbsp</td>
				</tr>
			</table>
		</td>
		<td class='   newCodeText   greenShadowBR'>
			<table width='100%'>
				<tr>
					<td colspan='1' class='hidden  ' id='RpointsInput".$i."'>Points:</td>
				</tr>
				<tr>
					<td colspan='1' class=' QIDCodeText  ' ><input id='Rpoints".$i."' style='width:90%' type='number' placeholder='#' onchange='totalPointUpdater()'></td>
				</tr>
			</table>
		</td>
			
			<td colspan='8' id='RreturnText".$i."' class='codeText hidden greenShadowBR' ondblclick='updateExamRemove(".$i.")' >asd</td>
			
			
			
		<tr>


";


for ($j = 0; $j < 6; $j++){
	echo "
		<tr class=' hidden ' id='RTCRow".$i.$j."'>
			<td colspan='5' class = 'newCodeText' id='RtestCaseText" . $i . $j . "'>loading...</td>
			<td colspan='5' class = 'newCodeText' id='RexpectedAnswer" . $i . $j . "'>&nbsp</td>
			 

		</tr>";
	}

	 
	echo "<br>";
 
	
}
?>
</table>


<table width="100%"></table>


		</div>
	</div>



</div>
 