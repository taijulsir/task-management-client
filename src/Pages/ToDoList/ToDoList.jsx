import AuthHook from "../../Hooks/AuthHook";

const ToDoList = () => {

    const {user} = AuthHook()

    return (
        <div>
            <h1>Hi,{user?.displayName}</h1>
        </div>
    );
};

export default ToDoList;