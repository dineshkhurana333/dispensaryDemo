// const Router = require('@koa/router');
// const route = new Router();

const epxress = require('express');

const route = epxress();

const registerController = require('../controllers/auth/register');

route.post('/register', registerController.register);

route.get('/login', (req, res, next) => {
    return res.send({ message: 'Working' })
})

module.exports = route 
