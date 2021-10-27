import findNextSquare from './main';
describe('findNextSquare', function() {
  it("should return the next square for perfect squares", function() {
    expect(findNextSquare(121)).toEqual(144, "Wrong output for 121");
    expect(findNextSquare(625)).toEqual(676, "Wrong output for 625");
    expect(findNextSquare(319225)).toEqual(320356, "Wrong output for 319225");
    expect(findNextSquare(15241383936)).toEqual(15241630849, "Wrong output for 15241383936");
  });
  it("should return -1 for numbers which aren't perfect squares", function() {
    expect(findNextSquare(155)).toEqual(-1, "Wrong output for 155");
      expect(findNextSquare(342786627)).toEqual(-1, "Wrong output for 342786627");
  });
});
