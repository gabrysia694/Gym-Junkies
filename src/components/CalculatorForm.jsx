import React, { useEffect, useRef, useState } from "react";
import { useTdeeCalculator } from "../hooks/useTdeeCalculator";
import IdealWeightTable from "./IdealWeightTable";
import BmiResultTable from "./BmiResultTable";
import TdeeResult from "./TdeeResult";

const CalculatorForm = (props) => {
  const {
    age,
    setAge,
    height,
    setHeight,
    weight,
    setWeight,
    gender,
    setGender,
    activityLevel,
    setActivityLevel,
    bodyFat,
    setBodyFat,
    result,
    handleSubmit,
  } = useTdeeCalculator();
  const formRef = useRef(null);
  const resultRef = useRef(null);
  const [weightInPounds, setWeightInPounds] = useState("")

  useEffect(() => {
    if (props.id === "imperial") {
      const weightImperial = parseFloat(weightInPounds) * 0.453592;
      setWeight(weightImperial.toString());
    }
  }, [props.id, weightInPounds, setWeight]);

  useEffect(() => {
    if (result) {
      // Scroll to the result section
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);
  return (
    <section>
      {props.id === "metric" && (
        <div
          className="mx-auto max-w-md px-6 py-12 border-0 shadow-lg sm:rounded-3xl flex justify-between items-center"
          id={props.id}
          ref={formRef}>
          <form className="text-sm" onSubmit={handleSubmit}>
            <div className="md:flex md:items-center w-full mb-6">
              <div>
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="gender">
                  Your biological gender
                </label>
              </div>
              <div className=" flex gap-4 items-end">
                <div>
                  <input
                    className="mr-1"
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input
                    className="mr-1"
                    type="radio"
                    id="Female"
                    name="gender"
                    value="Female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />
                  <label htmlFor="Female">Female</label>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center w-full mb-6">
              <div className="md:w-1/3">
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="age">
                  Age
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="border-2 border-gray-200 rounded w-20 py-1 px-3 text-gray-700"
                  type="text"
                  id="age"
                  name="age"
                  value={age}
                  maxLength={3}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center w-full mb-6">
              <div className="md:w-1/3">
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="weight">
                  Weight
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className=" border-2 border-gray-200 rounded w-20 py-1 px-3 text-gray-700"
                  type="text"
                  id="weight"
                  name="weight"
                  value={weight}
                  placeholder="kg"
                  maxLength={6}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center w-full mb-6">
              <div className="md:w-1/3">
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="height">
                  Height
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="border-2 border-gray-200 rounded w-20 py-1 px-3 text-gray-700"
                  type="text"
                  id="height"
                  name="height"
                  value={height}
                  placeholder="cm"
                  maxLength={3}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center w-full mb-6">
              <div className="md:w-1/3">
                <label
                  className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="activity">
                  Activity
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  name="activity"
                  id="activity"
                  className="border-2 border-gray-200 rounded w-60 py-1 px-3 text-gray-700 font-light text-sm">
                  <option value="1.2" selected>
                    Sedentary (office job)
                  </option>
                  <option value="1.375">Light Exercise (1-2 days/week)</option>
                  <option value="1.55">Moderate Exercise (3-5 days/week)</option>
                  <option value="1.725">Heavy Exercise (6-7 days/week)</option>
                  <option value="1.9">Athlete (2x per day) </option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center w-full mb-6">
              <div className="md:w-1/3">
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="bodFat">
                  Body fat % (optional)
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="border-2 border-gray-200 rounded w-20"
                  type="text"
                  id="bodyFat"
                  name="bodyFat"
                  value={bodyFat}
                  onChange={(e) => setBodyFat(e.target.value)}
                  placeholder="15"
                  maxLength={3}
                />
                %
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit">
                  Calculate
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {props.id === "imperial" && (
        <div
          className="mx-auto max-w-md px-6 py-12 border-0 shadow-lg sm:rounded-3xl flex justify-between items-center"
          id={props.id}>
          <form className="text-sm" onSubmit={handleSubmit}>
            <div className="md:flex md:items-center w-full mb-6">
              <div>
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="gender">
                  Your biological gender
                </label>
              </div>
              <div className=" flex gap-4 items-end">
                <div>
                  <input
                    className="mr-1"
                    type="radio"
                    id="man"
                    name="man"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  />
                  <label htmlFor="man">Male</label>
                </div>
                <div>
                  <input
                    className="mr-1"
                    type="radio"
                    id="man"
                    name="man"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />
                  <label htmlFor="woman">Female</label>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center w-full mb-6">
              <div className="md:w-1/3">
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="age">
                  Age
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="border-2 border-gray-200 rounded w-20 py-1 px-3 text-gray-700"
                  type="text"
                  id="age"
                  name="age"
                  value={age}
                  maxLength={3}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center w-full mb-6">
              <div className="md:w-1/3">
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="weight">
                  Weight
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className=" border-2 border-gray-200 rounded w-20 py-1 px-3 text-gray-700"
                  type="text"
                  id="weight"
                  name="weight"
                  value={weightInPounds}
                  placeholder="lb"
                  maxLength={6}
                  onChange={(e) => setWeightInPounds(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center w-full mb-6">
              <div className="md:w-1/3">
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="height">
                  Height
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  name="height"
                  className="border-2 border-gray-200 rounded w-60 py-1 px-3 text-gray-700 font-light text-sm"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}>
                  <option value="139.7">4ft 7in</option>
                  <option value="142.24">4ft 8in</option>
                  <option value="144.78">4ft 9in</option>
                  <option value="147.32">4ft 10in</option>
                  <option value="149.86">4ft 11in</option>
                  <option value="152.40">5ft 0in</option>
                  <option value="154.94">5ft 1in</option>
                  <option value="157.48">5ft 2in</option>
                  <option value="160.02">5ft 3in</option>
                  <option value="162.56">5ft 4in</option>
                  <option value="165.10">5ft 5in</option>
                  <option value="167.64">5ft 6in</option>
                  <option value="170.18">5ft 7in</option>
                  <option value="172.72">5ft 8in</option>
                  <option value="175.26" selected>
                    5ft 9in
                  </option>
                  <option value="177.80">5ft 10in</option>
                  <option value="180.34">5ft 11in</option>
                  <option value="182.88">6ft 0in</option>
                  <option value="185.42">6ft 1in</option>
                  <option value="187.96">6ft 2in</option>
                  <option value="190.50">6ft 3in</option>
                  <option value="193.04">6ft 4in</option>
                  <option value="195.58">6ft 5in</option>
                  <option value="198.12">6ft 6in</option>
                  <option value="200.66">6ft 7in</option>
                  <option value="203.20">6ft 8in</option>
                  <option value="205.74">6ft 9in</option>
                  <option value="208.28">6ft 10in</option>
                  <option value="210.82">6ft 11in</option>
                  <option value="213.36">7ft 0in</option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center w-full mb-6">
              <div className="md:w-1/3">
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="gender">
                  Activity
                </label>
              </div>
              <div className="md:w-2/3">
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  name="activity"
                  id="activity"
                  className="border-2 border-gray-200 rounded w-60 py-1 px-3 text-gray-700 font-light text-sm">
                  <option value="1.2" selected>
                    Sedentary (office job)
                  </option>
                  <option value="1.375">Light Exercise (1-2 days/week)</option>
                  <option value="1.55">Moderate Exercise (3-5 days/week)</option>
                  <option value="1.725">Heavy Exercise (6-7 days/week)</option>
                  <option value="1.9">Athlete (2x per day) </option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center w-full mb-6">
              <div className="md:w-1/3">
                <label className="block font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="gender">
                  Body fat % (optional)
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="border-2 border-gray-200 rounded w-20"
                  type="text"
                  id="bodyFat"
                  name="bodyFat"
                  value={bodyFat}
                  onChange={(e) => setBodyFat(e.target.value)}
                  placeholder="15"
                  maxLength={3}
                />
                %
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit">
                  Calculate
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {result && (
        <div ref={resultRef} className="min-h-[100vh] md:flex flex-col justify-center items-center">
          <TdeeResult result={result} bodyFat={bodyFat} si={props.id} />
          <div className="md:flex justify-center items-top md:gap-20 md:mt-5">
            <IdealWeightTable result={result} si={props.id} />
            <BmiResultTable result={result} />
          </div>
        </div>
      )}
    </section>
  );
};

export default CalculatorForm;
