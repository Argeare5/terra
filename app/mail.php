<?php
/**
 * This example shows settings to use when sending via Google's Gmail servers.
 * This uses traditional id & password authentication - look at the gmail_xoauth.phps
 * example to see how to use XOAUTH2.
 * The IMAP section shows how to save this message to the 'Sent Mail' folder using IMAP commands.
 */
//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
require 'phpmailer.php';
require 'smtp.php';

$name = $_POST["name"];
$phone = $_POST["phone"];

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
$mail->SMTPDebug = 0;
//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6
//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;
//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "landingsuvorov@gmail.com";
//Password to use for SMTP authentication
$mail->Password = "JKLJlkjsal23123";
//Set who the message is to be sent from
$mail->setFrom('landingsuvorov@gmail.com', 'Terra');
//Set who the message is to be sent to
$mail->addAddress('landing@rsti.ru');
//Set the subject line
$mail->Subject = 'Заявка с сайта "Terra"';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->CharSet = 'UTF-8';
$mail->msgHTML('
                  <table cellspacing="0" color: #000;">
                    <tr style="border: 1px solid black;">
                      <td style="padding: 7px 15px; font-weight: bold; font-size: 14px; border: #e9e9e9 1px solid;">Имя:</td>
                      <td style="padding: 7px 15px; font-size: 14px; border: #e9e9e9 1px solid;">'.$name.'</td>
                    </tr>
                    <tr style="border: 1px solid black;">
                      <td style="padding: 7px 15px; font-weight: bold; font-size: 14px; border: #e9e9e9 1px solid;">Телефон:</td>
                      <td style="padding: 7px 15px; font-size: 14px; border: #e9e9e9 1px solid;">'.$phone.'</td>
                    </tr>
                  </table>

               ');

$mail->AltBody = 'Имя: '.$name.'Телефон'.$phone;

//send the message, check for errors
if (!$mail->send()) {} else {}