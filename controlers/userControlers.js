var db = require('./../database')
var transporter = require('./../helpers/nodemailer')
module.exports={
    showUser :(req,res)=>{
        var sql = 'select * from tbl_users'
        db.query(sql,(err,result)=>{
            if (err) throw err
            res.send(result)
        })
    },
    deleteUser:(req,res)=>{
        var sql=`delete from tbl_users where id =${req.params.id}`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/user/getalluser')
        })
    },
    addUser:(req,res)=>{
        var sql='insert into tbl_users set ?'
        var newData = {
            username:req.body.username,
            password:req.body.password
        }
        db.query(sql,newData,(err,result)=>{
            if (err) throw err
            res.redirect('/user/getalluser')
        })
    },
    editUserName:(req,res)=>{
        var sql = `update tbl_users set username='${req.body.username}' where id=${req.params.id}`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/user/getalluser')
        })
    },
    searchUserName:(req,res)=>{
        var sql = `select * from tbl_users where username LIKE '%${req.query.username}%'`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.send(result)
        })
    }
    // router.get('/tenData' , (req,res) => {
    //     var sql = `select * from data limit 10;`
    //     conn.query(sql , (err,result) => {
    //         if(err) throw err
    //         res.send(result)
    //     })
    // })
    
    // router.get('/paging/:a' , (req,res) => {
    //     var page = req.params.a
    //     var sql = `select * from data limit 10 offset ${page*10}`
    //     conn.query(sql , (err, result) => {
    //         if(err) throw err
    //         res.send(result)
    //     })
    // })


}