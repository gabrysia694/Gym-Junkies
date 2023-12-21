import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl min-w-screen-sm px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
            >
              <img
                alt="a girl doing exercises"
                src="https://plus.unsplash.com/premium_photo-1664109999537-088e7d964da2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                className="absolute inset-0 h-full w-full object-cover rounded-lg"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              className="lg:py-24"
            >
              <h2 className="text-6xl font-bold sm:text-6xl text-left sm:text-center">
                <div>Your Ultimate Destination for a</div>
                <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 inline-block text-transparent bg-clip-text">
                  Healthier You!
                </span>
              </h2>

              <p className="mt-8 text-left sm:text-center">
                We believe that fitness should be fun and enjoyable.That's why
                we've created a vibrant and friendly atmosphere where you can
                connect with like-minded individuals and make new friends.
              </p>
              <p className="mt-4 text-left sm:text-center sm:text-lg">
                <span className="text-indigo-600 cursor-pointer hover:underline"><Link to="/GuidePage">Join us</Link>
                  
                </span>{" "}
                today and discover the joy of fitness!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.div
              // initial={{ opacity: 0, y: 200 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 2 }}
              className="bg-indigo-700 p-8 md:p-12 lg:px-16 lg:py-24 rounded-lg"
            >
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-4xl">
                  Your One-Stop Destination for Total Body Transformation{" "}
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block px-14">
                  Whether you are a beginner or an advanced fitness enthusiast,
                  our wide range of equipment, classes, and training programs
                  will challenge you to reach your full potential. From strength
                  training and cardio exercises to yoga and dance classes, we
                  have something for everyone.
                </p>

                <div className="mt-4 md:mt-8">
                  <Link
                    to="/GuidePage"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-indigo-700 transition hover:bg-transparent hover:text-white"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Gym room"
                src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
                loading="lazy"
              />

              <img
                alt="a girl doing exercises"
                src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold sm:text-6xl bg-gradient-to-r from-indigo-400 to-indigo-600 inline-block text-transparent bg-clip-text">
              Your Ultimate Destination for Fitness
            </h2>

            <p className="max-w-md mx-auto mt-4 sm:text-lg">
              Our state-of-the-art facility and expert trainers are here to help
              you achieve your fitness goals, whether you're just starting out
              or are a seasoned pro.
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
              </div>
            </li>

            <li>
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
              </div>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="exercise"
                  loading="lazy"
                  className="object-cover h-full w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
