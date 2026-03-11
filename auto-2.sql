-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 12 mars 2026 à 00:45
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `auto`
--

-- --------------------------------------------------------

--
-- Structure de la table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `type` enum('showroom','sav') NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `preferred_date` date NOT NULL,
  `preferred_time` time NOT NULL,
  `vehicle_id` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `status` enum('pending','confirmed','cancelled','completed') DEFAULT 'pending',
  `admin_notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `logo` varchar(500) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `display_order` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `brands`
--

INSERT INTO `brands` (`id`, `name`, `logo`, `description`, `is_active`, `display_order`, `created_at`, `updated_at`) VALUES
(1, 'KIA', '/uploads/brands/brand-1773261797805-375092706.jpeg', NULL, 1, 1, '2026-03-11 18:56:45', '2026-03-11 20:46:14'),
(2, 'Jeep', '/uploads/brands/brand-1773261807660-693968093.jpeg', NULL, 1, 2, '2026-03-11 18:56:45', '2026-03-11 20:46:24'),
(7, 'FUSO', '/uploads/brands/brand-1773261820673-889162206.jpeg', NULL, 1, 7, '2026-03-11 18:56:45', '2026-03-11 20:46:34'),
(9, 'Piaggio', '/uploads/brands/brand-1773261831626-568231197.jpeg', NULL, 1, 9, '2026-03-11 18:56:45', '2026-03-11 20:46:07'),
(11, 'FIAT', '/uploads/brands/brand-1773261861121-618428340.jpeg', NULL, 1, 11, '2026-03-11 18:56:45', '2026-03-11 20:46:50'),
(13, 'Tesla', '/uploads/brands/brand-1773261905634-120914110.png', NULL, 1, 13, '2026-03-11 18:56:45', '2026-03-11 20:45:05'),
(14, 'Mercedes-Benz', '/uploads/brands/brand-1773261919526-356100185.png', NULL, 1, 14, '2026-03-11 18:56:45', '2026-03-11 20:47:11'),
(15, 'Volkswagen', '/uploads/brands/brand-1773261948078-600260837.png', NULL, 1, 15, '2026-03-11 18:56:45', '2026-03-11 20:45:48');

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `status` enum('new','read','replied','archived') DEFAULT 'new',
  `admin_notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `phone`, `subject`, `message`, `status`, `admin_notes`, `created_at`, `updated_at`) VALUES
(1, 'Eugenia Fox', 'zovy@mailinator.com', '01321564987', 'rdv', 'Similique sed hic ve', 'new', NULL, '2026-03-11 22:45:30', '2026-03-11 22:45:30'),
(2, 'OTEGBEYE Geoffroy', 'geoffroyotegbeye@gmail.com', '57972575', 'sav', 'Ipsam quisquam odit ', 'new', NULL, '2026-03-11 23:04:40', '2026-03-11 23:04:40'),
(3, 'Bruno Henderson', 'ruduvyry@mailinator.com', '+1 (489) 711-4455', 'autre', 'Non tempora saepe do', 'new', NULL, '2026-03-11 23:11:07', '2026-03-11 23:11:07');

-- --------------------------------------------------------

--
-- Structure de la table `hero_settings`
--

