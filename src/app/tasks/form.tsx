"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { handleSubmit } from "@/lib/actions/tasks";
import { toast } from "sonner";

export default function AddTaskForm() {
  const { pending, action, data: dataForm } = useFormStatus();
  console.log(pending, action, dataForm);
  
  const data = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={data}
      action={handleSubmit}
      className="p-5 rounded-lg shadow bg-zinc-50"
    >
      <div className="mb-3">
        <Input placeholder="Task Name" type="text" name="name" />
      </div>
      <div className="mb-3">
        <Input placeholder="Task Description" type="text" name="description" />
      </div>
      <div className="flex justify-end">
        <Button disabled={pending}>Save</Button>
      </div>
    </form>
  );
}
