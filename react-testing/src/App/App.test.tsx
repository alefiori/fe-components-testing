import { render, waitFor } from "@testing-library/react";
import { ToDoList as ToDoListType } from "common/dist/types";
import { App } from "./App";
import { apiService } from "./utils";

jest.mock("./components/ToDoList/ToDoList", () => ({
  ToDoList: () => <p data-testid="todolist">__THE_TODOLIST__</p>,
}));

jest.mock("./components/SearchBar/SearchBar", () => ({
  SearchBar: () => <p data-testid="searchbar">__THE_SEARCHBAR__</p>,
}));

jest.mock("./components/Header/Header", () => ({
  Header: () => <p data-testid="header">__THE_HEADER__</p>,
}));

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

afterEach(() => {
  jest.restoreAllMocks();
});

describe("App component", () => {
  it("should render the header", () => {
    const { getByTestId } = render(<App />);
    const header = getByTestId("header");
    expect(header.textContent).toBe("__THE_HEADER__");
  });

  it("should render the searchbar", () => {
    const { getByTestId } = render(<App />);
    const searchbar = getByTestId("searchbar");
    expect(searchbar.textContent).toBe("__THE_SEARCHBAR__");
  });

  it("should render the list", () => {
    const { getByTestId } = render(<App />);
    const todolist = getByTestId("todolist");
    expect(todolist.textContent).toBe("__THE_TODOLIST__");
  });

  it("render app page", async () => {
    const getToDos = jest.spyOn(apiService, "getToDos");
    getToDos.mockResolvedValue({
      todos: toDos,
      total: 3,
      skip: 0,
      limit: 10,
    });

    await waitFor(() => {
      const app = render(<App />);

      expect(true).toBe(true);
    });
  });
});
