import React from "react";
import { People, Award, ShieldCheck, Truck } from "react-bootstrap-icons";
import Hero from "../components/Hero/Hero";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <>
      {/* HERO */}
      <Hero
        title="About Us"
        subtitle="Building excellence through innovation, quality, and trust."
        backgroundImage="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ8PFy0dHR0tKy0tLS0tKy0tLS0tLS0tLSstLS0tLSstLS0tLS0rKy0tLSstLSstLS0tLS0rLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAoEAEBAAECBAYCAwEAAAAAAAAAARECITFBUXEDEmGBkfCxwaHR4RP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEAAwEAAAAAAAAAAAAAAAERITFREv/aAAwDAQACEQMRAD8A+JSsYysiWqi3V0/tNMX0XHqDFqLaIpBFBF0wrU29/wAAtuOHbLmqAshgjevlMy/gRm45faU4d0oqNadVnBlZAK1o0Zx9+V/5bW5mJ856SJjoqaVDVqykFejwfCm/C3bbO3v1FmmaOeLzvT0nqNTHK7ennykXVdzDDqsqaq1a5iKRcFopEosgHAMCiS7YAQI1ejOSAqUoBhvXpx95s6Ore3GZVFmi46Yc6uu3hUwESTL0aNPl7saduGf2uvxL2vpeHwRLyeLqk2xvzt/GOQzfCvG7d1CY56Y3lnTfhNSKlBYKgWkBbpLSl0gWoLIBpiVbqQBrRozzjMddHh5snXhvMZ7qlY1z1TRP3842b49p8r2gatnKcP59zVoxx23vHr0+9Umm8eHC8WvN/PHfj3tGXLV9/wAdbeHBi2Z4+/8AUTVqFdNN3/fQ/wCknDj1cb3S00+XTV4lu+dxny4mb7T9guRECopFtyigSL5azkAwZQBrDV07Znv6JYS35EZka1GLE8oqebk7XGOHHH+/hiaevwsxzz6TgqV01eH177b+2eTndVkxnH3qmrXeGdunJnIknrXmnes3VVl+8jyXjjYVJUXE6rPExw2RTTo9u65k9fvRirp09dhC5t60W6+m05CjILEUgQgJagANaUi5BeZ7pF2ETLUxfT8M5qcQb88nCe/6wz5kyeYMG/Jcb7M5Sg1t3ZtWoKLp0+3dZccF1as42ntz7iM/ygQVBQAyIAoAiyCA1hKQtBTKAGSCAti2YqGAWoshjrQS1rRovaeqW/aAtk5btWycnPKCLaEBTI1L0++4IwpkFJUABcAAGQC0EAXIAtMIAZKUAkBAUwFACoCosgCAACgIACiKCKAAACKsBMFWpAAAIFoCCgIKgAACo1dO2QTILPUERqzF6mqghkACBkBUlAXzJqoUEFKBk03BAFlSqkAoZAQAFIigihgFQoBDBDALhAoAAAAAABktAMooBRAFEAUQBVSGQBcIBlcpEBr2QAMi1AEVbNs558N89+gIAARFoAi0AJAEABQMgLZP5QtAAlAwZX1QAogLDAZAyUygCmSgimQEUhgEAAAAFQBYVAXIUAKACKtnr+du4IYEBSIAKAIqALUFBAAFQAAAXIgKVFAIAGQhQQFyAFKCAoIKgAoBQQFQAAAAABQBcJAAIuJzBCIAUUoCKYBAABS0DKAAtQAAAWlqAKSgIpklABdIMigBAAFkQBAABQQAAWoCouUAAAVAAFyBUUBagUEUQFygAAoItiAAAAAAAAACwAQABaACAAAAAC1AAAAAB//Z"
      />

      <div className="about-container">
        {/* QUIÉNES SOMOS */}
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team dedicated to delivering exceptional digital
            solutions. Our mission is to provide innovative services, build
            meaningful customer relationships, and help businesses grow through
            technology.
          </p>
        </section>

        {/* VALORES */}
        <section className="about-values">
          <h2>Our Core Values</h2>

          <div className="values-grid">
            <div className="value-card">
              <People size={40} />
              <h3>Customer First</h3>
              <p>
                We listen actively and build solutions that meet real needs.
              </p>
            </div>

            <div className="value-card">
              <Award size={40} />
              <h3>Quality</h3>
              <p>We deliver excellence in every project we touch.</p>
            </div>

            <div className="value-card">
              <ShieldCheck size={40} />
              <h3>Trust</h3>
              <p>Integrity and transparency define every step we take.</p>
            </div>

            <div className="value-card">
              <Truck size={40} />
              <h3>Fast Delivery</h3>
              <p>We combine speed and precision for optimal performance.</p>
            </div>
          </div>
        </section>

        {/* EQUIPO — si quieres mostrar miembros */}
        {/* 
        <section className="about-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <TeamMember name="John Doe" role="CEO" img="/images/john.jpg" />
            <TeamMember name="Jane Smith" role="CTO" img="/images/jane.jpg" />
            <TeamMember name="Mark Brown" role="Lead Developer" img="/images/mark.jpg" />
          </div>
        </section>
        */}
      </div>
    </>
  );
};

export default AboutPage;
