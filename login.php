<?php
include_once 'php/header.php'
?>


<div class="slåIn">


  <section class="signup-form">
  
  <h2>Login</h2>
  
  
  <form action="includes/login.inc.php" method="post">
  
  <div class="uppgifter">
  
    <input type="text" name="name" placeholder="Username/Email...">
        
    <input type="password" name="pwd" placeholder="Password...">
    
  
  </div>
  
  <button class="submit" type="submit" name="submit" > <h3>Login</h3> </button>
  
  </form>
  
<?php
if ($_GET["error"] == "none"){

  echo" <p>Du har skapat ett konto!</p>";
  }
?>

  </section> 

  


</div> 

<?php
include_once 'php/footer.php'
?>
