<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="NordicViking är en sida med casinospel">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="keywords" content="games, viking, casino, multiplayer">
    <meta name="author" content="Viktor Liljenberg">
    <title>NordicViking</title>

  </head>
  <body>
    

  <header>

      <div class="headerFlex">

      <h1 class="rubrik" >Nordic Viking</h1>

<a href="index.php"><img src="img/VikingLogga.gif" alt="Logga"></a>
      </div>
        

          
        <div class="stödlinje">
        <?php

            include_once 'includes/dbh.inc.php';

     

            if(isset($_SESSION["useruid"])){
              if(!isset($_SESSION['first_run'])){
                $_SESSION['first_run'] = 1;
              echo"<h4>Välkommen!</h4>";
              }else {

                echo"";

              }
        

            } else{
              echo "
              <h5>+18 år.regler och villkor gäller.</h5>
                    <h5>välkomstbonus gäller endast nya kunder som sätter in minst 100kr.</h5>
                    <h5>för fullständiga regler och villkor klicka här </h5>
                    <h5>Spela ansvarsfullt. www.Stödlinjen.se.</h5>";
              }
       ?>
        </div>
          
 </header>