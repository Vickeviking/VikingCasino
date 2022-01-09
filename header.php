

<?php
    session_start();
  include_once 'headerheader.php';

  
?>

<link rel="stylesheet" href="css/headerStil.css" />
    <link rel="stylesheet" href="footer.css">
    <link rel="stylesheet" href="css/signup.css">
    <link rel="stylesheet" href="css/indexStil.css" />
    <link rel="stylesheet" href="css/headerheaderStil.css">
    
<nav>
        
        <ul style="list-style-type:none" class="navigation">
          <li><a href="index.php">Home</a></li>
          <li><a href="omOss.php">Om Oss</a></li>
          <li><a  <?php
            if(isset($_SESSION["useruid"])){
          
            

              echo"href='spela.php'";
            } else{
              echo "href='login.php'";
              }
       ?>>Spela</a></li>
        

   
      <?php

        if(isset($_SESSION["useruid"])){
          
          echo "<li><a href='profile.php'>Konto</a></li> ";
          echo "<li> <a href='includes/logout.inc.php'>Logga ut</a></li>";
       
        }
        else{
          echo "<li> <a href='login.php'>Logga in</a> </li>";
       echo "<li> <a href='signup.php'>Registrera dig</a> </li>";
          }

      ?>
        </ul>


    </nav>
    
    

  </body>


</html>