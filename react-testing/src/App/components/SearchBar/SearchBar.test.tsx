import { fireEvent, render } from "@testing-library/react";
import { SearchBar } from "..";

describe("SearchBar component", () => {
  it.skip("should change value of input element", () => {
    const spy = jest.fn();
    const { container } = render(
      <SearchBar searchValue={"__VALUE__"} onSearchValueChange={spy} />
    );
    const input = container.querySelector("input");
    expect(input?.value).toBe("__VALUE__");

    fireEvent.change(input!, "__CHANGE__");
    expect(input?.value).toBe("__CHANGE__");
  });
});
