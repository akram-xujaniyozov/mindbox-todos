import React, { ReactNode, useContext, Fragment, useState } from "react";
import { TodoContext, TodoActionsKind, TodoType } from "../store";

import TodoItem from "./TodoItem";
import TodoButton from "./TodoButton";

const btnKinds: string[] = ["all", "active", "completed", "clear completed"];

export default function TodoList(): ReactNode {
  const { todos, dispatch } = useContext(TodoContext);
  const [selectedTodos, setSelectedTodos] = useState<TodoType[]>([]);
  const [activeBtn, setActiveBtn] = useState<string>("all");
  const [statusTodos, setStatusTodos] = useState<string>("");

  // Filtering Todos
  const filterTodos: (type: string) => TodoType[] = (type: string) =>
    todos.filter((todo) =>
      type === "active" ? !todo.isCompleted : todo.isCompleted
    );

  // Finding Todos Existing
  const findTodosExisting = (length: number, statusTodos: string) =>
    length === 0
      ? setStatusTodos(`Now, ${statusTodos} todos are not existing!!!`)
      : setStatusTodos("");

  const handleClick: (type: string) => void | undefined = (type: string) => {
    switch (type) {
      case "active":
        const activeTodos = filterTodos(type);
        findTodosExisting(activeTodos.length, "Active");
        setSelectedTodos(activeTodos);
        setActiveBtn(type);
        break;
      case "completed":
        const completedTodos = filterTodos(type);
        findTodosExisting(completedTodos.length, "Completed");
        setSelectedTodos(completedTodos);
        setActiveBtn(type);
        break;
      case "all":
        setSelectedTodos([]);
        setStatusTodos("");
        setActiveBtn(type);
        break;
      case "clear completed":
        dispatch({ type: TodoActionsKind.DELETE_TODO, payload: "" });
        break;
      default:
        return;
    }
  };

  // Amount active todos
  const activeTodosAmount = filterTodos("active").length;

  // Rendered Todos
  const renderedTodos =
    statusTodos.length > 0 ? (
      <p className="text-center text-darkgrey text-xl py-5">{statusTodos}</p>
    ) : (
      (selectedTodos.length > 0 ? selectedTodos : todos).map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))
    );

  return (
    <Fragment>
      <ul>{renderedTodos}</ul>
      <div className="flex items-center justify-between px-3 py-2 border-b-[1px] border-grey-200">
        <p className="font-extralight text-sm text-darkgrey">
          {activeTodosAmount} items left
        </p>
        <div className="flex items-center gap-x-6">
          {btnKinds.map((btnName, index) => (
            <TodoButton
              key={`${index}_${btnName}`}
              onClick={() => handleClick(btnName)}
              currentBtn={btnName}
              activeBtn={activeBtn}
            >
              {btnName.at(0)?.toUpperCase() + btnName.slice(1)}
            </TodoButton>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
