const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send("Hello from v1!")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})