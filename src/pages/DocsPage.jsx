import React from "react";

export default function DocsPage() {
  const codeString = `{
  "exercise": "Exercise Name", 
  "instructions": ["Instruction 1", "Instruction 2", "Instruction 3"],
  "videoLink": " Youtube video link",
  "gh-name": "Your Github username",
  "image": "Excercise image link"
}`;
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f6fa] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {/* For Grid Background  */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>

      <article className="grid justify-center items-center max-w-5xl mx-auto ">
        <div className="  text-base leading-7 text-black">
          <p className="mb-5 text-xl font-bold tracking-tight text-black ">
            Follow these steps to add your guides from Github
          </p>
          <div className="flex items-center gap-5">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              {" "}
              Fork this repository
            </p>
          </div>
          <img
            src="https://user-images.githubusercontent.com/88102392/233709521-6e8f7276-7f1b-4713-88f1-b6d40c88f421.png"
            alt="Fork the repo"
            className="mt-5"
          />
          <div className="mt-5 flex items-center gap-5">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Click on Go to file(I'm doing from{" "}
              <span className="bg-gray-700 text-white p-1 rounded-md">
                gabrysia694/Gym-Junkies
              </span>{" "}
              )
            </p>
          </div>

          <img
            src="https://user-images.githubusercontent.com/88102392/233709843-afc4cc88-4a9e-4607-9903-61aef80025db.png"
            alt="Fork the repo"
            className="mt-5"
          />

          <div className="mt-5 flex items-center gap-5">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Add following code to end of{" "}
              <span className="bg-gray-800 p-1 rounded-md text-white">
                src/DB/exerciseData.json
              </span>
            </p>
          </div>
          <code className="block">{codeString}</code>
          <div className="flex items-center gap-5 mt-5">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              {" "}
              Commit your changes
            </p>
          </div>
          <img
            src="https://user-images.githubusercontent.com/88102392/233711184-ef52293f-2114-4adb-b609-3fbd236f6445.png"
            alt="add professional commits like this"
            className="mt-5"
          />
          <div className="flex items-center gap-5 mt-5">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Create Pull Request & wait for merge
            </p>
          </div>

          <img
            src="https://user-images.githubusercontent.com/88102392/233711649-5dbe634b-5ae6-4ea2-a77f-389eacd31dc3.png"
            alt="add professional commits like this"
            className="mt-5"
            loading="lazy"
          />
        </div>
      </article>
    </section>
  );
}
