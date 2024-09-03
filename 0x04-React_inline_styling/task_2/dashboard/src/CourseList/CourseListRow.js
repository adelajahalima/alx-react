import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  // Define styles using Aphrodite
  const styles = StyleSheet.create({
    headerRow: {
      backgroundColor: "#f5f5f5",
      textAlign: "left",
    },
    defaultRow: {
      backgroundColor: "#f5f5f5ab",
      textAlign: "left",
    },
    headerTh: {
      fontWeight: "bold",
      borderBottom: "1px solid #ddd",
      padding: "8px",
    },
    defaultTh: {
      fontWeight: "normal",
      borderBottom: "1px solid #ddd",
      padding: "8px",
    },
  });

  return (
    <tr className={css(isHeader ? styles.headerRow : styles.defaultRow)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(styles.headerTh)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.headerTh)}>{textFirstCell}</th>
            <th className={css(styles.headerTh)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.defaultTh)}>{textFirstCell}</td>
          <td className={css(styles.defaultTh)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
