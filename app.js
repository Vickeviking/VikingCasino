const express = require('express') 
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express()  //app är ett variabel namn för express

//Passport config

require('./config/passport')(passport);

//DB CONFIG

const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db,{ useNewUrlParser: true ,useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


//EJS

app.use(expressLayouts);
app.set('view engine', 'ejs') ;

//Bodyparser

app.use(express.urlencoded({ extended: false }));

//Express session

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))

//passport middleware

app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());

// Global Vars
app.use((req, res, next)=> {
  res.locals.success_msg = req.flash('success_msg');
  
  res.locals.error_msg = req.flash('error_msg');

  
  res.locals.error = req.flash('error');

  next();
});

// routes

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 5000;
 
app.listen(PORT, console.log(`Server started on port ${PORT}`)) //vilken local server jag kör på



