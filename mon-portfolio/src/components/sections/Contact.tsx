// src/components/sections/Contact.tsx
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    // L'id="contact" permet au lien de ta Navbar de descendre jusqu'ici !
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>
        Prêt(e) à collaborer ?
      </h2>
      
      <p className={styles.description}>
        Je suis actuellement à la recherche de nouvelles opportunités (alternance, stage, ou premier poste). 
        Si mon profil vous intéresse ou si vous avez une question, n'hésitez pas à m'envoyer un message !
      </p>
      
      {/* N'oublie pas de remplacer par ton vrai mail */}
      <a 
        href="mailto:hanah.sahmoune@etu.u-pec.fr" 
        className={styles.ctaBtn}
      >
        <span>✉️</span> M'envoyer un email
      </a>
    </section>
  );
}