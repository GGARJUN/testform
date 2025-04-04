"use client"; // Add client-side directive

import { useState, useEffect, useRef } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const Stepper = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    occupation: "",
    dateOfBirth: "",
    height: "",
    weight: "",
    socialMediaHandle: "",
    programDuration: "",
    injuries: [],
    medicalConditions: "",
    bloodMarkers: "",
    medicalDocuments: null,
    comfortableExercises: [],
    trainingConsistency: "",
    trainingDuration: "",
    trainingFrequency: "",
    availableEquipment: [],
    equipmentDetails: "",
    exercisesToInclude: "",
    exercisesToAvoid: "",
    sleepHours: "",
    wakeUpFeeling: "",
    sleepQuality: 0,
    energyLevels: 0,
    fitnessGoal: "",
    obstacles: "",
    futureGoal: "",
    paymentInfo: "",
  });
  const [animationState, setAnimationState] = useState("active"); // active, exiting
  const [direction, setDirection] = useState("right"); // right or left for animation direction
  const contentRef = useRef(null);

  const nextStep = () => {
    if (step < 6) {
      setDirection("right");
      setAnimationState("exiting");
      setTimeout(() => {
        setStep((prev) => prev + 1);
        setAnimationState("active");
      }, 500); // Match the transition duration
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection("left");
      setAnimationState("exiting");
      setTimeout(() => {
        setStep((prev) => prev - 1);
        setAnimationState("active");
      }, 500); // Match the transition duration
    }
  };

  const handleSubmit = () => {
    // Transition to Step 6 to show "Thank You!" message
    setDirection("right");
    setAnimationState("exiting");
    setTimeout(() => {
      setStep(6);
      setAnimationState("active");
      // Log all form data in a single console log
      console.log("Complete Form Data:", formData);
      alert("Form submitted successfully!");
    }, 500); // Match the transition duration
  };

  const handleClearData = () => {
    // Reset form data to initial state
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      occupation: "",
      dateOfBirth: "",
      height: "",
      weight: "",
      socialMediaHandle: "",
      programDuration: "",
      injuries: [],
      medicalConditions: "",
      bloodMarkers: "",
      medicalDocuments: null,
      comfortableExercises: [],
      trainingConsistency: "",
      trainingDuration: "",
      trainingFrequency: "",
      availableEquipment: [],
      equipmentDetails: "",
      exercisesToInclude: "",
      exercisesToAvoid: "",
      sleepHours: "",
      wakeUpFeeling: "",
      sleepQuality: 0,
      energyLevels: 0,
      fitnessGoal: "",
      obstacles: "",
      futureGoal: "",
      paymentInfo: "",
    });

    // Redirect to Step 1 with animation
    setDirection("left");
    setAnimationState("exiting");
    setTimeout(() => {
      setStep(1);
      setAnimationState("active");
    }, 500); // Match the transition duration
  };

  const steps = [
    { title: "Basic ", component: Step1 },
    { title: "Medical ", component: Step2 },
    { title: "Exercise", component: Step3 },
    { title: "Sleep", component: Step4 },
    { title: "Goals", component: Step5 },
    { title: "Payment", component: Step6 },
  ];

  const CurrentStepComponent = steps[step - 1].component;

  return (
    <div className="w-full bg-black flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 md:py-10">
        {/* Advanced Stepper Header */}
        <div className="relative">
          <div className="flex justify-between items-center gap-0 md:gap-28">
            {steps.map((s, index) => (
              <div key={index} className=" text-center relative z-10">
                {/* Step Circle */}
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${step > index + 1
                    ? "bg-[#EF4123] text-white shadow-md"
                    : step === index + 1
                      ? "bg-[#EF4123] text-white shadow-lg scale-110"
                      : "bg-gray-200 text-gray-600"
                    }`}
                >
                  <span className="font-semibold text-sm sm:text-base">{index + 1}</span>
                </div>
                {/* Step Title */}

              </div>
            ))}
          </div>
          {/* Progress Line */}
          <div className="absolute top-4 sm:top-5 md:top-[22px] w-full left-0 h-1 sm:h-2 bg-gray-700 rounded-full">
            <div
              className="h-1 sm:h-2 bg-gradient-to-r from-[#EF4123] to-[#FF6B4A] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          {steps.map((s, index) => (
            <p key={index}
              className={`mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium transition-colors duration-300   ${step >= index + 1 ? "text-[#EF4123] font-semibold" : "text-gray-400"
                }`}
            >
              {s.title}
            </p>
          ))}
        </div>


        {/* Step Content with Slide Animation */}
        <div className="step-content" ref={contentRef}>
          <div
            className={`${animationState} ${direction === "right" ? "slide-right" : "slide-left"
              } py-20`}
            key={step} // Key ensures re-render for animation
          >
            <CurrentStepComponent
              formData={formData}
              setFormData={setFormData}
              nextStep={nextStep}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
              handleClearData={handleClearData} // Pass the clear data handler to Step6
              isLastStep={step === steps.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;