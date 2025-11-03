import React, { useState } from 'react';
import { Person, Envelope, Telephone } from 'react-bootstrap-icons';
import { useOutletContext } from 'react-router-dom';

const UserInfo = () => {
  // Obtiene user y setUser del contexto
  const { user, setUser } = useOutletContext();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  // Maneja cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, ...formData });
    setIsEditing(false);
  };

  // Si user es undefined (por precaución)
  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <div className="user-info">
      <h3 className="mb-4">
        <Person className="me-2" />
        Personal Information
      </h3>

      {!isEditing ? (
        <div className="user-details">
          <div className="mb-3">
            <h5>Full Name</h5>
            <p>{user.name}</p>
          </div>
          <div className="mb-3">
            <h5>Email Address</h5>
            <p>
              <Envelope className="me-2" />
              {user.email}
            </p>
          </div>
          <div className="mb-3">
            <h5>Phone Number</h5>
            <p>
              <Telephone className="me-2" />
              {user.phone}
            </p>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => setIsEditing(true)}
          >
            Edit Information
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            <button 
              type="button" 
              className="btn btn-outline-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserInfo;