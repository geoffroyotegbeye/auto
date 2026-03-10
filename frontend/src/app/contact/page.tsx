"use client";

import { useState } from "react";
import { contactAPI } from "@/services/api";
import Icon from "@/components/ui/AppIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await contactAPI.create(formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: any) {
      setError(err.response?.data?.error || "Erreur lors de l'envoi du message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-32 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Contactez-nous
          </h1>
          <p className="text-[#A09A8E] text-lg max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-[#1A1A1A] border border-[#684B1E]/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#F5F0E8] mb-6">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#684B1E]/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPinIcon" size={24} className="text-[#E8A020]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F0E8] font-semibold mb-1">Adresse</h3>
                    <p className="text-[#A09A8E]">Cotonou, Bénin</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#684B1E]/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="PhoneIcon" size={24} className="text-[#E8A020]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F0E8] font-semibold mb-1">Téléphone</h3>
                    <p className="text-[#A09A8E]">+229 XX XX XX XX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#684B1E]/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="EnvelopeIcon" size={24} className="text-[#E8A020]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F0E8] font-semibold mb-1">Email</h3>
                    <p className="text-[#A09A8E]">contact@benincars.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#684B1E]/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="ClockIcon" size={24} className="text-[#E8A020]" />
                  </div>
                  <div>
                    <h3 className="text-[#F5F0E8] font-semibold mb-1">Horaires</h3>
                    <p className="text-[#A09A8E]">Lun - Sam: 8h00 - 18h00</p>
                    <p className="text-[#A09A8E]">Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="bg-[#1A1A1A] border border-[#684B1E]/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#F5F0E8] mb-6">Nos services</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#A09A8E]">
                  <Icon name="CheckCircleIcon" size={20} className="text-[#E8A020]" />
                  Vente de véhicules neufs
                </li>
                <li className="flex items-center gap-3 text-[#A09A8E]">
                  <Icon name="CheckCircleIcon" size={20} className="text-[#E8A020]" />
                  Service après-vente
                </li>
                <li className="flex items-center gap-3 text-[#A09A8E]">
                  <Icon name="CheckCircleIcon" size={20} className="text-[#E8A020]" />
                  Prise de rendez-vous
                </li>
                <li className="flex items-center gap-3 text-[#A09A8E]">
                  <Icon name="CheckCircleIcon" size={20} className="text-[#E8A020]" />
                  Demande de devis
                </li>
              </ul>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-[#1A1A1A] border border-[#684B1E]/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#F5F0E8] mb-6">Envoyez-nous un message</h2>

            {success && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#F5F0E8] font-medium mb-2">Nom complet *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#684B1E]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#E8A020] transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-[#F5F0E8] font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#684B1E]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#E8A020] transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-[#F5F0E8] font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#684B1E]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#E8A020] transition-colors"
                  placeholder="+229 XX XX XX XX"
                />
              </div>

              <div>
                <label className="block text-[#F5F0E8] font-medium mb-2">Sujet *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#684B1E]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#E8A020] transition-colors"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="information">Demande d'information</option>
                  <option value="devis">Demande de devis</option>
                  <option value="rdv">Prise de rendez-vous</option>
                  <option value="sav">Service après-vente</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-[#F5F0E8] font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#684B1E]/20 rounded-lg text-[#F5F0E8] focus:outline-none focus:border-[#E8A020] transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-4 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Icon name="PaperAirplaneIcon" size={20} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
