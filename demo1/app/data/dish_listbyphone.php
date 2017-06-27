<?php
  header("Content-type:application/json");
  @$phone=$_REQUEST['phone'];

  if(!isset($phone)){
    echo '[]';
	return;
  }
  $output=[];

  $conn=mysqli_connect('127.0.0.1','root','','kaifanla');
  $sql="SET NAMES UTF8";
  mysqli_query($conn,$sql);
  $sql="SELECT oid,user_name,order_time,img_sm FROM kf_order,kf_dish WHERE kf_order.oid=kf_dish.did AND phone='$phone'"; 
  $result=mysqli_query($conn,$sql);

  while(($row=mysqli_fetch_assoc($result))!==NULL){
    $output[]=$row;
  }


  $jason=json_encode($output);
  echo $jason;

?>