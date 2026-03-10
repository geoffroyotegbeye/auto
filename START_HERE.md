# 🚀 START HERE - VehicleMarket

## 📁 Structure du projet

```
vehiclemarket/
├── frontend/     → Application Next.js (React)
├── backend/      → API Node.js + Express + MySQL
└── *.md          → Documentation
```

---

## ⚡ Démarrage rapide (5 min)

### 1️⃣ MySQL
```bash
mysql -u root -p
CREATE DATABASE vehiclemarket;
exit;
```

### 2️⃣ Backend
```bash
cd backend
npm install
cp .env.example .env
# Éditer .env (DB_PASSWORD, EMAIL_*, JWT_SECRET)
npm run db:migrate
npm run dev
```
✅ http://localhost:5000

### 3️⃣ Frontend
```bash
cd frontend
npm install
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
npm run dev
```
✅ http://localhost:3000

### 4️⃣ Créer un admin
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@test.com","password":"Admin123!","name":"Admin"}'
```

---

## 📚 Documentation

| Fichier | Contenu |
|---------|---------|
| `QUICK_START.md` | Démarrage détaillé |
| `GUIDE_DEMARRAGE.md` | Installation complète |
| `ARCHITECTURE.md` | Architecture technique |
| `RESUME_PROJET.md` | Résumé complet |
| `CHANGELOG.md` | Historique des changements |
| `backend/README.md` | Documentation API |

---

## ✅ Fonctionnalités prêtes

Toutes les fonctionnalités backend sont prêtes :
- ✅ Gestion véhicules (CRUD + images)
- ✅ Rendez-vous (Showroom + SAV)
- ✅ Devis (VN/VO/Leasing)
- ✅ Contact
- ✅ Avis clients
- ✅ Services SAV
- ✅ Authentification admin

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

## 🆘 Aide rapide

### Problème MySQL
```bash
# Vérifier que MySQL tourne
mysql.server status
mysql.server start
```

### Port occupé
```bash
# Tuer le processus
lsof -ti:5000 | xargs kill -9
```

### Réinstaller dépendances
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Ressources

- **API Health** : http://localhost:5000/api/health
- **Frontend** : http://localhost:3000
- **Backend** : http://localhost:5000

---

**Bon développement ! 🎉**
