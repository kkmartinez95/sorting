describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    expect(split([1, 0, 5, 7, 10, 2, 9, 22, 3, 11])).toEqual([
      [1, 0, 5, 7, 10],
      [2, 9, 22, 3, 11]
    ]);
  });
});
describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(merge([0, 1, 5, 7, 10], [2, 3, 9, 11, 22])).toEqual([
      0,
      1,
      2,
      3,
      5,
      7,
      9,
      10,
      11,
      22
    ]);
  });
});
describe("MergeSort function", function() {
  it("returns a sorted and merged array", function() {
    expect(mergeSort([2, 0, 7, 11, 3])).toEqual([0, 2, 3, 7, 11]);
  });
  it("calls split", function() {
    spyOn(window, "split").and.callThrough();
    split([2, 1]);
    expect(split).toHaveBeenCalled();
  });
  it("calls merge", function() {
    spyOn(window, "merge").and.callThrough();
    merge([2], [1]);
    expect(merge).toHaveBeenCalled();
  });
});
