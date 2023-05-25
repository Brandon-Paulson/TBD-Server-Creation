const express = require('express');

const app = express();

const PORT= process.env.PORT || 28714;

app.get('/ping', (req, res) =>{
    console.log('Request for status made');
    res.sendStatus(204);
});


app.listen(PORT, () => {
    console.log('The App is listening on:', PORT)
});
