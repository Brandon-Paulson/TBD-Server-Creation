const express = require('express');
const pq = require('pg')
const app = express();

const PORT= process.env.PORT || 28714;
const DB_PASSWORD = process.env.DB_PASSWORD;
const pool = new pg.Pool({
    // The name of your database. This will change for every app!
    database: 'TBDServer', 
    ssl: true,
    host: 'db.bit.io',
    // Postgres listens for network connections on port 5432, by default
    port: 5432,
    username: CrashAbandoncoot,
    password: DB_PASSWORD
});


app.get('/ping', (req, res) =>{
    console.log('Request for status made');
    res.sendStatus(204);
});

app.get('/messages', (req, res) => {
    let queryText = 'SELECT * FROM messages;';
    pool.query(queryText)
    .then((result)=> {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Hey there was an error', error);
        res.sendStatus(500);
    })
});


app.listen(PORT, () => {
    console.log('The App is listening on:', PORT)
});
