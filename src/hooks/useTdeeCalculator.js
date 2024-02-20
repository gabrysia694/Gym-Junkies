import { useState } from "react";

// Hook for use in TdeeCalculator
export const useTdeeCalculator = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [bodyFat, setBodyFat] = useState("");
  const [result, setResult] = useState(null);
  const [gender, setGender] = useState("male");

  const calculateMetabolism = () => {

    const idealWeights = {
      // Devine Formula
      devine: {
        male: (height) => {
          return 50 + 2.3 * (height / 2.54 - 60);
        },
        female: (height) => {
          return 45.5 + 2.3 * (height / 2.54 - 60);
        },
      },
      // Robinson Formula
      robinson: {
        male: (height) => {
          return 52 + 1.9 * (height / 2.54 - 60);
        },
        female: (height) => {
          return 49 + 1.7 * (height / 2.54 - 60);
        },
      },
      //Hamwi Formula
      hamwi: {
        male: (height) => {
          return 48 + 2.7 * (height / 2.54 - 60);
        },
        female: (height) => {
          return 45.5 + 2.2 * (height / 2.54 - 60);
        },
      },
      //D.R. Miller Formula
      miller: {
        male: (height) => {
          return 56.2 + 1.41 * (height / 2.54 - 60);
        },
        female: (height) => {
          return 53.1 + 1.36 * (height / 2.54 - 60);
        },
      },
    };

    let meanWeight, weightMinAndMax, idealWeight
    // Arrays whit results

    if (gender === "male") {
      idealWeight = [
        idealWeights.devine.male(height).toFixed(1),
        idealWeights.robinson.male(height).toFixed(1),
        idealWeights.hamwi.male(height).toFixed(1),
        idealWeights.miller.male(height).toFixed(1),
      ];
      meanWeight = (
        idealWeight.reduce((acc, num) => acc + num, 0) / idealWeight.length
      ).toFixed(1);
      weightMinAndMax = [
        Math.min(...idealWeight).toFixed(1),
        Math.max(...idealWeight).toFixed(1),
      ];
    } else {
      idealWeight = [
        idealWeights.devine.male(height),
        idealWeights.robinson.male(height),
        idealWeights.hamwi.male(height),
        idealWeights.miller.male(height),
      ];
      meanWeight = (
        idealWeight.reduce((acc, num) => acc + num, 0) / idealWeight.length
      ).toFixed(1);
      weightMinAndMax = [
        Math.min(...idealWeight).toFixed(1),
        Math.max(...idealWeight).toFixed(1),
      ];
    }

    let tdee, bmr, leanMass;

    const formulas = {
      male: {
        withBodyFat: () => {
          // Tdee and BMR formulas based in the Katch-McArdle formula
          leanMass = parseFloat(weight * (1 - bodyFat / 100)).toFixed(1);
          bmr = Math.ceil(parseFloat(370 + 21.6 * leanMass));
          tdee = Math.ceil(parseFloat(bmr * activityLevel));
        },
        withoutBodyFat: () => {
          // Tdee and BMR formulas based in the Mifflin-St Jeor formula
          bmr = Math.ceil(parseFloat(10 * weight + 6.25 * height - 5 * age + 5));
          tdee = Math.ceil(parseFloat(bmr * activityLevel));
          //Lena Body mass based in the Katch-McArdle formula
          leanMass = parseFloat(0.407 * weight + 0.267 * height - 19.2).toFixed(1);
        },
      },
      female: {
        withBodyFat: () => {
          // Tdee and BMR formulas based in the Katch-McArdle formula
          leanMass = parseFloat(weight * (1 - bodyFat / 100)).toFixed(1);
          bmr = Math.ceil(parseFloat(370 + 21.6 * leanMass));
          tdee = Math.ceil(parseFloat(bmr * activityLevel));
        },
        withoutBodyFat: () => {
          // Tdee and BMR formulas based in the Mifflin-St Jeor formula
          bmr = Math.ceil(parseFloat(10 * weight + 6.25 * height - 5 * age - 161));
          tdee = Math.ceil(parseFloat(bmr * activityLevel));
          //Lena Body mass based in the Katch-McArdle formula
          leanMass = parseFloat(0.252 * weight + 0.473 * height - 48.3).toFixed(1);
        },
      },
    };

    if (bodyFat) {
      formulas[gender].withBodyFat();
    } else {
      formulas[gender].withoutBodyFat();
    }

    let bmi = parseFloat(weight / ((height / 100) * (height / 100))).toFixed(1);
    let bmiInImperialUnits = parseFloat(
      ((weight * 2.205) / ((height / 2.54) * (height / 2.54))) * 703
    ).toFixed(1);

    const bmiCategories = [
      { min: 0, max: 18.4, category: "Underweight" },
      { min: 18.5, max: 24.9, category: "Normal Weight" },
      { min: 25, max: 29.9, category: "Overweight" },
      { min: 30, max: Infinity, category: "Obese" },
    ];

    let bmiCategory = bmiCategories.find(
      (category) => bmi >= category.min && bmi <= category.max
    ).category;


    setResult({
      tdee,
      bmr,
      bmi,
      bmiInImperialUnits,
      bmiCategory,
      leanMass,
      idealWeight,
      meanWeight,
      weightMinAndMax,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateMetabolism();
  };

  return {
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
  };
};
