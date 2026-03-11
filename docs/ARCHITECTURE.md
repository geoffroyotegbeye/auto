# 🏗️ Architecture VehicleMarket

## Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│                  Next.js 15 + React 19                       │
│                     Port: 3000                               │
│                                                              │
│  Pages:                                                      │
│  • /homepage        → Page d'accueil                        │
│  • /products        → Catalogue véhicules                   │
│  • /products/[id]   → Détail véhicule (à créer)           │
│  • /contact         → Formulaire contact (à créer)         │
│  • /rdv             → Prise de RDV (à créer)               │
│  • /admin           → Dashboard admin (à créer)            │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ HTTP/REST API
                       │ (fetch/axios)
                       │
┌──────────────────────▼───────────────────────────────────────┐
│                        BACKEND                               │
│                  Node.js + Express                           │
│                     Port: 5000                               │
│                                                              │
│  Routes:                                                     │
│  • /api/vehicles      → Gestion véhicules                   │
│  • /api/appointments  → Gestion RDV                         │
│  • /api/quotes        → Gestion devis                       │
│  • /api/contact       → Messages contact                    │
│  • /api/reviews       → Avis clients                        │
│  • /api/services      → Services garage                     │
│  • /api/auth          → Authentification                    │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       │ MySQL Driver
                       │ (mysql2)
                       │
┌──────────────────────▼───────────────────────────────────────┐
│                      BASE DE DONNÉES                         │
│                        MySQL 8+                              │
│                     Port: 3306                               │
│                                                              │
│  Tables:                                                     │
│  • users              → Admins                              │
│  • vehicles           → Véhicules                           │
│  • appointments       → Rendez-vous                         │
│  • quotes             → Devis                               │
│  • contacts           → Messages                            │
│  • reviews            → Avis clients                        │
│  • services           → Services SAV                        │
│  • stats              → Statistiques                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 📂 Structure des dossiers

```
vehiclemarket/
│
├── frontend/                    # Application Next.js
│   ├── src/
│   │   ├── app/
│   │   │   ├── homepage/       # Page d'accueil
│   │   │   │   ├── components/ # Composants page accueil
│   │   │   │   └── page.tsx
│   │   │   ├── products/       # Catalogue véhicules
│   │   │   │   ├── components/ # Filtres, cartes
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx      # Layout principal
│   │   │   └── not-found.tsx
│   │   ├── components/         # Composants réutilisables
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ui/             # Composants UI de base
│   │   └── styles/             # Styles globaux
│   ├── public/                 # Assets statiques
│   ├── .env.local              # Variables d'environnement
│   ├── next.config.mjs
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/                     # API Node.js
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js     # Configuration MySQL
│   │   ├── controllers/        # Logique métier
│   │   │   ├── vehicleController.js
│   │   │   ├── appointmentController.js
│   │   │   ├── quoteController.js
│   │   │   ├── contactController.js
│   │   │   ├── reviewController.js
│   │   │   ├── serviceController.js
│   │   │   └── authController.js
│   │   ├── routes/             # Définition des routes
│   │   │   ├── vehicles.js
│   │   │   ├── appointments.js
│   │   │   ├── quotes.js
│   │   │   ├── contact.js
│   │   │   ├── reviews.js
│   │   │   ├── services.js
│   │   │   └── auth.js
│   │   ├── middleware/         # Middlewares
│   │   │   ├── auth.js         # Authentification JWT
│   │   │   └── upload.js       # Upload fichiers
│   │   ├── database/           # Scripts BDD
│   │   │   ├── schema.sql      # Schéma des tables
│   │   │   └── migrate.js      # Script de migration
│   │   ├── utils/              # Utilitaires
│   │   │   └── email.js        # Envoi d'emails
│   │   └── server.js           # Point d'entrée
│   ├── uploads/                # Fichiers uploadés
│   │   └── vehicles/           # Images véhicules
│   ├── .env                    # Variables d'environnement
│   ├── .env.example            # Template .env
│   └── package.json
│
├── README.md                    # Documentation principale
├── GUIDE_DEMARRAGE.md          # Guide d'installation
└── ARCHITECTURE.md             # Ce fichier
```

---

## 🔄 Flux de données

### Exemple : Création d'un rendez-vous

```
1. USER (Frontend)
   └─> Remplit formulaire RDV
       └─> Clique "Envoyer"

2. FRONTEND
   └─> POST /api/appointments
       Body: { type, first_name, last_name, email, phone, preferred_date, preferred_time }

3. BACKEND (Express)
   └─> Route: /api/appointments (POST)
       └─> Middleware: Validation (express-validator)
           └─> Controller: appointmentController.createAppointment()
               └─> INSERT INTO appointments
               └─> Envoi email confirmation (nodemailer)
               └─> Response: { message, appointmentId }

4. FRONTEND
   └─> Affiche message de succès
   └─> Redirige vers page confirmation
```

