import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, subtitle, backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 20px',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <div style={heroStyle}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  backgroundImage: PropTypes.string,
};

Hero.defaultProps = {
  subtitle: '',
  backgroundImage: '',
};

export default Hero;
