const express = require('express'); 
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const app = express();

// försöka slänga in en socket sevrerconst app = express()  //app är ett variabel namn för express







const WebSocketServer = require('ws').Server;
const Session = require('./session')
const Client = require('./client')


const server = new WebSocketServer({port: 9000});

const sessions = new Map;




function createId(len = 6, chars = 'abcdefghjkmnopqrstwxyz0123456789'){
  let id = '';
  while (len--){
    
  id+= chars[Math.random()*chars.length | 0];
  }
  return id;
}

function createClient(conn, id = createId()){
  return new Client(conn, id);
}

function createSession(id = createId()){
  if(sessions.has(id)){
    throw new Error(`Session ${id} already exists`);
  }

  const session = new Session(id);
  console.log('Creating session', session );

  sessions.set(id, session);

  return session;
}
function getSession(id){
  return sessions.get(id);
}

function broadcastSession(session){
  const clients = [...session.clients];
  clients.forEach(client => {
    client.send({
      type: 'session-broadcast',
      peers: {
        you: client.id, 
        clients: clients.map(client => {
          return {
            id: client.id,
            state: client.state,
          }
        }),
      },
    });
  })
}


server.on('connection', conn => {
  console.log('connection established');
  const client = createClient(conn);

  conn.on('message', msg => {
      console.log('Message received', msg);
      const data = JSON.parse(msg);

      //om den klagar på buffert ta ut ur if nedan och lägg här under mig
   
    if (data.type === 'create-session'){
      const session = createSession();
      session.join(client);

      client.state = data.state;
      client.send({
        type:  'session-created', id: session.id, 
      });

    } else if(data.type === 'join-session'){
        const session = getSession(data.id)|| createSession(data.id);
        session.join(client);

        
      client.state = data.state;
        broadcastSession(session);
    } else if(data.type === 'state-update'){
      const [prop, value] = data.state;
      client.state[data.fragment][prop] = value;
      client.broadcast(data);
    }
  });

  conn.on('close', () => {
      console.log('connection closed');
      const session = client.session;
      if(session){
        session.leave(client);
        if (session.clients.size === 0){
          sessions.delete(session.id);
        }
      }

      broadcastSession(session); // kolla in på broadcast function nått är knas
  });
});









//Passport config

require('./config/passport')(passport);

//DB CONFIG

const db = require('./config/keys').MongoURI;
const { socket } = require('server/router');
const { create } = require('./models/User');

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



