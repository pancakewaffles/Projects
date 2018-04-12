<?php

if ($_REQUEST['action'] == 'rsvp') {
	echo $rsvp;
	
}else{
	$rsvp = $_REQUEST['saversvp'];
  	 echo $rsvp;
     
}
 
?>