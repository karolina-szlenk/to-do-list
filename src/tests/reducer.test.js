import { todos } from "../modules/reducer";
import { TODOS_ACTION_TYPES } from "../modules/actions";

describe("todos reducer", () => {
  it("should handle initial state", () => {
    expect(todos(undefined, {})).toEqual({ searchTodoByName: "", todos: [] });
  });

  it("should handle ACTION_ADD_TODO", () => {
    expect(
      todos(
        { todos: [] },
        {
          type: TODOS_ACTION_TYPES.ADD_TODO,
          value: "Buy something sweet",
          id: 0,
        }
      )
    ).toEqual({
      todos: [
        {
          id: 0,
          title: "Buy something sweet",
          completed: false,
        },
      ],
    });
  });
});
