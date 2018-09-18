<html>
	<?php
	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
  	
	//DELETE EXAM ENTRIES FOR FRESH TABLE
  	$result = mysqli_query($sqlSuper, "DELETE FROM exam;");

	$ids = ""; 
  	foreach($_POST as $value) //concatenating question ids for the sql query
  	  	if($value != 0) //checking for null values
			$ids = $ids . $value . ", ";  
    
	$ids = substr($ids, 0, -2);  //trimming the ,
  	var_dump($ids);
  	$leftHalf = strpos($ids, "9999"); //using "9999" as a delimiter
  	
    	$points = substr($ids, $leftHalf+5);

    	
   	$ids = substr($ids,0,$leftHalf-2);
	
	var_dump($points);
	var_dump($ids);
	$idsArr = explode(',',$ids);
	$pointsArr = explode(',',$points);
	
	for($i=0; $i < count($idsArr); $i++)
	{
		$idsArr[$i] = trim($idsArr[$i]);
		$pointsArr[$i] = trim($pointsArr[$i]);
	}
	for($i=0; $i< count($idsArr); $i++)
	{
  		$result = mysqli_query($sqlSuper, "INSERT INTO exam (QID, POINTS) VALUES($idsArr[$i], $pointsArr[$i]);");
	}
	var_dump($idsArr);
	var_dump($pointsArr);
   	//var_dump($_POST);
  	?>
</html>