const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.connect('mongodb://Sylvestre:1234@ds251804.mlab.com:51804/b2cle', (err) => {
	if (err) {
		console.log('database not connect');
	}
	else{
		console.log('database connected');
	}
});

app.post('/client/creer', clientController.createClient);
app.post('/produit/creer', produitController.createProduit);
app.post('/projet/creer'), projetController.createProjet);
app.delete('/client/supprimer/:id', clientController.removeClient);
app.delete('/produit/supprimer/:id'), produitController.removeProduit);
app.delete('/projet/supprimer/:id'), projetController.removeProjet);
app.put('/client/update/:id', clientController.updateClient);
app.put('/produit/update/:id', produitController.updateProduit);
app.put('/projet/update/:id'), projetController.updateProjet);


const port = 3000;

app.listen(port, () => {
	console.log('server run');
});
