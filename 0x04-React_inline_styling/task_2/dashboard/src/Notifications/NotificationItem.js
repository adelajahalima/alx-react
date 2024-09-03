import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function NotificationItem({ type, html, value }) {
  // Define styles using Aphrodite
  const styles = StyleSheet.create({
    defaultItem: {
      color: "blue",
      fontSize: "20px",
      padding: "10px 8px",
      borderBottom: "1px solid black",
      width: "100%",
    },
    urgentItem: {
      color: "red",
      fontSize: "20px",
      padding: "10px 8px",
      borderBottom: "1px solid black",
      width: "100%",
    },
  });

  // Determine the style based on the type
  const itemStyle = type === "urgent" ? styles.urgentItem : styles.defaultItem;

  return (
    <>
      {type && value ? (
        <li className={css(itemStyle)} data-notification-type={type}>
          {value}
        </li>
      ) : null}
      {html ? (
        <li
          className={css(styles.urgentItem)}
          data-urgent="true"
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      ) : null}
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
