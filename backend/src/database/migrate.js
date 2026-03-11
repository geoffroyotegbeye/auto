import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from '../config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function migrate() {
  try {
    console.log('🔄 Démarrage des migrations...');
    
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    // Désactiver les vérifications de foreign keys temporairement
    await pool.query('SET FOREIGN_KEY_CHECKS = 0');
    
    // Séparer les requêtes SQL
    const queries = schema
      .split(';')
      .map(q => q.trim())
      .filter(q => q.length > 0 && !q.startsWith('--'));
    
    for (const query of queries) {
      console.log('Exécution:', query.substring(0, 50) + '...');
      await pool.query(query);
    }
    
    // Réactiver les vérifications de foreign keys
    await pool.query('SET FOREIGN_KEY_CHECKS = 1');
    
    console.log('✅ Migrations terminées avec succès');
    console.log('✅ Tables créées: users, vehicles, appointments, quotes, contacts, reviews, services, stats');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur lors des migrations:', error);
    process.exit(1);
  }
}

migrate();
