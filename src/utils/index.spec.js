import { formatNumber } from "./index";

describe("utils", () => {
  describe("formatNumber", () => {
    it("should format a number", () => {
      const value = formatNumber(11.326359370403821);
      expect(value).toEqual("11.33");
    });

    it("should not format an invalid number", () => {
      const value = formatNumber(undefined);
      expect(value).toEqual("NaN");
    });
  });
});
