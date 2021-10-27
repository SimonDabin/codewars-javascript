import solution from './main';

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(solution('world')).toEqual('dlrow');
    expect(solution('hello')).toEqual('olleh');
    expect(solution('')).toEqual('');
    expect(solution('h')).toEqual('h');
  });
});