import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { GeoAlt, House, Building, Plus, Pencil, Trash } from 'react-bootstrap-icons';

const AddressBook = () => {
  // Obtener el contexto del Outlet
  const { user, updateAddresses } = useOutletContext();
  
  // Estados con valores por defecto seguros
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    type: 'Home',
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    phone: '',
    isDefault: false
  });

  // Inicializar los estados cuando user esté disponible
  useEffect(() => {
    if (user) {
      setAddresses(user.addresses || []);
      setFormData(prev => ({
        ...prev,
        name: user.name || '',
        phone: user.phone || ''
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingAddress) {
      // Editar dirección existente
      const updatedAddresses = addresses.map(addr => 
        addr.id === editingAddress.id ? { ...formData, id: editingAddress.id } : addr
      );
      setAddresses(updatedAddresses);
      updateAddresses(updatedAddresses);
      setEditingAddress(null);
    } else {
      // Añadir nueva dirección
      const newAddress = {
        ...formData,
        id: addresses.length > 0 ? Math.max(...addresses.map(a => a.id)) + 1 : 1
      };
      const updatedAddresses = [...addresses, newAddress];
      setAddresses(updatedAddresses);
      updateAddresses(updatedAddresses);
    }
    
    resetForm();
    setShowForm(false);
  };

  const setAsDefault = (id) => {
    const updatedAddresses = addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    }));
    setAddresses(updatedAddresses);
    updateAddresses(updatedAddresses);
  };

  const deleteAddress = (id) => {
    const updatedAddresses = addresses.filter(addr => addr.id !== id);
    setAddresses(updatedAddresses);
    updateAddresses(updatedAddresses);
  };

  const editAddress = (address) => {
    setFormData(address);
    setEditingAddress(address);
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      type: 'Home',
      name: user?.name || '',
      street: '',
      city: '',
      state: '',
      zip: '',
      country: 'United States',
      phone: user?.phone || '',
      isDefault: false
    });
  };

  if (!user) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="address-book">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>
          <GeoAlt className="me-2" />
          Address Book
        </h3>
        <button 
          className="btn btn-primary"
          onClick={() => {
            resetForm();
            setEditingAddress(null);
            setShowForm(true);
          }}
        >
          <Plus className="me-1" />
          Add New Address
        </button>
      </div>

      {showForm && (
        <div className="card mb-4">
          <div className="card-body">
            <h4 className="mb-3">{editingAddress ? 'Edit Address' : 'Add New Address'}</h4>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Address Type</label>
                  <select 
                    className="form-select"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-3">
                <label className="form-label">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">State/Province</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">ZIP/Postal Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Country</label>
                  <select 
                    className="form-select"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="defaultAddress"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="defaultAddress">
                  Set as default shipping address
                </label>
              </div>
              
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary">
                  {editingAddress ? 'Update Address' : 'Save Address'}
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    setShowForm(false);
                    setEditingAddress(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {addresses.length === 0 && !showForm ? (
        <div className="card text-center py-5">
          <GeoAlt size={48} className="text-muted mb-3" />
          <h4>No addresses saved</h4>
          <p className="text-muted">Add your first address to get started</p>
          <button 
            className="btn btn-primary mt-3"
            onClick={() => setShowForm(true)}
          >
            <Plus className="me-1" />
            Add Address
          </button>
        </div>
      ) : (
        <div className="row">
          {addresses.map(address => (
            <div key={address.id} className="col-md-6 mb-4">
              <div className={`card h-100 ${address.isDefault ? 'border-primary' : ''}`}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5>
                      {address.type === 'Home' ? (
                        <House className="me-2" />
                      ) : address.type === 'Work' ? (
                        <Building className="me-2" />
                      ) : (
                        <GeoAlt className="me-2" />
                      )}
                      {address.type} Address
                    </h5>
                    {address.isDefault && (
                      <span className="badge bg-primary">Default</span>
                    )}
                  </div>
                  
                  <address className="mb-0">
                    {address.name}<br />
                    {address.street}<br />
                    {address.city}, {address.state} {address.zip}<br />
                    {address.country}<br />
                    <abbr title="Phone">P:</abbr> {address.phone}
                  </address>
                </div>
                <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between">
                  <button 
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => setAsDefault(address.id)}
                    disabled={address.isDefault}
                  >
                    {address.isDefault ? 'Default Address' : 'Set as Default'}
                  </button>
                  <div>
                    <button 
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => editAddress(address)}
                    >
                      <Pencil size={14} /> Edit
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteAddress(address.id)}
                      disabled={address.isDefault}
                    >
                      <Trash size={14} /> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressBook;