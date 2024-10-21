import React, { useContext, ReactNode } from "react";
import classNames from "classnames";
import { TodoType, TodoContext, TodoActionsKind } from "../../../store";

type TodoItemProps = {
  todo: TodoType;
};

export default function TodoItem({ todo }: TodoItemProps): ReactNode {
  const { dispatch } = useContext(TodoContext);

  const handleClick: (id: string) => void = (id: string) => {
    dispatch({ type: TodoActionsKind.TOGGLE_TODO, payload: id });
  };

  const todoName = todo.todoName[0].toUpperCase() + todo.todoName.slice(1);

  return (
    <li
      onClick={() => handleClick(todo.id)}
      className="flex items-center px-3 py-4 border-b-[1px] border-grey-200"
    >
      <div
        className={classNames(
          `border-[1px] w-8 h-8 rounded-full flex justify-center items-center`,
          {
            "border-lightgreen": todo.isCompleted,
          },
          {
            "border-lightergrey": !todo.isCompleted,
          }
        )}
      >
        {todo.isCompleted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#76c0ae"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        )}
      </div>
      <p
        className={`${
          todo.isCompleted && "line-through text-lightgrey decoration-2"
        } text-3xl text-dark font-thin ml-4`}
      >
        {todoName}
      </p>
    </li>
  );
}
