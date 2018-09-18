<html>
	<?php
	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
   	$selectedQs = "";
   	$difft = (int)$_POST['difft'];
        $difftChecker = array(); //this array will fill with the bits difft holds
   	
        $baseTwo = 1; //using this and the loop for a bit checker to fill difft array
        for($i=0; $i < 8; $i++)
        {
        	if($baseTwo&$difft) //bit is present
        		$difftChecker[] = $baseTwo; //so add it to array
        	$baseTwo *= 2; //move onto next bit
        }   
        $result = mysqli_query($sqlSuper, "SELECT ID, question, difft FROM questions;");
        $total = $result->num_rows;
	$difftSize = count($difftChecker);
        for($i = 0; $i<$total; $i++)
  	{
  		$theQ = mysqli_fetch_row($result);
        	if($theQ[2]^$difft)
			continue;
		else
			$selectedQs = $selectedQs . " | " . $theQ[0] . " " . $theQ[1];

   	}
        
        echo json_encode($selectedQs); 
        mysqli_close($sqlSuper);
  	
	?>
</html>
