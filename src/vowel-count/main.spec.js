import getCount from './main';

describe('Case 1', function() {
  it('should be defined', function() {
    expect(getCount('mabracadabra')).toEqual(5);
  });
});
