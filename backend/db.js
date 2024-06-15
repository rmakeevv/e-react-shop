const { MongoClient, ServerApiVersion } = require('mongodb');
const dbpass = require('./config');
const password = encodeURIComponent(dbpass)
const uri = `mongodb+srv://rmakeevv:${password}@cluster0.g2wn3u9.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: ServerApiVersion.v1,
        }
    );
const db = client.db('online-store')

module.exports = {db, client}