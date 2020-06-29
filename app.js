const express = require('express')
const app = express()
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP

app.get('/', (req, res) => {
    res.send("Hello from v1!")
})

app.listen(port, ip)