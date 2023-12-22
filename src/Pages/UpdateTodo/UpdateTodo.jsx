


import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import AuthHook from "../../Hooks/AuthHook";

const UpdateTodo = () => {
  const { title, priority,  deadline, _id, description } =
    useLoaderData();
  const { user } = AuthHook();
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = async (data) => {
    const taksiteam = {
      email: data.email,
      priority: data.priority,
      title: data.title,
      description: data.description,
      deadline: data.deadline,
    };
    const Taskres = await axios.patch(
      `http://localhost:5000/toDoList/${_id}`,
      taksiteam
    );
    if (Taskres.data.modifiedCount > 0) {
      // show  success popup   
      Swal.fire({

        icon: "success",
        title: `Update this task`,
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }
  };
  return (
    <div className="w-full mx-auto ">
      {/* <h2 className="text-3xl text-center">Create To do </h2> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6 hidden">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            readOnly
            placeholder="User Email"
            {...register("email", { required: true })}
            className="input input-bordered w-full "
          />
        </div>

        {/* title  */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">title</span>
          </label>
          <input
            type="text"
            defaultValue={title}
            placeholder="title"
            {...register("title", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        {/* deadline */}

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">deadline</span>
          </label>
          <input
            type="date"
            defaultValue={deadline}
            placeholder="deadline"
            {...register("deadline", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        {/* priority  */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">priority</span>
          </label>
          <select
            defaultValue={priority}
            {...register("priority", { required: true })}
            className="select select-bordered w-full"
          >
            <option disabled value="default">
              Select a priority
            </option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
        </div>
        {/*  todo descriptions  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <textarea
            defaultValue={description}
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn mt-5 w-full text-white bg-[#00CBBD]"
        >
          Update To do
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;