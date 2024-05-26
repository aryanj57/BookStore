import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const userInfo = {
      email: email,
      password: password,
    };
    await axios
      .post("http://localhost:8000/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login up successfull");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("users", JSON.stringify(res.data.user));
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          toast.error("error: " + err.response.data.message);
          setTimeout(() => {}, 3000);
        } else toast.error("error: " + err);
      });
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal ">
          <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Login</h3>
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
                  className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200"
                  type="submit"
                >
                  Login
                </button>
                <p>
                  Not registerd yet?{" "}
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Sign-up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
