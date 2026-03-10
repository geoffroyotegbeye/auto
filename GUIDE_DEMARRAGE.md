# 🚀 Guide de démarrage VehicleMarket

## Architecture du projet

✅ **Frontend** : Next.js + React + TypeScript (dossier `frontend/`)
✅ **Backend** : Node.js + Express + MySQL (dossier `backend/`)

---

## 📋 Étapes d'installation

### 1️⃣ Installation du Backend

```bash
cd backend
npm install
```

### 2️⃣ Configuration de la base de données MySQL

```bash
# Se connecter à MySQL
mysql -u root -p

# Créer la base de données
CREATE DATABASE vehiclemarket CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit;
```

### 3️⃣ Configuration des variables d'environnement

```bash
# Dans le dossier backend/
cp .env.example .env
```

Éditer le fichier `.env` avec vos informations :

```env
PORT=5000
NODE_ENV=development

# MySQL
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=votre_mot_de_passe_mysql
DB_NAME=vehiclemarket

# JWT
JWT_SECRET=changez_cette_cle_secrete_en_production
JWT_EXPIRES_IN=7d

# Email (Gmail exemple)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=votre_email@gmail.com
EMAIL_PASSWORD=votre_mot_de_passe_app
EMAIL_FROM=noreply@vehiclemarket.com

FRONTEND_URL=http://localhost:3000
```

### 4️⃣ Créer les tables de la base de données

```bash
# Dans le dossier backend/
npm run db:migrate
```

### 5️⃣ Démarrer le backend

```bash
# Mode développement (avec auto-reload)
npm run dev
```

✅ Le backend sera accessible sur **http://localhost:5000**

---

### 6️⃣ Installation du Frontend

```bash
cd frontend
npm install
```

### 7️⃣ Configuration frontend

```bash
# Créer le fichier .env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
```

### 8️⃣ Démarrer le frontend

```bash
npm run dev
```

✅ Le frontend sera accessible sur **http://localhost:3000**

---

## 🔐 Créer un compte administrateur

### Option 1 : Via API (Postman, Insomnia, curl)

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@vehiclemarket.com",
    "password": "Admin123!",
    "name": "Administrateur"
  }'
```

### Option 2 : Via MySQL directement

```sql
-- Se connecter à MySQL
mysql -u root -p vehiclemarket

-- Insérer un admin (mot de passe hashé pour "Admin123!")
INSERT INTO users (email, password, name, role) VALUES 
('admin@vehiclemarket.com', '$2a$10$XYZ...', 'Admin', 'admin');
```

---

## 📚 Fonctionnalités implémentées

### ✅ Backend API

| Endpoint | Méthode | Description | Auth |
|----------|---------|-------------|------|
| `/api/vehicles` | GET | Liste des véhicules | Public |
| `/api/vehicles/:id` | GET | Détails véhicule | Public |
| `/api/vehicles` | POST | Créer véhicule | Admin |
| `/api/vehicles/:id` | PUT | Modifier véhicule | Admin |
| `/api/vehicles/:id` | DELETE | Supprimer véhicule | Admin |
| `/api/appointments` | POST | Créer RDV | Public |
| `/api/appointments` | GET | Liste RDV | Admin |
| `/api/quotes` | POST | Demande devis | Public |
| `/api/quotes` | GET | Liste devis | Admin |
| `/api/contact` | POST | Formulaire contact | Public |
| `/api/reviews` | POST | Soumettre avis | Public |
| `/api/reviews` | GET | Avis approuvés | Public |
| `/api/services` | GET | Services garage | Public |
| `/api/auth/register` | POST | Créer admin | Public |
| `/api/auth/login` | POST | Connexion admin | Public |

### ✅ Base de données (8 tables)

1. **users** - Comptes administrateurs
2. **vehicles** - Véhicules en vente
3. **appointments** - Rendez-vous (showroom/SAV)
4. **quotes** - Demandes de devis
5. **contacts** - Messages de contact
6. **reviews** - Avis clients
7. **services** - Services du garage
8. **stats** - Statistiques du site

---

## 🎯 Prochaines étapes de développement

### Phase 1 : Connexion Frontend ↔ Backend

- [ ] Créer un service API dans le frontend (`src/services/api.js`)
- [ ] Connecter la page `/products` à l'API véhicules
- [ ] Remplacer les données statiques par des appels API

### Phase 2 : Formulaires

- [ ] Formulaire de prise de RDV showroom
- [ ] Formulaire de prise de RDV SAV
- [ ] Formulaire de demande de devis
- [ ] Formulaire de contact
- [ ] Formulaire d'avis client

### Phase 3 : Dashboard Admin

- [ ] Page de connexion admin
- [ ] Dashboard avec statistiques
- [ ] Gestion des véhicules (CRUD)
- [ ] Gestion des RDV
- [ ] Gestion des devis
- [ ] Modération des avis
- [ ] Gestion des services SAV

### Phase 4 : Améliorations

- [ ] Page détail véhicule (`/products/[id]`)
- [ ] Système de favoris
- [ ] Comparateur de véhicules
- [ ] Calculateur de financement
- [ ] Galerie photos avancée
- [ ] Recherche avec autocomplete
- [ ] Notifications en temps réel

---

## 🐛 Dépannage

### Erreur de connexion MySQL

```bash
# Vérifier que MySQL est démarré
mysql.server start  # macOS
sudo service mysql start  # Linux

# Vérifier les credentials dans .env
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
```

### Port déjà utilisé

```bash
# Changer le port dans backend/.env
PORT=5001

# Ou tuer le processus sur le port 5000
lsof -ti:5000 | xargs kill -9
```

### Erreur d'upload d'images

```bash
# Vérifier que le dossier existe
mkdir -p backend/uploads/vehicles

# Vérifier les permissions
chmod 755 backend/uploads
```

---

## 📞 Support

Pour toute question ou problème :
1. Vérifier les logs du backend (`npm run dev`)
2. Vérifier les logs du frontend (console navigateur)
3. Consulter la documentation API dans `backend/README.md`

---

## 🎉 Félicitations !

Votre plateforme VehicleMarket est maintenant opérationnelle !

**Backend** : http://localhost:5000
**Frontend** : http://localhost:3000
**API Health** : http://localhost:5000/api/health
