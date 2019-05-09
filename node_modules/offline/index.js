/**
 * Check if offline.
 *
 * @return {Boolean} offline
 */

module.exports = function () {
  return typeof navigator.onLine == 'boolean' && !navigator.onLine
}
