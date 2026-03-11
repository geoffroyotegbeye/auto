# 🔌 Configuration des ports

## Ports utilisés

| Service | Port | URL |
|---------|------|-----|
| **Frontend** | 3000 | http://localhost:3000 |
| **Backend** | 5000 | http://localhost:5000 |
| **MySQL** | 3306 | localhost:3306 |

---

## ✅ Changements effectués

### Frontend (port 3000)
- ✅ `frontend/package.json` - Scripts `dev` et `start` modifiés
- ✅ Toute la documentation mise à jour

### Backend (CORS)
- ✅ `backend/.env.example` - FRONTEND_URL mis à jour
- ⚠️ **Important** : Si tu as déjà un fichier `backend/.env`, mets à jour :
  ```env
  FRONTEND_URL=http://localhost:3000
  ```

---

## 🚀 Démarrage

### Backend
```bash
cd backend
npm run dev
```
✅ http://localhost:5000

### Frontend
```bash
cd frontend
npm run dev
```
✅ http://localhost:3000

---

## 🔧 Configuration CORS

Le backend accepte les requêtes depuis :
- `http://localhost:3000` (frontend)

Si tu changes le port frontend, n'oublie pas de mettre à jour `FRONTEND_URL` dans `backend/.env`.

---

## 📝 Fichiers modifiés

1. `frontend/package.json` - Port 3000
2. `backend/.env.example` - FRONTEND_URL
3. Tous les fichiers `.md` - Documentation

---

## ⚠️ Note importante

Si tu as déjà créé un fichier `backend/.env`, pense à le mettre à jour :

```bash
cd backend
# Éditer .env
nano .env
# ou
code .env
```

Modifier la ligne :
```env
FRONTEND_URL=http://localhost:3000
```

---

**Configuration terminée ! 🎉**
