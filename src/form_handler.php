<?php
// include PHP Mailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include 'PHPMAILER/PHPMailer.php';
include 'PHPMAILER/SMTP.php';
include 'PHPMAILER/Exception.php';

// Include the email config.
include 'config-email.php';

$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPDebug = 0; //2 = off (for production use) - 1 = client messages - 2 = client and server messages
if(!$host || !$user || !$pass || !$from || !$to1){
    echo('missing parameters');
}
$mail->Host = $host; 

$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;

//configurare adrese de mail. TODO: Add config-email.php
$mail->Username = $user;
$mail->Password = $pass;
$mail->setFrom($from);
$mail->addAddress($to1); 
// $mail->addAddress($to2); 

$mail->Subject = '  Eden Crevedia - Trimitere noua din formularul de contact';
$body = "<h1>Solicitare noua din formularul de contact</h1><p><strong>Email: </strong>{$_POST['email']}</p>";
$mail->msgHTML($body);
$mail->AltBody = 'HTML messaging not supported';


if ($mail->send()) {
    header('Location: /thankyou');
} else {
    // header('Location: /error');
}
