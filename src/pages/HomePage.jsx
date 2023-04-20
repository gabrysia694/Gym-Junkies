import React from "react";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <section>
      <div className="flex flex-col mx-auto max-w-screen-xl p-5">
        <h2 className="text-3xl font-bold sm:text-4xl">Gym Junkies</h2>
        <p className="mt-4 text-gray-600">
          Gym Junkies is a community of people who love to workout. We are a
          group of people who are passionate about fitness and want to share our
          knowledge with others. We are a community of people who are passionate
          about fitness and want to share our knowledge with others.
        </p>
      </div>
      <Card />
    </section>
  );
}
