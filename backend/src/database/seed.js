import bcrypt from 'bcryptjs';
import pool from '../config/database.js';

async function seed() {
  try {
    console.log('🌱 Démarrage du seed...');

    // 1. Créer un utilisateur admin
    const hashedPassword = await bcrypt.hash('Admin123!', 10);
    await pool.query(
      'INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE id=id',
      ['admin@vehiclemarket.com', hashedPassword, 'Administrateur', 'super_admin']
    );
    console.log('✅ Admin créé : admin@vehiclemarket.com / Admin123!');

    // 2. Insérer des véhicules
    const vehicles = [
      {
        brand: 'BMW',
        model: 'Série 3',
        version: '320d xDrive M Sport',
        price: 29900,
        year: 2023,
        km: 18500,
        fuel: 'Diesel',
        transmission: 'Automatique',
        power: '190 ch',
        body_style: 'Berline',
        color: 'Noir',
        doors: 4,
        seats: 5,
        location: 'Paris, 75',
        description: 'BMW Série 3 en excellent état, entretien complet, garantie constructeur.',
        features: JSON.stringify(['GPS', 'Caméra de recul', 'Sièges chauffants', 'Climatisation auto']),
        images: JSON.stringify([]),
        main_image: null,
        is_new: false,
        is_featured: true,
        badge: 'Coup de cœur',
        badge_type: 'badge-accent',
        status: 'available'
      },
      {
        brand: 'Mercedes',
        model: 'Classe A',
        version: '200 AMG Line 7G-DCT',
        price: 33500,
        year: 2024,
        km: 4200,
        fuel: 'Essence',
        transmission: 'Automatique',
        power: '163 ch',
        body_style: 'Berline',
        color: 'Gris',
        doors: 5,
        seats: 5,
        location: 'Lyon, 69',
        description: 'Mercedes Classe A presque neuve, pack AMG, toutes options.',
        features: JSON.stringify(['MBUX', 'Pack AMG', 'LED', 'Jantes 18"']),
        images: JSON.stringify([]),
        main_image: null,
        is_new: true,
        is_featured: true,
        badge: 'Presque neuf',
        badge_type: 'badge-new',
        status: 'available'
      },
      {
        brand: 'Audi',
        model: 'A3',
        version: 'Sportback 40 TFSI e S line',
        price: 27800,
        year: 2022,
        km: 31000,
        fuel: 'Hybride rechargeable',
        transmission: 'Automatique',
        power: '204 ch',
        body_style: 'Berline',
        color: 'Bleu',
        doors: 5,
        seats: 5,
        location: 'Bordeaux, 33',
        description: 'Audi A3 hybride rechargeable, économique et performante.',
        features: JSON.stringify(['Virtual Cockpit', 'MMI', 'Aide au stationnement']),
        images: JSON.stringify([]),
        main_image: null,
        is_new: false,
        is_featured: true,
        status: 'available'
      },
      {
        brand: 'Tesla',
        model: 'Model 3',
        version: 'Long Range AWD',
        price: 47500,
        year: 2024,
        km: 2000,
        fuel: 'Électrique',
        transmission: 'Automatique',
        power: '358 ch',
        body_style: 'Berline',
        color: 'Blanc',
        doors: 4,
        seats: 5,
        location: 'Nice, 06',
        description: 'Tesla Model 3 Long Range, autonomie 600km, autopilot.',
        features: JSON.stringify(['Autopilot', 'Supercharger', 'Écran 15"', 'Premium Audio']),
        images: JSON.stringify([]),
        main_image: null,
        is_new: true,
        is_featured: true,
        badge: 'Nouveau',
        badge_type: 'badge-new',
        status: 'available'
      },
      {
        brand: 'Peugeot',
        model: '508',
        version: 'SW Hybrid 225 EAT8',
        price: 38900,
        year: 2023,
        km: 14000,
        fuel: 'Hybride rechargeable',
        transmission: 'Automatique',
        power: '225 ch',
        body_style: 'Break',
        color: 'Gris',
        doors: 5,
        seats: 5,
        location: 'Nantes, 44',
        description: 'Peugeot 508 SW hybride, spacieuse et élégante.',
        features: JSON.stringify(['i-Cockpit', 'Massage', 'Hayon électrique', 'Vision 360']),
        images: JSON.stringify([]),
        main_image: null,
        is_new: false,
        is_featured: false,
        status: 'available'
      },
      {
        brand: 'Volkswagen',
        model: 'Golf',
        version: 'GTI 2.0 TSI DSG',
        price: 34500,
        year: 2023,
        km: 12000,
        fuel: 'Essence',
        transmission: 'Automatique',
        power: '245 ch',
        body_style: 'Berline',
        color: 'Rouge',
        doors: 5,
        seats: 5,
        location: 'Strasbourg, 67',
        description: 'Golf GTI, sportive et pratique au quotidien.',
        features: JSON.stringify(['DCC', 'Freins Brembo', 'Échappement sport', 'Jantes 19"']),
        images: JSON.stringify([]),
        main_image: null,
        is_new: false,
        is_featured: false,
        status: 'available'
      },
      {
        brand: 'Toyota',
        model: 'RAV4',
        version: 'Hybride Dynamic AWD',
        price: 42900,
        year: 2024,
        km: 5500,
        fuel: 'Hybride',
        transmission: 'CVT',
        power: '222 ch',
        body_style: 'SUV',
        color: 'Blanc',
        doors: 5,
        seats: 5,
        location: 'Toulouse, 31',
        description: 'Toyota RAV4 hybride, fiabilité et économie garanties.',
        features: JSON.stringify(['Toyota Safety Sense', 'AWD', 'Toit panoramique', 'JBL']),
        images: JSON.stringify([]),
        main_image: null,
        is_new: true,
        is_featured: false,
        status: 'available'
      },
      {
        brand: 'Renault',
        model: 'Mégane',
        version: 'E-Tech 100% électrique 220 ch',
        price: 31800,
        year: 2023,
        km: 18000,
        fuel: 'Électrique',
        transmission: 'Automatique',
        power: '220 ch',
        body_style: 'Berline',
        color: 'Gris',
        doors: 5,
        seats: 5,
        location: 'Marseille, 13',
        description: 'Renault Mégane E-Tech, 100% électrique, design moderne.',
        features: JSON.stringify(['OpenR Link', 'Charge rapide', 'Autonomie 450km']),
        images: JSON.stringify([]),
        main_image: null,
        is_new: false,
        is_featured: false,
        status: 'available'
      }
    ];

    for (const vehicle of vehicles) {
      await pool.query('INSERT INTO vehicles SET ?', vehicle);
    }
    console.log(`✅ ${vehicles.length} véhicules insérés`);

    // 3. Insérer des services SAV
    const services = [
      {
        name: 'Révision complète',
        category: 'entretien',
        description: 'Révision complète selon préconisations constructeur : vidange, filtres, contrôle des niveaux et points de sécurité.',
        price_from: 150,
        duration: '2h',
        icon: 'WrenchScrewdriverIcon',
        is_active: true,
        display_order: 1
      },
      {
        name: 'Vidange',
        category: 'entretien',
        description: 'Vidange moteur avec huile de qualité et remplacement du filtre à huile.',
        price_from: 80,
        duration: '30min',
        icon: 'BeakerIcon',
        is_active: true,
        display_order: 2
      },
      {
        name: 'Diagnostic électronique',
        category: 'diagnostic',
        description: 'Diagnostic complet de votre véhicule avec valise multimarque.',
        price_from: 50,
        duration: '1h',
        icon: 'ComputerDesktopIcon',
        is_active: true,
        display_order: 3
      },
      {
        name: 'Freinage',
        category: 'reparation',
        description: 'Remplacement plaquettes et disques de frein, contrôle du circuit.',
        price_from: 200,
        duration: '2h',
        icon: 'ShieldCheckIcon',
        is_active: true,
        display_order: 4
      },
      {
        name: 'Climatisation',
        category: 'entretien',
        description: 'Recharge et désinfection du système de climatisation.',
        price_from: 90,
        duration: '1h',
        icon: 'CloudIcon',
        is_active: true,
        display_order: 5
      },
      {
        name: 'Pneumatiques',
        category: 'pneumatique',
        description: 'Montage, équilibrage et géométrie. Large choix de marques.',
        price_from: 60,
        duration: '1h',
        icon: 'CircleStackIcon',
        is_active: true,
        display_order: 6
      }
    ];

    for (const service of services) {
      await pool.query('INSERT INTO services SET ?', service);
    }
    console.log(`✅ ${services.length} services SAV insérés`);

    // 4. Insérer des avis clients approuvés
    const reviews = [
      {
        customer_name: 'Jean Dupont',
        email: 'jean.dupont@example.com',
        rating: 5,
        service_type: 'vente',
        title: 'Excellent service',
        comment: 'Très satisfait de mon achat. Équipe professionnelle et à l\'écoute. Je recommande vivement !',
        status: 'approved',
        is_featured: true
      },
      {
        customer_name: 'Marie Martin',
        email: 'marie.martin@example.com',
        rating: 5,
        service_type: 'sav',
        title: 'SAV au top',
        comment: 'Révision effectuée rapidement et proprement. Prix corrects. Je reviendrai.',
        status: 'approved',
        is_featured: true
      },
      {
        customer_name: 'Pierre Dubois',
        email: 'pierre.dubois@example.com',
        rating: 4,
        service_type: 'vente',
        title: 'Bon rapport qualité/prix',
        comment: 'Véhicule conforme à la description. Livraison rapide. Très content.',
        status: 'approved',
        is_featured: false
      }
    ];

    for (const review of reviews) {
      await pool.query('INSERT INTO reviews SET ?', review);
    }
    console.log(`✅ ${reviews.length} avis clients insérés`);

    console.log('\n🎉 Seed terminé avec succès !');
    console.log('\n📝 Compte admin créé :');
    console.log('   Email: admin@vehiclemarket.com');
    console.log('   Mot de passe: Admin123!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur lors du seed:', error);
    process.exit(1);
  }
}

seed();
