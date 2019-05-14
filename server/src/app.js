const
    express = require('express'),
    bodyParser = require('body-parser'),
    compress = require('compression'),
    path = require('path'),
    api = require('./api/api'),
    mongoose = require('mongoose'),
    session = require('express-session');

const isProduction = process.env.NODE_ENV === 'production';
console.log(process.env);

//database setup
if(isProduction){
    mongoose.connect('mongodb://mongodb:27017/chimera', { useNewUrlParser: true });
} else {
    mongoose.connect('mongodb://localhost:27017/chimera', { useNewUrlParser: true });
    mongoose.set('debug', true);
}
mongoose.set('useCreateIndex', true);

//app
const app = express();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compress());

app.use(express.static(path.join(__dirname, '../public')));

app.use(session({
    name: 'UserSession', //TODO param
    secret: 'involves emerging bees 43 f__d',
    resave: false,
    saveUninitialized: false,
    cookie: {
        //maxAge: miliseconds,
        secure: true,
        sameSite: true
    }
}));
app.use((req, res, next) => {
    if (!isProduction)
        console.log(req.method, req.url);
    next();
})
//app.use(cors());
app.use('/api', api); //routes

//handle errors
app.use((err, req, res, next) => {
    res.status(err.code).send(err.message);
});

//just testing
app.get('/test', (req, res) => {return res.send("Test obtained")});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

module.exports = app;