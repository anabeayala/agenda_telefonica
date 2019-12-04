var app = require('./config/server');
var rotaHome = require('./app/routes/home')(app);
var rotaResposta = require('./app/routes/resposta')(app);

app.listen(3000,function(){
    console.log('App na porta 3000');
});