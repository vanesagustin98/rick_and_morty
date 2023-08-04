const express = require('express')
const router = express.Router()
const getCharById = require('../controllers/getCharById')
const handleFavorites = require('../controllers/handleFavorites')
const login = require('../controllers/login')

router.get('/character/:id',getCharById)
router.get('/login',login)
router.post('/fav',handleFavorites.postFav)
router.delete('/fav/:id',handleFavorites.deleteFav)

module.exports = router