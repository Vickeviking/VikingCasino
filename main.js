const express = require("express") 
const app = express()  //app är ett variabel namn för express

const PORT = process.env.PORT || 5000;

const path = require('path')

//skriv npx nodemon main.js för att få en server som updateras varje gång du refreshar sidan

app.use(express.urlencoded({extended: false}))/*
app.use(getWeather)  den här lägger tiöö getWeather i express servern, inget jag använder men ett exempel
för att kolla tillbaka på*/
app.use(express.static(path.join(__dirname, "public"))) //Här länkas min mapp där style sheets och js code kan ligga

app.set("view engine", "ejs") 
app.set("views", path.join(__dirname, "views") ) //länkar till start dokumentet som ska viewas

/*
function getWeather(req, res, next){

    req.visitorWeather = false
    if(req.visitorWeather){
        res.send("Kom tillbaks när det inte regnar")
    } else{

        next()

    }

}  exempel för att låsa ute användaren, utan next skickas den inte vidare till nästa 
metod, function weather måste alltså vara "färdigt vilket denm blir när next skrivs ut" */

app.get("/", (req, res) => {
    res.render("index")  //rendera home från start sidan av servern/ alltså "local300/"
})

app.get('/login.ejs', (req, res) => {
    res.render('login');
   });

   app.get('/index.ejs', (req, res) => {
    res.render('index');
   });

app.get("/about", (req, res) => {
    
    res.send("Thanks for learning more about us.")  //skickar medelande om man kommer in på denna länk
})

app.post("/result", (req,res) =>{
if(req.body.color.trim().toUpperCase() === "BLUE"){  //trimmar ner och ändrar så att fler svar blir rätt
 
    res.send("Snyggt! Det stämmer helt.")    //postar ett reultat, post methoden kan inte användas för att återskapa länk eller skickas vidare

}else{
    res.send("Ditt svar är helt fel, försök igen") 
}
})

app.get("/result", (req, res) => {
res.send("vad gör du här inne?")  //om man manuellt skulle försöka komma in på websidan möts man av detta medelande
})
app.listen(PORT, console.log(`Server started on port ${PORT}`)) //vilken local server jag kör på
