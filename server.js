const express = require('express');
const app = express();
var bodyParser = require('body-parser')


// // <!-- Ensuite quand on fait une simulation et que l'on regarde dans l'onglet
// // réseau de examiner l'élément on voit bien que l'on récupère les valeurs (name)
// // on va utiliser un moiddleware bodyparser pour traiter les infos
// // https://www.npmjs.com/package/body-parser --> Il va falloir l'insataller
// npm instamlm body parser et la récuperer dans une variable "require"

app.use(bodyParser.urlencoded({extended : true}))



// Création du premier Route
app.get("/", function (req, res) {
    // // res.send('coucou');
    // // On va utiliser la méthode res.senFile voir le doc ici pour charger le fichier html ici http://expressjs.com/fr/api.html#res.sendFile
    // mais pour lui stipuler l'url du fichier html on utilisera la méthode __dirname.
    //On voit bien que le serveur donne  le chemin ou se trouve le fichier html
    res.sendFile(__dirname + "/index.html");

});

app.post('/', function(req, res) {
    console.log(req.body)
    // dans le terminal de mon appli je récupère { salaire: '3000', statut: '0.77' }
    // et dans le console log de ma page localhos3000 je récupère "bien recu"
    // res.send('Bien recu')
    var salaireBrute = req.body.salaire
    var chargeSociale = req.body.statut

    var salaireNet = salaireBrute * chargeSociale

    res.send( "Votre salaire net sera d\'environ " + salaireNet )
})





// // Je demande à ce que le server tourne sur le port 3000
app.listen(3000, function() {
    console.log('Le serveur tourne sur le port 3000')
})