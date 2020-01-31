const valPOSTBody = (req, res, next) => {
  if (!req.body.make && !req.body.model && !req.body.year) {
    throw new Error('Must include car make, model and year!')
  }
  if (!req.body.make) {
    throw new Error('Must include car make!')
  }
  if (!req.body.model) {
    throw new Error('Must include car model!')
  }
  if (!req.body.year) {
    throw new Error('Must include car year!')
  }
  next()
}

module.exports = { valPOSTBody }
