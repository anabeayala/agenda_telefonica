const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
const uri = "mongodb://localhost:27017";
MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
    db = client.db('crud-nodejs') // coloque o nome do seu DB
})
class UsuarioDAO {
    mostrarTodos(callback) {
        console.log(db)
        db.collection('data').find().toArray(callback)
    }
    salvar(body, callback) {
        
        db.collection('data').save(body, callback)
    }
    pegarUm(id, callback) {
        db.collection('data').find(ObjectId(id)).toArray(callback)
    }
    edit(id, name, surname, cel, filename, callback){
    
        db.collection('data').updateOne({_id: ObjectId(id)},{
            $set:{
                name: name,
                surname: surname,
                cel: cel,
                filename: filename
            }
        }, callback)
    }
    delete(id, callback)
    {
         db.collection('data').deleteOne({_id: ObjectId(id)}, callback)
     }
}
module.exports = new UsuarioDAO;

