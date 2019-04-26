const router = require ('express').Router()

const {showUser,deleteUser,addUser,editUserName,searchUserName} = require('./../controlers').userControlers
router.post('/adduser',addUser)
router.get('/getalluser',showUser)
router.delete('/deleteuser/:id',deleteUser)
router.put('/editusername/:id',editUserName)
router.get('/searchuser',searchUserName)
module.exports= router