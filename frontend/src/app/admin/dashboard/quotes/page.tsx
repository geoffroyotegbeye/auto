"use client";

import { useEffect, useState } from 'react';
import { quotesAPI } from '@/services/api';
import Icon from '@/components/ui/AppIcon';

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadQuotes();
  }, []);

  const loadQuotes = async () => {
    try {
      const data = await quotesAPI.getAll();
      setQuotes(data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await quotesAPI.update(id, { status });
      loadQuotes();
    } catch (error: any) {
      alert(error.message);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Icon name="ArrowPathIcon" size={48} className="text-[#E8A020] animate-spin" /></div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#F5F0E8]">Demandes de devis</h2>
        <p className="text-sm text-[#A09A8E] mt-1">{quotes.length} demande(s)</p>
      </div>

      <div className="bg-[#1A1A1A] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#141414] border-b border-[rgba(245,240,232,0.08)]">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase text-[#A09A8E]">Client</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase text-[#A09A8E]">Type</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase text-[#A09A8E]">Véhicule</th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase text-[#A09A8E]">Statut</th>
              <th className="px-6 py-4 text-right text-xs font-bold uppercase text-[#A09A8E]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(245,240,232,0.08)]">
            {quotes.map((quote) => (
              <tr key={quote.id} className="hover:bg-[#141414]">
                <td className="px-6 py-4">
                  <p className="font-bold text-[#F5F0E8]">{quote.first_name} {quote.last_name}</p>
                  <p className="text-sm text-[#A09A8E]">{quote.email}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-[#F5F0E8]">
                    {quote.type === 'new' ? 'Neuf' : quote.type === 'used' ? 'Occasion' : 'Leasing'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-[#F5F0E8]">{quote.brand} {quote.model}</p>
                  {quote.budget && <p className="text-xs text-[#A09A8E]">Budget: {quote.budget}€</p>}
                </td>
                <td className="px-6 py-4">
                  <select
                    value={quote.status}
                    onChange={(e) => updateStatus(quote.id, e.target.value)}
                    className="search-input rounded px-3 py-1 text-sm"
                  >
                    <option value="pending">En attente</option>
                    <option value="processing">En cours</option>
                    <option value="sent">Envoyé</option>
                    <option value="closed">Clôturé</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-[#A09A8E] hover:text-[#E8A020]">
                    <Icon name="EyeIcon" size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
