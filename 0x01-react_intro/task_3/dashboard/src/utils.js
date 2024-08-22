// Function to return the current year
export function getFullYear() {
    return new Date().getFullYear();
}

// Function to return footer text based on isIndex value
export function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}
export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
  }
  
