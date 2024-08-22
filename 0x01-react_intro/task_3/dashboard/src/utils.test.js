import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getFullYear function
describe('getFullYear', () => {
  it('should return the correct year', () => {
    const year = getFullYear();
    expect(year).toBe(new Date().getFullYear());
  });
});

// Test for getFooterCopy function
describe('getFooterCopy', () => {
  it('should return "Holberton School" when the argument is true', () => {
    const footerText = getFooterCopy(true);
    expect(footerText).toBe('Holberton School');
  });

  it('should return "Holberton School main dashboard" when the argument is false', () => {
    const footerText = getFooterCopy(false);
    expect(footerText).toBe('Holberton School main dashboard');
  });
});

// Test for getLatestNotification function
describe('getLatestNotification', () => {
  it('should return the correct string', () => {
    const notification = getLatestNotification();
    expect(notification).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
