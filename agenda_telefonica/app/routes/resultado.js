module.exports = function(app){

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
    
    // utiliza a storage para configurar a instância do multer
    var upload = multer({ storage });
    app.post('/file/upload', upload.single('file'),function(req,res){
        res.render('resultado/sucesso');
    });
}    