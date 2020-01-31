const db = require('../../../db/dbConfig')
const { addCar, getCars, getCarById, editCar, deleteCar } = require('./model')

describe('cars model', () => {
  describe('CREATE', () => {
    beforeEach(async () => await db('cars').truncate())

    describe('addCar', () => {
      test('adds car to database and adds correct primary key car_id', async () => {
        await addCar({ make: 'Geo', model: 'Metro', year: 1992 })

        const car = await db('cars').first()

        expect(car).toMatchObject({
          car_id: 1,
          make: 'Geo',
          model: 'Metro',
          year: 1992,
        })
      })

      test('returns an object containing make, model and year of car', async () => {
        const returnedCar = await addCar({
          make: 'Geo',
          model: 'Metro',
          year: 1992,
        })

        expect(returnedCar).toMatchObject({
          make: 'Geo',
          model: 'Metro',
          year: 1992,
        })
      })
    })
  })

  describe('READ', () => {
    beforeEach(() => db.seed.run())

    describe('getCars', () => {
      test('returns a an array of 100 cars', async () => {
        const cars = await getCars()

        expect(cars.length).toBe(100)
      })

      test('50th car is 2002 Audi TT', async () => {
        const car = (await getCars())[49]

        expect(car).toMatchObject({
          car_id: 50,
          make: 'Audi',
          model: 'TT',
          year: 2002,
        })
      })
    })

    describe('getCarById', () => {
      test('car with id 100 is 2009 GMC Savana ', async () => {
        const car = await getCarById(100)

        expect(car).toMatchObject({
          car_id: 100,
          make: 'GMC',
          model: 'Savana',
          year: 2009,
        })
      })
    })
  })

  describe('UPDATE', () => {
    beforeEach(() => db.seed.run())

    describe('editCar', () => {
      test('car with id 100 is changed to 1975 Ford Pinto', async () => {
        editCar(100, { make: 'Ford', model: 'Pinto', year: 1975 })

        const car = await db('cars')
          .where('car_id', 100)
          .first()

        expect(car).toMatchObject({
          car_id: 100,
          make: 'Ford',
          model: 'Pinto',
          year: 1975,
        })
      })

      test('returns an object containing make, model and year of car', async () => {
        const returnedCar = await editCar(100, {
          make: 'Ford',
          model: 'Pinto',
          year: 1975,
        })

        expect(returnedCar).toMatchObject({
          make: 'Ford',
          model: 'Pinto',
          year: 1975,
        })
      })
    })
  })

  describe('DELETE', () => {
    beforeEach(() => db.seed.run())

    describe('deleteCar', () => {
      test('car with id 100 is removed', async () => {
        const car = await db('cars')
          .where('car_id', 100)
          .first()

        expect(car).toMatchObject({
          car_id: 100,
          make: 'GMC',
          model: 'Savana',
          year: 2009,
        })

        await deleteCar(100)

        const deleted = await db('cars')
          .where('car_id', 100)
          .first()

        expect(deleted).toBe(undefined)
      })
    })
  })
})
