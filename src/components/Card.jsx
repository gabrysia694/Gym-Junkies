import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/theme";
import clsx from "clsx";

async function fetchData() {
  try {
    const response = await fetch("https://gymjunkies-b1094-default-rtdb.firebaseio.com/excersizes.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default function Card({ searchQuery }) {
  const { themeName } = useContext(ThemeContext);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      if (data) {
        // Convert the object to an array of exercises
        const exercisesArray = Object.values(data);
        setJsonData(exercisesArray);
      } else {
        setJsonData([]);
      }
    });
  }, []);

  // Filter the exercises based on search query
  const filteredExercises = jsonData.filter(
    (exercise) =>
      exercise.exercise.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedExercises = filteredExercises.sort((a, b) =>
    a.exercise.localeCompare(b.exercise)
  );

  if (sortedExercises.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg text-gray-500">
          No exercises found for the search query. Try another search term!
        </p>
      </div>
    );
  }

  // Function to check if the URL is valid
  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-x-6">
      {sortedExercises.map((exercise, index) => {
        const isValidImageURL = isValidURL(exercise.image);
        const isValidVideoURL = isValidURL(exercise.videoLink);

        return (
          <div
            key={index}
            className={clsx(
              "max-w-md mx-auto my-4 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:border-purple-500 border-2",
              themeName === "light" ? "bg-white" : "bg-gray-800"
            )}
          >
            <div className="md:flex items-center">
              <div className="p-4  w-4/6 mx-auto md:w-3/6">
                {isValidImageURL ? (
                  <img
                    className={clsx(
                      "object-cover h-full mx-auto md:w-full bg-white border-2",
                      themeName === "light"
                        ? "border-white"
                        : "border-indigo-400 rounded-xl"
                    )}
                    loading="lazy"
                    src={exercise.image}
                    alt={exercise.exercise}
                  />
                ) : (
                  <p>Invalid image URL</p>
                )}
              </div>

              <div className="p-4 w-full md:w-3/6">
                <div
                  className={clsx(
                    "uppercase italic tracking-wide text-xl font-semibold",
                    themeName === "light" ? "text-indigo-800" : "text-indigo-400"
                  )}
                >
                  {exercise.exercise}
                </div>
                <div style={{ overflowY: "auto", height: "30vh" }}>
                  <ul
                    className={clsx(
                      "p-2 list-disc ml-2",
                      themeName === "light" ? "text-gray-500" : "text-white-500"
                    )}
                  >
                    {exercise.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 gap-5 flex items-center">
                  {isValidVideoURL ? (
                    <a
                      href={exercise.videoLink}
                      target="_blank"
                      rel="noreferrer"
                      className={clsx(
                        "hover:text-indigo-600 font-semibold",
                        themeName === "light"
                          ? "text-indigo-800"
                          : "text-indigo-400"
                      )}
                    >
                      Watch video
                    </a>
                  ) : (
                    <p>Invalid video URL</p>
                  )}
                  <span
                    className={clsx(
                      themeName === "light" ? "text-black" : "text-white"
                    )}
                  >
                    Added by:{" "}
                    <a
                      href={`https://github.com/${exercise["gh-name"]}`}
                      target="_blank"
                      rel="noreferrer"
                      className={clsx(
                        themeName === "light"
                          ? "text-indigo-800"
                          : "text-indigo-400",
                        "hover:text-indigo-600 font-semibol"
                      )}
                    >
                      {exercise["gh-name"]}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
