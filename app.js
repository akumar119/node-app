const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Node app</h1>')
})
app.listen(8081, () => {
    console.log(`server is running at port 3000...`)
})