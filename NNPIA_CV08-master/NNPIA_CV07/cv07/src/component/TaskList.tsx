import React, {useState} from "react";
import {Task} from "../data/init-data";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TaskCard from "./TaskCard";

interface Props {
    tasks: Array<Task>
}

const TaskList = ({tasks}: Props) => {
        const taskDoneHandle = (task: Task) => {
        }

        return <Container maxWidth="sm">
            <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
            >Aktuální tasky</Typography>

            {tasks.filter(t => !t.done).map(t =>
                <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>)}

            <Typography
                component="h1"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
            >Splněné tasky</Typography>

            {tasks.filter(t => t.done).map(t =>
                <TaskCard key={t.id} task={t} onTaskDone={taskDoneHandle}/>)}

        </Container>

};
export default TaskList;