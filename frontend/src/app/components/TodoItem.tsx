"use client";

import { useRouter } from "next/navigation";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoItem({ todo }: { todo: Todo }) {
  const router = useRouter();

  const handleToggle = async () => {
    await fetch(`http://localhost:8000/api/todos/${todo.id}`, {
      method: "PATCH",
    });
    router.refresh();
  };

  return (
    <li className="flex items-center gap-3 p-3 border rounded">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="w-4 h-4 cursor-pointer"
      />
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.title}
      </span>
    </li>
  );
}
