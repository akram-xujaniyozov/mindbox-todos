import React, { ReactNode } from "react";
import { TodoContextProvider } from "./store";

import Layout from "./layout";

import TodoList from "./components/TodoList";

export default function App(): ReactNode {
  return (
    <Layout>
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
    </Layout>
  );
}
