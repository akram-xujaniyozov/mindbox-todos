import React, { ReactNode } from "react";
import classNames from "classnames";

type TodoButtonProps = {
  children: string;
  currentBtn: string;
  activeBtn: string;
  onClick: () => void | undefined;
};

export default function TodoButton({
  children,
  onClick,
  currentBtn,
  activeBtn,
}: TodoButtonProps): ReactNode {
  const btnClassNames = classNames(
    `font-extralight text-sm text-darkgrey`,
    {
      "ml-16": children === "Clear completed",
    },
    {
      "outline outline-lightred outline-offset-1 px-1":
        currentBtn === activeBtn,
    }
  );

  return (
    <button onClick={onClick} className={btnClassNames}>
      {children}
    </button>
  );
}
