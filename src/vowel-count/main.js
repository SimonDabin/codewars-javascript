// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

/**
 * @param {string} str the input string
 * @return {number} the numbers of vowels in the string
 */
function getCount(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

export default getCount;
