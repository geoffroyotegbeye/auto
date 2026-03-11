import pool from '../config/database.js';

export const getConfig = async (req, res) => {
  try {
    const [configs] = await pool.query('SELECT * FROM site_config');
    const configObj = {};
    configs.forEach(config => {
      configObj[config.config_key] = config.config_value;
    });
    res.json(configObj);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération de la configuration' });
  }
};

export const updateConfig = async (req, res) => {
  try {
    const { currency_symbol, currency_name, currency_position } = req.body;

    const updates = [
      { key: 'currency_symbol', value: currency_symbol },
      { key: 'currency_name', value: currency_name },
      { key: 'currency_position', value: currency_position }
    ];

    for (const update of updates) {
      if (update.value !== undefined) {
        await pool.query(
          'UPDATE site_config SET config_value = ? WHERE config_key = ?',
          [update.value, update.key]
        );
      }
    }

    res.json({ message: 'Configuration mise à jour avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour de la configuration' });
  }
};

export const getPriceRange = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT MIN(price) as minPrice, MAX(price) as maxPrice FROM vehicles WHERE status = "available"'
    );
    res.json({
      minPrice: result[0].minPrice || 0,
      maxPrice: result[0].maxPrice || 100000000
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des prix' });
  }
};
