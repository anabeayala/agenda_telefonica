var UsuarioController = require('../controllers/UsuarioController');
var multer = require('multer');  
var path = require('path');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
     filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage });
module.exports = function(app){
	app.get('/', UsuarioController.index);
	app.get('/show', UsuarioController.show);
	app.get('/edit/:id', UsuarioController.edit)
	app.post('/edit/:id', upload.single('file'), UsuarioController.editSave)
	app.post('/show', upload.single('file'), UsuarioController.showSave)
	app.get('/delete/:id', UsuarioController.delete)

}