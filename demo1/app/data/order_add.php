<?php
  header('Content-type:appliaction/json');
  @$user_name=$_REQUEST['user_name'];
  @$gender=$_REQUEST['gender'];
  @$phone=$_REQUEST['phone'];
  @$addr=$_REQUEST['addr'];
  @$did=$_REQUEST['did'];
  @$order_time=time()*1000;

  if(!isset($user_name) ||!isset($gender)||!isset($phone)||!isset($addr))
  { 
	$output=[];
	$output['status']="error";
	$output['msg']='error!';
	echo json_encode($output);
    return;
     
  }

  $conn=mysqli_connect('127.0.0.1','root','','kaifanla');
  $sql="SET NAMES UTF8";
  mysqli_query($conn,$sql);
  $sql="INSERT INTO kf_order(oid,user_name,gender,phone,addr,did,order_time) VALUES(NULL,'$user_name','$gender','$phone','$addr','$did','$order_time')"; 
  $result=mysqli_query($conn,$sql);


  $output=[];
  if($result){

	$output['status']='success';
	$output['oid']=mysqli_insert_id($conn);
  }else{
    $output['status']='error';
	$output['msg']='your database is not available';
  }

  $jason=json_encode($output);
  echo $jason;

?>