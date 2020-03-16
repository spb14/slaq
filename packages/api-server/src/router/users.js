const { Router } = require('express')

const X = require('../actions')

//

const router = Router()

router
  .post('/', async (req, res, next) => {
    const resolveCreated = () => {
      res.status(201).end()
    }

    return X.createUser(req.body)
      .then(resolveCreated)
      .catch(next)
  })

  .get('/:id', (req, res, next) => {
    const resolveFetched = data => {
      res.json(data)
    }

    return X.fetchUserById(req.params.id)
      .then(resolveFetched)
      .catch(next)
  })

  .get('/', (req, res, next) => {
    const resolveList = items => {
      res.json({ items })
    }

    return X.fetchUserList()
      .then(resolveList)
      .catch(next)
  })

module.exports = router
