"use client";

import { useEffect, useState } from 'react';
import { configAPI } from '@/services/api';
import Icon from '@/components/ui/AppIcon';
import Toast from '@/components/Toast';

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

export default function ConfigPage() {
  const [config, setConfig] = useState({
    currency_symbol: 'FCFA',
    currency_name: 'Franc CFA',
    currency_position: 'after'
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'info' });

  const showToast = (message: string, type: ToastState['type']) => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: '', type: 'info' });
  };

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const data = await configAPI.get();
      setConfig(data);
    } catch (error) {
      console.error('Erreur:', error);
      showToast('Erreur lors du chargement de la configuration', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await configAPI.update(config);
      showToast('Configuration mise à jour avec succès', 'success');
    } catch (error: any) {
      showToast(error.message || 'Erreur lors de la sauvegarde', 'error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Icon name="ArrowPathIcon" size={48} className="text-[#E8A020] animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-[#F5F0E8]">Configuration du site</h2>
        <p className="text-sm text-gray-600 dark:text-[#A09A8E] mt-1">Gérer la devise et les paramètres généraux</p>
      </div>

      <div className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[rgba(245,240,232,0.08)] rounded-xl p-6">
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-[#F5F0E8] mb-4 flex items-center gap-2">
              <Icon name="CurrencyDollarIcon" size={20} className="text-[#E8A020]" />
              Configuration de la devise
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-[#F5F0E8] mb-2">
                  Symbole de la devise *
                </label>
                <input
                  type="text"
                  value={config.currency_symbol}
                  onChange={(e) => setConfig({ ...config, currency_symbol: e.target.value })}
                  required
                  placeholder="Ex: FCFA, €, $, MAD"
                  className="w-full px-4 py-3 bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-[rgba(245,240,232,0.08)] rounded-lg text-gray-900 dark:text-[#F5F0E8] focus:outline-none focus:border-[#E8A020]"
                />
                <p className="text-xs text-gray-500 dark:text-[#5A5550] mt-1">
                  Le symbole qui sera affiché à côté des prix
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-[#F5F0E8] mb-2">
                  Nom de la devise *
                </label>
                <input
                  type="text"
                  value={config.currency_name}
                  onChange={(e) => setConfig({ ...config, currency_name: e.target.value })}
                  required
                  placeholder="Ex: Franc CFA, Euro, Dollar"
                  className="w-full px-4 py-3 bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-[rgba(245,240,232,0.08)] rounded-lg text-gray-900 dark:text-[#F5F0E8] focus:outline-none focus:border-[#E8A020]"
                />
                <p className="text-xs text-gray-500 dark:text-[#5A5550] mt-1">
                  Le nom complet de la devise
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-[#F5F0E8] mb-2">
                  Position du symbole *
                </label>
                <select
                  value={config.currency_position}
                  onChange={(e) => setConfig({ ...config, currency_position: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-[rgba(245,240,232,0.08)] rounded-lg text-gray-900 dark:text-[#F5F0E8] focus:outline-none focus:border-[#E8A020]"
                >
                  <option value="before">Avant le prix ($ 1000)</option>
                  <option value="after">Après le prix (1000 FCFA)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0D0D0D] border border-gray-200 dark:border-[rgba(245,240,232,0.08)] rounded-lg p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-[#5A5550] mb-2">
              Aperçu
            </p>
            <p className="text-2xl font-bold text-[#E8A020]">
              {config.currency_position === 'before' 
                ? `${config.currency_symbol} 25,000,000`
                : `25,000,000 ${config.currency_symbol}`
              }
            </p>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200 dark:border-[rgba(245,240,232,0.08)]">
            <button
              type="button"
              onClick={loadConfig}
              className="px-6 py-2 text-sm text-gray-600 dark:text-[#A09A8E] hover:text-gray-900 dark:text-[#F5F0E8] transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={saving}
              className="btn-primary px-6 py-3 text-sm disabled:opacity-50"
            >
              {saving ? (
                <>
                  <Icon name="ArrowPathIcon" size={16} className="animate-spin" />
                  Enregistrement...
                </>
              ) : (
                <>
                  <Icon name="CheckIcon" size={16} />
                  Enregistrer
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {toast.show && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </div>
  );
}
