let sms1 = document.querySelector("#msg-1");
let babe = document.getElementById("msg-2");
let babe1 = document.getElementById("msg-3");
let babe2 = document.getElementById("msg-4");
let firstT = true;
let timing = 0;
let person = " ";
let babeHär = true;

function fn1(){

    if(babeHär === false) {
        console.log("due fast");
            alert("Hi " + person +", BabeRexa has gone, She had to go to the police department to file a report against you!");
        
          }
         

    console.log(babeHär);
    if(firstT === true){
  if(babeHär = true){  console.log("körs");
   
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

  firstT = false;}

    } else if(timing === 0) {
        alert("Our girls don't work for free, spend more money to continue!");
        timing++;
    } else if(timing === 1) {
        alert("I said spend more money shithead!");
        timing++;
    } else if(timing === 2) {
        alert("get your damn hand off that meat and visit our blackjack!");
        timing++;
    } else if(timing === 3) {
        {
            let text;
            person = prompt("Please enter your first and lastname to unlock chat function:", "");
            if (person == null || person == "") {
              text = "User cancelled the prompt.";
            } else {
              text = person;
            }}
          timing++;
            sueHim() } 

            function sueHim(){
                
                console.log("being sued")
                alert("Thats it " + person +", bebeRexa is 13, I have now filed a report for sexting an underaged kid to the FBI");
                babeHär = false;
            }
            


        
}





   




