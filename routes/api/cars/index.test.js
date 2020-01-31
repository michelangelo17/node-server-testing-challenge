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
    beforeEach(() => db.seed.run())

    test('returns 200 OK', async () => {
      const res = await request(server).get('/api/cars')

      expect(res.status).toBe(200)
    })
    test('returns array of 100 cars', async () => {
      const res = await request(server).get('/api/cars')

      expect(JSON.parse(res.text).length).toBe(100)
    })
  })
})
