# VehicleMarket - Règles Amazon Q

## 🎯 Projet: Plateforme de vente de véhicules au Bénin

### Stack technique
- Backend: Node.js + Express + MySQL (Port 5001)
- Frontend: Next.js 15 + React 19 + TypeScript (Port 3000)
- BDD: MySQL (database: auto, port 3306)
- Devise: FCFA (Franc CFA) - Position après le montant

## 🗄️ Base de données - RÈGLES CRITIQUES

### ✅ Fichiers à utiliser UNIQUEMENT
- `backend/src/database/migrate-all.js` - Migration complète (11 tables)
- `backend/src/database/seed-all.js` - Seed complet (toutes données)
- `backend/src/database/check-tables.js` - Vérification tables

### ❌ NE JAMAIS créer ou utiliser
- migrate.js, seed.js, schema.sql (supprimés)
- seed-config.js, seed-hero.js (supprimés)
- Fichiers de migration/seed séparés
- Tout autre fichier de migration

### 📋 Commandes npm disponibles
```bash
npm run db:migrate  # Créer toutes les tables (migrate-all.js)
npm run db:seed     # Insérer toutes les données (seed-all.js)
npm run db:reset    # Migration + Seed en une commande
npm run db:check    # Vérifier tables et comptage
```

## 📊 Tables (11 au total)

1. **brands** - Marques véhicules (16 par défaut: Audi, BMW, Mercedes, Tesla, etc.)
2. **hero_settings** - Paramètres hero (12 champs: title_line1, title_line2, title_line3, subtitle, badge_text, badge_subtext, main_image, card_title, card_subtitle, card_price, floating_card_title, floating_card_text)
3. **users** - Utilisateurs admin
4. **vehicles** - Véhicules disponibles
5. **appointments** - Rendez-vous showroom/SAV
6. **quotes** - Demandes de devis
7. **contacts** - Messages de contact
8. **reviews** - Avis clients
9. **services** - Services SAV
10. **stats** - Statistiques site
11. **site_config** - Configuration (devise FCFA)

## 🔐 Authentification

**Admin par défaut:**
- Email: admin@vehiclemarket.com
- Password: Admin123!
- Token JWT stocké dans localStorage

## 🎨 Frontend - API Services

**IMPORTANT: Exports nommés (PAS de default export)**

```typescript
import { vehiclesAPI, brandsAPI, heroAPI, configAPI, authAPI } from '@/services/api';
```

**APIs disponibles:**
- vehiclesAPI, brandsAPI, heroAPI, configAPI
- appointmentsAPI, quotesAPI, contactAPI
- reviewsAPI, servicesAPI, authAPI

## 🌍 Localisation Bénin

**Toujours respecter:**
- Devise: FCFA (Franc CFA)
- Position: après le montant
- Format: "18 500 000 FCFA" (espaces entre milliers)
- Villes: Cotonou, Porto-Novo, Parakou, Abomey-Calavi

## 📱 Pages Admin

- /admin/dashboard - Dashboard
- /admin/dashboard/vehicles - Véhicules
- /admin/dashboard/brands - Marques
- /admin/dashboard/hero - Hero
- /admin/dashboard/appointments - Rendez-vous
- /admin/dashboard/quotes - Devis
- /admin/dashboard/contacts - Messages
- /admin/dashboard/reviews - Avis clients
- /admin/dashboard/services - Services SAV
- /admin/dashboard/config - Configuration

## 💻 Conventions de code

### Backend
- ES Modules (import/export)
- Async/await pour DB
- express-validator pour validation
- multer pour uploads

### Frontend
- TypeScript strict
- "use client" pour composants interactifs
- Tailwind CSS
- Composants dans src/components/

## ⚠️ Points critiques

1. **Migrations**: UN SEUL fichier `migrate-all.js`
2. **Seeds**: UN SEUL fichier `seed-all.js`
3. **Ports**: Backend 5001, Frontend 3000
4. **Images**: Servies depuis backend/uploads/ avec CORS
5. **Devise**: FCFA uniquement, position "after"
6. **Hero**: 12 champs obligatoires
7. **API**: Exports nommés, jamais default

## 🚀 Démarrage

```bash
# Backend
cd backend
npm run db:reset  # Créer tables + données
npm run dev       # Port 5001

# Frontend
cd frontend
npm run dev       # Port 3000
```

---
**Version**: 1.0.0
**Dernière mise à jour**: 11 Mars 2026
