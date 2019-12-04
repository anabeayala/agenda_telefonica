	var MongoClient= require('mongodb').MongoClient; /*através dessa linha a variável MongoClient está requerendo o método MongoClient */
	var url= "mongodb://localhost:27017"; /* essa varável url usase para se conectar ao mongo */

	//create //
	MongoClient.connect(url, {userNewUrlParser: true }, 
		function(err, db) { /*o método MongoClient */
		if(err) {throw err;}
		var dbo= db.db('banco_app');

		var nome= req.body.nome;
		var foto= req.body.id;
		var telefone= req.body.telefone;

		dbo.collection('contato').save(
		{
			nome: nome,
			foto: id,
			telefone: telefone
	}, function(err, result){
		if (err) {throw err;} /* */
		console.log('foto inserida');
	});
	res.redirect('/');
});

	// read
	MongoClient.connect(url, {userNewUrlParser: true }, 
		function(err, db) { /*o método MongoClient */
		if(err) {throw err;}
		var dbo= db.db('banco_app');
		dbo.collection('contato').find().toArray
		(function(err, result){
			res.render('index', {clientes: result});
		});
	});

  //update
  MongoClient.connect(url, {userNewUrlParser: true }, 
	function(err, db) { /*o método MongoClient */
	if(err) {throw err;}
	var dbo= db.db('banco_app');
	var collection= dbo.collection('banco_app');
	collection.find().toArray(function(err, result){
		if(err) { throw err;} 
		var find= req.body.procurado;
		var ObjectID= require('mongodb').ObjectID;
		var o_id= ObjectID(find);
		collection.updateOne(
			{_id: o_id}, 
			{$set: {
				nome: req.body.nome,
				sobrenome: req.body.sobrenome}
			}, function(err, result){
				if (err) {throw err;}
				console.log('Documento atualizado');
			});
			res.redirect('/');
	});