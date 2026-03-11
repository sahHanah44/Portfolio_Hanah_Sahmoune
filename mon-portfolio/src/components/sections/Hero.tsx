// src/components/sections/Hero.tsx
import Image from "next/image"; 
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 max-w-4xl mx-auto">
      
      <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Bonjour, je suis <span className="text-blue-600">Hanah</span> 
        </h1>
        <h2 className="text-2xl text-gray-600 mb-6 font-medium">
          Développeuse Web Junior
        </h2>
        <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto md:mx-0">
          Je conçois des sites web modernes et performants. Curieuse et motivée, je suis actuellement à la recherche d'une opportunité pour mettre mes compétences en pratique !
        </p>
        
        {/* Les boutons d'action */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Me contacter
          </Link>
          
          {/* Le lien pointe directement vers le fichier dans le dossier public/ */}
          <a 
            href="/CV_SAHMOUNE_Hanah.pdf" 
            target="_blank" 
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Télécharger mon CV
          </a>
        </div>
      </div>

      {/* Colonne Droite : L'image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src="/avatar.jpg" // Next.js sait qu'il doit chercher dans le dossier public/
          alt="Photo de profil de Hanah"
          width={250}
          height={250}
          className="rounded-full shadow-xl border-4 border-white object-cover aspect-square"
          priority // Dit à Next.js : "C'est l'image principale, charge-la en priorité !"
        />
      </div>

    </section>
  );
}