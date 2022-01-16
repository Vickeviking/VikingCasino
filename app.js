const express = require('express') 
const expressLayouts = require('express-ejs-layouts')

const app = express()  //app är ett variabel namn för express

//EJS

app.use(expressLayouts);
app.set('view engine', 'ejs') 


// routes

app.use('/', require('./routes/index'))
//console.log("hej")
app.use('/users', require('./routes/users'))

app.use(express.static(__dirname + '/public'))

const PORT = process.env.PORT || 5000;
 
app.listen(PORT, console.log(`Server started on port ${PORT}`)) //vilken local server jag kör på
