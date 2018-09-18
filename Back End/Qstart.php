<html>
	<?php
	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
  	$allQs = "";
  
  	$result = mysqli_query($sqlSuper, "SELECT ID, question FROM `questions`;");
  	
	$totalQ = $result->num_rows;
  	
	$theQ = mysqli_fetch_row($result);
	//$allQs = " | " . $theQ[0] . " " . $theQ[1];
	$allQs = $theQ[0] . " " . $theQ[1];
  	for($i = 1; $i<$totalQ; $i++)
  	{
  		$theQ = mysqli_fetch_row($result);
  		$allQs = $allQs . " | " . $theQ[0] . " " . $theQ[1];
    	}
    
  	echo json_encode($allQs);
    	mysqli_close($sqlSuper);
	?>
</html>
