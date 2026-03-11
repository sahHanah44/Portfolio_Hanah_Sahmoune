
export default function Contact() {
  return (
    // L'id="contact" permet au lien de ta Navbar de descendre jusqu'ici !
    <section id="contact" className="py-24 px-4 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Prêt(e) à collaborer ?
      </h2>
      <p className="text-xl text-gray-600 mb-10">
        Je suis actuellement à la recherche de nouvelles opportunités (alternance, stage, ou premier poste). 
        Si mon profil vous intéresse, n'hésitez pas à m'envoyer un message !
      </p>
      
      {/* Le "mailto:" est magique : il ouvre directement l'application mail de l'utilisateur */}
      <a 
        href="mailto:hanah.sahmoune@etu.u-pec.fr" 
        className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
      >
        ✉️ M'envoyer un email
      </a>
    </section>
  );
}