const db = require('../../../db/dbConfig')

const addCar = async car =>
  (await db('cars').insert(car, ['make', 'model', 'year']))[0]

const getCars = async () => await db('cars')

const getCarById = async id =>
  await db('cars')
    .where('car_id', id)
    .first()

const editCar = async (id, car) =>
  (
    await db('cars')
      .where('car_id', id)
      .update(car, ['make', 'model', 'year'])
  )[0]

const deleteCar = async id =>
  await db('cars')
    .where('car_id', id)
    .del()

module.exports = { addCar, getCars, getCarById, editCar, deleteCar }
