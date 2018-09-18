<html>
	<?php
	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
	
  foreach($_POST as $key=>$value)
    $final = explode("|",substr($key, 0, -1));

	$question = '"' . $final[0] . '"';
	$difft = (int) $final[1];
	$points = (int) $final[2];
  	$fieldTotal = count($final);


  	$count = 1; //used for variable initialization

  	for($i=1; $i<6; $i++) //NULL is default value
  	{
        	${"test$i"} = '"' . "NULL" . '"';
		${"answer$i"} = '"' . "NULL" . '"';    
   	}

	for($i=2; $i<$fieldTotal; $i+=2) //populating test case variables
   	{

    		if(~$final[$i]) 
		{
		${"test$count"} = '"' . $final[$i] . '"';
		$count++;
		}
   	}   
   	$count = 1; //reset variable counter
   	for($i=3; $i<$fieldTotal; $i+=2) //populating test case output variables
   	{

    		if(~$final[$i]) 
		{
		${"answer$count"} = '"' . $final[$i] . '"';
		$count++;
		}
   	}   

	var_dump($final);

	echo $difft;
	echo $points;
	echo $test1;
	echo $answer1;
	echo $test2;
	echo $answer2;
	echo $test3;
	echo $answer3;
	echo $test4; 
	echo $answer4; 
	echo $test5; 
	echo $answer5;
  urlidecode*/ 
  	$result = mysqli_query($sqlSuper, "INSERT INTO questions (QUESTION, DIFFT, Test1, Answer1, Test2,
	Answer2, Test3, Answer3, Test4, Answer4, Test5, Answer5) VALUES ($question, $difft, $test1, $answer1, $test2, $answer2, $test3, $answer3, $test4, $answer4, $test5, $answer5);");
  	mysqli_close($sqlSuper);
	?>
</html>
