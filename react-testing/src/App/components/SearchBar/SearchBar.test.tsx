import { fireEvent, render } from "@testing-library/react";
import { SearchBar } from "..";

describe("SearchBar component", () => {
  it("should render input with value", () => {
    const spy = jest.fn();
    const { container } = render(
      <SearchBar searchValue={"__VALUE__"} onSearchValueChange={spy} />
    );
    const input = container.querySelector("input");
    expect(input?.value).toBe("__VALUE__");
  });

  // cambio evento
  it("should change value of input element", () => {
    const spy = jest.fn();
    const { container } = render(
      <SearchBar searchValue={"__VALUE__"} onSearchValueChange={spy} />
    );
    const input = container.querySelector("input");
    fireEvent.change(input!, { target: { value: "__CHANGE__" } });
    expect(spy).toHaveBeenCalledWith("__CHANGE__");
  });
});
