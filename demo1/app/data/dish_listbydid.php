<?php
header("Content-type:application/json");
@$did=$_REQUEST['did'];
if(!isset($did))
{
  echo '{}';
  return;
}
  $conn=mysqli_connect('127.0.0.1','root','','kaifanla');
  $sql="SET NAMES UTF8";
  mysqli_query($conn,$sql);
  $sql="SELECT did,name,price,material,img_lg,detail FROM kf_dish WHERE did=$did "; 
  $result=mysqli_query($conn,$sql);

 $row=mysqli_fetch_assoc($result);
 $jason=json_encode($row);
 echo $jason;
?>