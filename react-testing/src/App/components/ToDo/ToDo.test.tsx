import { fireEvent, render } from "@testing-library/react";
import { ToDo as ToDoType } from "common/dist/types";
import { ToDo } from "..";

const toDoCard: ToDoType = {
  id: 1,
  todo: "__TODO_1__",
  completed: false,
  userId: 1,
};

const toDoCardCompleted: ToDoType = {
  id: 1,
  todo: "__TODO_1__",
  completed: true,
  userId: 1,
};

describe("ToDo component", () => {
  it("render content of toDo", () => {
    const { container } = render(<ToDo {...toDoCard} />);
    const paragraph = container.querySelector("p");
    expect(paragraph?.textContent).toBe("__TODO_1__");
  });

  it.skip("should click the card", () => {
    const onClick = jest.fn();
    const { container } = render(<ToDo {...toDoCard} />);
    const card = container.querySelector("div");
    fireEvent.click(card!);
    expect(onClick).toHaveBeenCalled();
  });

  it("should render the card uncompleted", () => {
    const { container } = render(<ToDo {...toDoCard} />);
    const card = container.querySelector("div");
    expect(card?.className).toBe("todo ");
  });

  it("should render the card completed", () => {
    const { container } = render(<ToDo {...toDoCardCompleted} />);
    const card = container.querySelector("div");
    expect(card?.className).toBe("todo todo--checked");
  });
});
