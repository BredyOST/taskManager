import {TasksType} from "../types/types.ts";
import React from "react";
import {addTask} from "../../app/axios/taskApi/taskApi.ts";


export const addNewTask =
    async (
        e: React.KeyboardEvent<HTMLInputElement | React.MouseEvent<HTMLButtonElement>>,
        valueInp:string,
        refetch: () => Promise<void>,
        setValueInp: (arg:string) => void
    ) => {
        try {
                const newTask: Pick<TasksType, 'description' | 'completed'> = { description: valueInp.trim(), completed: false };
                const response = await addTask(newTask);
                if (response?.id) {
                    await refetch();
                    setValueInp('');
                }
        } catch (err) {
            console.log(err);
        }
    };