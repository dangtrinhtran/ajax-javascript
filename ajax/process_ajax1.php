<?php
	$user = $_GET['user'];
	$list_user = array("tester","thaihungdaklak","demonwalock","clackkensmith");
	$ch = 0;
	
	foreach($list_user as $username){
		if(isset($_GET['user']) and $user ==$username){
			$ch =1;
			break;
		}
	}
	
	if($ch==0){
		echo "Bạn có thể sử dụng Username này.";	
	}else{
		echo "Username đã có người sử dụng, bạn vui lòng chọn một Username khác.";	
	}
?>