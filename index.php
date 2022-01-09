    
    <?php
  
include_once 'header.php'
?>


 
    <nav>
 
      
 
    </nav>



    <main>

    <?php

if(isset($_SESSION["useruid"])){
  
echo"";

} else {

  echo "
  <article>
  
  <h2>
  
  Registrera dig för att spela våra hundratals spel
  
  </h2>
  
  <h2>
  
  Just nu får du dubbla insättningen rakt in på kontot!
  
  </h2>
  
  <h2>
  
  Med viking Casino kan du bli en gatumiljonär på sekunder.
  
  </h2>
  
  <h2>
  
  Spela säkert och följ spelvärkets riktlinjer
  
  </h2>
  
    </article> ";

}

?>


    </main>



    <?php
include_once 'footer.php'
?>




  </body>


</html>