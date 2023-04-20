const express = require('express')
const app = express()
const router = require('./router/routerGet')
const cors = require('cors')
const bodyParser = require('body-parser')
const Joi = require('@hapi/joi');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: false })); // application/x-www-form-urlencoded
app.use(express.json()); // application/json

app.use(cors())

// Router of 'get' type
app.use('/api', router)

// Router of 'post' type
app.use('/api', require('./router/register'))
app.use('/api', require('./router/login'))
app.use('/api', require('./router/user'));

app.use((err, req, res, next) => {
    if (err instanceof Joi.ValidationError) {
        return res.send({
            status: 400,
            msg: [err.details[0].context.label, err.details[0].message]
        });
    }
    if (err.name === 'TypeError') {
        return res.send({
            status: 401,
            msg: 'TOKEN ERROR'
        });
    }
    console.log(err.name)
    res.send({
        status: 400,
        msg: err.message || err
    });
})

app.listen(5566, () => {
    console.log('The server runs on port http://localhost:5566')
})