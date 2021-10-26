import findShort from './main.js';

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(findShort('bitcoin take over the world maybe who knows perhaps')).toEqual(3);
    expect(findShort('turns out random test cases are easier than writing out basic ones')).toEqual(3);
    expect(findShort("Let's travel abroad shall we")).toEqual(2);
  });
});
