let sms1 = document.querySelector("#msg-1");
let babe = document.getElementById("msg-2");
let babe1 = document.getElementById("msg-3");
let babe2 = document.getElementById("msg-4");
let firstT = true;


function fn1(){
    console.log(firstT);
    if(firstT === true){
  
   console.log("körs");
   
    var medelande = document.getElementById("message-input").value;
    sms1.textContent = "You: " + medelande;
    
    setTimeout(function () {
        babe.textContent = "- babeRexa joined the chat";
    }, 2000);
    
    setTimeout(function () {
        babe1.textContent = "babeRexa: if you spend 20$ at the blackjack right now, im gonna do whatever it takes to please you baby";
    }, 3000);

    setTimeout(function () {
        babe2.textContent = "babeRexa: When i say anything i really mean it ;)";
    }, 4500);

    firstT = false;

    }else {
        alert("Our girls don't work for free, spend more money to continue!");
    }
}





   




