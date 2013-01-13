<?php
	$user = $_GET['user'];
    
	$list_user = array("dangtrinh", "vanhao", "thanhhy", "stevenguyen");
	$flag = 0;
	
	foreach( $list_user as $username ) {
		if( isset( $_GET['user']) && $user == $username ){
			$flag = 1;
            echo json_encode($list_user);
			//break;
		}
	}
	
    //var_dump(__LINE__, __FILE__, $_SERVER);
    
	if( $flag == 0 ){
		echo "Username này bạn có thể sử dụng!";
        	
	}else{
		echo "Username đã có người sử dụng, bạn vui lòng chọn một Username khác.";	
	}
?>