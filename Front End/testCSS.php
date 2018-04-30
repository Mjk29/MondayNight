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
		<div class="blueBorder  blueShadowBR">
			<table width="100%" height="100%">
				<tr>
					<th><button input type="submit" id="submitQuestion" onclick="sendQuestion()" type="button">Submit Question</button></th>
				</tr>
			</table>
		</div>


	<!-- <div class = "centered" > -->
	<div >
			<br><br><br><br><br><br><br><br><br>
				<table   style="font-size: .75em;">
					<tr  >
						
						<td  ><textarea class="blueShadowBR "  cols="113%" rows="20" id="question" placeholder="Enter question text here"  style='white-space:pre; resize: none;'></textarea></td>
					
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
											<textarea class='hidden blueShadowBR ' style='resize: none' id='testCase".$i."' placeholder='Expected Test Case ".$i."' rows='4' cols='54%'></textarea>
										</td>
										<td>
											<textarea class='hidden blueShadowBR ' style='resize: none' id='expectedAnswer".$i."' placeholder='Expected Answer ".$i."' rows='4' cols='54%'></textarea>
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
		<div class="greenShadowBR greenBorder "> 
			
		<table style="width: 100%; height: 100%; text-align: center; font-size: .75em; color: white; ">
		<tr>

			<td><button type="button" id = "searchQuestion" onclick="sendRequest()">Search for Questions</button></td>

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

<table border="0" >
<?php
	for ($i=0; $i < 50; $i++) { 
		echo "
			<tr class='testRow  '>
			<td colspan='4' ><div class='codeText hidden greenShadowBR' id='returnText".$i."'>&nbsp</div></td>
			</tr>";
			for ($j=0; $j < 5; $j++) { 
				echo "
					<tr class='testRow hidden' id='TCRow".$i.$j."'>
					<td ><div class='newCodeText hidden greenShadowBR ' id='testCaseText".$i.$j."'>&nbsp</div></td>
					<td ><div class='newCodeText hidden greenShadowBR ' id='expectedAnswer".$i.$j."'>&nbsp</div></td>
					</tr>

				";
			}
			echo "
			<tr height='15px'><td>&nbsp</td></tr>";
			

	}
?>
</table>




		</div>
	</div>

