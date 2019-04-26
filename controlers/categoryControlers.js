var db = require('../database')

module.exports={
    showCategory:(req,res)=>{
        var sql = 'select * from categories'
        db.query(sql,(err,result)=>{
            if (err) throw err
            res.send(result)
        })
    },
    deleteCategory:(req,res)=>{
        var sql=`delete from categories where id =${req.params.id}`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/category/getallcategory')
        })
    },
    addCategory:(req,res)=>{
        var sqlCek = `select * from categories where nama = "${req.body.nama}"`
        db.query(sqlCek,(err,checking)=>{
            if (err) throw err
            if(checking.length>0){
                res.send("category sudah ada")
            }else{
                var sql='insert into categories set ?'
                var newData = {
                    nama:req.body.nama
                }
                db.query(sql,newData,(err,result)=>{
                    if (err) throw err
                    res.redirect('/category/getallcategory')
                })
            }
        })
       
    },
    editCategory:(req,res)=>{
        var sql = `update categories set nama='${req.body.nama}' where id=${req.params.id}`
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.redirect('/category/getallcategory')
        })
    }
    


}