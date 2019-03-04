const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema ({
	nomEntreprise: String,
	adresse: String,
	ville: String,
	codePostal: Number,
	nomClient: String,
  prenomClient: String,
	phone: Number,
	mail: String,
	secteur: String,
});

module.exports = mongoose.model("Client", ClientSchema);
