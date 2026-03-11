
export default function About() {
  return (
    // L'id="about" est crucial pour que le lien de ta Navbar fonctionne !
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center md:text-left">
        À propos de moi
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Colonne Gauche : Le texte de présentation */}
        <div className="flex-1 text-gray-600 text-lg leading-relaxed space-y-6">
          <p>
            Passionnée par le web et la création numérique, j'ai découvert le développement 
            en concevant mes premiers projets. Depuis, je n'ai jamais cessé d'apprendre et 
            de repousser mes limites techniques !
          </p>
          <p>
            Mon objectif ? Transformer des idées complexes en interfaces simples, modernes et 
            performantes. J'aime particulièrement travailler avec l'écosystème JavaScript (React, Next.js) 
            tout en gardant un œil attentif sur le design et l'expérience utilisateur (UX/UI).
          </p>
          <p>
            Quand je ne suis pas derrière mon écran en train de coder, vous me trouverez probablement 
            en train de [insérer ton hobby ici, ex: lire, faire du sport, tester des jeux vidéo...].
          </p>
        </div>

        {/* Colonne Droite : L'encart "En bref" */}
        <div className="flex-1 w-full">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-bold text-blue-900 mb-6">En bref 🚀</h3>
            <ul className="space-y-4 text-blue-800 font-medium">
              <li className="flex items-center gap-3">
                <span className="text-2xl">📍</span> Basée en Île-de-France (Créteil / Paris)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🎓</span> Formation en Développement Web
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">💡</span> Curieuse et toujours en veille technique
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">☕</span> Carburant principal : le café (ou le thé !)
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}