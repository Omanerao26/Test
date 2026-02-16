import sum from "./sum.js";


describe("test for the sum fxn", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });

    test("adds 5 + 25 to equal 30", () => {
        expect(sum(5, 25)).toBe(30);
    });
});