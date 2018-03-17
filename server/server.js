const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const controller = require('./controller');

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.get('/api/listings', controller.getAll);
app.post('/api/listings', controller.addInfo);

const port = process.env.PORT || 3005
app.listen(port, () => {console.log(`server listening on port ${port}`)});