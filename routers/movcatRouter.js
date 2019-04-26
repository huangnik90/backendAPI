const router = require ('express').Router()

const {addMovcat,getMovcat,deleteMovcat} = require('../controlers').movcatControlers

router.get('/getallmovcat',getMovcat)
router.delete('/deletemovcat/:id',deleteMovcat)
router.post('/addmovcat',addMovcat)
module.exports= router