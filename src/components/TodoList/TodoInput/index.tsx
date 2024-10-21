import React, {
  useState,
  useContext,
  ReactNode,
  ChangeEvent,
  FormEvent,
} from "react";
import { TodoContext, TodoActionsKind } from "../../../store";

export default function TodoInput(): ReactNode {
  const [todo, setTodo] = useState<string>("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo = todo.trim();
    if (!newTodo.length || isFinite(+newTodo)) return;
    dispatch({ type: TodoActionsKind.ADD_TODO, payload: newTodo });
    setTodo("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full border-b-2 border-neutral-200"
    >
      <button className="bg-transparent px-3 py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#e6e6e6"
          className="size-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div className="grow flex bg-transparent">
        <input
          className="w-full text-dark text-3xl font-thin placeholder:italic placeholder:text-lightgrey focus:outline-none ml-1"
          onChange={handleChange}
          autoFocus
          value={todo}
          type="text"
          placeholder="What needs to be done?"
        />
      </div>
    </form>
  );
}
