const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalarieSchema = new Schema ({
	nomSalarie: String,
	prenomSalarie: String,
  nomUtilisateur: String,
  dateNaissance: Number,
  adresse: String,
	ville: String,
	codePostal: Number,
	phone: Number,
	mail: String,
	poste: String,
});

module.exports = mongoose.model("Salarie", SalarieSchema);
