var express= require('express'); /* através dessa linha a variável express está requerindo o módulo express*/
var app= express(); 
app.set('view engine', 'ejs');

app.get('/', function(req, res){

	var MongoClient= require('mongodb').MongoClient; /*através dessa linha a variável MongoClient está requerendo o método MongoClient */
	var url= "mongodb://localhost:27017"; /* essa varável url usase para se conectar ao mongo */

	MongoClient.connect(url, {userNewUrlParser: true }, function(err, db) { /*o método MongoClient */
		if(err) {throw err;}
	var dbo= db.db('banco_app');

	var nome= req.body.nome;
	var foto= req.body.id;
	var telefone= req.body.telefone;
		dbo.collection('contato').save(
		{
			nome: nome,
			foto: id,
			telefone: telefone, 
		})
	}, function(err, result){
		if (err) {throw err;} /* */
		console.log('foto inserida');
	});
	res.redirect('/');
});

app.listen(300, function(){
	console.log('Servidor On');
});