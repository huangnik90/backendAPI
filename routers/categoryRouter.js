const router = require ('express').Router()

const {showCategory,deleteCategory,addCategory,editCategory} = require('../controlers').categoryControlers

router.get('/getallcategory',showCategory)
router.post('/addcategory',addCategory)
router.put('/editcategory/:id',editCategory)
router.delete('/deletecategory/:id',deleteCategory)

module.exports= router