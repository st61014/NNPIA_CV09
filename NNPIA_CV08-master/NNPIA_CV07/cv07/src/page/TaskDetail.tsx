import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {Task} from "../data/init-data";
import TaskCard from "../component/TaskCard";

const TaskDetail = () => {

    const {id} = useParams<'id'>();
    const [data, setData] = useState<Task | null | undefined>();
    const [error, setError] = useState<string | undefined>(undefined);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        var result = await fetch(`${backendUrl}/task/${id}`);
        if (result.ok){
            const parsed = await result.json() as Task;
            setData({...parsed, done: false});
        }else{
            setError(await result.json())
        }
    };

    const taskDoneHandle = (task: Task) => {
        setData({...task});
    }
    return <>
        {error}
        {data && <TaskCard task={data} onTaskDone={taskDoneHandle}/>}
    </>
}
export default TaskDetail;