import { render } from "@testing-library/react";
import { ToDo, ToDoList as ToDoListType } from "common/dist/types";
import { ToDoList } from "..";

const toDos: ToDoListType = [
  {
    id: 1,
    todo: "__TODO_1__",
    completed: false,
    userId: 1,
  },
  {
    id: 2,
    todo: "__TODO_2__",
    completed: true,
    userId: 2,
  },
  {
    id: 3,
    todo: "__TODO_3__",
    completed: true,
    userId: 3,
  },
];

jest.mock("../ToDo/ToDo", () => ({
  ToDo: (todo: ToDo) => <p>{todo.todo}</p>,
}));

describe("ToDoList component", () => {
  it("render title of ToDo list", () => {
    const { container } = render(<ToDoList toDoList={[]} searchQuery="" />);
    const title = container.querySelector("h2");
    expect(title?.textContent).toBe("List of ToDos");
  });

  it("render empty ToDo list", () => {
    const { container } = render(<ToDoList toDoList={[]} searchQuery="" />);
    const items = container.querySelector("li");

    expect(items).not.toBeInTheDocument();
  });

  it("render ToDo list without search query", () => {
    const { container } = render(<ToDoList toDoList={toDos} searchQuery="" />);
    const items = container.querySelectorAll("li");

    expect(items).toHaveLength(toDos.length);
    expect(items[0].textContent).toBe("__TODO_1__");
    expect(items[1].textContent).toBe("__TODO_2__");
    expect(items[2].textContent).toBe("__TODO_3__");
  });

  test.each([
    ["1", "__TODO_1__"],
    ["2", "__TODO_2__"],
    ["3", "__TODO_3__"],
  ])("render ToDo list with search query %s", (query, expected) => {
    const { container } = render(
      <ToDoList toDoList={toDos} searchQuery={query} />
    );
    const item = container.querySelector("li");
    expect(item?.textContent).toBe(expected);
  });
});
