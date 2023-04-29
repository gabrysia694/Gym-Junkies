import React from "react";
import jsonData from "../DB/exerciseData.json";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const cardVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};
export default function Card() {
  const [sortedExercises, setSortedExercises] = useState(jsonData);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    sortExercises();
  }, [selectedTag]);

  const sortExercises = () => {
    if (selectedTag === "All") {
      setSortedExercises(jsonData);
    } else {
      const filteredExercises = jsonData.filter((exercise) =>
        exercise.tags.includes(selectedTag)
      );
      setSortedExercises(filteredExercises);
    }
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const uniqueTags = Array.from(
    new Set(jsonData.flatMap((exercise) => exercise.tags))
  );
  return (
    <div>
      <div className="max-w-sm mx-auto mb-4">
        <label className="block mb-2 text-sm font-semibold text-indigo-500">
          Sort by Muscle
        </label>
        <select
          value={selectedTag}
          onChange={handleTagChange}
          className="w-full px-4 py-2 mx-auto text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="All">All</option>
          {uniqueTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 p-3 lg:grid-cols-2">
        <AnimatePresence key={selectedTag}>
          {sortedExercises.map((exercise, index) => (
            <motion.div
              key={index}
              className="max-w-md mx-auto my-4 overflow-hidden bg-white border-2 shadow-md rounded-xl md:max-w-2xl hover:border-purple-500"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={cardVariants}
            >
              <div className="items-center md:flex ">
                <img
                  className="object-cover w-full h-full md:w-48"
                  loading="lazy"
                  src={exercise.image}
                  alt={exercise.exercise}
                />
                <div className="p-8">
                  <div className="text-sm font-semibold tracking-wide text-indigo-800 uppercase">
                    {exercise.exercise}
                  </div>

                  <ul className="p-2 text-gray-500 list-disc">
                    {exercise.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap mt-2">
                    {exercise.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 mb-2 mr-2 text-xs font-semibold text-indigo-800 uppercase bg-indigo-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5 mt-6">
                    <a
                      href={exercise.videoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-indigo-800 hover:text-indigo-600"
                    >
                      Watch video
                    </a>
                    <span>
                      Added by :{" "}
                      <a
                        href={`https://github.com/${exercise["gh-name"]}`}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-indigo-800 hover:text-indigo-600"
                      >
                        {exercise["gh-name"]}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
