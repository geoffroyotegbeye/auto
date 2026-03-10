# ✅ Test des routes - Checklist

## 🧪 Routes à tester

### Public

- [ ] **http://localhost:3000/**
  - Page d'accueil s'affiche
  - Header avec logo "Benin Cars"
  - Sections : Hero, Marques, Véhicules vedettes, Stats, etc.
  - Footer présent

- [ ] **http://localhost:3000/products**
  - Catalogue de véhicules
  - Filtres fonctionnels
  - Recherche par texte
  - Vue grille/liste
  - Pagination

### Admin

- [ ] **http://localhost:3000/admin/login**
  - Formulaire de connexion
  - Champs email et mot de passe
  - ✨ **Icône œil pour voir le mot de passe**
  - Bouton "Se connecter"
  - Lien "Retour au site" → `/`

- [ ] **Connexion admin**
  - Email : `admin@vehiclemarket.com`
  - Mot de passe : `Admin123!`
  - Cliquer sur l'œil pour voir le mot de passe
  - Se connecter

- [ ] **http://localhost:3000/admin/dashboard**
  - Dashboard avec statistiques
  - Sidebar à gauche
  - Compteurs : véhicules, RDV, devis, messages, avis
  - Actions rapides
  - Bouton "Voir le site" → ouvre `/` dans nouvel onglet

- [ ] **http://localhost:3000/admin/dashboard/vehicles**
  - Liste des véhicules
  - Filtres par statut
  - Images, prix, année, km
  - Boutons modifier/supprimer

- [ ] **http://localhost:3000/admin/dashboard/appointments**
  - Liste des rendez-vous
  - Changement de statut
  - Type (showroom/SAV)
  - Date et heure

- [ ] **http://localhost:3000/admin/dashboard/quotes**
  - Liste des devis
  - Changement de statut
  - Informations client

- [ ] **http://localhost:3000/admin/dashboard/contacts**
  - Liste des messages
  - Changement de statut
  - Sujet et message complet

- [ ] **http://localhost:3000/admin/dashboard/reviews**
  - Liste des avis
  - Boutons approuver/rejeter
  - Notes avec étoiles

- [ ] **http://localhost:3000/admin/dashboard/services**
  - Liste des services SAV
  - Prix et durée
  - Catégories

### Navigation

- [ ] **Header**
  - Cliquer sur "Accueil" → `/`
  - Cliquer sur "Véhicules" → `/products`
  - Cliquer sur logo → `/`

- [ ] **Footer**
  - Cliquer sur "Accueil" → `/`
  - Cliquer sur "Véhicules" → `/products`

- [ ] **Admin Sidebar**
  - Tous les liens fonctionnent
  - Highlight sur la page active
  - Bouton collapse/expand
  - Déconnexion fonctionne

---

## 🔍 Points spécifiques à vérifier

### Icône œil (mot de passe)
- [ ] Icône œil fermé par défaut
- [ ] Cliquer → mot de passe visible + icône œil barré
- [ ] Re-cliquer → mot de passe masqué + icône œil
- [ ] Fonctionne sans bug

### Routes
- [ ] `/` charge la page d'accueil (pas de redirection)
- [ ] Pas d'erreur 404
- [ ] Toutes les pages se chargent rapidement
- [ ] Pas de latence

### Données
- [ ] 8 véhicules affichés dans admin
- [ ] Services SAV présents
- [ ] Avis clients visibles
- [ ] Statistiques correctes dans dashboard

---

## 🚀 Commandes de test

```bash
# 1. Backend
cd backend
npm run dev

# 2. Frontend (nouveau terminal)
cd frontend
npm run dev

# 3. Ouvrir le navigateur
# http://localhost:3000/
```

---

## ✅ Résultat attendu

Toutes les cases doivent être cochées ✅

Si un problème :
1. Vérifier que le backend tourne (port 5000)
2. Vérifier que le frontend tourne (port 3000)
3. Vérifier la console du navigateur (F12)
4. Vérifier les logs du terminal

---

**Bon test ! 🧪**
