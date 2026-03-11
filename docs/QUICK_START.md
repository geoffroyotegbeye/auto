# ⚡ Quick Start - VehicleMarket

## 🚀 Démarrage rapide (5 minutes)

### 1. Installer MySQL et créer la base de données

```bash
# Démarrer MySQL
mysql.server start  # macOS
# ou
sudo service mysql start  # Linux

# Se connecter et créer la BDD
mysql -u root -p
```

```sql
CREATE DATABASE vehiclemarket CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit;
```

### 2. Configurer le Backend

```bash
cd backend
npm install
cp .env.example .env
```

Éditer `backend/.env` :
```env
DB_PASSWORD=votre_mot_de_passe_mysql
JWT_SECRET=changez_moi_en_production
EMAIL_USER=votre_email@gmail.com
EMAIL_PASSWORD=votre_mot_de_passe_app
```

```bash
npm run db:migrate
npm run dev
```

✅ Backend prêt sur http://localhost:5000

### 3. Configurer le Frontend

```bash
cd frontend
npm install
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
npm run dev
```

✅ Frontend prêt sur http://localhost:3000

### 4. Créer un compte admin

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@vehiclemarket.com",
    "password": "Admin123!",
    "name": "Admin"
  }'
```

### 5. Tester l'API

```bash
# Health check
curl http://localhost:5000/api/health

# Liste des véhicules
curl http://localhost:5000/api/vehicles

# Services SAV
curl http://localhost:5000/api/services
```

---

## 📝 Commandes utiles

### Backend
```bash
cd backend
npm run dev          # Démarrer en mode dev
npm run db:migrate   # Créer les tables
npm start            # Démarrer en mode production
```

### Frontend
```bash
cd frontend
npm run dev          # Démarrer en mode dev
npm run build        # Build production
npm run start        # Démarrer build production
```

---

## 🔧 Configuration Email (Gmail)

1. Aller sur https://myaccount.google.com/security
2. Activer "Validation en deux étapes"
3. Créer un "Mot de passe d'application"
4. Utiliser ce mot de passe dans `EMAIL_PASSWORD`

---

## 📚 Documentation complète

- **Installation détaillée** : `GUIDE_DEMARRAGE.md`
- **Architecture** : `ARCHITECTURE.md`
- **Résumé projet** : `RESUME_PROJET.md`
- **API Backend** : `backend/README.md`

---

## ✅ Checklist de démarrage

- [ ] MySQL installé et démarré
- [ ] Base de données `vehiclemarket` créée
- [ ] Backend : `npm install` fait
- [ ] Backend : `.env` configuré
- [ ] Backend : `npm run db:migrate` exécuté
- [ ] Backend : `npm run dev` lancé (port 5000)
- [ ] Frontend : `npm install` fait
- [ ] Frontend : `.env.local` créé
- [ ] Frontend : `npm run dev` lancé (port 3000)
- [ ] Compte admin créé
- [ ] API testée avec curl

---

## 🎯 Prochaines étapes

1. **Connecter frontend à l'API**
   - Créer `frontend/src/services/api.ts`
   - Remplacer données statiques

2. **Créer les formulaires**
   - Page RDV
   - Page Devis
   - Page Contact

3. **Dashboard admin**
   - Login
   - Gestion véhicules
   - Gestion RDV/Devis

---

## 🆘 Problèmes courants

### Port déjà utilisé
```bash
# Tuer le processus sur le port 5000
lsof -ti:5000 | xargs kill -9

# Ou changer le port dans backend/.env
PORT=5001
```

### Erreur MySQL
```bash
# Vérifier que MySQL tourne
mysql.server status

# Vérifier les credentials
mysql -u root -p
```

### Module non trouvé
```bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
```

---

**Bon développement ! 🚀**
