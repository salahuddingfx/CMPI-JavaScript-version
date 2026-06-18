/**
 * Format a date string into a human-readable format.
 * @param {string|Date} date
 * @param {string} locale
 * @returns {string}
 */
export const formatDate = (date, locale = 'en-BD') => {
  if (!date) return '';
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Truncate a string to a given length, appending an ellipsis.
 * @param {string} str
 * @param {number} len
 * @returns {string}
 */
export const truncate = (str, len = 100) => {
  if (!str) return '';
  return str.length > len ? str.slice(0, len).trimEnd() + '…' : str;
};

/**
 * Get the initials from a full name (up to 2 characters).
 * @param {string} name
 * @returns {string}
 */
export const getInitials = (name = '') => {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
};

/**
 * Check if a date is in the future.
 * @param {string|Date} date
 * @returns {boolean}
 */
export const isFuture = (date) => {
  return new Date(date) > new Date();
};

/**
 * Returns a relative time string like "2 days ago" or "in 3 days".
 * @param {string|Date} date
 * @returns {string}
 */
export const relativeTime = (date) => {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const diff = (new Date(date) - Date.now()) / 1000;
  const thresholds = [
    { unit: 'year', secs: 31536000 },
    { unit: 'month', secs: 2592000 },
    { unit: 'week', secs: 604800 },
    { unit: 'day', secs: 86400 },
    { unit: 'hour', secs: 3600 },
    { unit: 'minute', secs: 60 },
    { unit: 'second', secs: 1 },
  ];
  for (const { unit, secs } of thresholds) {
    if (Math.abs(diff) >= secs) {
      return rtf.format(Math.round(diff / secs), unit);
    }
  }
  return 'just now';
};
