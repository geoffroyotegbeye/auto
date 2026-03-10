# ⚡ Commandes exactes pour démarrer

## 📝 Copier-coller ces commandes dans l'ordre

### 1️⃣ Créer la base de données

```bash
mysql -u root -p
```

Puis dans MySQL :
```sql
CREATE DATABASE auto CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit;
```

---

### 2️⃣ Backend

```bash
cd backend
npm install
cp .env.example .env
```

**Éditer `backend/.env`** et modifier :
```env
DB_PASSWORD=votre_mot_de_passe_mysql
JWT_SECRET=changez_cette_cle_secrete
EMAIL_USER=votre_email@gmail.com
EMAIL_PASSWORD=votre_mot_de_passe_app
```

Puis :
```bash
npm run db:migrate
npm run db:seed
npm run dev
```

✅ Backend prêt sur http://localhost:5000

---

### 3️⃣ Frontend (nouveau terminal)

```bash
cd frontend
npm install
npm run dev
```

✅ Frontend prêt sur http://localhost:3000

---

## 🔑 Se connecter à l'admin

1. Ouvrir http://localhost:3000/admin/login
2. Email : `admin@vehiclemarket.com`
3. Mot de passe : `Admin123!`
4. Cliquer sur "Se connecter"

---

## ✅ Vérifications

### Backend fonctionne ?
```bash
curl http://localhost:5000/api/health
```

Doit retourner : `{"status":"OK",...}`

### Véhicules insérés ?
```bash
curl http://localhost:5000/api/vehicles
```

Doit retourner 8 véhicules

### Frontend accessible ?
Ouvrir http://localhost:3000/homepage dans le navigateur

---

## 🎯 Pages à tester

1. http://localhost:3000/homepage - Page d'accueil
2. http://localhost:3000/products - Catalogue
3. http://localhost:3000/admin/login - Connexion admin
4. http://localhost:3000/admin/dashboard - Dashboard (après connexion)

---

## 🆘 En cas de problème

### Port déjà utilisé
```bash
# Tuer le processus sur le port 5000
lsof -ti:5000 | xargs kill -9

# Tuer le processus sur le port 3000
lsof -ti:3000 | xargs kill -9
```

### MySQL ne démarre pas
```bash
mysql.server start  # macOS
sudo service mysql start  # Linux
```

### Erreur "Cannot find module"
```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd frontend
rm -rf node_modules .next package-lock.json
npm install
```

---

**C'est tout ! Le projet devrait fonctionner parfaitement. 🎉**
