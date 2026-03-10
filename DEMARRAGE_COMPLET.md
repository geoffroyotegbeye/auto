# 🚀 Démarrage complet - VehicleMarket

## ✅ Étapes d'installation

### 1. Base de données MySQL

```bash
# Démarrer MySQL
mysql.server start  # macOS
# ou
sudo service mysql start  # Linux

# Se connecter
mysql -u root -p

# Créer la base
CREATE DATABASE auto CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit;
```

### 2. Backend

```bash
cd backend

# Installer les dépendances
npm install

# Configurer .env
cp .env.example .env
# Éditer .env avec vos informations MySQL

# Créer les tables
npm run db:migrate

# Insérer les données de test
npm run db:seed

# Démarrer le serveur
npm run dev
```

✅ Backend sur http://localhost:5000

### 3. Frontend

```bash
cd frontend

# Installer les dépendances
npm install

# Démarrer l'application
npm run dev
```

✅ Frontend sur http://localhost:3000

---

## 🔑 Compte admin créé

Après le seed, vous pouvez vous connecter avec :

- **URL** : http://localhost:3000/admin/login
- **Email** : admin@vehiclemarket.com
- **Mot de passe** : Admin123!

---

## 📊 Données insérées par le seed

- ✅ 1 compte administrateur
- ✅ 8 véhicules (BMW, Mercedes, Audi, Tesla, etc.)
- ✅ 6 services SAV
- ✅ 3 avis clients approuvés

---

## 🎯 Pages disponibles

### Public
- http://localhost:3000/homepage - Page d'accueil
- http://localhost:3000/products - Catalogue véhicules

### Admin
- http://localhost:3000/admin/login - Connexion
- http://localhost:3000/admin/dashboard - Dashboard
- http://localhost:3000/admin/dashboard/vehicles - Gestion véhicules
- http://localhost:3000/admin/dashboard/appointments - Rendez-vous
- http://localhost:3000/admin/dashboard/quotes - Devis
- http://localhost:3000/admin/dashboard/contacts - Messages
- http://localhost:3000/admin/dashboard/reviews - Avis clients
- http://localhost:3000/admin/dashboard/services - Services SAV

---

## 🔧 API Backend

### Test de l'API

```bash
# Health check
curl http://localhost:5000/api/health

# Liste des véhicules
curl http://localhost:5000/api/vehicles

# Services SAV
curl http://localhost:5000/api/services

# Avis approuvés
curl http://localhost:5000/api/reviews
```

---

## ✨ Fonctionnalités

### Frontend connecté au backend
- ✅ Service API créé (`frontend/src/services/api.ts`)
- ✅ Authentification JWT
- ✅ Gestion du token dans localStorage

### Espace admin complet
- ✅ Page de connexion
- ✅ Dashboard avec statistiques
- ✅ Sidebar responsive
- ✅ Gestion véhicules (liste, suppression)
- ✅ Gestion rendez-vous (changement statut)
- ✅ Gestion devis (changement statut)
- ✅ Gestion messages (changement statut)
- ✅ Modération avis (approuver/rejeter)
- ✅ Gestion services SAV

---

## 🎨 Design

- Interface admin moderne et sombre
- Sidebar collapsible
- Animations fluides
- Responsive
- Aucune latence (optimisé)

---

## 📝 Prochaines étapes

1. Connecter la page `/products` à l'API
2. Créer les formulaires publics (RDV, devis, contact)
3. Ajouter la création/édition de véhicules
4. Ajouter la page détail véhicule

---

## 🆘 Dépannage

### Backend ne démarre pas
```bash
# Vérifier MySQL
mysql.server status

# Vérifier .env
cat backend/.env

# Réinstaller
cd backend
rm -rf node_modules
npm install
```

### Frontend ne démarre pas
```bash
# Vérifier .env.local
cat frontend/.env.local

# Réinstaller
cd frontend
rm -rf node_modules .next
npm install
```

### Erreur CORS
Vérifier que `FRONTEND_URL=http://localhost:3000` dans `backend/.env`

---

**Tout est prêt ! 🎉**
