import React from 'react';
import { GeoAlt, Telephone, Envelope, Clock } from 'react-bootstrap-icons';
import Hero from '../components/Hero/Hero';
import ContactForm from '../components/Forms/ContactForm';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const handleContactSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Mensaje enviado correctamente!");
  };

  return (
    <>
      {/* Hero */}
      <Hero
        title="Contactez-nous"
        subtitle="Nous sommes à votre écoute 24/7"
        backgroundImage="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ8PFy0dHR0tKy0tLS0tKy0tLS0tLS0tLSstLS0tLSstLS0tLS0rKy0tLSstLSstLS0tLS0rLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAoEAEBAAECBAYCAwEAAAAAAAAAARECITFBUXEDEmGBkfCxwaHR4RP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEAAwEAAAAAAAAAAAAAAAERITFREv/aAAwDAQACEQMRAD8A+JSsYysiWqi3V0/tNMX0XHqDFqLaIpBFBF0wrU29/wAAtuOHbLmqAshgjevlMy/gRm45faU4d0oqNadVnBlZAK1o0Zx9+V/5bW5mJ856SJjoqaVDVqykFejwfCm/C3bbO3v1FmmaOeLzvT0nqNTHK7ennykXVdzDDqsqaq1a5iKRcFopEosgHAMCiS7YAQI1ejOSAqUoBhvXpx95s6Ore3GZVFmi46Yc6uu3hUwESTL0aNPl7saduGf2uvxL2vpeHwRLyeLqk2xvzt/GOQzfCvG7d1CY56Y3lnTfhNSKlBYKgWkBbpLSl0gWoLIBpiVbqQBrRozzjMddHh5snXhvMZ7qlY1z1TRP3842b49p8r2gatnKcP59zVoxx23vHr0+9Umm8eHC8WvN/PHfj3tGXLV9/wAdbeHBi2Z4+/8AUTVqFdNN3/fQ/wCknDj1cb3S00+XTV4lu+dxny4mb7T9guRECopFtyigSL5azkAwZQBrDV07Znv6JYS35EZka1GLE8oqebk7XGOHHH+/hiaevwsxzz6TgqV01eH177b+2eTndVkxnH3qmrXeGdunJnIknrXmnes3VVl+8jyXjjYVJUXE6rPExw2RTTo9u65k9fvRirp09dhC5t60W6+m05CjILEUgQgJagANaUi5BeZ7pF2ETLUxfT8M5qcQb88nCe/6wz5kyeYMG/Jcb7M5Sg1t3ZtWoKLp0+3dZccF1as42ntz7iM/ygQVBQAyIAoAiyCA1hKQtBTKAGSCAti2YqGAWoshjrQS1rRovaeqW/aAtk5btWycnPKCLaEBTI1L0++4IwpkFJUABcAAGQC0EAXIAtMIAZKUAkBAUwFACoCosgCAACgIACiKCKAAACKsBMFWpAAAIFoCCgIKgAACo1dO2QTILPUERqzF6mqghkACBkBUlAXzJqoUEFKBk03BAFlSqkAoZAQAFIigihgFQoBDBDALhAoAAAAAABktAMooBRAFEAUQBVSGQBcIBlcpEBr2QAMi1AEVbNs558N89+gIAARFoAi0AJAEABQMgLZP5QtAAlAwZX1QAogLDAZAyUygCmSgimQEUhgEAAAAFQBYVAXIUAKACKtnr+du4IYEBSIAKAIqALUFBAAFQAAAXIgKVFAIAGQhQQFyAFKCAoIKgAoBQQFQAAAAABQBcJAAIuJzBCIAUUoCKYBAABS0DKAAtQAAAWlqAKSgIpklABdIMigBAAFkQBAABQQAAWoCouUAAAVAAFyBUUBagUEUQFygAAoItiAAAAAAAAACwAQABaACAAAAAC1AAAAAB//Z"
      />

      <div className="contact-container">
        {/* INFO */}
        <div className="contact-info">
          <h2>Informations de contact</h2>
          <p><GeoAlt /> Dakar, Sénégal</p>
          <p><Telephone /> +221 77 000 00 00</p>
          <p><Envelope /> support@shopzy.com</p>
          <p><Clock /> Lundi - Samedi : 8h - 19h</p>
        </div>

        {/* FORM */}
        <div className="contact-form">
          <h2>Envoyez-nous un message</h2>
          <ContactForm onSubmit={handleContactSubmit} />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
