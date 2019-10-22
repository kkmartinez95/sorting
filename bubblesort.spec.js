describe("Bubble Sort", function() {
  //   beforeAll(function() {
  //     spyOn(window, "swap").and.callThrough();
  //   });
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("sorts values in an array", function() {
    expect(bubbleSort([2, 6, 5, 9, 0])).toEqual([0, 2, 5, 6, 9]);
  });
  it("it calls swap five times", function() {
    spyOn(window, "swap").and.callThrough();
    bubbleSort([2, 6, 5, 9, 0]);
    expect(swap.calls.count()).toEqual(5);
  });
});
