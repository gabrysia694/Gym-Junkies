import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";
import jsonData from "../DB/exerciseData.json";
import clsx from "clsx";

export default function Card({ searchQuery }) {
  const { themeName } = useContext(ThemeContext);

  // Filter the exercises based on search query
  const filteredExercises = [];
  for (const muscleGroup in jsonData.muscleGroups) {
    let exercises = jsonData.muscleGroups[muscleGroup].filter((exercise) =>
      exercise.exercise.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort the exercises alphabetically within each muscle group
    exercises = exercises.sort((a, b) => a.exercise.localeCompare(b.exercise));

    if (exercises.length > 0) {
      filteredExercises.push({
        muscleGroup,
        exercises
      });
    }
  }

  if (filteredExercises.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg text-gray-500">
          No exercises found for the search query. Try another search term!
        </p>
      </div>
    );
  }

  return (
    <div className="p-3">
      {filteredExercises.map((group, index) => (
        <div key={index} className="mb-6">
          <h2 className={clsx(
              "text-2xl font-bold mb-4 px-16 py-1 border rounded uppercase",
              themeName === "light"
                ? "bg-gray-300 text-black border-gray-300"
                : "bg-gray-700 text-white border-gray-700"
            )}>
            {group.muscleGroup}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-x-6">
            {group.exercises.map((exercise, index) => (
              <div
                key={index}
                className={clsx(
                  "max-w-md mx-auto my-4 rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:border-purple-500 border-2",
                  themeName === "light" ? "bg-white" : "bg-gray-800"
                )}
              >
                <div className="md:flex items-center">
                  <div className="p-4  w-4/6 mx-auto md:w-3/6">
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
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
