<?php
$url = 'https://web.njit.edu/~fu4/releaseGrades.php';
// $arrayText = ['ucid'=>$_GET["userName"], 'pass'=>$_GET["passW"]];
// $arrayText = ['ucid'=>$_GET["userName"], 'pass'=>$_GET["passW"]];


// $arrayText = ['Qtext'=>$_GET["questionText"] ];

// echo "$arrayText";

// $arrayText = 'asdas' => "def hello():print("6")";

	// $newlineText =  preg_replace('/\<br(\s*)?\/?\>/i', "\n",  $_GET["questionText"]);
	// $arrayText = array('asda' => $newlineText);


//Semi working
// $arrayText = array('asda' => $_GET["questionText"]);

// echo "Below is the question text echo in php \n";
// echo $_GET["questionText"];
// echo "aksdasldj";



//Testing datatype
// echo gettype($arrayText['ucid']), PHP_EOL;
// echo $arrayText['ucid'], PHP_EOL;
// echo gettype($arrayText['pass']), PHP_EOL;
// echo $arrayText['pass'], PHP_EOL;
// json_encode(value)


// var_dump($arrayText);

	// echo $_GET['dataToSend'];
// echo "WEFHUIHUIHUIEFUHEWFHUIOWEFHUIWEFHUIO";


	$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
			curl_setopt($ch, CURLOPT_TIMEOUT, 10);

			// curl_setopt($ch, CURLOPT_POSTFIELDS, $arrayText);

			curl_setopt($ch, CURLOPT_POSTFIELDS, 'release');



			// $httpCode = curl_getinfo($ch , CURLINFO_HTTP_CODE); 
			$response = curl_exec($ch);

			echo $response;
			echo "GRADE RELEASE SENT";
			

			if ($response === false) 
				$response = curl_error($ch);
			// echo stripslashes($response);
			// echo $response , PHP_EOL;
				
				// echo gettype($response);
		
		// var_dump($response);

		// echo json_encode($response);
			// echo explode(',', strip_tags($response));
			// echo gettype($response);
			// echo $response;
			// echo explode('|', $response);

			// echo "***************************************";
			// echo $_GET['dataToSend'];
			// echo strip_tags($response);
			// echo "***************************************";


		// $result = htmlspecialchars($response);
		// echo "string";
		?>