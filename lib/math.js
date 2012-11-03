
/**
 * Expose `Math`.
 */

module.exports = Math;

/**
 * Get the average.
 *
 * @param {Number}
 * @return {Number}
 */

Math.avg = function() {
  return Math.sum.apply(null, arguments) / arguments.length;
};

/**
 * Get the sum.
 *
 * @param {Number}
 * @return {Number}
 */

Math.sum = function() {
  var r = 0;
  for (var i = 0, len = arguments.length; i < len; ++i) {
    r += arguments[i];
  }
  return r;
};