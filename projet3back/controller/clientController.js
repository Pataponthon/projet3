const Client = require('../model/client.model');

exports.createClient = function(req, res){
	let cl = new Client({
		nomEntreprise: req.body.nomEntreprise,
		adresse: req.body.adresse,
		ville: req.body.ville,
		codePostal: req.body.codePostal,
		nomClient: req.body.nomClient,
		prenomClient: req.body.prenomClient,
		phone: req.body.phone,
		mail: req.body.mail,
    secteur: req.body.secteur,
	});

	cl.save((err) => {
		if (err) {
			console.log(err);
		}
		else{
			console.log("Client created");
			console.log(cl);
		}
		res.send(cl);
	});
}

exports.deleteClient = (req, res) => {
	Client.findByIdAndRemove(req.params.id, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('The client has been deleted');
		}
		res.send(cl);
	});
}


exports.updateClient = (req, res) => {
	Client.findByIdAndUpdate(req.params.id, req.body, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('The client has been updated');
		}
		res.send(cl);
	});
}
