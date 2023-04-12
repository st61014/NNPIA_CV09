import React, { useState } from 'react'
import TaskCard from "./component/TaskCard";
import Tasks from "./page/Tasks";
import Header from "./component/ui/Header";
import {Route, Routes} from "react-router";
import TaskDetail from "./page/TaskDetail";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path="/task" element={<Tasks/>}/>
            <Route path="/task/:id" element={<TaskDetail/>}/>
        </Routes>

    </div>
  )
}

export default App
