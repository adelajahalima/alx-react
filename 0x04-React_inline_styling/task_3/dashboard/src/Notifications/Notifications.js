import React, { useEffect, useState } from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItemStyle = {
    position: "relative",
    float: "right",
    backgroundColor: "#fff8f8",
    cursor: "pointer",
    animation: "opacityChange 1s ease-in-out 3, bounce 0.5s ease-in-out 3",
  };

  const notificationsStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    width: isSmallScreen ? "100%" : "30%",
    height: "100%",
    backgroundColor: "white",
    border: "1px solid #ddd",
    fontSize: "20px",
    padding: isSmallScreen ? "0" : "20px",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
  };

  return (
    <>
      {!displayDrawer && (
        <div className="menuItem" style={menuItemStyle}>
          <p>Your notifications</p>
        </div>
      )}
      {displayDrawer && (
        <div className="Notifications" style={notificationsStyle}>
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
          {listNotifications.length !== 0 && <p>Here is the list of notifications</p>}
          <ul style={ulStyle}>
            {listNotifications.length === 0 ? (
              <NotificationItem type="default" value="No new notification for now" />
            ) : (
              listNotifications.map((val, idx) => (
                <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                />
              ))
            )}
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
