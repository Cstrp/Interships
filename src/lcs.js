'use strict';

/**
 * @param {*} strings
 * @returns {string}
 */

function lcs(strings) {
  if (!strings.length) return '';

  const shortestString = strings.reduce((a, b) => (a.length <= b.length ? a : b));
  const maxLength = shortestString.length;

  for (let len = maxLength; len > 0; len--) {
    for (let start = 0; start <= maxLength - len; start++) {
      const substr = shortestString.slice(start, start + len);
      if (strings.every((str) => str.includes(substr))) return substr;
    }
  }

  return '';
}

module.exports = {
  lcs,
};
