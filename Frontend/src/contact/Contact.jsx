import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[600px] flex justify-center items-center">
        <div className="modal-box shadow-md p-12 dark:bg-slate-900 dark:text-white dark:border">
          <div className=" dark:bg-slate-900 dark:text-white dark:border ">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h2 className="font-bold text-lg">Contact</h2>
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
              {/* Message */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  className="textarea textarea-ghost w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-900 dark:text-white dark:border"
                  placeholder="Enter your message"
                  {...register("message", { required: true })}
                />

                <br />
                {errors.message && (
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
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
