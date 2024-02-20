import React from "react";

const IdealWeightTable = ({ result, si }) => {
  return (
    <>
      {result && (
        <section className="flex flex-col  gap-3 m-3 mt-8 md:m-0 md:mt-0">
          <h2 className="text-2xl font-bold">
            {si === "metric" ? (
              <span>
                Ideal Weight: {result.weightMinAndMax[0]} - {result.weightMinAndMax[1]} kg
              </span>
            ) : (
              <span>
                Ideal Weight: {(result.weightMinAndMax[0].valueOf() * 2.205).toFixed(1)} -{" "}
                {(result.weightMinAndMax[1].valueOf() * 2.205).toFixed(1)} lb
              </span>
            )}
          </h2>

          <p className="block w-[25rem] text-justify">
            Your optimal body weight is projected to fall within the range of{" "}
            {si === "metric" ? (
              <span>
                Ideal Weight: {result.weightMinAndMax[0]} - {result.weightMinAndMax[1]} kg
              </span>
            ) : (
              <span>
                Ideal Weight: {(result.weightMinAndMax[0].valueOf() * 2.205).toFixed(1)} -{" "}
                {(result.weightMinAndMax[1].valueOf() * 2.205).toFixed(1)} lb
              </span>
            )}{" "}
            according to the diverse formulas provided below. These calculations are derived from
            your height and serve as general guidelines; however, they should be taken with a grain
            of salt, particularly if you engage in weightlifting or other forms of strength
            training.
          </p>
          {si === "metric" ? (
            <table>
              <tbody className="flex flex-col justify-start items-start ">
                <tr className="border-b-2 flex gap-[5rem] ">
                  <td>G.J. Hamwi Formula (1964)</td>
                  <td>{result.idealWeight[2]}</td>
                </tr>
                <tr className="border-b-2 flex  gap-[5.2rem]">
                  <td>B.J. Devine Formula (1974)</td>
                  <td>{result.idealWeight[0]}</td>
                </tr>
                <tr className="border-b-2 flex  gap-[4.2rem]">
                  <td>J.D. Robinson Formula (1983)</td>
                  <td>{result.idealWeight[1]}</td>
                </tr>
                <tr className="border-b-2 flex  gap-[5.8rem]">
                  <td>D.R. Miller Formula (1983)</td>
                  <td>{result.idealWeight[3]}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table>
              <tbody className="flex flex-col justify-start items-start ">
                <tr className="border-b-2 flex gap-[5rem] ">
                  <td>G.J. Hamwi Formula (1964)</td>
                  <td>{(result.idealWeight[2].valueOf() * 2.205).toFixed(1)}</td>
                </tr>
                <tr className="border-b-2 flex  gap-[5.2rem]">
                  <td>B.J. Devine Formula (1974)</td>
                  <td>{(result.idealWeight[0].valueOf() * 2.205).toFixed(1)}</td>
                </tr>
                <tr className="border-b-2 flex  gap-[4.2rem]">
                  <td>J.D. Robinson Formula (1983)</td>
                  <td>{(result.idealWeight[1].valueOf() * 2.205).toFixed(1)}</td>
                </tr>
                <tr className="border-b-2 flex  gap-[5.8rem]">
                  <td>D.R. Miller Formula (1983)</td>
                  <td>{(result.idealWeight[3].valueOf() * 2.205).toFixed(1)}</td>
                </tr>
              </tbody>
            </table>
          )}
        </section>
      )}
    </>
  );
};

export default IdealWeightTable;
