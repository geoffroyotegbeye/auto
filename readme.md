# VehicleMarket - Plateforme de vente de véhicules

Plateforme complète de vente de véhicules avec gestion des rendez-vous, devis et SAV.

## 📁 Structure du projet

```
vehiclemarket/
├── frontend/          # Application Next.js (React)
│   ├── src/
│   │   ├── app/      # Pages et composants
│   │   ├── components/
│   │   └── styles/
│   └── package.json
│
├── backend/           # API Node.js + Express + MySQL
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── database/
│   │   └── utils/
│   └── package.json
│
└── README.md
```

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- MySQL 8+
- npm ou yarn

### 1. Backend

```bash
cd backend

# Installer les dépendances
npm install

# Configurer l'environnement
cp .env.example .env
# Éditer .env avec vos configurations

# Créer la base de données MySQL
mysql -u root -p
CREATE DATABASE vehiclemarket CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit;

# Exécuter les migrations
npm run db:migrate

# Démarrer le serveur
npm run dev
```

Le backend sera accessible sur http://localhost:5000

### 2. Frontend

```bash
cd frontend

# Installer les dépendances
npm install

# Créer le fichier .env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local

# Démarrer l'application
npm run dev
```

Le frontend sera accessible sur http://localhost:3000

## 📚 Fonctionnalités

### ✅ Gestion des véhicules
- CRUD complet (admin)
- Filtres avancés (marque, prix, carburant, etc.)
- Upload d'images multiples
- Statuts (disponible, réservé, vendu)

### ✅ Système de rendez-vous
- Prise de RDV showroom
- Prise de RDV SAV
- Confirmation par email
- Gestion admin des RDV

### ✅ Demandes de devis
- Devis véhicule neuf
- Devis véhicule occasion
- Devis leasing
- Reprise possible

### ✅ Contact & Support
- Formulaire de contact
- Demande d'assistance SAV
- Notifications email

### ✅ Avis clients
- Soumission d'avis
- Système de notation (1-5 étoiles)
- Modération admin
- Affichage des avis approuvés

### ✅ Services garage
- Liste des services SAV
- Catégories (entretien, réparation, etc.)
- Gestion admin

## 🔐 Authentification Admin

### Créer un compte admin

```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "email": "admin@vehiclemarket.com",
  "password": "votre_mot_de_passe",
  "name": "Admin"
}
```

### Se connecter

```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "admin@vehiclemarket.com",
  "password": "votre_mot_de_passe"
}
```

Vous recevrez un token JWT à utiliser dans les headers :
```
Authorization: Bearer votre_token_jwt
```

## 📖 Documentation API

Voir `backend/README.md` pour la documentation complète de l'API.

## 🛠️ Technologies utilisées

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Heroicons

### Backend
- Node.js
- Express.js
- MySQL 2
- JWT (authentification)
- Bcrypt (hashage mots de passe)
- Multer (upload fichiers)
- Nodemailer (emails)

## 📝 Prochaines étapes

1. Connecter le frontend à l'API backend
2. Créer les pages de formulaires (RDV, devis, contact)
3. Créer le dashboard admin
4. Implémenter la recherche avancée
5. Ajouter la pagination côté frontend
6. Optimiser les images uploadées
7. Ajouter des tests

## 🤝 Contribution

Ce projet est en développement actif. Pour contribuer :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT
