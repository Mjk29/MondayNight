<?php
$url = 'https://web.njit.edu/~fu4/Qfinal.php';
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
	// $sendingArray = array('question' => $decoded->{'questionText'},

	$decoded = json_decode($_GET['dataToSend']);
	// echo $decoded->{'questionText'};
	// echo "\n";
		// echo $decoded->{'difft'};

	echo "var dump \n";
	var_dump($decoded);


	// $stack = new \Ds\Stack();

	// $sendingArray = array();


	// $sendingArray = array();

	// foreach($file_data as $value) {
	//     list($category, $question) = explode('|', $value, 2);

	//     if(!isset($data[$category])) {
	//         $data[$category] = array();
	//     }
	//     $data[$category][] = $question;
	// }
	// print_r($data);


	$sendingArray = array('Q0' => $decoded[0],
	'Q1' => $decoded[1], 
	'Q2' =>  $decoded[2],
	'Q3' =>  $decoded[3],
	'Q4' =>  $decoded[4]);


	// 'test2' =>  $decoded->{'testCase1'},
	// 'answer2' =>  $decoded->{'testAnswer1'},
	// 'test3' =>  $decoded->{'testCase2'},
	// 'answer3' =>  $decoded->{'testAnswer2'},
	// 'test4' =>  $decoded->{'testCase3'},
	// 'answer4' =>  $decoded->{'testAnswer3'},
	// 'test5' =>  $decoded->{'testCase4'},
	// 'answer5' =>  $decoded->{'testAnswer4'});


	echo "PRINTING SENDING ARRAY\n";
	var_dump($sendingArray);
	// echo $sendingArray['Q0'];

	echo "\nPRINTING SENDING ARRAY\n";





	// for ($i=0; $i <count($decoded); $i++) { 
	// 		$stack->push($i)); 
	// }


	// $sendingArray = array(	'difft' => $decoded->{'difft'}); 

	// echo "HERE IS STACK \n";
	// print_r($stack);

	$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
			
			curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
			curl_setopt($ch, CURLOPT_TIMEOUT, 10);

			// curl_setopt($ch, CURLOPT_POSTFIELDS, $arrayText);

			curl_setopt($ch, CURLOPT_POSTFIELDS, $sendingArray);



			// $httpCode = curl_getinfo($ch , CURLINFO_HTTP_CODE); 
			$response = curl_exec($ch);

			// echo $response;

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
			echo strip_tags($response);
			// echo "***************************************";


		// $result = htmlspecialchars($response);
		// echo "string";
		?>