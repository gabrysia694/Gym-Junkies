import React from "react";
import jsonData from "../DB/exerciseData.json";

export default function Card() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
      {jsonData.map((exercise, index) => (
        <div
          key={index}
          className=" max-w-md mx-auto my-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:border-purple-500 border-2"
        >
          <div className="md:flex items-center  ">
            <img
              className="  w-full object-cover md:h-full md:w-48"
              src={exercise.image}
              alt={exercise.exercise}
            />
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {exercise.exercise}
              </div>

              <ul className="p-2 text-gray-500 list-disc">
                {exercise.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
              <div className="mt-6 gap-5 flex items-center">
                <a
                  href={exercise.videoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-500 hover:text-indigo-600 font-semibold"
                >
                  Watch video
                </a>
                <span>
                  Added by :{" "}
                  <a
                    href={`https://github.com/${exercise["gh-name"]}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-500 hover:text-indigo-600 font-semibold"
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
  );
}
