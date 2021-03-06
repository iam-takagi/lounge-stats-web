const { Router } = require('express')
const router = Router()
const controller = require('./controller')

router.get('/last_refreshed', controller.last_refreshed)
router.get('/stats', controller.stats)
router.get('/players', controller.players)
router.get('/players/:name', controller.getPlayer)

module.exports = router