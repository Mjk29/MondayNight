<?php

$url = 'https://web.njit.edu/~jbt8/ADDQ.php';
    // $newlineText =  preg_replace('/\<br(\s*)?\/?\>/i', "\n",  $_GET["questionText"]);
    // $arrayText = array('asda' => $newlineText);
    

// $tester = array('question'=>"New SENDING DATA", 'difft'=>56, 'points'=>99, 'test1'=>"we need a winner", 'answer1'=>"the winner is me", 'test2'=>"Last test", 'answer2'=> "no answer here");

	// $tester;


	$inputData = $_GET['dataToSend'];
echo "HERE IS THE INPUT DATA ";
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n";
	// echo "$inputData \n";
	// echo "$inputData['questionText']";

	$decoded = json_decode($_GET['dataToSend']);
	echo $decoded->{'questionText'};
	echo "\n";
		echo $decoded->{'difft'};
	echo "\n";
		echo $decoded->{'points'};
	echo "\n";
		echo $decoded->{'testCase0'};
	echo "\n";
		echo $decoded->{'testAnswer0'};
	echo "\n";
		echo $decoded->{'testCase1'};
	echo "\n";
			echo $decoded->{'testAnswer1'};
	echo "\n";
	


	$sendingArray = array('question' => $decoded->{'questionText'},
	'difft' => $decoded->{'difft'}, 
	'points' =>  $decoded->{'points'},
	'test1' =>  $decoded->{'testCase0'},
	'answer1' =>  $decoded->{'testAnswer0'},
	'test2' =>  $decoded->{'testCase1'},
	'answer2' =>  $decoded->{'testAnswer1'},
	'test3' =>  $decoded->{'testCase2'},
	'answer3' =>  $decoded->{'testAnswer2'},
	'test4' =>  $decoded->{'testCase3'},
	'answer4' =>  $decoded->{'testAnswer3'},
	'test5' =>  $decoded->{'testCase4'},
	'answer5' =>  $decoded->{'testAnswer4'});


	var_dump($sendingArray);


	echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \n";




    $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
            curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            // curl_setopt($ch, CURLOPT_POSTFIELDS, $arrayText);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $sendingArray);
            // $httpCode = curl_getinfo($ch , CURLINFO_HTTP_CODE); 
            
            	// echo "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&";


            if (isset($_GET['dataToSend'])) {
            	// echo "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&";
            	// echo $sendingArray;

            	$response = curl_exec($ch);	

            }
            

            
   //          echo "************************";
            echo $response;
			// echo "************************";



            if ($response === false) {
                $response = curl_error($ch);
            }
            // echo stripslashes($response);
            // echo $response , PHP_EOL;
                
                // echo gettype($response);
        // var_dump($response);
        // $result = htmlspecialchars($response);

        	echo strip_tags($response);


        // echo "string";

        // return;

    ?>

?>