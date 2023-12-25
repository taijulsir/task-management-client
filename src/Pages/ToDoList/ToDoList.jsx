import { useQuery } from "@tanstack/react-query";
import AuthHook from "../../Hooks/AuthHook";
import axios from "axios";
import DraggableTask from "../../Component/DraggableTask/DraggableTask";

const ToDoList = () => {

    const { user } = AuthHook()
    const { data: tasks = []} = useQuery({
        queryKey: ["newTask", user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://task-management-server-sigma-beryl.vercel.app/toDoList/${user?.email}`)
            return res.data;
        }
    })

    return (
        <div className="min-h-screen">
            <h1 className="text-2xl font-semibold text-white mt-5">Hi,{user?.displayName}⚡👋</h1>
            <h1 className="text-3xl text-center font-bold text-white ">Complete Your <span className="text-green-600">To-Do-List</span></h1>
            <div>
                <h1 className="text-white">Total Task List : {tasks?.length}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white max-w-5xl mx-auto mt-10">
                    <div>
                        <h1>To-Do</h1>
                        <div>
                            {tasks?.map((task, index) =>
                               <DraggableTask key={index} task={task}></DraggableTask>)}
                        </div>
                    </div>
                    <div> 
                        <h1>Ongoing</h1>
                       
                    </div>
                    <div>
                        <h1>Complete</h1>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ToDoList;