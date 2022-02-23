const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    console.log('hi working...')
    res.send('<h1>Node app</h1>')
})
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}...`)
})