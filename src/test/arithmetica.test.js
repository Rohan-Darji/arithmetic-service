const { add, sub, mul, div } = require("../arithmetica");

test('20 + 3 equal to 23', () => {
    expect(add(20, 3)).toBe(23);
});

test('25 + 25 equal to 50', () => {
    expect(add(25, 25)).toBe(50);
});

test('29 + 40 equal to 69', () => {
    expect(add(29, 40)).toBe(69);
});

test('29 - 39 equal to -10', () => {
    expect(sub(29, 39)).toBe(-10);
});

test('2 * 4 equal to 8', () => {
    expect(mul(2, 4)).toBe(8);
});

test('39/3 equal to 13', () => {
    expect(div(39, 3)).toBe(13);
});