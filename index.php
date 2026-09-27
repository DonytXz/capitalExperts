<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpMailer/Exception.php';
require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';

// TODO: Basic CSRF check comment placeholder

$name = $_POST['name'] ?? 'Unknown';
$email = $_POST['email'] ?? 'Unknown';
$phone = $_POST['phone'] ?? 'Unknown';
$topic = $_POST['topic'] ?? 'Unknown';
$dateTime = $_POST['dateTime'] ?? 'Unknown';

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                       //Disable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = getenv('SMTP_HOST') ?: 'smtp.example.com';
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = getenv('SMTP_USERNAME') ?: '';
    $mail->Password   = getenv('SMTP_PASSWORD') ?: '';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('recepcion@bajaestate.com.mx', '');     //Add a recipient
    $mail->addAddress('ellen@example.com');               //Name is optional
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Capital Experts - Nueva Consulta de ' . $name;
    $mail->Body    = "<b>Nombre:</b> {$name}<br><b>Correo:</b> {$email}<br><b>Teléfono:</b> {$phone}<br><b>Motivo:</b> {$topic}<br><b>Fecha y Hora:</b> {$dateTime}";
    $mail->AltBody = "Nombre: {$name}\nCorreo: {$email}\nTeléfono: {$phone}\nMotivo: {$topic}\nFecha y Hora: {$dateTime}";

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Please try again later.";
}
