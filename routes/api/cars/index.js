const router = require('express-promise-router')()
const { valPOSTBody } = require('./middleware')
const db = require('./model')

module.exports = router

router.post('/', valPOSTBody, async (req, res) => {
  const newCar = await db.addCar(req.body)
  res.status(201).json(newCar)
})

router.get('/', async (req, res) => {
  const carArray = await db.getCars()
  res.status(200).json(carArray)
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
