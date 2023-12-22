import AuthHook from "../../Hooks/AuthHook";

const ToDoList = () => {

    const { user } = AuthHook()
    const {data:tasks=[],refetch}

    return (
        <div className="min-h-screen">
            <h1 className="text-2xl font-semibold text-white mt-5">Hi,{user?.displayName}⚡👋</h1>
            <h1 className="text-3xl text-center font-bold text-white ">Complete Your <span className="text-green-600">To-Do-List</span></h1>
            <div>

            </div>


        </div>
    );
};

export default ToDoList;