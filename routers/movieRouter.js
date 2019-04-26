const router = require ('express').Router()

const {showMovie,deleteMovie,addMovie,editMovie} = require('../controlers').movieControlers

router.get('/getallmovie',showMovie)
router.post('/addmovie',addMovie)
router.delete('/deletemovie/:id',deleteMovie)
router.put('/editmovie/:id',editMovie)

module.exports= router