import countSheeps from './main';
describe("Tests", () => {
  it("test", () => {
    var array1 = [
        true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true, true 
      ];
    expect(countSheeps(array1)).toEqual(17, 'There are 17 sheeps in total');
  });
});
