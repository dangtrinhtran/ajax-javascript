function object(){
	/*
		Đối tượng XMLHttpRequest dùng để lấy dữ liệu phía server và trả về kết quả trên một phần trang web
		mà không cần phải tải lại toàn bộ nội dung trang web
	*/
	if (window.XMLHttpRequest)
	{	
		// Dành cho trình duyệt IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{	
		// Dành chi trình duyệt IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlhttp;
}
// Gọi đối tượng XMLHttpRequest từ hàm object để sử dụng
var http = object();
// Khởi tạo hàm getdata để lấy giá trị từ form và tiến hành sử dụng ajax lấy ra kết quả
function getDataHTML(){
	// Tạo loading 
	document.getElementById("result").innerHTML = "<img src='loading.gif'/>";
	// Gửi dữ liệu đến server xử lý 
	http.open("post","post.php",true);
	// Khi sử dụng phương thức POST phải khai báo hàm này
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	// Kiểm tra và sử lý kết quả trả về
	http.onreadystatechange = process; 
	// Lấy dữ liệu từ form nhập vào
	text = document.getElementById("text").value;
	// Gửi dữ liệu đến server
	http.send("text=" + text);
}

function getDataXML(){
	// Tạo loading 
	document.getElementById("result").innerHTML = "<img src='loading.gif'/>";
	// Gửi dữ liệu đến server xử lý 
	http.open("post","json.php",true);
	// Khi sử dụng phương thức POST phải khai báo hàm này
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	// Kiểm tra và sử lý kết quả trả về
	http.onreadystatechange = process; 
	// Lấy dữ liệu từ form nhập vào
	text = document.getElementById("text").value;
	// Gửi dữ liệu đến server
	http.send("text=" + text);
}

function getDataJSON(){
	// Tạo loading 
	document.getElementById("result").innerHTML = "<img src='loading.gif'/>";
	// Gửi dữ liệu đến server xử lý 
	http.open("post","json.php",true);
	// Khi sử dụng phương thức POST phải khai báo hàm này
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
	// Kiểm tra và sử lý kết quả trả về
	http.onreadystatechange = process; 
	// Lấy dữ liệu từ form nhập vào
	text = document.getElementById("text").value;
	// Gửi dữ liệu đến server
	http.send("text=" + text);
}

// Khởi tạo hàm process kiểm tra và xử lý kết quả trả về
function process(){
	// Kiểm tra có lỗi hay không
	if(http.readyState == 4 && http.status == 200){
		result = http.responseText; // Lấy dữ liệu trả về ( dạng Text ) lưu vào một biến
		// Xuất kết quả trả về ra thẻ div với id là result
		document.getElementById("result").innerHTML = result;
	}
}