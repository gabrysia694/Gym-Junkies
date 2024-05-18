import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context/theme";
import PageNotFound from "../components/PageNotFound";
import jsonData from "../DB/exerciseData.json";
import clsx from "clsx";
import YoutubeEmbed from "../components/YoutubeEmbed";


export function ExercisePage() {
  const { themeName } = useContext(ThemeContext);

  // get the exercise parameter in '/GuidePage/:exercise'
  let { exerciseName } = useParams();
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(jsonData);

  useEffect(() => {
    //   try to get exercise if it exists in the database
    try {
      setLoading(true);
      const foundExercise = jsonData.find(
        (exc) => exc.exercise === exerciseName
      );
      console.log(foundExercise);

      if (foundExercise) {
        setExercise(foundExercise);
      }

      setLoading(false);
    } catch (error) {
      console.log("Error: ", error);
    }
  }, [exerciseName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!exercise) {
    return <PageNotFound />;
  }

  return (
    <section className="mx-auto max-w-screen-xl">
      <YoutubeEmbed videoLink={exercise.videoLink}/>
      <div className="grid grid-cols-1 gap-6 p-5 py-8 md:grid-cols-12">
        <div className="order-last col-span-4 md:order-first">
          <div className="relative overflow-hidden pb-[100%] h-0">
            <img
              className={clsx(
                "object-cover mx-auto md:w-full bg-white border-2 absolute top-0 left-0 w-full h-full",
                themeName === "light"
                  ? "border-white"
                  : "border-indigo-400 rounded-xl"
              )}
              loading="lazy"
              src={exercise.image}
              alt={exercise.exercise}
            />
          </div>
        </div>
        <div className="flex flex-col col-span-7 px-5 mx-auto max-w-screen-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">{exerciseName}</h2>
          <p className="py-2">
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
                  themeName === "light" ? "text-indigo-800" : "text-indigo-400",
                  "hover:text-indigo-600 font-semibold"
                )}
              >
                {exercise["gh-name"]}
              </a>
            </span>
          </p>
          <div className="mt-4">
            {exercise.instructions.map((step, i) => (
              <div key={i} className="grid gap-12 py-6">
                <div className="flex flex-col gap-3">
                  <h2 className="text-2xl font-bold"> {`Step ${i + 1}`}</h2>
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
    </section>
    // <PageNotFound />
  );
}
