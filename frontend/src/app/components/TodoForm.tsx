"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;

    await fetch("http://localhost:8000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="新しいTodoを入力"
        className="flex-1 border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        追加
      </button>
    </form>
  );
}
