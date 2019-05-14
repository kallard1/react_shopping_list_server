const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const itemsRoute = require('./routes/api/items');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));

app.use('/api/items', itemsRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
