USE auto;

SET FOREIGN_KEY_CHECKS = 0;

-- Table des utilisateurs (admin)
CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role ENUM('admin', 'super_admin') DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des véhicules
CREATE TABLE IF NOT EXISTS vehicles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  brand VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  version VARCHAR(255),
  price DECIMAL(10, 2) NOT NULL,
  year INT NOT NULL,
  km INT NOT NULL,
  fuel ENUM('Essence', 'Diesel', 'Hybride', 'Hybride rechargeable', 'Électrique', 'GPL') NOT NULL,
  transmission ENUM('Manuelle', 'Automatique', 'Semi-automatique', 'CVT', 'DSG', 'PDK') NOT NULL,
  power VARCHAR(50),
  body_style ENUM('Berline', 'SUV', 'Break', 'Coupé', 'Cabriolet', 'Monospace', 'Citadine', 'Pick-up'),
  color VARCHAR(50),
  doors INT,
  seats INT,
  location VARCHAR(255),
  description TEXT,
  features JSON,
  images JSON,
  main_image VARCHAR(500),
  is_new BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  badge VARCHAR(50),
  badge_type ENUM('badge-new', 'badge-promo', 'badge-accent'),
  status ENUM('available', 'reserved', 'sold') DEFAULT 'available',
  views INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_brand (brand),
  INDEX idx_price (price),
  INDEX idx_fuel (fuel),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des rendez-vous
CREATE TABLE IF NOT EXISTS appointments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  type ENUM('showroom', 'sav') NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TIME NOT NULL,
  vehicle_id INT,
  message TEXT,
  status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id) ON DELETE SET NULL,
  INDEX idx_date (preferred_date),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des demandes de devis
CREATE TABLE IF NOT EXISTS quotes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  type ENUM('new', 'used', 'leasing') NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  vehicle_id INT,
  brand VARCHAR(100),
  model VARCHAR(100),
  budget DECIMAL(10, 2),
  financing BOOLEAN DEFAULT FALSE,
  trade_in BOOLEAN DEFAULT FALSE,
  trade_in_details TEXT,
  message TEXT,
  status ENUM('pending', 'processing', 'sent', 'closed') DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id) ON DELETE SET NULL,
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des contacts
CREATE TABLE IF NOT EXISTS contacts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'read', 'replied', 'archived') DEFAULT 'new',
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des avis clients
CREATE TABLE IF NOT EXISTS reviews (
  id INT PRIMARY KEY AUTO_INCREMENT,
  customer_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  service_type ENUM('vente', 'sav', 'general') NOT NULL,
  title VARCHAR(255),
  comment TEXT NOT NULL,
  vehicle_id INT,
  appointment_id INT,
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  is_featured BOOLEAN DEFAULT FALSE,
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id) ON DELETE SET NULL,
  FOREIGN KEY (appointment_id) REFERENCES appointments(id) ON DELETE SET NULL,
  INDEX idx_rating (rating),
  INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des services du garage
CREATE TABLE IF NOT EXISTS services (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  category ENUM('entretien', 'reparation', 'diagnostic', 'carrosserie', 'pneumatique', 'autre') NOT NULL,
  description TEXT NOT NULL,
  price_from DECIMAL(10, 2),
  duration VARCHAR(50),
  icon VARCHAR(50),
  is_active BOOLEAN DEFAULT TRUE,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_category (category),
  INDEX idx_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des statistiques
CREATE TABLE IF NOT EXISTS stats (
  id INT PRIMARY KEY AUTO_INCREMENT,
  total_vehicles INT DEFAULT 0,
  total_brands INT DEFAULT 0,
  satisfaction_rate DECIMAL(5, 2) DEFAULT 98.00,
  avg_delivery_days INT DEFAULT 7,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insérer des statistiques par défaut
INSERT INTO stats (total_vehicles, total_brands, satisfaction_rate, avg_delivery_days) 
VALUES (12000, 48, 98.00, 7)
ON DUPLICATE KEY UPDATE id=id;

SET FOREIGN_KEY_CHECKS = 1;

SELECT 'Migration terminée avec succès!' as message;
SHOW TABLES;
