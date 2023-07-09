import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/theme";
import categoriesData from "../DB/categoriesData.json";
import clsx from "clsx";

const SchedulePage = () => {
  const { themeName } = useContext(ThemeContext);
  const [searchValue, setSearchValue] = useState("");

  function search(event) {
    const value = event.target.value;
    setSearchValue(value);
  }

  // Filter the categories based on search query
  const filteredCategories = categoriesData.filter((category) =>
    category.categoryName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section>
      <div className="flex flex-col mx-auto max-w-screen-xl p-5">
        <h2 className="text-3xl font-bold sm:text-4xl">Follow Schedule</h2>
        <input
          placeholder="Search"
          className="border-4 rounded-full text-lg"
          onChange={search}
          value={searchValue}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-x-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className={clsx(
              "max-w-md mx-auto my-4 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:border-purple-500 border-2",
              themeName === "light" ? "bg-white" : "bg-gray-800"
            )}
          >
            <div className="md:flex items-center h-full">
              <img
                className="object-cover h-64 w-full md:w-48 md:h-full"
                loading="lazy"
                src={category.image}
                alt={category.categoryName}
              />
              <div className="p-8">
                <div
                  className={clsx(
                    "uppercase italic tracking-wide text-lg font-semibold",
                    themeName === "light"
                      ? "text-indigo-800"
                      : "text-indigo-400"
                  )}
                >
                  {category.categoryName}
                </div>
                <div
                  className={clsx(
                    themeName === "light" ? "text-gray-500" : "text-white-500"
                  )}
                  style={{ height: "20vh" }}
                >
                  {category.description}
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredCategories.length === 0 && (
          <div className="flex items-center justify-center col-span-2">
            <p className="text-lg text-gray-500">
              No categories found for the search query. Try another search term!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SchedulePage;
