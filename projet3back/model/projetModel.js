const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjetSchema = new Schema ({
	nomProjet: String,
	description: String,
	dateDebut: Number,
	dateFin: Number,
  montantProjet: Number,
  statut: String,
});

module.exports = mongoose.model("Projet", ProjetSchema);
