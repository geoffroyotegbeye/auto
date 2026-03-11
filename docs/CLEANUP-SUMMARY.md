# 🎉 Nettoyage et Unification - Base de données

## ✅ Fichiers supprimés (obsolètes)

Les fichiers suivants ont été **supprimés** car ils sont remplacés par les versions unifiées :

- ❌ `backend/src/database/migrate.js`
- ❌ `backend/src/database/seed.js`
- ❌ `backend/src/database/schema.sql`
- ❌ `backend/src/database/seed-config.js`
- ❌ `backend/src/database/seed-hero.js`
- ❌ `backend/src/database/create-missing-tables.js`
- ❌ `backend/src/database/full-migration.sql`

## ✅ Fichiers conservés (à utiliser)

```
backend/src/database/
├── migrate-all.js      # ✅ Migration complète (11 tables)
├── seed-all.js         # ✅ Seed complet (toutes données)
├── check-tables.js     # ✅ Vérification tables
└── README.md           # ✅ Documentation
```

## ✅ Commandes npm simplifiées

**Avant (anciennes commandes) :**
```bash
npm run db:migrate      # Utilisait migrate.js
npm run db:seed         # Utilisait seed.js
npm run db:migrate:all  # Utilisait migrate-all.js
npm run db:seed:all     # Utilisait seed-all.js
```

**Maintenant (nouvelles commandes) :**
```bash
npm run db:migrate      # Utilise migrate-all.js
npm run db:seed         # Utilise seed-all.js
npm run db:reset        # Migration + Seed
npm run db:check        # Vérification
```

## ✅ Fichiers d'instructions pour IA créés

1. **`.ai-instructions.md`** - Instructions complètes pour toutes les IA
2. **`.cursorrules`** - Règles pour Cursor AI
3. **`.amazonq/rules/project-rules.md`** - Règles pour Amazon Q

## 📋 Contenu des instructions IA

Tous les fichiers d'instructions contiennent :

- ✅ Structure du projet
- ✅ Commandes npm à utiliser
- ✅ Fichiers à utiliser (migrate-all.js, seed-all.js)
- ✅ Fichiers à NE JAMAIS créer (migrate.js, seed.js, etc.)
- ✅ Structure des 11 tables
- ✅ Structure complète de hero_settings (12 champs)
- ✅ Exports nommés de l'API (pas de default)
- ✅ Localisation Bénin (FCFA, villes)
- ✅ Ports (Backend 5001, Frontend 3000)
- ✅ Compte admin par défaut
- ✅ Conventions de code

## 🎯 Objectif atteint

**Avant :**
- 7 fichiers de migration/seed différents
- Confusion sur quel fichier utiliser
- Commandes npm multiples

**Maintenant :**
- 2 fichiers principaux (migrate-all.js, seed-all.js)
- Commandes npm simplifiées
- Instructions claires pour les IA
- Pas de risque de créer des fichiers obsolètes

## 🚀 Utilisation recommandée

```bash
# Installation complète
cd backend
npm install
npm run db:reset    # Créer tables + insérer données

# Vérification
npm run db:check    # Voir toutes les tables et comptages
```

## 📝 Pour les développeurs

**Toujours utiliser :**
- `npm run db:migrate` pour créer les tables
- `npm run db:seed` pour insérer les données
- `npm run db:reset` pour tout réinitialiser

**Ne jamais créer :**
- De nouveaux fichiers migrate.js ou seed.js
- De fichiers de migration/seed séparés
- De fichiers schema.sql

**Tout est centralisé dans migrate-all.js et seed-all.js !**

---

**Date**: 11 Mars 2026
**Version**: 1.0.0
**Statut**: ✅ Nettoyage terminé
