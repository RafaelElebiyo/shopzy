import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { BoxArrowInRight } from 'react-bootstrap-icons';
import { loginUser } from '../../db/back';

const LoginModal = ({ show, onHide, onLoginSuccess, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const user = await loginUser(email, password);
      onLoginSuccess(user);
      onHide();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <BoxArrowInRight className="me-2" />
          Login to your account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          <p className="mb-1">
            Don't have an account?{' '}
            <Button variant="link" onClick={onSwitchToRegister} className="p-0">
              Register here
            </Button>
          </p>
          <Button variant="link" className="p-0">
            Forgot password?
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;