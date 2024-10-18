import { v1 as uuid } from "uuid";
import { TodoActions, TodoType, TodoActionsKind } from "./types";

const todosReducer = (state: TodoType[], action: TodoActions): TodoType[] => {
  const { type, payload } = action;
  switch (type) {
    case TodoActionsKind.ADD_TODO:
      return [...state, { id: uuid(), todoName: payload, isCompleted: false }];
    case TodoActionsKind.TOGGLE_TODO:
      const index = state.findIndex((todo) => todo.id === payload);
      const todo = { ...state[index] };
      todo.isCompleted = !todo.isCompleted;
      state.splice(index, 1, todo);
      return [...state];
    case TodoActionsKind.DELETE_TODO:
      return [...state].filter((todo) => !todo.isCompleted);
    default:
      return state;
  }
};

export { todosReducer };
