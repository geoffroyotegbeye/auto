"use client";

import { useEffect, useState } from 'react';
import { servicesAPI } from '@/services/api';
import Icon from '@/components/ui/AppIcon';

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await servicesAPI.getAll();
      setServices(data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Icon name="ArrowPathIcon" size={48} className="text-[#E8A020] animate-spin" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-[#F5F0E8]">Services SAV</h2>
          <p className="text-sm text-gray-600 dark:text-[#A09A8E] mt-1">{services.length} service(s)</p>
        </div>
        <button className="btn-primary px-6 py-3">
          <Icon name="PlusIcon" size={16} />
          Ajouter un service
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[rgba(245,240,232,0.08)] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E8A020]/10 flex items-center justify-center">
                  <Icon name={service.icon || 'WrenchScrewdriverIcon'} size={20} className="text-[#E8A020]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-[#F5F0E8]">{service.name}</p>
                  <p className="text-xs text-gray-600 dark:text-[#A09A8E]">{service.category}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-gray-600 dark:text-[#A09A8E] hover:text-[#E8A020]">
                  <Icon name="PencilIcon" size={16} />
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-[#A09A8E] mb-4">{service.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#E8A020] font-bold">À partir de {service.price_from}€</span>
              <span className="text-gray-500 dark:text-[#5A5550]">{service.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
