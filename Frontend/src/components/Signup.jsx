import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    const userInfo = {
      fullname: name,
      email: email,
      password: password,
    };
    await axios
      .post("http://localhost:8000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signed up successfull");
          navigate(-1);
          localStorage.setItem("users", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          toast.error("error: " + err.response.data.message);
        } else toast.error("error: " + err);
      });
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <div className="w-[600px] flex justify-center items-center">
          <div className="modal-box  dark:bg-slate-900 dark:text-white dark:border">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Sign-up</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="name"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-900 dark:text-white dark:border"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-900 dark:text-white dark:border"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-900 dark:text-white dark:border"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex space-x-16 mt-4 px-3">
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200"
                >
                  Register
                </button>
                <p>
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => {
                      document.getElementById("my_modal_3")?.showModal();
                    }}
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
