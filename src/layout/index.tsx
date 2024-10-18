import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): ReactNode {
  return (
    <div className="flex justify-center">
      <div className="bg-lightestgrey px-5 py-4 w-5/12 flex flex-col shadow">
        <h1 className="text-lightred text-center text-9xl font-thin lowercase mb-3">
          Todos
        </h1>
        <div className="bg-white shadow">{children}</div>
        <div className="flex flex-col items-center">
          <div className="relative bg-white bottom-0 left-0 h-1.5 z-1 w-[550px] border-b-[1px] border-grey-200 shadow"></div>
          <div className="relative bg-white bottom-0 left-0 h-1.5 z-1 w-[542px] border-b-[1px] border-grey-200 shadow"></div>
        </div>
      </div>
    </div>
  );
}
