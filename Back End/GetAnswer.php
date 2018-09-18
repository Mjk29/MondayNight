<html>
	<?php
  	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
  	$id = (int)$_POST['id'];
	
	$result = mysqli_query($sqlSuper, "SELECT * FROM exam WHERE QID = $id;");
	$theRow = mysqli_fetch_row($result);
	$qPoints = $theRow[1]; 
	
	
  	$result = mysqli_query($sqlSuper, "SELECT * FROM questions WHERE ID = $id;");
  	$theRow = mysqli_fetch_row($result);
  
  	for($i=1; $i<6; $i++) //NULL is default value in the DB
  	{
        	$j = (2 * $i) + 2;
          	$k = $j + 1;
        	${"test$i"} = $theRow[$j];
		${"answer$i"} = $theRow[$k];
   	}


     	$archer = array('id'=>$theRow[0], 'qtext'=>$theRow[1], 'difft'=>$theRow[2], 'points'=>$qPoints/*$theRow[3]*/, 't1'=>$test1,	'a1'=>$answer1, 't2'=>$test2, 'a2'=>$answer2, 't3'=>$test3, 'a3'=>$answer3, 't4'=>$test4, 'a4'=>$answer4, 't5'=>$test5, 'a5'=>$answer5);   
	echo json_encode($archer);
	mysqli_close($sqlSuper); 

	?>
</html>