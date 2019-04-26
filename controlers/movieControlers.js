var db = require('../database')

module.exports={
    showMovie:(req,res)=>{
        var sql = 'select * from movies'
        db.query(sql,(err,result)=>{
            if (err) throw err
            res.send(result)
        })
    },
    deleteMovie:(req,res)=>{
        var sql=`delete from movies where id =${req.params.id}`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/movie/getallmovie')
        })
    },
    addMovie:(req,res)=>{
        var sql='insert into movies set ?'
        var newData = {
            nama:req.body.nama,
            tahun:req.body.tahun,
            description:req.body.description
        }
        db.query(sql,newData,(err,result)=>{
            if (err) throw err
            res.redirect('/movie/getallmovie')
        })
    },
    editMovie:(req,res)=>{
        var sql = `update movies set nama='${req.body.nama}',tahun="${req.body.tahun}", description="${req.body.description}" where id=${req.params.id}`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/movie/getallmovie')
        })
    }
    // ,
    // searchUserName:(req,res)=>{
    //     var sql = `select * from tbl_users where username LIKE '%${req.query.username}%'`
    //     db.query(sql,(err,result)=>{
    //         if(err) throw err
    //         res.send(result)
    //     })
    // }
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