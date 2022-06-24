<?php
    $email = $_POST['email'];
    $subject = "Merci de votre inscription !";
    $message = "Merci de votre inscription !";

    mail($email, $subject, $message);

?>