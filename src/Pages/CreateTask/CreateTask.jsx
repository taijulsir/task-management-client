import { useForm } from "react-hook-form";
import AuthHook from "../../Hooks/AuthHook";


const CreateTask = () => {
    const { user } = AuthHook()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
  
        const task = {
            title: data.title,
            description: data.description,
            time: data.time,
            deadline: data.deadline,
            priority: data.priority
        }
        console.log(task)
    }

    return (
        <div className=" min-h-screen" >
            <form onSubmit={handleSubmit(onSubmit)} className="font-[sans-serif] max-w-6xl mt-20  mx-auto">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative flex items-center">
                        <input
                            {...register('title', { required: true })}
                            type="text" placeholder="Title"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    <div className="relative flex items-center">
                        <input
                            {...register('description', { required: true })}
                            type="text" placeholder="Description"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    <div className="relative flex items-center">
                        <input
                            {...register('time', { required: true })}
                            type="time" placeholder="Deadline"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    <div className="relative flex items-center">
                        <input
                            {...register('deadline', { required: true })}
                            type="date" placeholder="Deadline"
                            className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />

                    </div>
                    <div className="relative flex items-center">
                        <select
                            {...register('priority', { required: true })}
                            id="priority" name="priority" className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded">
                            <option value="" selected>Select Priority</option>
                            <option value="high">High</option>
                            <option value="moderate">Moderate</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                </div>
                <button type="submit"
                    className="mt-8 px-6 py-2.5 text-sm w-full font-semibold bg-[#007bff] text-white rounded hover:bg-[#006bff]">Submit</button>
            </form>
        </div>
    );
};

export default CreateTask;