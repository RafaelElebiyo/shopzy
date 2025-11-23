import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Person, Cart, GeoAlt, Gear, BoxArrowLeft } from 'react-bootstrap-icons';
import Hero from '../components/Hero/Hero';
import '../styles/ProfilePage.css';
import userService from '../../../client/userService';  // Ajusta ruta si es necesario

const ProfilePage = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ID fijo para pruebas SIN LOGIN
  const fixedUserId = 3;  // cámbialo si necesitas

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await userService.getUserById(fixedUserId);
        setUser(data);
      } catch (err) {
        console.error(err);
        setError("Error cargando el perfil");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    console.log("logout test — no hace nada porque quitamos login");
  };

  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Hero
        title="My Profile"
        subtitle=""
        backgroundImage="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ8PFy0dHR0tKy0tLS0tKy0tLS0tLS0tLSstLS0tLSstLS0tLS0rKy0tLSstLSstLS0tLS0rLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAoEAEBAAECBAYCAwEAAAAAAAAAARECITFBUXEDEmGBkfCxwaHR4RP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEAAwEAAAAAAAAAAAAAAAERITFREv/aAAwDAQACEQMRAD8A+JSsYysiWqi3V0/tNMX0XHqDFqLaIpBFBF0wrU29/wAAtuOHbLmqAshgjevlMy/gRm45faU4d0oqNadVnBlZAK1o0Zx9+V/5bW5mJ856SJjoqaVDVqykFejwfCm/C3bbO3v1FmmaOeLzvT0nqNTHK7ennykXVdzDDqsqaq1a5iKRcFopEosgHAMCiS7YAQI1ejOSAqUoBhvXpx95s6Ore3GZVFmi46Yc6uu3hUwESTL0aNPl7saduGf2uvxL2vpeHwRLyeLqk2xvzt/GOQzfCvG7d1CY56Y3lnTfhNSKlBYKgWkBbpLSl0gWoLIBpiVbqQBrRozzjMddHh5snXhvMZ7qlY1z1TRP3842b49p8r2gatnKcP59zVoxx23vHr0+9Umm8eHC8WvN/PHfj3tGXLV9/wAdbeHBi2Z4+/8AUTVqFdNN3/fQ/wCknDj1cb3S00+XTV4lu+dxny4mb7T9guRECopFtyigSL5azkAwZQBrDV07Znv6JYS35EZka1GLE8oqebk7XGOHHH+/hiaevwsxzz6TgqV01eH177b+2eTndVkxnH3qmrXeGdunJnIknrXmnes3VVl+8jyXjjYVJUXE6rPExw2RTTo9u65k9fvRirp09dhC5t60W6+m05CjILEUgQgJagANaUi5BeZ7pF2ETLUxfT8M5qcQb88nCe/6wz5kyeYMG/Jcb7M5Sg1t3ZtWoKLp0+3dZccF1as42ntz7iM/ygQVBQAyIAoAiyCA1hKQtBTKAGSCAti2YqGAWoshjrQS1rRovaeqW/aAtk5btWycnPKCLaEBTI1L0++4IwpkFJUABcAAGQC0EAXIAtMIAZKUAkBAUwFACoCosgCAACgIACiKCKAAACKsBMFWpAAAIFoCCgIKgAACo1dO2QTILPUERqzF6mqghkACBkBUlAXzJqoUEFKBk03BAFlSqkAoZAQAFIigihgFQoBDBDALhAoAAAAAABktAMooBRAFEAUQBVSGQBcIBlcpEBr2QAMi1AEVbNs558N89+gIAARFoAi0AJAEABQMgLZP5QtAAlAwZX1QAogLDAZAyUygCmSgimQEUhgEAAAAFQBYVAXIUAKACKtnr+du4IYEBSIAKAIqALUFBAAFQAAAXIgKVFAIAGQhQQFyAFKCAoIKgAoBQQFQAAAAABQBcJAAIuJzBCIAUUoCKYBAABS0DKAAtQAAAWlqAKSgIpklABdIMigBAAFkQBAABQQAAWoCouUAAAVAAFyBUUBagUEUQFygAAoItiAAAAAAAAACwAQABaACAAAAAC1AAAAAB//Z"
      />

      <div className="profile-container">
        
        {/* Sidebar */}
        <div className="profile-sidebar">
          <h2><Person /> {user?.name}</h2>

          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Tel:</strong> {user?.phone || "No definido"}</p>

          <hr />

          <ul className="profile-menu">
            <li><GeoAlt /> <Link to="/profile/addresses">Mis direcciones</Link></li>
            <li><Cart /> <Link to="/profile/orders">Mis pedidos</Link></li>
            <li><Gear /> <Link to="/profile/settings">Configuración</Link></li>
          </ul>

          <button className="logout-btn" onClick={logout}>
            <BoxArrowLeft /> Logout
          </button>
        </div>

        {/* Contenido dinámico */}
        <div className="profile-content">
          <Outlet />
        </div>

      </div>
    </>
  );
};

export default ProfilePage;
