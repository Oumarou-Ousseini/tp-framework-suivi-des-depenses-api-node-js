# README - API de Suivi de Dépenses Personnelles
## Equipe de developpement
Ce projet (developpement d'une API REST avec nodeJS + ExpressJS + mongoDB pour un outil de suivi de depense personnelle) a été realisé par une équipe de 4 etudiants (groupe 3 securité et cryptographie) dans le cadre du cours de FRAMEWORKS ET IDE WEB dispensé par ING MANAODA YVES HERMANN. il s'agit de:
        - OUMAROU OUSSEINI 22E0484EP
        - AMADOU ISSA 24ENSPM354
        - ETOUNDI URIEL AUDREY 22E0468EP
        - HOUSSEINI BAKARY 24ENSPM486
## Description
Cette API REST permet de gérer un outil de suivi de dépenses personnelles. Elle est développée avec Node.js, Express.js et MongoDB. Les fonctionnalités incluent l'enregistrement des dépenses, le filtrage par catégorie et le calcul des totaux sur une période donnée.
## Structure du projet
- le dossier config contient le fichier (db.js) de configuration du back-end
- le dossier controllers contient la logique metier(gestion des requêtes/reponse)
- le dossier models contient le fichier Expense.js qui définit la structure des données mongoDB via mongoose
- le dossier routes contient le fichier expenseRoutes.js qui définit les endpoints de l'API et les associe aux controleurs
- le fichier .env definit le template pour les variables de l'environnement
- le fichier app.js est le point d'entrée du back-end
## Fonctionnalités
- Enregistrement des dépenses (description, montant, catégorie)
- Affichage de toutes les dépenses
- Filtrage des dépenses par catégorie
- Calcul du total des dépenses sur une période spécifique
- le fichier package.json contient les dependances et les scripts
- le fichier Readme.md: documentation du projet

## Technologies utilisées
- Node.js - Environnement d'exécution JavaScript
- Express.js - Framework pour construire l'API REST
- MongoDB - Base de données NoSQL
- Mongoose - ORM pour MongoDB
- Dotenv - Gestion des variables d'environnement

## Developpement 

### Prérequis
- Node.js (v14 ou supérieur)
- MongoDB (local)
- npm
- postman pour le test

### Étapes
1. Créer un nouveau dossier pour le projet:
```bash
mkdir tp framework suivi depense api
cd tp framework suivi depense api
```
2. Inisialiser le projet nodeJS:
```bash
npm init (cette commande permet la creation de package.json)
```
2. Installer les dépendances:
```bash
npm install express mongoose body-parser cors dotenv
```
2. Installer nodemon (pour le developpement):
```bash
npm install --save-dev nodemon
```
3. Configurer l'environnement:
   - Créer un fichier `.env` à la racine
   - Ajouter la configuration suivante:
     ```
     MONGODB_URI=mongodb://localhost:27017/tp-framework-suivi-depense-api
     PORT=3000
     ```

4. Démarrer le serveur: lancer d'abord Mongodb avant de demarrer le serveur
```bash
npm run dev
```

## Documentation de l'API

### Endpoints disponibles

#### 1. Enregistrer une nouvelle dépense
- **URL**: `/api/expenses`
- **Méthode**: `POST`
- **Body**:
  ```json
  {
    "description": "string",
    "amount": number,
    "category": "string"
  }
  ```
- **Catégories valides**: Alimentation, Transport, Logement, Loisirs, Santé, Éducation, Autres

#### 2. Lister toutes les dépenses
- **URL**: `/api/expenses`
- **Méthode**: `GET`

#### 3. Filtrer par catégorie
- **URL**: `/api/expenses/category/:category`
- **Méthode**: `GET`
- **Exemple**: `/api/expenses/category/Alimentation`

#### 4. Obtenir le total sur une période
- **URL**: `/api/expenses/total?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD`
- **Méthode**: `GET`
- **Exemple**: `/api/expenses/total?startDate=2023-01-01&endDate=2023-01-31`

## Exemples de requêtes pour tester avec postman

### Ajouter une dépense
POST http://localhost:3000/api/expenses \
{
  "description":"Courses","amount":120,"category":"Alimentation"
}

### Obtenir les dépenses alimentaires
GET http://localhost:3000/api/expenses/category/Alimentation

### Calculer le total pour janvier 2023
GET http://localhost:3000/api/expenses/total?startDate=2023-01-01&endDate=2023-01-31

##  Contribution
Les contributions sont les bienvenues! Voici comment contribuer:

1. Forker le projet
2. Créer une branche (`git checkout -b feature/ma-nouvelle-fonctionnalite`)
3. Commiter vos changements (`git commit -am 'Ajout d'une nouvelle fonctionnalité'`)
4. Pousser vers la branche (`git push origin feature/ma-nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## Licence
Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Contact
Pour toute question ou suggestion, veuillez ouvrir une issue sur le dépôt ou contacter [oumarouousseini9741@gmail.com].