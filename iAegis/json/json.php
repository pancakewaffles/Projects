<?php
   $json = $_POST['json'];
  	 $json=stripslashes($json);
     $file = fopen('user_data.js','w+');
     fwrite($file, $json);
     fclose($file);
   
     // handle error 
   
?>