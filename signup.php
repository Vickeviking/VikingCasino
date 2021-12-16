<?php
include_once 'php/header.php'
?>


<div class="slåIn">


  <section class="signup-form">
  
  <h2> Sign Up</h2>
  
  
  <form action="includes/signup.inc.php" method="post">
  
  <div class="uppgifter">
  
    <input type="text" name="name" placeholder="Full name...">
    
    <input type="text" name="email" placeholder="Email...">
    
    <input type="text" name="uid" placeholder="Username...">
    
    <input type="password" name="pwd" placeholder="Password...">
    
    <input type="password" name="pwdrepeat" placeholder="Repeat password...">
  
  </div>
  
  <button class="submit" type="submit" name="submit" > <h3>Sign Up</h3> </button>
  
  </form>
  
  <?php
if(isset($_GET["error"])) {
if($_GET["error"] == "emptyinput"){

echo" <p>Fyll i alla fält!</p>";}

else if ($_GET["error"] == "invaliduid"){

echo" <p>Välj ett riktigt användarnamn!</p>";}

else if ($_GET["error"] == "invalidemail"){

echo" <p>Välj en riktig mailadress!</p>";}

else if ($_GET["error"] == "passwordsdontmatch"){ 

echo" <p>Lösenorden matchar inte!</p>";}

else if ($_GET["error"] == "stmtfailed"){

echo" <p>Något gick fel, försök igen!</p>";}

else if ($_GET["error"] == "usernametaken"){

echo" <p>Användarnamnet är upptaget, vänligen välj ett annat!</p>";}



}

?>

  </section> 

</div> 



<?php
include_once 'php/footer.php'
?>
