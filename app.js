const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connecté à MongoDB'))
.catch(err => console.error('Erreur de connexion à MongoDB:', err));
// Routes de base
app.get('/', (req, res) => {
  res.json({
        groupe: 'Groupe 3 securité et cryptographie',
        membres: 'OUMAROU OUSSEINI; AMADOU ISSA; ETOUNDI; HOUSSEINI BAKARY',
        projet: 'Developpement back-end (API REST avec NodeJS + Express + mongoDB)',
        status: 'running',
        message: 'API de suivi de dépenses personnelles',
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString()
    });
});
// Import des routes
const expenseRoutes = require('./routes/expenseRoutes');
// Routes
app.use('/api/expenses', expenseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});