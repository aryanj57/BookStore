import React from "react";

const Cards = ({ name, title, price, image, category }) => {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">{category}</div>
            </h2>
            <p>{title}</p>
            <div className="card-actions justify-between mt-2">
              <div className="badge badge-outline p-3  hover:bg-pink-500 hover:text-white cursor-pointer duration-200">
                ${price}
              </div>
              <div className="badge badge-outline p-3  hover:bg-pink-500 hover:text-white cursor-pointer duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
