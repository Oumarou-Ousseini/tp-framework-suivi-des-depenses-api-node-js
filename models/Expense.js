const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, 'Veuillez ajouter une description'],
    trim: true,
    maxlength: [100, 'La description ne peut pas dépasser 100 caractères']
  },
  amount: {
    type: Number,
    required: [true, 'Veuillez ajouter un montant'],
    min: [0, 'Le montant ne peut pas être négatif']
  },
  category: {
    type: String,
    required: [true, 'Veuillez sélectionner une catégorie'],
    enum: [
      'Alimentation',
      'Transport',
      'Logement',
      'Loisirs',
      'Santé',
      'Éducation',
      'Autres'
    ]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Expense', ExpenseSchema);