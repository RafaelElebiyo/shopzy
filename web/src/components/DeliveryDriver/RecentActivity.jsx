import React from 'react';
import { CheckCircle, Clock, XCircle } from 'react-bootstrap-icons';

const RecentActivity = ({ activities }) => {
  return (
    <div className="recent-activity card">
      <div className="card-header bg-white">
        <h5 className="mb-0">Actividad reciente</h5>
      </div>
      <div className="card-body">
        <ul className="activity-list list-unstyled">
          {activities.map((activity, index) => (
            <li key={index} className="mb-3 d-flex">
              <div className="me-3">
                {activity.status === 'completed' ? (
                  <CheckCircle className="text-success fs-5" />
                ) : activity.status === 'pending' ? (
                  <Clock className="text-warning fs-5" />
                ) : (
                  <XCircle className="text-danger fs-5" />
                )}
              </div>
              <div>
                <p className="mb-1">{activity.message}</p>
                <p className="small text-muted mb-0">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivity;