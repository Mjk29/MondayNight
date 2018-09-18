<html>
	<?php
	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
  
  	$result = mysqli_query($sqlSuper, "SELECT * FROM exam;"); //grabbing the question id #s, points
  	$totalRows = $result -> num_rows;
	$theQ = mysqli_fetch_row($result);
  	$ids = $theQ[0];
    	$points[] = $theQ[1]; 
  	for($i = 1; $i<$totalRows; $i++)
  	{
  		$theQ = mysqli_fetch_row($result);
  		$ids = $ids . ", " . $theQ[0];
      		$points[] = $theQ[1]; 
   	}
  	
	//search the question bank with the question ids
  	$result = mysqli_query($sqlSuper, "SELECT ID, QUESTION FROM questions WHERE ID IN ($ids);");
  	//fit the questions and ids together into a json string
	$totalRows = $result -> num_rows;
  	$theQ = mysqli_fetch_row($result);
	$selectedQs = "| " . $theQ[0] . " " . $theQ[1];
  	for($i = 1; $i<$totalRows; $i++)
  	{
  		$theQ = mysqli_fetch_row($result);
  		$selectedQs = $selectedQs . " | " . $theQ[0] . " " . $theQ[1];
   	}
    	$points2 = implode(" ",$points);
      echo json_encode($selectedQs . "[" . $points2);
 
    	mysqli_close($sqlSuper);
	?>
</html>