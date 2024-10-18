import { ReactNode, Dispatch } from "react";

// Reducer types
enum TodoActionsKind {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

interface TodoType {
  id: string;
  todoName: string;
  isCompleted: boolean;
}

interface TodoActions {
  type: TodoActionsKind;
  payload: string;
}

// Context types
interface ContextProps {
  children: ReactNode;
}

interface TypeContextState {
  todos: TodoType[];
  dispatch: Dispatch<TodoActions>;
}

export {
  TodoActionsKind,
  TodoType,
  TodoActions,
  ContextProps,
  TypeContextState,
};
