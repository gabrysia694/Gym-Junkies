import React from "react";

function BmiResultTable({ result, si }) {
  return (
    <>
      {result && (
        <section className="flex flex-col  gap-3 m-3 mt-8 md:m-0 md:mt-0">
          {si === "metric" ? (
            <>
              <h2 className="text-2xl font-bold ">Your BMI: {result.bmi}</h2>
              <p className="block w-[25rem] text-justify">
                Having a BMI of {result.bmi} categorizes you as {result.bmiCategory}, indicating a
                health condition that requires attention and special care.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold ">Your BMI: {result.bmiInImperialUnits}</h2>
              <p className="block w-[25rem] text-justify">
                Having a BMI of {result.bmiInImperialUnits} categorizes you as {result.bmiCategory},
                indicating a health condition that requires attention and special care.
              </p>
            </>
          )}

          <table>
            <tbody className="flex flex-col justify-start items-start ">
              <tr className="border-b-2 flex gap-[4rem] ">
                <td>18.5 or less</td>
                <td>Underweight</td>
              </tr>
              <tr className="border-b-2 flex gap-[4.5rem]">
                <td>18.5 - 24.9</td>
                <td>Normal Weight</td>
              </tr>
              <tr className="border-b-2 flex gap-[4.5rem]">
                <td>25.0 - 29.9</td>
                <td>Overweight</td>
              </tr>
              <tr className="border-b-2 flex gap-[6.5rem]">
                <td>30.0+</td>
                <td>Obese</td>
              </tr>
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}

export default BmiResultTable;
