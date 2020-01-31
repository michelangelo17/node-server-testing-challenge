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

router.get('/:id', async (req, res) => {
  const car = await db.getCarById(req.params.id)
  res.json(car)
})

router.put('/:id', async (req, res) => {
  const updatedCar = await db.editCar(req.params.id, req.body)
  res.json(updatedCar)
})

router.delete('/:id', async (req, res) => {
  res.json(await db.deleteCar(req.params.id))
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
