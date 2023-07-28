const express = require('express');
const app = express();
const {client} = require('./db')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const cors = require('cors')
require('dotenv').config()

app.use(bodyParser.json())
app.use(cors())
app.use('/', router)
app.use(express.static('public'))
async function start() {
    await client.connect()
        .then(() => console.log('db connected'))
        .catch(e => console.dir(e))
    app.listen(process.env.PORT)
}
start().then(() => console.log('server is running')).catch(e => console.log(e.message))