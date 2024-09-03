import React from "react";
import PropTypes from "prop-types";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      {/* Inject CSS keyframes */}
      <style>
        {`
          @keyframes opacityChange {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}
      </style>

      {!displayDrawer && (
        <div
          className="menuItem"
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            backgroundColor: "#fff8f8",
            padding: "10px",
            cursor: "pointer",
            animation: "opacityChange 1s ease-in-out 3, bounce 0.5s ease-in-out 3",
          }}
        >
          <p>Your notifications</p>
        </div>
      )}

      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              color: "#3a3a3a",
              fontWeight: "bold",
              background: "none",
              border: "none",
              fontSize: "15px",
              position: "absolute",
              right: "3px",
              top: "3px",
              cursor: "pointer",
              outline: "none",
            }}
            aria-label="Close"
            onClick={(e) => {
              console.log("Close button has been clicked");
            }}
          >
            <img src={closeIcon} alt="close icon" width="10px" />
          </button>
          {listNotifications.length !== 0 ? (
            <p>Here is the list of notifications</p>
          ) : null}
          <ul>
            {listNotifications.length === 0 ? (
              <NotificationItem type="default" value="No new notification for now" />
            ) : null}
            {listNotifications.map((val) => (
              <NotificationItem
                type={val.type}
                value={val.value}
                html={val.html}
                key={val.id}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
