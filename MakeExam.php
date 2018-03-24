
<?php
	session_start();
	if (!$_SESSION['userType'] == "instructor") {
		echo "Not logged in";
		exit(1);
	}
?>






<script src="MakeExam.js"></script>
<script src="instructor.js"></script>

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8"/>
<link rel="stylesheet" href="split.css">
<!-- <div class="split"> -->
<!--Updated on 10/8/2016; fixed center alignment percentage-->

	<title>Make Exam</title>


<ul class="a">
  <li><a href="Instructor.php">Home</a></li>
  <li><a href="ADDQ.php">Add Question</a></li>
  <li><a class="active" href="MakeExam.php">Make Exam</a></li> 
  <!-- <li><a href="ChangeGrade.html">Change Grades</a></li> -->
  <!-- <li><a href="ViewGrade.html">View Grades</a></li> -->
  <li><a onclick="releaseGrades()" >Release Grades</a></li>
  <li><a onclick="logout()" >Logout</a></li>
</ul>


<div class="split left">

<ul class="b">

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



				<!-- <br><button type="button" id = "searchQuestion" 
				onclick="sendArray('MakeExam.php','somedatya')">Send Questions</button> -->
  <!-- <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li> -->
</ul>


	<div class = "centered">





		<!-- <textarea  id="QuestionText"rows="10" cols="40"  style='white-space:pre' placeholder="Enter question text here" >print(6)</textarea> -->
<!-- 		<br>
		<select>
			<option value="easy">easy</option>
			<option value="meduim">medium</option>
			<option value="hard">hard</option>
		</select>

			<br>
			<input type="checkbox" name="sad" value="ForLoop" > For Loop<br>
			<input type="checkbox" name="vehicle" value="WhileLoop" > While Loop<br>
			<input type="checkbox" name="vehicle" value="Dictionary" > Dictionary<br>
			<input type="checkbox" name="vehicle" value="Ifstatement" > If Statement <br>
			<input type="checkbox" name="vehicle" value="Miscellaneous" > Miscellaneous<br>
		<button type="button" id = "searchQuestion" onclick="sendRequest()">Search for Questions</button>
 -->

	



		<table style="width: 100%">
		<!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->

	<?php 

	// echo "Here is beginnning of data";
	// echo "===============================================================";
	// // $data = json_decode(stripslashes($_POST['JStoPHPData']));
	// echo $_POST['JStoPHPData'];
	// var_dump($_POST['JStoPHPData']);
	// echo "<br>end of data =======================";



	// var_dump($data);

  // here i would like use foreach:

  // foreach($data as $d){
  //    echo $d;
  // }


        echo "<tr>\n"; 
                        // $theID = $row['locationid']; 
                        // echo " <td>{$row['locationname']}</td>\n"; 
                        // echo " <td>{$row['returnedaddress']}</td>\n"; 
                        // echo " <td>{$row['totalfinds']}</td>\n"; 
                        // echo " <td>	<form action= locationsaction.php  method= 'post'>
                        // 			<input type='hidden' name='lid' value=$theID />
                        //            	<input type= 'submit' name= 'type' value= 'View/Amend Location Details'/>
                        //            	<input type= 'submit' name= 'type' value= 'Add/View Find Images'/>
                        //            	<input type= 'submit' name= 'type' value= 'View Location Finds'/>
                        //            	<input type= 'submit' name= 'type' value= 'View Location Finds'/>
                        //            	</form></td>\n"; 
                        // echo "</tr>\n"; 


                    
                   

	// echo "<tr>\n";

			// for ($i=0; $i < 10; $i++) { 
			// 	echo "<tr>";

			// 	echo"<p class='codeText' id='returnText'",[i],">",
			// 	"<input type= 'submit' name= 'type' value= 'ADD'/>","<br>";

			
			// 	echo "</tr>";

			// }

	// echo "</tr>";


	?>

			<!-- <p class="codeText" id="returnText3">&nbsp</p> -->


			<p ondblclick="updateExam(0,1)" class="codeText" id="returnText0">&nbsp</p>
			<p ondblclick="updateExam(1,1)" class="codeText" id="returnText1">&nbsp</p>
			<p ondblclick="updateExam(2,1)" class="codeText" id="returnText2">&nbsp</p>
			<p ondblclick="updateExam(3,1)" class="codeText" id="returnText3">&nbsp</p>
			<p ondblclick="updateExam(4,1)" class="codeText" id="returnText4">&nbsp</p>
			<p ondblclick="updateExam(5,1)" class="codeText" id="returnText5">&nbsp</p>
			<p ondblclick="updateExam(6,1)" class="codeText" id="returnText6">&nbsp</p>
			<p ondblclick="updateExam(7,1)" class="codeText" id="returnText7">&nbsp</p>
			<p ondblclick="updateExam(8,1)" class="codeText" id="returnText8">&nbsp</p>
			<p ondblclick="updateExam(9,1)" class="codeText" id="returnText9">&nbsp</p>



</table>
</div>

</div>





<div class="split right">
	<ul class="c">
	
		<button margin = "56" type="button" id = "searchQuestion" onclick="sendExamQuestions()">Submit Exam</button> 
				
</ul>






	<div class = "centered">

		<table style="width: 100%">
			
			<p ondblclick="updateExam(0,0)" class="codeText" id="examQuestion0">&nbsp</p>
			<p ondblclick="updateExam(1,0)" class="codeText" id="examQuestion1">&nbsp</p>
			<p ondblclick="updateExam(2,0)" class="codeText" id="examQuestion2">&nbsp</p>
			<p ondblclick="updateExam(3,0)" class="codeText" id="examQuestion3">&nbsp</p>
			<p ondblclick="updateExam(4,0)" class="codeText" id="examQuestion4">&nbsp</p>
			<p ondblclick="updateExam(5,0)" class="codeText" id="examQuestion5">&nbsp</p>
			<p ondblclick="updateExam(6,0)" class="codeText" id="examQuestion6">&nbsp</p>
			<p ondblclick="updateExam(7,0)" class="codeText" id="examQuestion7">&nbsp</p>
			<p ondblclick="updateExam(8,0)" class="codeText" id="examQuestion8">&nbsp</p>
			<p ondblclick="updateExam(9,0)" class="codeText" id="examQuestion9">&nbsp</p>





		</table>




			<!-- </textarea> -->
			<!-- <textarea  id="QuestionText"rows="2" cols="25" placeholder="Expected Output"></textarea> 
				<textarea  id="QuestionText"rows="2" cols="25" placeholder="Expected Test Case 1"></textarea> 
				<textarea  id="QuestionText"rows="2" cols="25" placeholder="Expected Test Case 2"></textarea> 
				<textarea  id="QuestionText"rows="2" cols="25" placeholder="Expected Test Case 3"></textarea> 
				-->
	</div>
</div>
