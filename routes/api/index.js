const router = require('express-promise-router')()
const carsRouter = require('./cars')

module.exports = [router.use('/cars', carsRouter)]
