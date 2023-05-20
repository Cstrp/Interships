const assert = require('assert');
const { lcs } = require('../src/lcs.js');

describe('Longest Common Substring', () => {
  it('should return the longest common substring', () => {
    assert.strictEqual(lcs(['ABCDEFZ', 'WBCDXYZ']), 'BCD');
    assert.strictEqual(lcs(['132', '12332', '12312']), '1');
    assert.strictEqual(lcs(['ABCDEFGH', 'ABCDEFG', 'ABCEDF', 'ABCED']), 'ABC');
    assert.strictEqual(lcs(['ABCDEFGH', 'ABCDEFG', 'ABCDEF', 'ABCDE']), 'ABCDE');
    assert.strictEqual(lcs(['ABCDEFGH', 'ABCDEFG', 'ABCDEF', 'ABCDE', 'EDCBA']), 'A');
    assert.strictEqual(lcs(['ABCDEFGH', 'ABCDEFG', 'ABCDEF', 'ABCDE', 'EDCBCA']), 'BC');
    assert.strictEqual(lcs(['ABCDEFGH', 'ABCDEFG', 'AxBCDEF', 'ABCDxE', 'EDCBCAABCD']), 'BCD');
    assert.strictEqual(lcs(['ABCDEFGH', '1234']), '');
    assert.strictEqual(lcs(['ABCDEFGH']), 'ABCDEFGH');
    assert.strictEqual(lcs(['']), '');
    assert.strictEqual(lcs([]), '');
  });
});
