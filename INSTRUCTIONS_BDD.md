# 🗄️ Instructions pour créer la base de données

## ⚠️ MySQL doit être installé et démarré

### 1. Vérifier que MySQL est installé

```bash
mysql --version
```

Si MySQL n'est pas installé :
- **macOS** : `brew install mysql`
- **Linux** : `sudo apt-get install mysql-server`

### 2. Démarrer MySQL

```bash
# macOS
mysql.server start

# Linux
sudo service mysql start

# Ou avec Homebrew
brew services start mysql
```

---

## 📝 Créer la base de données

### Option 1 : Avec le script SQL

```bash
cd backend
mysql -u root -p < create-database.sql
```

### Option 2 : Manuellement

```bash
# Se connecter à MySQL
mysql -u root -p

# Dans MySQL, exécuter :
CREATE DATABASE auto CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit;
```

### Option 3 : Sans mot de passe root

```bash
mysql -u root -e "CREATE DATABASE auto CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

---

## ✅ Vérifier que la base existe

```bash
mysql -u root -p -e "SHOW DATABASES;"
```

Vous devriez voir `auto` dans la liste.

---

## 🚀 Ensuite, lancer les migrations

```bash
cd backend

# Configurer .env si pas déjà fait
cp .env.example .env
# Éditer .env avec votre mot de passe MySQL

# Créer les tables
npm run db:migrate

# Insérer les données de test
npm run db:seed
```

---

## 🔧 Configuration .env

Assurez-vous que `backend/.env` contient :

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=votre_mot_de_passe
DB_NAME=auto
```

---

## 🆘 Problèmes courants

### "Access denied for user 'root'"
```bash
# Réinitialiser le mot de passe root MySQL
mysql -u root
ALTER USER 'root'@'localhost' IDENTIFIED BY 'nouveau_mot_de_passe';
FLUSH PRIVILEGES;
exit;
```

### "Can't connect to MySQL server"
```bash
# Vérifier que MySQL tourne
mysql.server status

# Démarrer MySQL
mysql.server start
```

### "Command not found: mysql"
MySQL n'est pas installé ou pas dans le PATH.
```bash
# Installer MySQL
brew install mysql  # macOS
sudo apt-get install mysql-server  # Linux
```

---

## ✅ Une fois la base créée

Vous pourrez lancer :
```bash
npm run db:migrate  # Créer les tables
npm run db:seed     # Insérer les données
```

---

**Besoin d'aide ? Consultez la documentation MySQL : https://dev.mysql.com/doc/**
