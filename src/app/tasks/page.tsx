import { revalidatePath } from "next/cache";
import { Suspense } from "react";
import { v4 as uuid } from "uuid";
import AddTaskForm from "./form";



export default async function Tasks() {
  const getAllTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks", {
      cache: "no-store",
    });
    // console.log(await res.json());
    const data = await res.json();
    return data;
  };

  const tasks = await getAllTasks();


  return (
    <main>
      <div className="flex gap-8 py-10">
        <div className="w-8/12">
          <h1 className="text-xl mb-5 font-bold uppercase">tasks list</h1>
          {!tasks ? <span className="italic font-mono">-- Belum ada Tasks --</span> : (
            <div className="grid grid-cols-2 gap-5">
              <Suspense fallback={<span>Loading...</span>}>
                {tasks?.map((task: any) => (
                  <div
                    key={task?.id}
                    className="shadow p-4 rounded-lg cursor-pointer hover:shadow-lg duration-200 bg-zinc-50"
                  >
                    <h3 className="text-lg">{task?.name}</h3>
                    <span className="text-gray-400">{task?.description}</span>
                  </div>
                ))}
              </Suspense>
            </div>
          )}
        </div>
        <div className="w-4/12">
          <h1 className="text-xl mb-5 font-bold uppercase">New Tasks</h1>
          <AddTaskForm  />
        </div>
      </div>
    </main>
  );
}