CREATE TABLE `hero_settings` (
  `id` int(11) NOT NULL,
  `title_line1` varchar(255) DEFAULT 'Trouvez votre',
  `title_line2` varchar(255) DEFAULT 'véhicule idéal',
  `title_line3` varchar(255) DEFAULT 'au meilleur prix',
  `subtitle` text DEFAULT 'Plus de 12 000 véhicules neufs et d\'occasion disponibles\nLivraison rapide partout au Bénin',
  `badge_text` varchar(100) DEFAULT '98%',
  `badge_subtext` varchar(100) DEFAULT 'Clients satisfaits',
  `main_image` varchar(500) DEFAULT NULL,
  `card_title` varchar(255) DEFAULT 'Mercedes Classe A',
  `card_subtitle` varchar(255) DEFAULT '2024 • 5 000 km',
  `card_price` varchar(100) DEFAULT '18 500 000',
  `floating_card_title` varchar(255) DEFAULT '12 000+',
  `floating_card_text` varchar(255) DEFAULT 'Véhicules disponibles',
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `hero_settings`
--

INSERT INTO `hero_settings` (`id`, `title_line1`, `title_line2`, `title_line3`, `subtitle`, `badge_text`, `badge_subtext`, `main_image`, `card_title`, `card_subtitle`, `card_price`, `floating_card_title`, `floating_card_text`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Trouvez', 'votre', 'véhicule', 'Concessionnaire des marques automobiles:\r\nKIA d’origine sud-coréenne - MITSUBISHI FUSO d’origine japonaise - FIAT & FIAT PROFESSIONNAL d’origine italienne - JEEP d’origine américaine - MAZDA d’origine japonaise', '98%', 'Clients satisfaits', '/uploads/hero/hero-1773256369284-218737340.jpg', 'Mercedes Classe A', '2024 • 5 000 km', '18 500 000', '12 000+', 'Véhicules disponibles', 1, '2026-03-11 19:02:52', '2026-03-11 19:12:49');

-- --------------------------------------------------------

--
-- Structure de la table `quotes`
--

CREATE TABLE `quotes` (
  `id` int(11) NOT NULL,
  `type` enum('new','used','leasing') NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `vehicle_id` int(11) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `budget` decimal(10,2) DEFAULT NULL,
  `financing` tinyint(1) DEFAULT 0,
  `trade_in` tinyint(1) DEFAULT 0,
  `trade_in_details` text DEFAULT NULL,
  `message` text DEFAULT NULL,
  `status` enum('pending','processing','sent','closed') DEFAULT 'pending',
  `admin_notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `quotes`
--

INSERT INTO `quotes` (`id`, `type`, `first_name`, `last_name`, `email`, `phone`, `vehicle_id`, `brand`, `model`, `budget`, `financing`, `trade_in`, `trade_in_details`, `message`, `status`, `admin_notes`, `created_at`, `updated_at`) VALUES
(1, 'new', 'Veda', 'Ryan', 'hegibozip@mailinator.com', '+1 (139) 604-3759', NULL, 'Nostrud reprehenderi', '', NULL, 0, 0, NULL, 'Budget: Moins de 5 000 000 FCFA\nVille: Dignissimos molestia\nServices: Entretien et réparation, Service après-vente\n\nEos voluptas vero ve', 'pending', NULL, '2026-03-11 23:11:33', '2026-03-11 23:11:33');

-- --------------------------------------------------------

--
-- Structure de la table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `rating` int(11) NOT NULL CHECK (`rating` >= 1 and `rating` <= 5),
  `service_type` enum('vente','sav','general') NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `comment` text NOT NULL,
  `vehicle_id` int(11) DEFAULT NULL,
  `appointment_id` int(11) DEFAULT NULL,
  `status` enum('pending','approved','rejected') DEFAULT 'pending',
  `is_featured` tinyint(1) DEFAULT 0,
  `admin_notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reviews`
--

INSERT INTO `reviews` (`id`, `customer_name`, `email`, `rating`, `service_type`, `title`, `comment`, `vehicle_id`, `appointment_id`, `status`, `is_featured`, `admin_notes`, `created_at`, `updated_at`) VALUES
(1, 'Jean Dupont', 'jean.dupont@example.com', 5, 'vente', 'Excellent service', 'Très satisfait de mon achat. Équipe professionnelle et à l\'écoute. Je recommande vivement !', NULL, NULL, 'approved', 1, NULL, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(2, 'Marie Martin', 'marie.martin@example.com', 5, 'sav', 'SAV au top', 'Révision effectuée rapidement et proprement. Prix corrects. Je reviendrai.', NULL, NULL, 'approved', 1, NULL, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(3, 'Pierre Dubois', 'pierre.dubois@example.com', 4, 'vente', 'Bon rapport qualité/prix', 'Véhicule conforme à la description. Livraison rapide. Très content.', NULL, NULL, 'approved', 0, NULL, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(4, 'Jean Dupont', 'jean.dupont@example.com', 5, 'vente', 'Excellent service', 'Très satisfait de mon achat. Équipe professionnelle et à l\'écoute. Je recommande vivement !', NULL, NULL, 'approved', 1, NULL, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(5, 'Marie Martin', 'marie.martin@example.com', 5, 'sav', 'SAV au top', 'Révision effectuée rapidement et proprement. Prix corrects. Je reviendrai.', NULL, NULL, 'approved', 1, NULL, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(6, 'Pierre Dubois', 'pierre.dubois@example.com', 4, 'vente', 'Bon rapport qualité/prix', 'Véhicule conforme à la description. Livraison rapide. Très content.', NULL, NULL, 'approved', 0, NULL, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(7, 'Jean Dupont', 'jean.dupont@example.com', 5, 'vente', 'Excellent service', 'Très satisfait de mon achat. Équipe professionnelle et à l\'écoute. Je recommande vivement !', NULL, NULL, 'approved', 1, NULL, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(8, 'Marie Martin', 'marie.martin@example.com', 5, 'sav', 'SAV au top', 'Révision effectuée rapidement et proprement. Prix corrects. Je reviendrai.', NULL, NULL, 'approved', 1, NULL, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(9, 'Pierre Dubois', 'pierre.dubois@example.com', 4, 'vente', 'Bon rapport qualité/prix', 'Véhicule conforme à la description. Livraison rapide. Très content.', NULL, NULL, 'approved', 0, NULL, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(10, 'Jean Dupont', 'jean.dupont@example.com', 5, 'vente', 'Excellent service', 'Très satisfait de mon achat. Équipe professionnelle et à l\'écoute. Je recommande vivement !', NULL, NULL, 'approved', 1, NULL, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(11, 'Marie Martin', 'marie.martin@example.com', 5, 'sav', 'SAV au top', 'Révision effectuée rapidement et proprement. Prix corrects. Je reviendrai.', NULL, NULL, 'approved', 1, NULL, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(12, 'Pierre Dubois', 'pierre.dubois@example.com', 4, 'vente', 'Bon rapport qualité/prix', 'Véhicule conforme à la description. Livraison rapide. Très content.', NULL, NULL, 'approved', 0, NULL, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(13, 'Jean Dupont', 'jean.dupont@example.com', 5, 'vente', 'Excellent service', 'Très satisfait de mon achat. Équipe professionnelle et à l\'écoute. Je recommande vivement !', NULL, NULL, 'approved', 1, NULL, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(14, 'Marie Martin', 'marie.martin@example.com', 5, 'sav', 'SAV au top', 'Révision effectuée rapidement et proprement. Prix corrects. Je reviendrai.', NULL, NULL, 'approved', 1, NULL, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(15, 'Pierre Dubois', 'pierre.dubois@example.com', 4, 'vente', 'Bon rapport qualité/prix', 'Véhicule conforme à la description. Livraison rapide. Très content.', NULL, NULL, 'approved', 0, NULL, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(16, 'Jean Koffi', 'jean.koffi@example.com', 5, 'vente', 'Excellent service', 'Très satisfait de mon achat. Équipe professionnelle et à l\'écoute. Je recommande vivement !', NULL, NULL, 'approved', 1, NULL, '2026-03-11 19:07:27', '2026-03-11 19:07:27'),
(17, 'Marie Adjovi', 'marie.adjovi@example.com', 5, 'sav', 'SAV au top', 'Révision effectuée rapidement et proprement. Prix corrects. Je reviendrai.', NULL, NULL, 'approved', 1, NULL, '2026-03-11 19:07:27', '2026-03-11 19:07:27'),
(18, 'Pierre Dossou', 'pierre.dossou@example.com', 4, 'vente', 'Bon rapport qualité/prix', 'Véhicule conforme à la description. Livraison rapide. Très content.', NULL, NULL, 'approved', 0, NULL, '2026-03-11 19:07:27', '2026-03-11 19:07:27'),
(19, 'John Doe', 'client@example.com', 5, 'general', NULL, 'Je suis heureux de ce que jai recu', NULL, NULL, 'pending', 0, NULL, '2026-03-11 22:44:59', '2026-03-11 22:44:59'),
(20, 'Ut provident et adi', 'client@example.com', 4, 'general', NULL, 'Similique laboris coqwfqwfgqwfgqwgfgfgqgqgsg', NULL, NULL, 'pending', 0, NULL, '2026-03-11 23:05:30', '2026-03-11 23:05:30'),
(21, 'bxbsh', 'client@example.com', 5, 'general', NULL, 'dhshdhhhdhdhhdshdhdhdh', NULL, NULL, 'pending', 0, NULL, '2026-03-11 23:11:22', '2026-03-11 23:11:22');

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` enum('entretien','reparation','diagnostic','carrosserie','pneumatique','autre') NOT NULL,
  `description` text NOT NULL,
  `price_from` decimal(10,2) DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `icon` varchar(50) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `display_order` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`id`, `name`, `category`, `description`, `price_from`, `duration`, `icon`, `is_active`, `display_order`, `created_at`, `updated_at`) VALUES
(1, 'Révision complète', 'entretien', 'Révision complète selon préconisations constructeur : vidange, filtres, contrôle des niveaux et points de sécurité.', 150.00, '2h', 'WrenchScrewdriverIcon', 1, 1, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(2, 'Vidange', 'entretien', 'Vidange moteur avec huile de qualité et remplacement du filtre à huile.', 80.00, '30min', 'BeakerIcon', 1, 2, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(3, 'Diagnostic électronique', 'diagnostic', 'Diagnostic complet de votre véhicule avec valise multimarque.', 50.00, '1h', 'ComputerDesktopIcon', 1, 3, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(4, 'Freinage', 'reparation', 'Remplacement plaquettes et disques de frein, contrôle du circuit.', 200.00, '2h', 'ShieldCheckIcon', 1, 4, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(5, 'Climatisation', 'entretien', 'Recharge et désinfection du système de climatisation.', 90.00, '1h', 'CloudIcon', 1, 5, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(6, 'Pneumatiques', 'pneumatique', 'Montage, équilibrage et géométrie. Large choix de marques.', 60.00, '1h', 'CircleStackIcon', 1, 6, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(7, 'Révision complète', 'entretien', 'Révision complète selon préconisations constructeur : vidange, filtres, contrôle des niveaux et points de sécurité.', 150.00, '2h', 'WrenchScrewdriverIcon', 1, 1, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(8, 'Vidange', 'entretien', 'Vidange moteur avec huile de qualité et remplacement du filtre à huile.', 80.00, '30min', 'BeakerIcon', 1, 2, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(9, 'Diagnostic électronique', 'diagnostic', 'Diagnostic complet de votre véhicule avec valise multimarque.', 50.00, '1h', 'ComputerDesktopIcon', 1, 3, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(10, 'Freinage', 'reparation', 'Remplacement plaquettes et disques de frein, contrôle du circuit.', 200.00, '2h', 'ShieldCheckIcon', 1, 4, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(11, 'Climatisation', 'entretien', 'Recharge et désinfection du système de climatisation.', 90.00, '1h', 'CloudIcon', 1, 5, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(12, 'Pneumatiques', 'pneumatique', 'Montage, équilibrage et géométrie. Large choix de marques.', 60.00, '1h', 'CircleStackIcon', 1, 6, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(13, 'Révision complète', 'entretien', 'Révision complète selon préconisations constructeur : vidange, filtres, contrôle des niveaux et points de sécurité.', 150000.00, '2h', 'WrenchScrewdriverIcon', 1, 1, '2026-03-11 18:47:50', '2026-03-11 23:19:59'),
(14, 'Vidange', 'entretien', 'Vidange moteur avec huile de qualité et remplacement du filtre à huile.', 80.00, '30min', 'BeakerIcon', 1, 2, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(15, 'Diagnostic électronique', 'diagnostic', 'Diagnostic complet de votre véhicule avec valise multimarque.', 50.00, '1h', 'ComputerDesktopIcon', 1, 3, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(16, 'Freinage', 'reparation', 'Remplacement plaquettes et disques de frein, contrôle du circuit.', 200.00, '2h', 'ShieldCheckIcon', 1, 4, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(17, 'Climatisation', 'entretien', 'Recharge et désinfection du système de climatisation.', 90.00, '1h', 'CloudIcon', 1, 5, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(18, 'Pneumatiques', 'pneumatique', 'Montage, équilibrage et géométrie. Large choix de marques.', 60.00, '1h', 'CircleStackIcon', 1, 6, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(19, 'Révision complète', 'entretien', 'Révision complète selon préconisations constructeur : vidange, filtres, contrôle des niveaux et points de sécurité.', 150.00, '2h', 'WrenchScrewdriverIcon', 1, 1, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(20, 'Vidange', 'entretien', 'Vidange moteur avec huile de qualité et remplacement du filtre à huile.', 80.00, '30min', 'BeakerIcon', 1, 2, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(21, 'Diagnostic électronique', 'diagnostic', 'Diagnostic complet de votre véhicule avec valise multimarque.', 50.00, '1h', 'ComputerDesktopIcon', 1, 3, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(22, 'Freinage', 'reparation', 'Remplacement plaquettes et disques de frein, contrôle du circuit.', 200.00, '2h', 'ShieldCheckIcon', 1, 4, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(23, 'Climatisation', 'entretien', 'Recharge et désinfection du système de climatisation.', 90.00, '1h', 'CloudIcon', 1, 5, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(24, 'Pneumatiques', 'pneumatique', 'Montage, équilibrage et géométrie. Large choix de marques.', 60.00, '1h', 'CircleStackIcon', 1, 6, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(25, 'Révision complète', 'entretien', 'Révision complète selon préconisations constructeur : vidange, filtres, contrôle des niveaux et points de sécurité.', 1500000.00, '2h', 'WrenchScrewdriverIcon', 1, 1, '2026-03-11 18:57:13', '2026-03-11 23:20:15'),
(26, 'Vidange', 'entretien', 'Vidange moteur avec huile de qualité et remplacement du filtre à huile.', 80.00, '30min', 'BeakerIcon', 1, 2, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(27, 'Diagnostic électronique', 'diagnostic', 'Diagnostic complet de votre véhicule avec valise multimarque.', 50.00, '1h', 'ComputerDesktopIcon', 1, 3, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(28, 'Freinage', 'reparation', 'Remplacement plaquettes et disques de frein, contrôle du circuit.', 200.00, '2h', 'ShieldCheckIcon', 1, 4, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(29, 'Climatisation', 'entretien', 'Recharge et désinfection du système de climatisation.', 90.00, '1h', 'CloudIcon', 1, 5, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(30, 'Pneumatiques', 'pneumatique', 'Montage, équilibrage et géométrie. Large choix de marques.', 60.00, '1h', 'CircleStackIcon', 1, 6, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(31, 'Révision complète', 'entretien', 'Révision complète selon préconisations constructeur : vidange, filtres, contrôle des niveaux et points de sécurité.', 75000.00, '2h', 'WrenchScrewdriverIcon', 1, 1, '2026-03-11 19:07:27', '2026-03-11 19:07:27'),
(32, 'Vidange', 'entretien', 'Vidange moteur avec huile de qualité et remplacement du filtre à huile.', 40000.00, '30min', 'BeakerIcon', 1, 2, '2026-03-11 19:07:27', '2026-03-11 19:07:27'),
(33, 'Diagnostic électronique', 'diagnostic', 'Diagnostic complet de votre véhicule avec valise multimarque.', 25000.00, '1h', 'ComputerDesktopIcon', 1, 3, '2026-03-11 19:07:27', '2026-03-11 19:07:27'),
(34, 'Freinage', 'reparation', 'Remplacement plaquettes et disques de frein, contrôle du circuit.', 100000.00, '2h', 'ShieldCheckIcon', 1, 4, '2026-03-11 19:07:27', '2026-03-11 19:07:27'),
(35, 'Climatisation', 'entretien', 'Recharge et désinfection du système de climatisation.', 45000.00, '1h', 'CloudIcon', 1, 5, '2026-03-11 19:07:27', '2026-03-11 19:07:27'),
(36, 'Pneumatiques', 'pneumatique', 'Montage, équilibrage et géométrie. Large choix de marques.', 30000.00, '1h', 'CircleStackIcon', 1, 6, '2026-03-11 19:07:27', '2026-03-11 19:07:27');

-- --------------------------------------------------------

--
-- Structure de la table `site_config`
--

CREATE TABLE `site_config` (
  `id` int(11) NOT NULL DEFAULT 1,
  `site_logo` varchar(500) DEFAULT NULL,
  `currency_symbol` varchar(10) DEFAULT 'FCFA',
  `currency_name` varchar(50) DEFAULT 'Franc CFA',
  `currency_position` enum('before','after') DEFAULT 'after',
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `site_config`
--

INSERT INTO `site_config` (`id`, `site_logo`, `currency_symbol`, `currency_name`, `currency_position`, `updated_at`) VALUES
(1, 'logo-1773264213759-872735275.png', 'FCFA', 'Franc CFA', 'after', '2026-03-11 21:23:33');

-- --------------------------------------------------------

--
-- Structure de la table `stats`
--

CREATE TABLE `stats` (
  `id` int(11) NOT NULL,
  `total_vehicles` int(11) DEFAULT 0,
  `total_brands` int(11) DEFAULT 0,
  `satisfaction_rate` decimal(5,2) DEFAULT 98.00,
  `avg_delivery_days` int(11) DEFAULT 7,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `stats`
--

INSERT INTO `stats` (`id`, `total_vehicles`, `total_brands`, `satisfaction_rate`, `avg_delivery_days`, `updated_at`) VALUES
(1, 12000, 48, 98.00, 7, '2026-03-10 19:06:38'),
(2, 12000, 48, 98.00, 7, '2026-03-11 19:07:27');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` enum('lecteur','editeur','admin') DEFAULT 'lecteur',
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `role`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'admin@vehiclemarket.com', '$2a$10$yC3HYO4tv0bunBQlvGHRB.h9pO2awG3tUkV1R4YU.F4d0vbOXYbBy', 'Administrateur', 'admin', 1, '2026-03-10 19:06:56', '2026-03-11 23:29:24'),
(7, 'geoffroyotegbeye@gmail.com', '$2a$10$aBWl2Cl9dNGqEFdfMwqvOeSFfHJOJO5fXEUnM8IluIhXf8pJA60.K', 'Geoffroy', 'admin', 1, '2026-03-11 23:35:10', '2026-03-11 23:35:10');

-- --------------------------------------------------------

--
-- Structure de la table `vehicles`
--

CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `version` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `year` int(11) NOT NULL,
  `km` int(11) NOT NULL,
  `fuel` enum('Essence','Diesel','Hybride','Hybride rechargeable','Électrique','GPL') NOT NULL,
  `transmission` enum('Manuelle','Automatique','Semi-automatique','CVT','DSG','PDK') NOT NULL,
  `power` varchar(50) DEFAULT NULL,
  `body_style` enum('Berline','SUV','Break','Coupé','Cabriolet','Monospace','Citadine','Pick-up') DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `doors` int(11) DEFAULT NULL,
  `seats` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `features` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`features`)),
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `main_image` varchar(500) DEFAULT NULL,
  `is_new` tinyint(1) DEFAULT 0,
  `is_featured` tinyint(1) DEFAULT 0,
  `badge` varchar(50) DEFAULT NULL,
  `badge_type` enum('badge-new','badge-promo','badge-accent') DEFAULT NULL,
  `status` enum('available','reserved','sold') DEFAULT 'available',
  `views` int(11) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `vehicles`
--

INSERT INTO `vehicles` (`id`, `brand`, `model`, `version`, `price`, `year`, `km`, `fuel`, `transmission`, `power`, `body_style`, `color`, `doors`, `seats`, `location`, `description`, `features`, `images`, `main_image`, `is_new`, `is_featured`, `badge`, `badge_type`, `status`, `views`, `created_at`, `updated_at`) VALUES
(1, 'BMW', 'Série 3', '320d xDrive M Sport', 29900.00, 2023, 18500, 'Diesel', 'Automatique', '190 ch', 'Berline', 'Noir', 4, 5, 'Paris, 75', 'BMW Série 3 en excellent état, entretien complet, garantie constructeur.', '[\"GPS\",\"Caméra de recul\",\"Sièges chauffants\",\"Climatisation auto\"]', '[\"/uploads/vehicles/vehicle-1773173995645-155500737.avif\"]', '/uploads/vehicles/vehicle-1773173995645-155500737.avif', 0, 1, 'Coup de cœur', 'badge-accent', 'available', 0, '2026-03-10 19:06:56', '2026-03-10 20:19:55'),
(2, 'Mercedes', 'Classe A', '200 AMG Line 7G-DCT', 33500.00, 2024, 4200, 'Essence', 'Automatique', '163 ch', 'Berline', 'Gris', 5, 5, 'Lyon, 69', 'Mercedes Classe A presque neuve, pack AMG, toutes options.', '[\"MBUX\",\"Pack AMG\",\"LED\",\"Jantes 18\\\"\"]', '[\"/uploads/vehicles/vehicle-1773174176359-503219875.jpg\"]', '/uploads/vehicles/vehicle-1773174176359-503219875.jpg', 1, 1, 'Presque neuf', 'badge-new', 'available', 0, '2026-03-10 19:06:56', '2026-03-10 20:22:56'),
(3, 'Audi', 'A3', 'Sportback 40 TFSI e S line', 27800.00, 2022, 31000, 'Hybride rechargeable', 'Automatique', '204 ch', 'Berline', 'Bleu', 5, 5, 'Bordeaux, 33', 'Audi A3 hybride rechargeable, économique et performante.', '[\"Virtual Cockpit\",\"MMI\",\"Aide au stationnement\"]', '[\"/uploads/vehicles/audi-a3.jpg\"]', '/uploads/vehicles/audi-a3.jpg', 0, 1, NULL, NULL, 'available', 0, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(4, 'Tesla', 'Model 3', 'Long Range AWD', 47500.00, 2024, 2000, 'Électrique', 'Automatique', '358 ch', 'Berline', 'Blanc', 4, 5, 'Nice, 06', 'Tesla Model 3 Long Range, autonomie 600km, autopilot.', '[\"Autopilot\",\"Supercharger\",\"Écran 15\\\"\",\"Premium Audio\"]', '[\"/uploads/vehicles/tesla-model3.jpg\"]', '/uploads/vehicles/tesla-model3.jpg', 1, 1, 'Nouveau', 'badge-new', 'available', 0, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(5, 'Peugeot', '508', 'SW Hybrid 225 EAT8', 38900.00, 2023, 14000, 'Hybride rechargeable', 'Automatique', '225 ch', 'Break', 'Gris', 5, 5, 'Nantes, 44', 'Peugeot 508 SW hybride, spacieuse et élégante.', '[\"i-Cockpit\",\"Massage\",\"Hayon électrique\",\"Vision 360\"]', '[\"/uploads/vehicles/peugeot-508.jpg\"]', '/uploads/vehicles/peugeot-508.jpg', 0, 0, NULL, NULL, 'available', 0, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(6, 'Volkswagen', 'Golf', 'GTI 2.0 TSI DSG', 34500.00, 2023, 12000, 'Essence', 'Automatique', '245 ch', 'Berline', 'Rouge', 5, 5, 'Strasbourg, 67', 'Golf GTI, sportive et pratique au quotidien.', '[\"DCC\",\"Freins Brembo\",\"Échappement sport\",\"Jantes 19\\\"\"]', '[\"/uploads/vehicles/vw-golf-gti.jpg\"]', '/uploads/vehicles/vw-golf-gti.jpg', 0, 0, NULL, NULL, 'available', 0, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(7, 'Toyota', 'RAV4', 'Hybride Dynamic AWD', 42900.00, 2024, 5500, 'Hybride', 'CVT', '222 ch', 'SUV', 'Blanc', 5, 5, 'Toulouse, 31', 'Toyota RAV4 hybride, fiabilité et économie garanties.', '[\"Toyota Safety Sense\",\"AWD\",\"Toit panoramique\",\"JBL\"]', '[\"/uploads/vehicles/toyota-rav4.jpg\"]', '/uploads/vehicles/toyota-rav4.jpg', 1, 0, NULL, NULL, 'available', 0, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(8, 'Renault', 'Mégane', 'E-Tech 100% électrique 220 ch', 31800.00, 2023, 18000, 'Électrique', 'Automatique', '220 ch', 'Berline', 'Gris', 5, 5, 'Marseille, 13', 'Renault Mégane E-Tech, 100% électrique, design moderne.', '[\"OpenR Link\",\"Charge rapide\",\"Autonomie 450km\"]', '[\"/uploads/vehicles/renault-megane.jpg\"]', '/uploads/vehicles/renault-megane.jpg', 0, 0, NULL, NULL, 'available', 0, '2026-03-10 19:06:56', '2026-03-10 19:06:56'),
(9, 'Nisi sint sit esse ', 'Iure ipsam voluptate', 'Ab enim magnam in in', 86.00, 86, 88, 'Hybride', 'Manuelle', NULL, NULL, 'Deleniti nostrum rem', 4, 5, NULL, 'Molestias iusto arch', NULL, '[\"/uploads/vehicles/vehicle-1773173202865-565640428.avif\",\"/uploads/vehicles/vehicle-1773173202866-182504245.webp\",\"/uploads/vehicles/vehicle-1773173202866-100949008.jpg\"]', '/uploads/vehicles/vehicle-1773173202865-565640428.avif', 0, 0, NULL, NULL, 'reserved', 0, '2026-03-10 20:06:42', '2026-03-10 20:06:42'),
(10, 'Sit non minus nostr', 'Eiusmod reiciendis v', 'Rerum qui laborum co', 70.00, 77, 81, 'Électrique', 'Manuelle', NULL, NULL, 'Ut vel sunt fuga Mo', 4, 5, NULL, 'Sed placeat reicien', NULL, '[\"/uploads/vehicles/vehicle-1773173277793-698298636.avif\",\"/uploads/vehicles/vehicle-1773173277795-163564385.webp\"]', '/uploads/vehicles/vehicle-1773173277793-698298636.avif', 0, 0, NULL, NULL, 'reserved', 0, '2026-03-10 20:07:57', '2026-03-10 20:07:57'),
(11, 'Eligendi accusamus q', 'Nemo amet enim aliq', 'Minim elit aute ill', 42.00, 47, 4, 'Électrique', 'Manuelle', NULL, NULL, 'Quam amet sit est', 4, 5, NULL, 'Quia qui non et pari', NULL, '[\"/uploads/vehicles/vehicle-1773174213489-410203791.webp\"]', '/uploads/vehicles/vehicle-1773174213489-410203791.webp', 0, 0, NULL, NULL, 'sold', 0, '2026-03-10 20:23:33', '2026-03-10 20:23:33'),
(12, 'BMW', 'Série 3', '320d xDrive M Sport', 29900.00, 2023, 18500, 'Diesel', 'Automatique', '190 ch', 'Berline', 'Noir', 4, 5, 'Paris, 75', 'BMW Série 3 en excellent état, entretien complet, garantie constructeur.', '[\"GPS\",\"Caméra de recul\",\"Sièges chauffants\",\"Climatisation auto\"]', '[]', NULL, 0, 1, 'Coup de cœur', 'badge-accent', 'available', 0, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(13, 'Mercedes', 'Classe A', '200 AMG Line 7G-DCT', 33500.00, 2024, 4200, 'Essence', 'Automatique', '163 ch', 'Berline', 'Gris', 5, 5, 'Lyon, 69', 'Mercedes Classe A presque neuve, pack AMG, toutes options.', '[\"MBUX\",\"Pack AMG\",\"LED\",\"Jantes 18\\\"\"]', '[]', NULL, 1, 1, 'Presque neuf', 'badge-new', 'available', 0, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(14, 'Audi', 'A3', 'Sportback 40 TFSI e S line', 27800.00, 2022, 31000, 'Hybride rechargeable', 'Automatique', '204 ch', 'Berline', 'Bleu', 5, 5, 'Bordeaux, 33', 'Audi A3 hybride rechargeable, économique et performante.', '[\"Virtual Cockpit\",\"MMI\",\"Aide au stationnement\"]', '[]', NULL, 0, 1, NULL, NULL, 'available', 0, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(15, 'Tesla', 'Model 3', 'Long Range AWD', 47500.00, 2024, 2000, 'Électrique', 'Automatique', '358 ch', 'Berline', 'Blanc', 4, 5, 'Nice, 06', 'Tesla Model 3 Long Range, autonomie 600km, autopilot.', '[\"Autopilot\",\"Supercharger\",\"Écran 15\\\"\",\"Premium Audio\"]', '[]', NULL, 1, 1, 'Nouveau', 'badge-new', 'available', 0, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(16, 'Peugeot', '508', 'SW Hybrid 225 EAT8', 38900.00, 2023, 14000, 'Hybride rechargeable', 'Automatique', '225 ch', 'Break', 'Gris', 5, 5, 'Nantes, 44', 'Peugeot 508 SW hybride, spacieuse et élégante.', '[\"i-Cockpit\",\"Massage\",\"Hayon électrique\",\"Vision 360\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(17, 'Volkswagen', 'Golf', 'GTI 2.0 TSI DSG', 34500.00, 2023, 12000, 'Essence', 'Automatique', '245 ch', 'Berline', 'Rouge', 5, 5, 'Strasbourg, 67', 'Golf GTI, sportive et pratique au quotidien.', '[\"DCC\",\"Freins Brembo\",\"Échappement sport\",\"Jantes 19\\\"\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(18, 'Toyota', 'RAV4', 'Hybride Dynamic AWD', 42900.00, 2024, 5500, 'Hybride', 'CVT', '222 ch', 'SUV', 'Blanc', 5, 5, 'Toulouse, 31', 'Toyota RAV4 hybride, fiabilité et économie garanties.', '[\"Toyota Safety Sense\",\"AWD\",\"Toit panoramique\",\"JBL\"]', '[]', NULL, 1, 0, NULL, NULL, 'available', 0, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(19, 'Renault', 'Mégane', 'E-Tech 100% électrique 220 ch', 31800.00, 2023, 18000, 'Électrique', 'Automatique', '220 ch', 'Berline', 'Gris', 5, 5, 'Marseille, 13', 'Renault Mégane E-Tech, 100% électrique, design moderne.', '[\"OpenR Link\",\"Charge rapide\",\"Autonomie 450km\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-10 20:32:28', '2026-03-10 20:32:28'),
(20, 'BMW', 'Série 3', '320d xDrive M Sport', 29900.00, 2023, 18500, 'Diesel', 'Automatique', '190 ch', 'Berline', 'Noir', 4, 5, 'Paris, 75', 'BMW Série 3 en excellent état, entretien complet, garantie constructeur.', '[\"GPS\",\"Caméra de recul\",\"Sièges chauffants\",\"Climatisation auto\"]', '[]', NULL, 0, 1, 'Coup de cœur', 'badge-accent', 'available', 0, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(21, 'Mercedes', 'Classe A', '200 AMG Line 7G-DCT', 33500.00, 2024, 4200, 'Essence', 'Automatique', '163 ch', 'Berline', 'Gris', 5, 5, 'Lyon, 69', 'Mercedes Classe A presque neuve, pack AMG, toutes options.', '[\"MBUX\",\"Pack AMG\",\"LED\",\"Jantes 18\\\"\"]', '[]', NULL, 1, 1, 'Presque neuf', 'badge-new', 'available', 0, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(22, 'Audi', 'A3', 'Sportback 40 TFSI e S line', 27800.00, 2022, 31000, 'Hybride rechargeable', 'Automatique', '204 ch', 'Berline', 'Bleu', 5, 5, 'Bordeaux, 33', 'Audi A3 hybride rechargeable, économique et performante.', '[\"Virtual Cockpit\",\"MMI\",\"Aide au stationnement\"]', '[]', NULL, 0, 1, NULL, NULL, 'available', 0, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(23, 'Tesla', 'Model 3', 'Long Range AWD', 47500.00, 2024, 2000, 'Électrique', 'Automatique', '358 ch', 'Berline', 'Blanc', 4, 5, 'Nice, 06', 'Tesla Model 3 Long Range, autonomie 600km, autopilot.', '[\"Autopilot\",\"Supercharger\",\"Écran 15\\\"\",\"Premium Audio\"]', '[]', NULL, 1, 1, 'Nouveau', 'badge-new', 'available', 0, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(24, 'Peugeot', '508', 'SW Hybrid 225 EAT8', 38900.00, 2023, 14000, 'Hybride rechargeable', 'Automatique', '225 ch', 'Break', 'Gris', 5, 5, 'Nantes, 44', 'Peugeot 508 SW hybride, spacieuse et élégante.', '[\"i-Cockpit\",\"Massage\",\"Hayon électrique\",\"Vision 360\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(25, 'Volkswagen', 'Golf', 'GTI 2.0 TSI DSG', 34500.00, 2023, 12000, 'Essence', 'Automatique', '190 ch', 'Berline', 'Argent', 5, 5, 'Strasbourg, 67', 'Golf GTI, sportive et pratique au quotidien.', '[\"DCC\",\"Freins Brembo\",\"Échappement sport\",\"Jantes 19\\\"\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(26, 'Toyota', 'RAV4', 'Hybride Dynamic AWD', 42900.00, 2024, 5500, 'Hybride', 'CVT', '222 ch', 'SUV', 'Blanc', 5, 5, 'Toulouse, 31', 'Toyota RAV4 hybride, fiabilité et économie garanties.', '[\"Toyota Safety Sense\",\"AWD\",\"Toit panoramique\",\"JBL\"]', '[]', NULL, 1, 0, NULL, NULL, 'available', 0, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(27, 'Renault', 'Mégane', 'E-Tech 100% électrique 220 ch', 31800.00, 2023, 18000, 'Électrique', 'Automatique', '220 ch', 'Berline', 'Gris', 5, 5, 'Marseille, 13', 'Renault Mégane E-Tech, 100% électrique, design moderne.', '[\"OpenR Link\",\"Charge rapide\",\"Autonomie 450km\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-11 18:47:50', '2026-03-11 18:47:50'),
(28, 'BMW', 'Série 3', '320d xDrive M Sport', 29900.00, 2023, 18500, 'Diesel', 'Automatique', '190 ch', 'Berline', 'Noir', 4, 5, 'Paris, 75', 'BMW Série 3 en excellent état, entretien complet, garantie constructeur.', '[\"GPS\",\"Caméra de recul\",\"Sièges chauffants\",\"Climatisation auto\"]', '[]', NULL, 0, 1, 'Coup de cœur', 'badge-accent', 'available', 0, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(29, 'Mercedes', 'Classe A', '200 AMG Line 7G-DCT', 33500.00, 2024, 4200, 'Essence', 'Automatique', '163 ch', 'Berline', 'Gris', 5, 5, 'Lyon, 69', 'Mercedes Classe A presque neuve, pack AMG, toutes options.', '[\"MBUX\",\"Pack AMG\",\"LED\",\"Jantes 18\\\"\"]', '[]', NULL, 1, 1, 'Presque neuf', 'badge-new', 'available', 0, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(30, 'Audi', 'A3', 'Sportback 40 TFSI e S line', 27800.00, 2022, 31000, 'Hybride rechargeable', 'Automatique', '204 ch', 'Berline', 'Bleu', 5, 5, 'Bordeaux, 33', 'Audi A3 hybride rechargeable, économique et performante.', '[\"Virtual Cockpit\",\"MMI\",\"Aide au stationnement\"]', '[]', NULL, 0, 1, NULL, NULL, 'available', 0, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(31, 'Tesla', 'Model 3', 'Long Range AWD', 47500.00, 2024, 2000, 'Électrique', 'Automatique', '358 ch', 'Berline', 'Blanc', 4, 5, 'Nice, 06', 'Tesla Model 3 Long Range, autonomie 600km, autopilot.', '[\"Autopilot\",\"Supercharger\",\"Écran 15\\\"\",\"Premium Audio\"]', '[]', NULL, 1, 1, 'Nouveau', 'badge-new', 'available', 0, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(32, 'Peugeot', '508', 'SW Hybrid 225 EAT8', 38900.00, 2023, 14000, 'Hybride rechargeable', 'Automatique', '225 ch', 'Break', 'Gris', 5, 5, 'Nantes, 44', 'Peugeot 508 SW hybride, spacieuse et élégante.', '[\"i-Cockpit\",\"Massage\",\"Hayon électrique\",\"Vision 360\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(33, 'Volkswagen', 'Golf', 'GTI 2.0 TSI DSG', 34500.00, 2023, 12000, 'Essence', 'Automatique', '190 ch', 'Berline', 'Argent', 5, 5, 'Strasbourg, 67', 'Golf GTI, sportive et pratique au quotidien.', '[\"DCC\",\"Freins Brembo\",\"Échappement sport\",\"Jantes 19\\\"\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(34, 'Toyota', 'RAV4', 'Hybride Dynamic AWD', 42900.00, 2024, 5500, 'Hybride', 'CVT', '222 ch', 'SUV', 'Blanc', 5, 5, 'Toulouse, 31', 'Toyota RAV4 hybride, fiabilité et économie garanties.', '[\"Toyota Safety Sense\",\"AWD\",\"Toit panoramique\",\"JBL\"]', '[]', NULL, 1, 0, NULL, NULL, 'available', 0, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(35, 'Renault', 'Mégane', 'E-Tech 100% électrique 220 ch', 31800.00, 2023, 18000, 'Électrique', 'Automatique', '220 ch', 'Berline', 'Gris', 5, 5, 'Marseille, 13', 'Renault Mégane E-Tech, 100% électrique, design moderne.', '[\"OpenR Link\",\"Charge rapide\",\"Autonomie 450km\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-11 18:55:57', '2026-03-11 18:55:57'),
(36, 'Piaggio', 'Série 3', '320d xDrive M Sport', 29900.00, 2023, 18500, 'Diesel', 'Automatique', '190 ch', 'Berline', 'Noir', 4, 5, 'Paris, 75', 'BMW Série 3 en excellent état, entretien complet, garantie constructeur.', '[\"GPS\",\"Caméra de recul\",\"Sièges chauffants\",\"Climatisation auto\"]', '[\"/uploads/vehicles/vehicle-1773256843312-473823376.webp\"]', '/uploads/vehicles/vehicle-1773256843312-473823376.webp', 0, 1, 'Coup de cœur', 'badge-accent', 'available', 0, '2026-03-11 18:57:13', '2026-03-11 21:00:13'),
(37, 'Mercedes-Benz', 'Classe A', '200 AMG Line 7G-DCT', 33500.00, 2024, 4200, 'Essence', 'Automatique', '163 ch', 'Berline', 'Gris', 5, 5, 'Lyon, 69', 'Mercedes Classe A presque neuve, pack AMG, toutes options.', '[\"MBUX\",\"Pack AMG\",\"LED\",\"Jantes 18\\\"\"]', '[\"/uploads/vehicles/vehicle-1773256852131-117799856.webp\"]', '/uploads/vehicles/vehicle-1773256852131-117799856.webp', 1, 1, 'Presque neuf', 'badge-new', 'available', 0, '2026-03-11 18:57:13', '2026-03-11 21:00:21'),
(38, 'FUSO', 'A3', 'Sportback 40 TFSI e S line', 27800.00, 2022, 31000, 'Hybride rechargeable', 'Automatique', '204 ch', 'Berline', 'Bleu', 5, 5, 'Bordeaux, 33', 'Audi A3 hybride rechargeable, économique et performante.', '[\"Virtual Cockpit\",\"MMI\",\"Aide au stationnement\"]', '[\"/uploads/vehicles/vehicle-1773256861753-496547114.jpg\"]', '/uploads/vehicles/vehicle-1773256861753-496547114.jpg', 0, 1, NULL, NULL, 'available', 0, '2026-03-11 18:57:13', '2026-03-11 21:00:31'),
(39, 'Tesla', 'Model 3', 'Long Range AWD', 470500.00, 2024, 2000, 'Électrique', 'Automatique', '358 ch', 'Berline', 'Blanc', 4, 5, 'Nice, 06', 'Tesla Model 3 Long Range, autonomie 600km, autopilot.', '[\"Autopilot\",\"Supercharger\",\"Écran 15\\\"\",\"Premium Audio\"]', '[\"/uploads/vehicles/vehicle-1773256869582-374666362.webp\"]', '/uploads/vehicles/vehicle-1773256869582-374666362.webp', 1, 1, 'Nouveau', 'badge-new', 'available', 0, '2026-03-11 18:57:13', '2026-03-11 21:00:49'),
(40, 'Peugeot', '508', 'SW Hybrid 225 EAT8', 38900.00, 2023, 14000, 'Hybride rechargeable', 'Automatique', '225 ch', 'Break', 'Gris', 5, 5, 'Nantes, 44', 'Peugeot 508 SW hybride, spacieuse et élégante.', '[\"i-Cockpit\",\"Massage\",\"Hayon électrique\",\"Vision 360\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(41, 'Volkswagen', 'Golf', 'GTI 2.0 TSI DSG', 34500.00, 2023, 12000, 'Essence', 'Automatique', '190 ch', 'Berline', 'Argent', 5, 5, 'Strasbourg, 67', 'Golf GTI, sportive et pratique au quotidien.', '[\"DCC\",\"Freins Brembo\",\"Échappement sport\",\"Jantes 19\\\"\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(42, 'Toyota', 'RAV4', 'Hybride Dynamic AWD', 42900.00, 2024, 5500, 'Hybride', 'CVT', '222 ch', 'SUV', 'Blanc', 5, 5, 'Toulouse, 31', 'Toyota RAV4 hybride, fiabilité et économie garanties.', '[\"Toyota Safety Sense\",\"AWD\",\"Toit panoramique\",\"JBL\"]', '[]', NULL, 1, 0, NULL, NULL, 'available', 0, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(43, 'Renault', 'Mégane', 'E-Tech 100% électrique 220 ch', 31800.00, 2023, 18000, 'Électrique', 'Automatique', '220 ch', 'Berline', 'Gris', 5, 5, 'Marseille, 13', 'Renault Mégane E-Tech, 100% électrique, design moderne.', '[\"OpenR Link\",\"Charge rapide\",\"Autonomie 450km\"]', '[]', NULL, 0, 0, NULL, NULL, 'available', 0, '2026-03-11 18:57:13', '2026-03-11 18:57:13'),
(44, 'Jeep', 'Série 3', '320d xDrive M Sport', 29900000.00, 2023, 18500, 'Diesel', 'Automatique', '190 ch', 'Berline', 'Noir', 4, 5, 'Cotonou, Bénin', 'BMW Série 3 en excellent état, entretien complet, garantie constructeur.', '[\"GPS\",\"Caméra de recul\",\"Sièges chauffants\",\"Climatisation auto\"]', '[\"/uploads/vehicles/vehicle-1773256803919-643493048.jpg\"]', '/uploads/vehicles/vehicle-1773256803919-643493048.jpg', 0, 1, 'Coup de cœur', 'badge-accent', 'available', 0, '2026-03-11 19:07:27', '2026-03-11 20:58:37'),
(45, 'Mercedes-Benz', 'Classe A', '200 AMG Line 7G-DCT', 33500000.00, 2024, 4200, 'Essence', 'Automatique', '163 ch', 'Berline', 'Gris', 5, 5, 'Porto-Novo, Bénin', 'Mercedes Classe A presque neuve, pack AMG, toutes options.', '[\"MBUX\",\"Pack AMG\",\"LED\",\"Jantes 18\\\"\"]', '[\"/uploads/vehicles/vehicle-1773256471213-102947488.avif\"]', '/uploads/vehicles/vehicle-1773256471213-102947488.avif', 1, 1, 'Presque neuf', 'badge-new', 'available', 2, '2026-03-11 19:07:27', '2026-03-11 22:49:18'),
(46, 'KIA', 'A3', 'Sportback 40 TFSI e S line', 27800000.00, 2022, 31000, 'Hybride rechargeable', 'Automatique', '204 ch', 'Berline', 'Bleu', 5, 5, 'Parakou, Bénin', 'Audi A3 hybride rechargeable, économique et performante.', '[\"Virtual Cockpit\",\"MMI\",\"Aide au stationnement\"]', '[\"/uploads/vehicles/vehicle-1773256782930-986231660.avif\"]', '/uploads/vehicles/vehicle-1773256782930-986231660.avif', 0, 1, NULL, NULL, 'available', 0, '2026-03-11 19:07:27', '2026-03-11 20:59:18'),
(47, 'Tesla', 'Model 3', 'Long Range AWD', 47500000.00, 2024, 2000, 'Électrique', 'Automatique', '358 ch', 'Berline', 'Blanc', 4, 5, 'Cotonou, Bénin', 'Tesla Model 3 Long Range, autonomie 600km, autopilot.', '[\"Autopilot\",\"Supercharger\",\"Écran 15\\\"\",\"Premium Audio\"]', '[\"/uploads/vehicles/vehicle-1773256534228-254864266.avif\"]', '/uploads/vehicles/vehicle-1773256534228-254864266.avif', 1, 1, 'Nouveau', 'badge-new', 'available', 0, '2026-03-11 19:07:27', '2026-03-11 19:15:34'),
(48, 'Volkswagen', '508', 'SW Hybrid 225 EAT8', 38900000.00, 2023, 14000, 'Hybride rechargeable', 'Automatique', '225 ch', 'Break', 'Gris', 5, 5, 'Abomey-Calavi, Bénin', 'Peugeot 508 SW hybride, spacieuse et élégante.', '[\"i-Cockpit\",\"Massage\",\"Hayon électrique\",\"Vision 360\"]', '[\"/uploads/vehicles/vehicle-1773256793016-717787219.webp\"]', '/uploads/vehicles/vehicle-1773256793016-717787219.webp', 0, 0, NULL, NULL, 'available', 0, '2026-03-11 19:07:27', '2026-03-11 20:59:36'),
(49, 'Volkswagen', 'Golf', 'GTI 2.0 TSI DSG', 34500000.00, 2023, 12000, 'Essence', 'Automatique', '190 ch', 'Berline', 'Argent', 5, 5, 'Cotonou, Bénin', 'Golf GTI, sportive et pratique au quotidien.', '[\"DCC\",\"Freins Brembo\",\"Échappement sport\",\"Jantes 19\\\"\"]', '[\"/uploads/vehicles/vehicle-1773256815929-772196274.avif\"]', '/uploads/vehicles/vehicle-1773256815929-772196274.avif', 0, 0, NULL, NULL, 'available', 0, '2026-03-11 19:07:27', '2026-03-11 19:20:15'),
(50, 'Tesla', 'RAV4', 'Hybride Dynamic AWD', 42900000.00, 2024, 5500, 'Hybride', 'CVT', '222 ch', 'SUV', 'Blanc', 5, 5, 'Cotonou, Bénin', 'Toyota RAV4 hybride, fiabilité et économie garanties.', '[\"Toyota Safety Sense\",\"AWD\",\"Toit panoramique\",\"JBL\"]', '[\"/uploads/vehicles/vehicle-1773256826775-369226604.webp\"]', '/uploads/vehicles/vehicle-1773256826775-369226604.webp', 1, 0, NULL, NULL, 'available', 0, '2026-03-11 19:07:27', '2026-03-11 20:59:53'),
(51, 'FUSO', 'Mégane', 'E-Tech 100% électrique 220 ch', 31800000.00, 2023, 18000, 'Électrique', 'Automatique', '220 ch', 'Berline', 'Gris', 5, 5, 'Porto-Novo, Bénin', 'Renault Mégane E-Tech, 100% électrique, design moderne.', '[\"OpenR Link\",\"Charge rapide\",\"Autonomie 450km\"]', '[\"/uploads/vehicles/vehicle-1773256835096-717255852.avif\"]', '/uploads/vehicles/vehicle-1773256835096-717255852.avif', 0, 0, NULL, NULL, 'available', 0, '2026-03-11 19:07:27', '2026-03-11 21:00:00');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicle_id` (`vehicle_id`),
  ADD KEY `idx_date` (`preferred_date`),
  ADD KEY `idx_status` (`status`);

--
-- Index pour la table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `idx_active` (`is_active`),
  ADD KEY `idx_order` (`display_order`);

--
-- Index pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_status` (`status`);

--
-- Index pour la table `hero_settings`
--
ALTER TABLE `hero_settings`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `quotes`
--
ALTER TABLE `quotes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicle_id` (`vehicle_id`),
  ADD KEY `idx_status` (`status`);

--
-- Index pour la table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicle_id` (`vehicle_id`),
  ADD KEY `appointment_id` (`appointment_id`),
  ADD KEY `idx_rating` (`rating`),
  ADD KEY `idx_status` (`status`);

--
-- Index pour la table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_category` (`category`),
  ADD KEY `idx_active` (`is_active`);

--
-- Index pour la table `site_config`
--
ALTER TABLE `site_config`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_brand` (`brand`),
  ADD KEY `idx_price` (`price`),
  ADD KEY `idx_fuel` (`fuel`),
  ADD KEY `idx_status` (`status`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `hero_settings`
--
ALTER TABLE `hero_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `quotes`
--
ALTER TABLE `quotes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT pour la table `stats`
--
ALTER TABLE `stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE SET NULL;

--
-- Contraintes pour la table `quotes`
--
ALTER TABLE `quotes`
  ADD CONSTRAINT `quotes_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE SET NULL;

--
-- Contraintes pour la table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`appointment_id`) REFERENCES `appointments` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
