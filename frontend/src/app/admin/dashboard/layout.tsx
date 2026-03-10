"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { authAPI } from '@/services/api';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const menuItems = [
  { icon: 'ChartBarIcon', label: 'Dashboard', href: '/admin/dashboard' },
  { icon: 'TruckIcon', label: 'Véhicules', href: '/admin/dashboard/vehicles' },
  { icon: 'CalendarIcon', label: 'Rendez-vous', href: '/admin/dashboard/appointments' },
  { icon: 'DocumentTextIcon', label: 'Devis', href: '/admin/dashboard/quotes' },
  { icon: 'ChatBubbleLeftIcon', label: 'Messages', href: '/admin/dashboard/contacts' },
  { icon: 'StarIcon', label: 'Avis clients', href: '/admin/dashboard/reviews' },
  { icon: 'WrenchScrewdriverIcon', label: 'Services SAV', href: '/admin/dashboard/services' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (!authAPI.isAuthenticated()) {
      router.push('/admin/login');
      return;
    }
    setUser(authAPI.getUser());
  }, [router]);

  const handleLogout = () => {
    authAPI.logout();
    router.push('/admin/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-center">
          <Icon name="ArrowPathIcon" size={48} className="text-[#E8A020] animate-spin mx-auto mb-4" />
          <p className="text-[#A09A8E]">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-[#141414] border-r border-[rgba(245,240,232,0.08)] transition-all duration-300 flex flex-col fixed h-full z-50`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-[rgba(245,240,232,0.08)]">
          {sidebarOpen ? (
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#F5F0E8] tracking-tight">
                Mig Motor
              </span>
              <span className="text-xs text-[#5A5550]">Admin</span>
            </div>
          ) : (
            <span className="text-xl font-bold text-[#E8A020] mx-auto">M</span>
          )}
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#E8A020] text-[#0D0D0D]'
                    : 'text-[#A09A8E] hover:bg-[#1A1A1A] hover:text-[#F5F0E8]'
                }`}
                title={!sidebarOpen ? item.label : undefined}
              >
                <Icon name={item.icon as any} size={20} className="flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-[rgba(245,240,232,0.08)]">
          {sidebarOpen ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="w-8 h-8 rounded-full bg-[#E8A020] flex items-center justify-center text-[#0D0D0D] font-bold text-sm">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#F5F0E8] truncate">{user.name}</p>
                  <p className="text-xs text-[#5A5550] truncate">{user.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm text-[#A09A8E] hover:text-red-400 transition-colors"
              >
                <Icon name="ArrowRightOnRectangleIcon" size={16} />
                Déconnexion
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center p-2 text-[#A09A8E] hover:text-red-400 transition-colors"
              title="Déconnexion"
            >
              <Icon name="ArrowRightOnRectangleIcon" size={20} />
            </button>
          )}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-3 top-20 w-6 h-6 bg-[#E8A020] rounded-full flex items-center justify-center hover:bg-[#F0B840] transition-colors"
        >
          <Icon
            name={sidebarOpen ? 'ChevronLeftIcon' : 'ChevronRightIcon'}
            size={14}
            className="text-[#0D0D0D]"
          />
        </button>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        {/* Top Bar */}
        <header className="bg-[#141414] border-b border-[rgba(245,240,232,0.08)] px-8 py-4 sticky top-0 z-40">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-[#F5F0E8]">
                {menuItems.find((item) => item.href === pathname)?.label || 'Dashboard'}
              </h1>
              <p className="text-sm text-[#5A5550] mt-1">
                Bienvenue, {user.name}
              </p>
            </div>
            <Link
              href="/"
              target="_blank"
              className="btn-outline px-4 py-2 text-xs"
            >
              <Icon name="GlobeAltIcon" size={14} />
              Voir le site
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
