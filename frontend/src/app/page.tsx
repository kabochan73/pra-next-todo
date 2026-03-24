type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default async function Home() {
  const res = await fetch("http://backend:8000/api/todos", {
    cache: "no-store",
  });
  const todos: Todo[] = await res.json();

  return (
    <main className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-2xl font-bold mb-6">Todo一覧</h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-3 p-3 border rounded"
          >
            <span
              className={todo.completed ? "line-through text-gray-400" : ""}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
