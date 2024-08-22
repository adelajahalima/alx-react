import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export function Notifications() {
  const buttonStyle = {
    position: 'absolute',
    right: '10px',
    top: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={buttonStyle}
        aria-label="Close"
        onClick={handleClick}
      >
        <img src={closeIcon} alt="close icon" width="15px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          data-priority="urgent"
        />
      </ul>
    </div>
  );
}
