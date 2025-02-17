const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js");

test("adds 14 + 9 to equal 23", () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("Converts 1 Euro to 1.07 Dollars", () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test("Converts 10 Dollars to Yens", () => {
    expect(fromDollarToYen(10)).toBeCloseTo((10 / 1.07) * 156.5);
});

test("Converts 1000 Yens to Pounds", () => {
    expect(fromYenToPound(1000)).toBeCloseTo((1000 / 156.5) * 0.87);
});
