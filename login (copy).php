<?php
	
session_start();
$_SESSION['username'] = 'testName';



	// $userName = $_GET['userName']; 
	// $passW = $_GET['passW'];


	// echo $userName;
// if ($_SERVER["REQUEST_METHOD"] == "GET") {

$url = 'https://web.njit.edu/~jbt8/login.php';
// $arrayText = ['ucid'=>$_GET["userName"], 'pass'=>$_GET["passW"]];
$arrayText = ['ucid'=>$_GET["userName"], 'pass'=>$_GET["passW"]];


//Testing datatype
// echo gettype($arrayText['ucid']), PHP_EOL;
// echo $arrayText['ucid'], PHP_EOL;
// echo gettype($arrayText['pass']), PHP_EOL;
// echo $arrayText['pass'], PHP_EOL;
// json_encode(value)


// var_dump($arrayText);

	$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
			curl_setopt($ch, CURLOPT_TIMEOUT, 10);

			// curl_setopt($ch, CURLOPT_POSTFIELDS, $arrayText);

			curl_setopt($ch, CURLOPT_POSTFIELDS, $arrayText);



			// $httpCode = curl_getinfo($ch , CURLINFO_HTTP_CODE); 
			$response = curl_exec($ch);

			// echo $response;

			if ($response === false) 
				$response = curl_error($ch);
			// echo stripslashes($response);
			// echo $response , PHP_EOL;
				
				// echo gettype($response);
		// var_dump($response);


		$result = htmlspecialchars($response);

	// 	for ($i=0; $i < 50 ; $i++) { 
	// 		echo $result{$i};
	// 		echo $i;
	// 		echo "\n";
	// }

		// if ($result{43} == 1) {
		// 		echo "ASKJDLDUQEWLDIQWN";
		// }


			$ResponseIN = json_decode($response);
			//Checks the 43th bit for status in the response
			//This will change to student / instructor login
			if ($result{43} == 2) {
				$serverStatus->status = 2;
				echo "connected to the server";
				$dataToSend = json_encode($serverStatus);
				echo $dataToSend;
				exit(1);
			}

			//This will change to student / instructor login
			elseif ($result{43} == 1) {
				$serverStatus->status = 1;
				// echo "connected to the student server";
				$dataToSend = json_encode($serverStatus);
				echo $dataToSend;
				exit(1);
			}
			//This stays as reject 
			else{
				//Should be set to 0 for normal runtime
				// $serverStatus->status = 0;
				//2 for testing instructor login
				$serverStatus->status = 2;
				// echo "connected to the server";
				$dataToSend = json_encode($serverStatus);
				echo $dataToSend;
				exit(1);
			}
			
			

		curl_close($ch);
	// }
	
?>



