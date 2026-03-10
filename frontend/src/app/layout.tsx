import React from 'react';
import type { Metadata, Viewport } from 'next';
import ConditionalLayout from '@/components/ConditionalLayout';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Mig Motor - Véhicules neufs au Bénin',
  description: 'Découvrez notre sélection de véhicules neufs au Bénin. Vente, SAV et accompagnement personnalisé.',
  icons: {
    icon: [
      { url: '/assets/image/app_logo.png', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <ConditionalLayout>{children}</ConditionalLayout>

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fvehiclemar5623back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
      </body>
    </html>
  );
}
