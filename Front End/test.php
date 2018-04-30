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

	<meta charset="utf-8">
	<link href="split.css" rel="stylesheet">
	<title>Add Question</title>
</head>


<body onload="startTC()"></body>

<div class="blackBorder">
  <li><a  href="Instructor.php">Home</a></li>
  <li><a class="active" href="ADDQ.php">Add Question</a></li>
  <li><a  href="MakeExam.php">Make Exam</a></li> 
  <li><a href="reviewGrade.php">Review Grade</a></li>
  <li><a onclick="logout()" >Logout</a></li>
</div>





	<div class="split left ">
				<!-- <div class="fleft"> -->
		<div class="blueBorder ">
			<table width="100%" height="100%">
				<tr>
					<th><button input type="submit" id="submitQuestion" onclick="sendQuestion()" type="button">Submit Question</button></th>
				</tr>
			</table>
		</div>


	<div style="margin-left: 20px; margin-right: 20px" >
	<div >
			<br><br><br><br><br><br><br><br><br>
				<table  border="0" style="font-size: .90em;">
			<tr><td style='width:100%; height:0px; visibility:hidden;'></td></tr>

					<tr  >
						
						<td  ><textarea class="blueShadowBR "  rows="20" id="question" placeholder="Enter question text here"  style='white-space:pre; resize: none; width:95%;'></textarea></td>
					
						<td><table>
							<tr>
								<td>
									<select id="difficulty">
									<option> select difficulty</option>
									<option id="easy" value="32"> easy</option>
									<option id="medium" value="64">medium</option>
									<option id="hard" value="128">hard</option>
									</select>
								</td>
							</tr>
							<tr>
								<form action="/action_page.php">
								<tr><td><input id="checkbox0" name="forLoop" type="checkbox" value="1"> For Loop</td> </tr>
								<tr><td><input id="checkbox1" name="whileLoop" type="checkbox" value="2"> While Loop </td></tr>
								<tr><td><input id="checkbox2" name="mathLib" type="checkbox" value="4"> Math Library</td></tr>
								<tr><td><input id="checkbox3" name="ifStatement" type="checkbox" value="8"> If Statement</td></tr>
								<tr><td><input id="checkbox4" name="misc" type="checkbox" value="16"> Miscellaneous</td></tr>
								</form>
							</tr>
						</table>
						</td>
					</tr>
					<tr>
						<td>
					<table  width="100%">

							<?php
								for ($i=0; $i < 5; $i++) { 
									echo "
									<tr>
										<td>
											<textarea class='hidden blueShadowBR ' style='resize: none; width:90%;' id='testCase".$i."' placeholder='Expected Test Case ".$i."' rows='5'  ></textarea>
										</td>
										<td>
											<textarea class='hidden blueShadowBR ' style='resize: none; width:90%;' id='expectedAnswer".$i."' placeholder='Expected Answer ".$i."' rows='5'  ></textarea>
										</td>
									<tr>
									";
								}							
							?>
							</table>
							</td>
							<td>
							<table>
								<tr>
									<td><button input onclick="addNewTestCase()" type="button">Add New Test Case</button></td>
								</tr>
								<tr>
									<td><button input onclick="removeNewTestCase()" type="button">Remove Test Case</button></td>
								</tr>
							</table>
						</td>

						</tr>

						

					</tr>



				</table>

</div>



					



 
				</div>

 



	</div>
	<div class="split right">
		<div class="greenBorder "> 
			
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
			<td colspan='1' id='qidLabel".$i."' class=' hidden newCodeText   greenShadowBR'>Q ID: </td>
			<td colspan='1' id='qidLabelText".$i."' class=' hidden newCodeText   greenShadowBR'>&nbsp</td>
			<td colspan='8' id='returnText".$i."' class='codeText hidden greenShadowBR' >asd</td>
		<tr>


";


for ($j = 0; $j < 6; $j++){
	echo "
		<tr class=' hidden ' id='TCRow".$i.$j."'>
			<td colspan='5' class = 'newCodeText' id='testCaseText" . $i . $j . "'>loading...</td>
			<td colspan='5' class = 'newCodeText' id='expectedAnswer" . $i . $j . "'>&nbsp</td>
			 

		</tr>";
	}

	 
	echo "<br>";
 
	
}
?>
</table>




		</div>
	</div>

