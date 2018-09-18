<?php
	$server = "sql2.njit.edu";
	$user = "fakeuser";
	$pass = "fakepass";
	$sqlSuper = new mysqli($server, $user, $pass, $user);
	

        foreach($_POST as $key => $value)
		$string = urldecode($key);
	$info = explode('|',$string);
	$schoolUser = $info[1];
	$backstroke = $info[3];
	$west = '_' . $info[2];
	$result = mysqli_query($sqlSuper, "UPDATE `grades` SET teacherUpdate = '$west', newGrade = '$backstroke', viewable = 0 WHERE ucid = '$schoolUser';");
	var_dump($_POST);

?>
