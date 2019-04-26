const db = require('../database')

module.exports={
    getMovcat:(req,res)=>{
        var sql=`select movies.nama as Nama_Movie, categories.nama as Nama_Category from movcat inner join movies on movcat.idmovie = movies.id inner join categories on movcat.idcategory = categories.id;`
        db.query(sql,(err,result)=>{
            if (err) throw err
            res.send(result)
        })
    },
    deleteMovcat :(req,res)=>{
        var sql=`delete from movcat where id =${req.params.id}`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/movcat/getallmovcat')
        })
    },
    addMovcat:(req,res)=>{
        var sql='insert into movcat set ?'
        var newData = {
            idmovie:req.body.idmovie,
            idcategory:req.body.idcategory
        }
        db.query(sql,newData,(err,result)=>{
            if (err) throw err
            res.redirect('/movcat/getallmovcat')
        })
    }
}