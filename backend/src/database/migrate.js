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
    
    // Séparer les requêtes SQL
    const queries = schema
      .split(';')
      .map(q => q.trim())
      .filter(q => q.length > 0);
    
    for (const query of queries) {
      await pool.query(query);
    }
    
    console.log('✅ Migrations terminées avec succès');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erreur lors des migrations:', error);
    process.exit(1);
  }
}

migrate();
