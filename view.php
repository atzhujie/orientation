<title>定位管理平台</title>
<table border="1">
  <tr>
    <th id='j'>经度</th>
    <th id='w'>纬度</th>
	<th>时间</th>
	<th>IP地址</th>
	<th>USER-AGENT</th>
	<th>操作</th>
  </tr>

<?php

if(!file_exists('log.txt'))
{
	 die('FileNotFound');
}

$data = explode("\r\n",file_get_contents('log.txt'));

foreach($data as $l)
{
	echo '<tr>';
	$d=explode("|",$l);
	
	foreach($d as $v){
		echo '<td>'.$v.'</td>';
		
	}
	echo '<td><a href="http://www.gpsspg.com/maps.htm">定位</a></td>';
	echo '</tr>';
}

?>

</table>