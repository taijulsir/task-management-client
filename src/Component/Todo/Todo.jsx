

import { useEffect, useState } from "react";



import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AuthHook from "../../Hooks/AuthHook";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const Todo = () => {
    const { user } = AuthHook()
    const [todo, setTodo] = useState([]);
    const [progress, setProgress] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [task, setTasks] = useState([]);
    const { data: tasks = [],refetch } = useQuery({
        queryKey: ["newTask", user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/toDoList/${user?.email}`)
            setTasks(res.data)
            return res.data;
        }
    })

  

    useEffect(() => {
        if (task) {
            const filteredTodo = task.filter((item) => item.status === "todo");
            const filteredProgress = task.filter(
                (item) => item.status === "progress"
            );
            const filteredCompleted = task.filter(
                (item) => item.status === "completed"
            );
            setTodo([...filteredTodo]);
            setProgress([...filteredProgress]);
            setCompleted([...filteredCompleted]);
        }
    }, [task]);

    const [openDropdownMap, setOpenDropdownMap] = useState({});

    const toggleDropdown = (taskId) => {
        setOpenDropdownMap((prevMap) => ({
            ...prevMap,
            [taskId]: !prevMap[taskId],
        }));
    };

    const handelDelete = (id) => {
       
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            console.log(id)
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/taskDelete/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (
            !destination ||
            (destination.droppableId === source.droppableId &&
                destination.index === source.index)
        ) {
            return;
        }

        const updatedTasks = Array.from(task);
        const [movedTask] = updatedTasks.splice(source.index, 1);
        updatedTasks.splice(destination.index, 0, movedTask);

        console.log(draggableId);
     
            axios.patch(`/task?id=${draggableId}`, {
                status: destination.droppableId,
            })
            .then(() => {
                refetch();
            });
    };
console.log(todo)
    return (
        <div className="px-5">
            <div className="flex justify-center items-center content-center mt-5">
                <h1 className="mx-auto text-center text-3xl">
                    Welcome Back{" "}
                    <span className=" text-blue-500">{user?.displayName},</span> Here Your
                    Daily Task
                </h1>
                <p className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                    </svg>
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-5 mt-10">
                <DragDropContext onDragEnd={onDragEnd}>
                    <div>
                        <Droppable droppableId="todo">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="bg-[#EEF2F5] px-4"
                                >
                                    <div className="h-[500px]">
                                        <h1 className="text-center mt-3 mb-3">Todo</h1>
                                        {todo?.map((task, index) => (
                                            <Draggable
                                                key={task._id}
                                                draggableId={task._id}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        key={task._id}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="w-full justify-center mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
                                                    >
                                                        <div className="px-4 pt-4">
                                                            <div className="relative">
                                                                <div className="flex justify-between items-center">
                                                                    <h1 className="text-red-600">{task.title}</h1>
                                                                    <button
                                                                        id={`dropdownButton-${task._id}`}
                                                                        onClick={() => toggleDropdown(task._id)}
                                                                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                                                                        type="button"
                                                                    >
                                                                        <span className="sr-only">
                                                                            Open dropdown
                                                                        </span>
                                                                        <svg
                                                                            className="w-5 h-5"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 16 3"
                                                                        >
                                                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                                {/* Dropdown menu */}
                                                                <div
                                                                    id={`dropdown-${task._id}`}
                                                                    className={`absolute right-0 z-50 ${openDropdownMap[task._id] ? "" : "hidden"
                                                                        } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                                                                >
                                                                    <ul
                                                                        className="py-2"
                                                                        aria-labelledby={`dropdownButton-${task._id}`}
                                                                    >
                                                                        <li>
                                                                            <Link
                                                                                to={`/dashboard/updateTask/${task._id}`}
                                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                                            >
                                                                                Update
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                
                                                                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                                                onClick={() => handelDelete(task._id)}
                                                                            >
                                                                                Delete
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="p-4">
                                                            <h1 className="text-2xl">{task.Title}</h1>
                                                            <p>{task.Description}</p>
                                                            <div className="flex items-center justify-between mt-4">
                                                                <span>
                                                                    <img
                                                                        className="object-cover w-10 h-10 rounded-full"
                                                                        src={user?.photoURL}
                                                                        alt=""
                                                                    />
                                                                </span>
                                                                <span>10 January</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </div>

                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>

                    <div>
                        <Droppable droppableId="progress">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="bg-[#EEF2F5] px-4"
                                >
                                    <div className="h-[500px]">
                                        <h1 className="text-center mt-3 mb-3">Progress</h1>
                                        {progress?.map((task, index) => (
                                            <Draggable
                                                key={task._id}
                                                draggableId={task._id}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        key={task._id}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="w-full justify-center mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
                                                    >
                                                        <div className="px-4 pt-4">
                                                            <div className="relative">
                                                                <div className="flex justify-between items-center">
                                                                    <h1>{task.priority}</h1>
                                                                    <button
                                                                        id={`dropdownButton-${task._id}`}
                                                                        onClick={() => toggleDropdown(task._id)}
                                                                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                                                                        type="button"
                                                                    >
                                                                        <span className="sr-only">
                                                                            Open dropdown
                                                                        </span>
                                                                        <svg
                                                                            className="w-5 h-5"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 16 3"
                                                                        >
                                                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                                {/* Dropdown menu */}
                                                                <div
                                                                    id={`dropdown-${task._id}`}
                                                                    className={`absolute right-0 z-50 ${openDropdownMap[task._id] ? "" : "hidden"
                                                                        } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                                                                >
                                                                    <ul
                                                                        className="py-2"
                                                                        aria-labelledby={`dropdownButton-${task._id}`}
                                                                    >
                                                                        <li>
                                                                            <Link
                                                                                to={`/dashboard/updateTask/${task._id}`}
                                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                                            >
                                                                                Update
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                                                onClick={() => handelDelete(task._id)}
                                                                            >
                                                                                Delete
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="p-4">
                                                            <h1 className="text-2xl">{task.Title}</h1>
                                                            <p>{task.Description}</p>
                                                            <div className="flex items-center justify-between mt-4">
                                                                <span>
                                                                    <img
                                                                        className="object-cover w-10 h-10 rounded-full"
                                                                        src={user?.photoURL}
                                                                        alt=""
                                                                    />
                                                                </span>
                                                                <span>10 January</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </div>

                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>

                    <div>
                        <Droppable droppableId="completed">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="bg-[#EEF2F5] px-4"
                                >
                                    <div className="h-[500px]">
                                        <h1 className="text-center mt-3 mb-3">Complete</h1>
                                        {completed?.map((task, index) => (
                                            <Draggable
                                                key={task._id}
                                                draggableId={task._id}
                                                index={index}
                                            >
                                                {(provided) => (
                                                    <div
                                                        key={task._id}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="w-full justify-center mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
                                                    >
                                                        <div className="px-4 pt-4">
                                                            <div className="relative">
                                                                <div className="flex justify-between items-center">
                                                                    <h1>{task.priority}</h1>
                                                                    <button
                                                                        id={`dropdownButton-${task._id}`}
                                                                        onClick={() => toggleDropdown(task._id)}
                                                                        className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                                                                        type="button"
                                                                    >
                                                                        <span className="sr-only">
                                                                            Open dropdown
                                                                        </span>
                                                                        <svg
                                                                            className="w-5 h-5"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 16 3"
                                                                        >
                                                                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                                {/* Dropdown menu */}
                                                                <div
                                                                    id={`dropdown-${task._id}`}
                                                                    className={`absolute right-0 z-50 ${openDropdownMap[task._id] ? "" : "hidden"
                                                                        } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                                                                >
                                                                    <ul
                                                                        className="py-2"
                                                                        aria-labelledby={`dropdownButton-${task._id}`}
                                                                    >
                                                                        <li>
                                                                            <Link
                                                                                to={`/dashboard/updateTask/${task._id}`}
                                                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                                            >
                                                                                Update
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                                                                onClick={() => handelDelete(task._id)}
                                                                            >
                                                                                Delete
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="p-4">
                                                            <h1 className="text-2xl">{task.Title}</h1>
                                                            <p>{task.Description}</p>
                                                            <div className="flex items-center justify-between mt-4">
                                                                <span>
                                                                    <img
                                                                        className="object-cover w-10 h-10 rounded-full"
                                                                        src={user?.photoURL}
                                                                        alt=""
                                                                    />
                                                                </span>
                                                                <span>10 January</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </div>

                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>

                </DragDropContext>
            </div>
        </div>
    );
};

export default Todo;