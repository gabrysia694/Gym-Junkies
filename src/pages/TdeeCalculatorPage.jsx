import React, { useState, useTransition } from "react";
import CalculatorForm from "../components/CalculatorForm";
import TabButton from "../components/TabButton";

const TdeeCalculatorPage = () => {
    const [tab, setTab] = useState("metric");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };


  return (
    <main className="min-h-screen p-0 sm:p-12">
      <h2 className="text-4xl font-bold text-center">
        How Many Calories Your Body Burns Every Day
      </h2>
      <div className="flex md:flex-row justify-center mt-6">
        <p className="font-semibold me-5">Select your SI: </p>
        <TabButton selectTab={() => handleTabChange("metric")} active={tab === "metric"}>
          Metric
        </TabButton>
        <TabButton selectTab={() => handleTabChange("imperial")} active={tab === "imperial"}>
          Imperial
        </TabButton>
      </div>
      <CalculatorForm id={tab} />
    </main>
  );
};

export default TdeeCalculatorPage;
