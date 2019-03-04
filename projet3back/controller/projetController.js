

const Projet = require('../model/projetModel');

exports.createProjet = function(req, res){
	let pr = new Projet({
		nomProjet: req.body.nomProjet,
		description: req.body.description,
		dateDebut: req.body.dateDebut,
		dateFin: req.body.dateFin,
		montantProjet: req.body.montantProjet,
		statut: req.body.statut,
	});

	pr.save((err) => {
		if (err) {
			console.log(err);
		}
		else{
			console.log("Project created");
			console.log(pr);
		}
		res.send(pr);
	});
}

exports.deleteProjet = (req, res) => {
	Projet.findByIdAndRemove(req.params.id, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('The project has been deleted');
		}
		res.send(pr);
	});
}


exports.updateProjet = (req, res) => {
	Projet.findByIdAndUpdate(req.params.id, req.body, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('The project has been updated');
		}
		res.send(pr);
	});
}
