// src/components/layout/Navbar.tsx
"use client"; // INDISPENSABLE : Autorise l'interactivité (les clics, le State)

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // Notre State pour savoir si le menu mobile est ouvert ou fermé
  const [menuOuvert, setMenuOuvert] = useState(false);

  return (
    // La balise <nav> reste collée en haut grâce à "sticky top-0"
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Le Logo / Ton Nom à gauche */}
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">
            Hanah<span className="text-blue-600">.</span>
          </Link>

          {/* 2. Les liens pour Ordinateur (Cachés sur mobile avec "hidden md:flex") */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">Accueil</Link>
            <Link href="#projets" className="text-gray-600 hover:text-blue-600 font-medium">Projets</Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600 font-medium">À propos</Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
          </div>

          {/* 3. Le Bouton Burger pour Mobile (Caché sur PC avec "md:hidden") */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMenuOuvert(!menuOuvert)} // Inverse l'état ouvert/fermé
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {/* Une petite icône SVG "Burger" simple */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOuvert ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Le Menu Mobile Déroulant (S'affiche uniquement si menuOuvert est true) */}
      {menuOuvert && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          <Link href="/" onClick={() => setMenuOuvert(false)} className="block text-gray-600 font-medium">Accueil</Link>
          <Link href="#projets" onClick={() => setMenuOuvert(false)} className="block text-gray-600 font-medium">Projets</Link>
          <Link href="#about" onClick={() => setMenuOuvert(false)} className="block text-gray-600 font-medium">À propos</Link>
          <Link href="#contact" onClick={() => setMenuOuvert(false)} className="block text-gray-600 font-medium">Contact</Link>
        </div>
      )}
    </nav>
  );
}