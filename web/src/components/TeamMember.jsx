import React from 'react';

const TeamMember = ({ member }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="team-member card h-100 border-0 shadow-sm">
        <img 
          src={member.image} 
          alt={member.name} 
          className="card-img-top rounded-top"
        />
        <div className="card-body text-center">
          <h3 className="card-title">{member.name}</h3>
          <p className="text-primary">{member.position}</p>
          <p className="card-text">{member.bio}</p>
        </div>
        <div className="card-footer bg-transparent border-0 text-center">
          <a href="#!" className="text-muted me-3"><i className="bi bi-facebook"></i></a>
          <a href="#!" className="text-muted me-3"><i className="bi bi-twitter"></i></a>
          <a href="#!" className="text-muted me-3"><i className="bi bi-linkedin"></i></a>
          <a href="#!" className="text-muted"><i className="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;