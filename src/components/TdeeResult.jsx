import React from 'react'

function TdeeResult({result, bodyFat, si}) {
  return (
    <>
      {result && (
        <section className="md:flex  justify-center items-center m-3 mt-20  md:mt-6 gap-10">
          <div className="flex flex-col gap-1 border rounded-xl p-5 bg-blue-300 shadow-lg mb-5 md:mb-0">
            <div className="block text-center w-65 border-b-2 ">
              <div>
                <h3 className="text-2xl font-bold">Total Daily Energy Expenditure</h3>
              </div>
              <div className="text-xl">{result.tdee}</div>
              <div>
                <p className="text-sm font-thin italic">calories per day</p>
              </div>
            </div>
            <div className="text-center">
              <div>
                <h3 className="text-2xl font-bold">Basal Metabolic Rate</h3>
              </div>
              <div className="text-xl">{result.bmr}</div>
              <div>
                <p className="text-sm font-thin italic">calories per day</p>
              </div>
            </div>
          </div>
          <div className="block max-w-[40rem] text-justify">
            <p>
              Considering your stats and your activity level, the most accurate estimate for your
              daily maintenance calories is {result.tdee} calories per day and your basal metabolic
              rate is {result.bmr}, determined by the{" "}
              {bodyFat ? "Katch-McArdle" : "Mifflin-St Jeor"} Formula, which is widely recognized as
              highly precise.{" "}
              {si == "metric" ? (
                bodyFat ? (
                  <p>
                    Based on your body fat percentage,{" "}
                    <strong>your lean body mass is {result.leanMass}</strong>.
                  </p>
                ) : (
                  <p>
                    Based on Katch-McArdle formula,{" "}
                    <strong>your estimated lean body mass is {result.leanMass}</strong>.
                  </p>
                )
              ) : bodyFat ? (
                <p>
                  Based on your body fat percentage,{" "}
                  <strong>your lean body mass is {(result.leanMass * 2.205).toFixed(1)} lb</strong> .
                </p>
              ) : (
                <p>
                  Based on Katch-McArdle formula,{" "}
                  <strong>your estimated lean body mass is {(result.leanMass * 2.205).toFixed(1)} lb</strong> .
                </p>
              )}
              If you want to lose weight, we suggest that you consume {result.tdee - 500} calories
              per day, which is a 500 calorie per day deficit. If you want to gain weight, we
              suggest that you consume {result.tdee + 500} calories per day, which is a 500 calorie
              per day gain.
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default TdeeResult