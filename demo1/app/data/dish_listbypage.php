<?php
  header('Content-type:application/json');
  @$start=$_REQUEST['start'];
  if(!isset($start)){
    $start=0;
  }
  $count=5;
 

  $conn=mysqli_connect('127.0.0.1','root','','kaifanla');
  $sql="SET NAMES UTF8";
  mysqli_query($conn,$sql);
  $sql="SELECT did,name,price,material,img_sm FROM kf_dish LIMIT $start,$count";
  $result=mysqli_query($conn,$sql);

  $output=[];
  while(($row=mysqli_fetch_assoc($result))!==NULL){
    $output[]=$row;
  }
  $jason=json_encode($output);
  echo $jason;

?>