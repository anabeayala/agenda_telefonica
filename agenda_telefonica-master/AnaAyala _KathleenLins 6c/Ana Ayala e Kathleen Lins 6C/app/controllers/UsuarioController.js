var UsuarioDAO = require('../models/UsuarioDAO');

class UsuarioController {
	index(req,res){
		res.render('home/index');
	}
	show(req, res) { //Mostra todos os contatos
		UsuarioDAO.mostrarTodos(function (err, results) {

            if (err) return console.log(err)
            	console.log(results)
            res.render('home/show', { data: results })

        });
	}
	edit (req, res)	{ //Edita os contatos
		var id = req.params.id;

		UsuarioDAO.pegarUm(id, (err, result) => {
	        if(err) return res.send(err)
	        console.log(result)
            res.render('home/edit', {data:result})
    	})
	}
	editSave(req, res) { //Salva os contatos editados
        var id = req.params.id
        var name = req.body.name
        var surname = req.body.surname
        var cel = req.body.cel
        var filename = req.file.filename;
		UsuarioDAO.edit(id, name, surname, cel, filename, (err, result) =>{
	        if(err) return res.send(err)
	          res.redirect('/show')
	        console.log('Atualizado no BD')
	    })
	}
	showSave(req, res) {
		var body = req.body;
		body.filename = req.file.filename;

		UsuarioDAO.salvar(body, (err, result) =>{
	        if(err) return res.send(err)
	          res.redirect('/show')
	        console.log('Salvo no BD')
	    
	    })
	}
	delete(req,res)
	{
		var id = req.params.id
		UsuarioDAO.delete(id, (err, result)=>{
        if(err) return res.send(500, err)
            console.log('Deletado do Banco de Dados!')
            res.redirect('/show')
    })
	}
}
module.exports = new UsuarioController;