'use strict';

/**
 * @param {Array.<string>} strings
 * @returns {string}
 */

const lcs = (strings = process.argv.slice(2)) => {
    const sortedStrings = strings.sort((a, b) => a.length - b.length);
    const shortestString = sortedStrings[0];
    let longestSubstring = '';

    if (strings.length === 0) {
        console.log('empty line')
        return 'empty line'
    }

    for (let i = 0; i < shortestString.length; i++) {
        for (let j = i + 1; j <= shortestString.length; j++) {
            const subStr = shortestString.slice(i, j);

            if (sortedStrings.every((str) => str.includes(subStr))) {
                if (subStr.length > longestSubstring.length) {
                    longestSubstring = subStr;
                }
            }
        }
    }

    console.log(longestSubstring);

    return longestSubstring;

};

module.exports = {
    lcs,
};
