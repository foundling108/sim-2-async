const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();

const checkForDevelopment = require('./middleware/checkForDevelopment');
const checkForSessions = require('./middleware/checkForSessions');
const checkForAuth = require('./middleware/checkForAuth');

// Controllers
const auth_controller = require('./controllers/auth_controller');
const wizard_controller = require('./controllers/wizard_controller');

const app = express();

app.use(bodyParser.json());
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  }));

app.use(checkForSessions)

app.use( express.static( `${__dirname}/../build` ) );

massive(process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
    console.log("db connected")
}).catch( err => console.log("Massive", err) );

app.use(checkForDevelopment)

// Authorization controller
app.post('/api/auth/register', auth_controller.register);
app.post('/api/auth/login', auth_controller.login);
app.get('/api/auth/logout', auth_controller.logout);

// Properties controller
app.post('/api/properties', checkForAuth, wizard_controller.createNewProperty);
app.get('/api/properties', wizard_controller.getProperties);
app.delete('/api/properties/:id', wizard_controller.deleteProperty);

const port =  process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port ${port}.`); } )