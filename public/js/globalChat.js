let sms1 = document.querySelector("#msg-1");
let babe = document.getElementById("msg-2");

function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}

function fn1(){

  
   console.log("körs");
   
    var medelande = document.getElementById("message-input").value;
    sms1.textContent = "You: " + medelande;
    babey();
    
}

function babey(){




    
    sleep(1000);
    babe.textContent = "- babeRexa joined the chat";
}


   




