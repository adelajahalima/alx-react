import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value }) {
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

  const itemStyle = {
    width: "100%",
    borderBottom: "1px solid black",
    fontSize: "20px",
    padding: "10px 8px",
    boxSizing: "border-box",
  };

  return (
    <>
      {type && value ? (
        <li data-notification-type={type} style={itemStyle}>
          {value}
        </li>
      ) : null}
      {html ? (
        <li
          data-urgent
          style={itemStyle}
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      ) : null}
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
