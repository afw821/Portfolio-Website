<?php

if(isset($_POST['submit'])){
    $firstName= $_POST['name'];
    $lastName= $_POST['name'];
    $mailFrom= $_POST['mail'];
    $message= $_POST['message'];

    $mailTo = "afw821@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: form.php?mailsend");
}