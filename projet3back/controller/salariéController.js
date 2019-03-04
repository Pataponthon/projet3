

const Salarie = require('../model/salarieModel.js');

exports.createSalarie = function(req, res){
	let sa = new Salarie({
		nomSalarie: req.body.nomSalarie,
		prenomSalarie: req.body.prenomSalarie,
		nomUtilisateur: req.body.nomUtilisateur,
		dateNaissance: req.body.dateNaissance,
		adresse: req.body.adresse,
		ville: req.body.ville,
		codePostal: req.body.codePostal,
		mail: req.body.mail,
    poste: req.body.poste,
	});

	sa.save((err) => {
		if (err) {
			console.log(err);
		}
		else{
			console.log("Employee created");
			console.log(sa);
		}
		res.send(sa);
	});
}

exports.deleteSalarie = (req, res) => {
	Salarie.findByIdAndRemove(req.params.id, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('The employee has been deleted');
		}
		res.send(sa);
	});
}


exports.updateSalarie = (req, res) => {
	Client.findByIdAndUpdate(req.params.id, req.body, function(err, user){
		if (err) {
			console.log(err);
		}
		else{
			console.log('The employee has been updated');
		}
		res.send(sa);
	});
}
