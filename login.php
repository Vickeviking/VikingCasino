<?php
include_once 'header.php'
?>

<div class="macka">

<img  class="brödEtt" src="img/cashen.gif" alt="pokerkort">

<div class="slåIn">


  <section class="signup-form">
  
  <h2>Login</h2>
  
  
  <form action="includes/login.inc.php" method="post">
  
  <div class="uppgifter">
  
    <input type="text" name="uid" placeholder="Username/Email...">
        
    <input type="password" name="pwd" placeholder="Password...">
    
  
  </div>
  
  <button class="submit" type="submit" name="submit" > <h3>Login</h3> </button>
  
  <div class="registreraHär">
  <h3>har du inte ett konto? registrera dig <a href="signup.php">här!</a></h3>
  </div>
  </form>
  


<?php
if(isset($_GET["error"])) {
if($_GET["error"] == "emptyinput"){

echo" <p>Fyll i alla fält!</p>";}

else if ($_GET["error"] == "wronglogin"){

echo" <p>Fel inloggningsupgifter!</p>";

  }
}

?>


  </section> 

  


</div> 



<img class="brödTvå" src="img/casinobilden.gif" alt="jackpot">

</div>



<?php
include_once 'footer.php'
?>
