import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";

import categoriesData from "../DB/categoriesData.json";
import clsx from "clsx";

const SchedulePage = () => {
  const { themeName } = useContext(ThemeContext);
  return (
    <section>
      <div className='flex flex-col mx-auto max-w-screen-xl p-5'>
        <h2 className='text-3xl font-bold sm:text-4xl'>Follow Schedule</h2>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 p-3'>
        {categoriesData.map((category) => (
          <div
            key={category.id}
            className={clsx(
              "max-w-md mx-auto my-4 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:border-purple-500 border-2",
              themeName === "light" ? "bg-gray-800" : "bg-white"
            )}
          >
            <div className=' md:flex items-center h-full'>
              <img
                className='object-cover h-64 w-full md:w-48 md:h-full'
                loading='lazy'
                src={category.image}
                alt={category.categoryName}
              />
              <div className='p-8'>
                <div
                  className={clsx(
                    "uppercase italic tracking-wide text-lg font-semibold",
                    themeName === "light"
                      ? "text-indigo-400"
                      : "text-indigo-800"
                  )}
                >
                  {category.categoryName}
                </div>
                <div
                  className={clsx(
                    themeName === "light" ? "text-white-500" : "text-gray-500"
                  )}
                  style={{ height: "20vh" }}
                >
                  {category.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SchedulePage;
