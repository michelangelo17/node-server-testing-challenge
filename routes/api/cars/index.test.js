const server = require('../../../index')
const request = require('supertest')
const db = require('../../../db/dbConfig')

describe('api/cars', () => {
  describe('POST /', () => {
    describe('valPOSTBody', () => {
      test('rejects POST requests without car data with proper status & error', async () => {
        const res = await request(server).post('/api/cars')

        expect(res.status).toBe(500)

        expect(JSON.parse(res.text).error).toBe(
          'Must include car make, model and year!'
        )
      })

      test('rejects POST requests without car make with proper status & error', async () => {
        const res = await request(server)
          .post('/api/cars')
          .send({ model: 'Pinto', year: 1975 })

        expect(res.status).toBe(500)

        expect(JSON.parse(res.text).error).toBe('Must include car make!')
      })
      test('rejects POST requests without car model with proper status & error', async () => {
        const res = await request(server)
          .post('/api/cars')
          .send({ make: 'Ford', year: 1975 })

        expect(res.status).toBe(500)

        expect(JSON.parse(res.text).error).toBe('Must include car model!')
      })
      test('rejects POST requests without car year with proper status & error', async () => {
        const res = await request(server)
          .post('/api/cars')
          .send({ make: 'Ford', model: 'Pinto' })

        expect(res.status).toBe(500)

        expect(JSON.parse(res.text).error).toBe('Must include car year!')
      })
    })
    describe('POST with correct request body', () => {
      test('returns a status of 201 and an object w/ make, model and year of the car', async () => {
        const res = await request(server)
          .post('/api/cars')
          .send({ make: 'Ford', model: 'Pinto', year: 1975 })

        expect(res.status).toBe(201)

        expect(JSON.parse(res.text)).toMatchObject({
          make: 'Ford',
          model: 'Pinto',
          year: 1975,
        })
      })
    })
  })

  describe('GET /', () => {
    test('returns 200 OK and full car array (100 cars)', async () => {
      await db.seed.run()

      const res = await request(server).get('/api/cars')

      expect(res.status).toBe(200)

      expect(JSON.parse(res.text).length).toBe(100)
    })
  })

  describe('GET /:id', () => {
    test('returns 200 OK and car object with id 100', async () => {
      await db.seed.run()

      const res = await request(server).get('/api/cars/100')

      expect(res.status).toBe(200)

      expect(JSON.parse(res.text)).toMatchObject({
        car_id: 100,
        make: 'GMC',
        model: 'Savana',
        year: 2009,
      })
    })
  })

  describe('PUT /:id', () => {
    test('car with id 100 is changed to 1975 Ford Pinto and returned with 200 OK and new values', async () => {
      await db.seed.run()

      const res = await request(server)
        .put('/api/cars/100')
        .send({ make: 'Ford', model: 'Pinto', year: 1975 })

      expect(JSON.parse(res.text)).toMatchObject({
        make: 'Ford',
        model: 'Pinto',
        year: 1975,
      })
    })
  })

  describe('DELETE /:id', () => {
    test('removes the item and returns status 200 OK and the number of rows removed (1)', async () => {
      await db.seed.run()

      const car = await db('cars')
        .where('car_id', 100)
        .first()

      expect(car).toMatchObject({
        car_id: 100,
        make: 'GMC',
        model: 'Savana',
        year: 2009,
      })

      const res = await request(server).delete('/api/cars/100')

      expect(res.status).toBe(200)

      expect(JSON.parse(res.text)).toBe(1)

      const deleted = await db('cars')
        .where('car_id', 100)
        .first()

      expect(deleted).toBe(undefined)
    })
  })
})