---

## 🔐 Sécurité

### Authentification JWT

```javascript
// 1. Login
POST /api/auth/login
{ email, password }
→ Retourne: { token, user }

// 2. Utilisation du token
GET /api/vehicles (admin)
Headers: { Authorization: "Bearer <token>" }

// 3. Middleware vérifie le token
authenticateToken() → décode JWT → req.user
isAdmin() → vérifie role === 'admin'
```

### Protection des routes

| Route | Public | Admin |
|-------|--------|-------|
| GET /api/vehicles | ✅ | ✅ |
| POST /api/vehicles | ❌ | ✅ |
| POST /api/appointments | ✅ | ✅ |
| GET /api/appointments | ❌ | ✅ |

---

## 📊 Modèle de données

### Relations entre tables

```
users (1) ──────────────────────────────────┐
                                             │
vehicles (N) ────┬──────────────────────────┤
                 │                           │
                 ├─> appointments (N)        │
                 │   (vehicle_id FK)         │
                 │                           │
                 ├─> quotes (N)              │
                 │   (vehicle_id FK)         │
                 │                           │
                 └─> reviews (N)             │
                     (vehicle_id FK)         │
                                             │
appointments (N) ────> reviews (N)          │
(appointment_id FK)                         │
                                             │
services (N) ────────────────────────────────┘
contacts (N) ────────────────────────────────┘
stats (1) ───────────────────────────────────┘
```

---

## 🚀 Technologies & Packages

### Frontend

| Package | Version | Usage |
|---------|---------|-------|
| next | 15.1.11 | Framework React |
| react | 19.0.3 | Bibliothèque UI |
| typescript | ^5 | Typage statique |
| tailwindcss | 3.4.6 | Styles CSS |
| @heroicons/react | ^2.2.0 | Icônes |

### Backend

| Package | Version | Usage |
|---------|---------|-------|
| express | ^4.18.2 | Framework web |
| mysql2 | ^3.6.5 | Driver MySQL |
| jsonwebtoken | ^9.0.2 | Authentification JWT |
| bcryptjs | ^2.4.3 | Hashage mots de passe |
| multer | ^1.4.5 | Upload fichiers |
| nodemailer | ^6.9.7 | Envoi emails |
| express-validator | ^7.0.1 | Validation données |
| helmet | ^7.1.0 | Sécurité headers |
| cors | ^2.8.5 | CORS |

---

## 🌐 Variables d'environnement

### Backend (.env)

```env
# Serveur
PORT=5000
NODE_ENV=development

# Base de données
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=password
DB_NAME=vehiclemarket

# JWT
JWT_SECRET=secret_key
JWT_EXPIRES_IN=7d

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=email@gmail.com
EMAIL_PASSWORD=app_password
EMAIL_FROM=noreply@vehiclemarket.com

# Frontend
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 📈 Évolution future

### Phase 1 : MVP (Actuel)
✅ Backend API complet
✅ Frontend statique
✅ Base de données

### Phase 2 : Connexion
- [ ] Intégration API dans frontend
- [ ] Formulaires fonctionnels
- [ ] Authentification admin

### Phase 3 : Dashboard Admin
- [ ] Interface de gestion
- [ ] Upload d'images
- [ ] Statistiques

### Phase 4 : Fonctionnalités avancées
- [ ] Recherche avancée
- [ ] Comparateur
- [ ] Favoris
- [ ] Notifications temps réel
- [ ] Chat en ligne

### Phase 5 : Production
- [ ] Tests unitaires
- [ ] Tests e2e
- [ ] CI/CD
- [ ] Monitoring
- [ ] Backup automatique
- [ ] CDN pour images
- [ ] Cache Redis

---

## 🎯 Bonnes pratiques

### Backend
- ✅ Validation des données (express-validator)
- ✅ Gestion des erreurs centralisée
- ✅ Authentification JWT
- ✅ Rate limiting
- ✅ Helmet pour sécurité
- ✅ CORS configuré
- ✅ Logs avec Morgan

### Frontend
- ✅ Composants réutilisables
- ✅ TypeScript strict
- ✅ Responsive design
- ✅ Accessibilité (ARIA)
- ✅ SEO optimisé
- ✅ Performance (lazy loading)

### Base de données
- ✅ Index sur colonnes fréquentes
- ✅ Foreign keys
- ✅ Timestamps automatiques
- ✅ Enum pour valeurs fixes
- ✅ JSON pour données flexibles

---

## 📞 Contact & Support

Pour toute question sur l'architecture :
- Consulter ce document
- Voir README.md pour usage général
- Voir GUIDE_DEMARRAGE.md pour installation
