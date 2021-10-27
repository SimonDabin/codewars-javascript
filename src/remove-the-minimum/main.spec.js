import removeSmallest from './main';

describe("removeSmallest", function() {
    it("works for the examples", function() {
      expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
      expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
      expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
      expect(removeSmallest([])).toEqual([], "Wrong result for []");
    });
    
    it("returns [] if the list has only one element", function() {
      for (let i = 0; i < 10; ++i) {
        let x = ~~(Math.random() * 400);
        expect(removeSmallest([x])).toEqual([], `Wrong result for ${[x]}`);
      }
    });
    
    function randomArray(length) {
      return Array.from({length: length}, () => ~~(Math.random() * 400));
    }
    
    it("returns a list that misses only one element", function() {
      for(let i = 0; i < 10; ++i) {
        let arr = randomArray(~~(Math.random() * 10) + 1);
        let l = arr.length;
        expect(removeSmallest(arr).length).toEqual(l - 1, `Wrong result for ${arr}`);
      }
    });
  });