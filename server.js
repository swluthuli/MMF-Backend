const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(cors());
// use JWT auth to secure the api
app.use(jwt());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://mmf.swluthuli.now.sh");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , Authorization");
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT, POST, DELETE, GET , PATCH');
        return res.status(200).json({})
    }
    next();
  });


// api routes
app.use('/users', cors(), require('./users/users.controller'));
app.use('/customers', require('./customers/customers.controller'));
app.use('/cars', require('./cars/cars.controller'));
app.use('/bookings', require('./bookings/bookings.controller'));

// global error handler
app.use(errorHandler);
 
// start server

const port =  80;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
