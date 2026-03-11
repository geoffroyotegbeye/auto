# 📚 Index des fichiers d'instructions pour IA

Ce projet contient plusieurs fichiers d'instructions pour aider les IA à comprendre la structure et les règles du projet.

## 📄 Fichiers disponibles

### 1. `.ai-instructions.md` (Racine du projet)
**Pour**: Toutes les IA (ChatGPT, Claude, Gemini, etc.)
**Contenu**: Instructions complètes et détaillées
- Structure du projet
- Base de données (tables, migrations, seeds)
- API Frontend (exports nommés)
- Authentification
- Localisation Bénin
- Conventions de code
- Démarrage rapide

### 2. `.cursorrules` (Racine du projet)
**Pour**: Cursor AI
**Contenu**: Règles concises et directes
- Fichiers à utiliser/éviter
- Commandes npm
- Structure des tables
- Exports API
- Localisation
- Points critiques

### 3. `.amazonq/rules/project-rules.md`
**Pour**: Amazon Q
**Contenu**: Règles formatées pour Amazon Q
- Même contenu que .cursorrules
- Format adapté à Amazon Q
- Règles critiques en évidence

### 4. `backend/src/database/README.md`
**Pour**: Développeurs et IA
**Contenu**: Documentation base de données
- Commandes npm disponibles
- Tables créées
- Données insérées
- Structure des fichiers
- Notes importantes

### 5. `CLEANUP-SUMMARY.md` (Racine du projet)
**Pour**: Développeurs et IA
**Contenu**: Résumé du nettoyage
- Fichiers supprimés
- Fichiers conservés
- Commandes simplifiées
- Objectif atteint

## 🎯 Quel fichier lire en premier ?

### Pour une IA qui découvre le projet
1. Lire **`.ai-instructions.md`** (vue d'ensemble complète)
2. Consulter **`backend/src/database/README.md`** (détails BDD)
3. Voir **`CLEANUP-SUMMARY.md`** (changements récents)

### Pour Cursor AI
1. Lire **`.cursorrules`** (règles spécifiques)

### Pour Amazon Q
1. Lire **`.amazonq/rules/project-rules.md`** (règles spécifiques)

## ⚠️ Règles critiques (présentes dans tous les fichiers)

### Base de données
- ✅ Utiliser UNIQUEMENT `migrate-all.js` et `seed-all.js`
- ❌ NE JAMAIS créer `migrate.js`, `seed.js`, `schema.sql`
- ✅ Commandes: `npm run db:migrate`, `npm run db:seed`, `npm run db:reset`

### API Frontend
- ✅ Exports nommés: `import { vehiclesAPI } from '@/services/api'`
- ❌ PAS de default export

### Localisation
- ✅ Devise: FCFA (Franc CFA)
- ✅ Position: après le montant
- ✅ Format: "18 500 000 FCFA"

### Ports
- Backend: 5001
- Frontend: 3000
- MySQL: 3306

### Hero Settings
- ✅ 12 champs obligatoires (title_line1, title_line2, title_line3, subtitle, badge_text, badge_subtext, main_image, card_title, card_subtitle, card_price, floating_card_title, floating_card_text)

## 📝 Mise à jour des instructions

Si vous devez mettre à jour les instructions :

1. Modifier **`.ai-instructions.md`** (source principale)
2. Synchroniser avec **`.cursorrules`** (version concise)
3. Synchroniser avec **`.amazonq/rules/project-rules.md`** (version Amazon Q)
4. Mettre à jour **`backend/src/database/README.md`** si changements BDD

## 🔄 Historique des versions

- **v1.0.0** (11 Mars 2026) - Création initiale après nettoyage
  - Unification des migrations/seeds
  - Suppression des fichiers obsolètes
  - Création des instructions pour IA

---

**Maintenu par**: Équipe VehicleMarket
**Dernière mise à jour**: 11 Mars 2026
