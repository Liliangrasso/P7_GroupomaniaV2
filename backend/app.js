const express = require('express');
const helmet = require("helmet");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');
app.use(express.json());

//Connexion DB
mongoose.connect('mongodb://localhost:27017',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(helmet());
//CORS
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

app.use(bodyParser.json())
app.use('/api/posts', postRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;