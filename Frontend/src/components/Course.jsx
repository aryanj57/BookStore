import { Link } from "react-router-dom";
import booksList from "../assets/list.json";
import Cards from "./Cards";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">here!</span>
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure
            repellat doloremque iste laborum, veniam assumenda neque excepturi
            dicta quam vero iusto! Minima nostrum molestiae minus quaerat vel
            adipisci esse.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white hover:bg-pink-700 cursor-pointer px-4 py-2 rounded-md mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {booksList.map((item) => (
            <Cards
              key={item.id}
              name={item.name}
              title={item.title}
              price={item.price}
              image={item.image}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
