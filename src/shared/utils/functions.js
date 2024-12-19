import { addTask } from "../../app/axios/taskApi/taskApi.ts";
export const addNewTask = async (e, valueInp, refetch, setValueInp) => {
    try {
        console.log(e);
        const newTask = { description: valueInp.trim(), completed: false };
        const response = await addTask(newTask);
        if (response?.id) {
            await refetch();
            setValueInp('');
        }
    }
    catch (err) {
        console.log(err);
    }
};
