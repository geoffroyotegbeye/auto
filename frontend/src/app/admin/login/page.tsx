"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authAPI } from '@/services/api';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await authAPI.login(email, password);
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <AppLogo size={48} iconName="TruckIcon" text="VehicleMarket" />
          </div>
          <h1 className="text-2xl font-bold text-[#F5F0E8] mb-2">Espace Administrateur</h1>
          <p className="text-[#A09A8E] text-sm">Connectez-vous pour accéder au dashboard</p>
        </div>

        {/* Formulaire */}
        <div className="bg-[#1A1A1A] border border-[rgba(245,240,232,0.08)] rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-start gap-3">
                <Icon name="ExclamationTriangleIcon" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#F5F0E8] mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="search-input w-full rounded-lg px-4 py-3"
                placeholder="admin@vehiclemarket.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#F5F0E8] mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="search-input w-full rounded-lg px-4 py-3 pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A09A8E] hover:text-[#F5F0E8] transition-colors"
                >
                  <Icon name={showPassword ? 'EyeSlashIcon' : 'EyeIcon'} size={20} />
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Icon name="ArrowPathIcon" size={16} className="animate-spin" />
                  Connexion...
                </>
              ) : (
                <>
                  <Icon name="LockClosedIcon" size={16} />
                  Se connecter
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[rgba(245,240,232,0.08)]">
            <p className="text-xs text-[#5A5550] text-center">
              Compte de test : admin@vehiclemarket.com / Admin123!
            </p>
          </div>
        </div>

        {/* Retour */}
        <div className="mt-6 text-center">
          <button
            onClick={() => router.push('/')}
            className="text-sm text-[#A09A8E] hover:text-[#E8A020] transition-colors inline-flex items-center gap-2"
          >
            <Icon name="ArrowLeftIcon" size={14} />
            Retour au site
          </button>
        </div>
      </div>
    </div>
  );
}
