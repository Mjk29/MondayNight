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



	<ul class="a">
		<li><a href="Instructor.php">Home</a></li>
		<li><a class="active" href="#ADDQ.php">Add Question</a></li>
		<li><a href="MakeExam.php">Make Exam</a></li>
		<!-- <li><a href="ChangeGrade.html">Change Grades</a></li> -->
		<!-- <li><a href="ViewGrade.html">View Grades</a></li> -->
		<li><a onclick="releaseGrades()">Release Grades</a></li>
		<li><a onclick="logout()">Logout</a></li>

	</ul>









	<div class="split left">
		<div class="centered">
			<div class="wrap">
				<!--Updated on 10/8/2016; fixed center alignment percentage-->
				<div class="fleft">
					<textarea cols="40" id="question" placeholder="Enter question text here" rows="10" style='white-space:pre'></textarea><br>


					<select id="difficulty">
						<option> select difficulty</option>
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
					<form action="/action_page.php">
						<input id="checkbox0" name="forLoop" type="checkbox" value="1"> For Loop<br>
						<input id="checkbox1" name="whileLoop" type="checkbox" value="2"> While Loop<br>
						<input id="checkbox2" name="mathLib" type="checkbox" value="4"> Math Library<br>
						<input id="checkbox3" name="ifStatement" type="checkbox" value="8"> If Statement<br>
						<input id="checkbox4" name="misc" type="checkbox" value="16"> Miscellaneous<br>
					</form>




					<input id="questionPoints" placeholder="Points" type="number" min="1" max="255"><br>
				</div>
				<div class="fcenter codeText">
					<br>
			<!-- 		<textarea cols="40" id="expectedFunctionName" placeholder="Expected Function Name" rows="4"></textarea><br>
					<textarea cols="40" id="expectedOutput" placeholder="Expected Output" rows="4"></textarea><br> -->
					<textarea cols="40" id="testCase0" placeholder="Expected Test Case 0" rows="4"></textarea><br>
					<textarea cols="40" id="expectedAnswer0" placeholder="Expected Answer 0" rows="4"></textarea><br><br>


					<textarea cols="40" id="testCase1" placeholder="Expected Test Case 1" rows="4"></textarea><br>
					<textarea cols="40" id="expectedAnswer1" placeholder="Expected Answer 1" rows="4"></textarea><br><br>


					<textarea cols="40" id="testCase2" placeholder="Expected Test Case 2" rows="4"></textarea><br>
					<textarea cols="40" id="expectedAnswer2" placeholder="Expected Answer 2" rows="4"></textarea><br><br>


					<textarea cols="40" id="testCase3" placeholder="Expected Test Case 3" rows="4"></textarea><br>
					<textarea cols="40" id="expectedAnswer3" placeholder="Expected Answer 3" rows="4"></textarea><br><br>


					<textarea cols="40" id="testCase4" placeholder="Expected Test Case 4" rows="4"></textarea><br>
					<textarea cols="40" id="expectedAnswer4" placeholder="Expected Answer 4" rows="4"></textarea><br><br>





				</div><input type="submit" id="submitQuestion" onclick="sendQuestion()" type="button">Submit QUestion</button>
			</div>
		</div>
		</div>
		<!-- //End of split left -->




	</div>
	<div class="split right">
		<ul class="c">
			<button type="button" id = "searchQuestion" onclick="sendRequest()">Search for Questions</button> 

					<select id="Rdifficulty">
						<option> select difficulty</option>
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
					<form action="/action_page.php">
						<input id="Rcheckbox0" name="forLoop" type="checkbox" value="1"> For Loop
						<input id="Rcheckbox1" name="whileLoop" type="checkbox" value="2"> While Loop
						<input id="Rcheckbox2" name="mathLib" type="checkbox" value="4"> Math Library
						<input id="Rcheckbox3" name="ifStatement" type="checkbox" value="8"> If Statement
						<input id="Rcheckbox4" name="misc" type="checkbox" value="16"> Miscellaneous
					</form>

					

	</ul>
		<div class="centered">

			<p class="codeText" id="returnText0">&nbsp</p>
			<p class="codeText" id="returnText1">&nbsp</p>
			<p class="codeText" id="returnText2">&nbsp</p>
			<p class="codeText" id="returnText3">&nbsp</p>
			<p class="codeText" id="returnText4">&nbsp</p>




		</div>
