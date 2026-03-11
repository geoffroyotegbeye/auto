# 🔧 Guide de dépannage

## ✅ Problèmes résolus

### 1. Erreur 500 - Incorrect datetime value

**Symptôme:** `Incorrect datetime value: '2026-03-11T19:02:52.000Z' for column 'created_at'`

**Solution:** Ajout de la fonction `sanitizeUpdateData()` qui supprime `id`, `created_at`, `updated_at` avant les UPDATE.

**Fichiers modifiés:**
- `backend/src/utils/sanitize.js` (créé)
- Tous les controllers (import + utilisation)

### 2. Erreur 500 - Incorrect integer value for boolean

**Symptôme:** `Incorrect integer value: 'false' for column 'is_new'`

**Solution:** Conversion des strings `'true'`/`'false'` en vrais booléens dans `sanitizeUpdateData()`.

**Code ajouté:**
```javascript
Object.keys(cleaned).forEach(key => {
  if (cleaned[key] === 'true') cleaned[key] = true;
  if (cleaned[key] === 'false') cleaned[key] = false;
});
```

## 🔍 Problèmes potentiels

### Images ne chargent pas

**Vérifications:**

1. **Backend tourne sur le bon port:**
```bash
# Vérifier le port dans backend/.env
PORT=5001
```

2. **Frontend pointe vers le bon port:**
```bash
# Vérifier frontend/.env.local
NEXT_PUBLIC_API_URL=http://localhost:5001/api
```

3. **Les fichiers existent:**
```bash
ls -la backend/uploads/vehicles/
```

4. **Le serveur sert les uploads:**
```bash
curl -I http://localhost:5001/uploads/vehicles/vehicle-xxx.jpg
# Doit retourner 200 OK
```

5. **CORS est configuré:**
```javascript
// Dans server.js
app.use('/uploads', (req, res, next) => {
  res.header('Cross-Origin-Resource-Policy', 'cross-origin');
  res.header('Access-Control-Allow-Origin', '*');
  next();
}, express.static('uploads'));
```

6. **Console du navigateur:**
- Ouvrir DevTools (F12)
- Onglet Network
- Filtrer par "Img"
- Vérifier les URLs et les codes de réponse

### Port déjà utilisé

**Symptôme:** `EADDRINUSE: address already in use :::5001`

**Solution:**
```bash
# Tuer le processus
lsof -ti:5001 | xargs kill -9

# Ou changer le port dans backend/.env
PORT=5002
```

### Base de données

**Vérifier la connexion:**
```bash
mysql -u root -p
USE auto;
SHOW TABLES;
```

**Recréer les tables:**
```bash
cd backend
npm run db:migrate
```

## 🚀 Commandes utiles

### Démarrer le projet

```bash
# Backend
cd backend
npm run dev

# Frontend (nouveau terminal)
cd frontend
npm run dev
```

### Vérifier les logs

```bash
# Backend (dans le terminal où il tourne)
# Les erreurs s'affichent directement

# Frontend
# Ouvrir http://localhost:3000
# F12 → Console
```

### Nettoyer et réinstaller

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

## 📞 Checklist de démarrage

- [ ] MySQL tourne
- [ ] Base de données `auto` existe
- [ ] Tables créées (`npm run db:migrate`)
- [ ] Backend `.env` configuré
- [ ] Backend tourne sur port 5001
- [ ] Frontend `.env.local` configuré
- [ ] Frontend tourne sur port 3000
- [ ] Compte admin créé
- [ ] Images uploadées dans `backend/uploads/`

## 🎯 URLs importantes

- Frontend: http://localhost:3000
- Backend API: http://localhost:5001/api
- Backend Health: http://localhost:5001/api/health
- Admin Login: http://localhost:3000/admin/login
- Uploads: http://localhost:5001/uploads/
