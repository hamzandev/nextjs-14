"use server";

import { revalidatePath } from "next/cache";
import { v4 as uuid } from "uuid";

export const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name");
    const description = formData.get("description");
    const post = await fetch("http://localhost:3000/tasks", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            id: uuid(),
            name,
            description,
        }),
    });
    if (post) {
        revalidatePath("/tasks");
    }
};