<?php
	$text = $_POST["text"];
	//echo $text;
    echo json_encode(array('input' => $text));
?>