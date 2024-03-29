const express = require('express');
const morgan = require ('morgan');
const app = express();
const cors = require('cors');

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));
app.use(cors());
 app.use(morgan('dev'));

// Routes
app.use(require('./routes/departamentos.js'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
