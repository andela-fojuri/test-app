const express = require('express')
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());


app.get('/', (req, res) => res.sendStatus(200));

app.post('/login', (req, res) => res.status(200).json('Logged in!'))


app.listen(3006, () => console.log('Server Started'))
