const express = require('express')
const app = express()
const port = 3000

app.get('/language/:language', (req, res) => {
    console.log(req.params.language)
    res.send(`<h1>params language is: ${req.params.language}</h1>`)
})

app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})