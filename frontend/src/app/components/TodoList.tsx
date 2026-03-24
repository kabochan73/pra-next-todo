"use client";

import { useState } from "react";
import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoList({ todos }: { todos: Todo[] }) {
  const [query, setQuery] = useState("");

  const filtered = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Todoを検索..."
        className="w-full border rounded px-3 py-2 mb-4"
      />
      <ul className="space-y-2">
        {filtered.length > 0 ? (
          filtered.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <li className="text-gray-400 text-center py-4">該当するTodoがありません</li>
        )}
      </ul>
    </>
  );
}
