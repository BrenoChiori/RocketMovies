const { Router } = require('express')

const SessinosController = require("../controllers/SessinosController")
const sessinosController = new SessinosController()

const sessionsRoutes = Router()

sessionsRoutes.post("/", sessinosController.create)

module.exports = sessionsRoutes