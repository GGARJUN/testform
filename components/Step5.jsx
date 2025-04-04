import { useForm } from "react-hook-form";

const Step5 = ({ formData, setFormData, prevStep, handleSubmit }) => {
  const {
    register,
    handleSubmit: formSubmit,
    formState: { errors },
    watch, // Added to watch the radio button value for conditional styling
  } = useForm({
    defaultValues: {
      fitnessGoal: formData.fitnessGoal || "",
      obstacles: formData.obstacles || "",
      futureGoal: formData.futureGoal || "",
    },
  });

  const onSubmit = (data) => {
    setFormData({
      ...formData,
      fitnessGoal: data.fitnessGoal,
      obstacles: data.obstacles,
      futureGoal: data.futureGoal,
    });
    handleSubmit(); // Proceed to Step 6
  };

  // Watch the fitnessGoal value to apply error styling to the radio group
  const fitnessGoalValue = watch("fitnessGoal");

  return (
    <form onSubmit={formSubmit(onSubmit)} className="space-y-6 text-white">
      {/* Fitness Goal Section */}
      <div>
        <label className="block text-sm font-medium mb-2">
          What best describes your main fitness goal right now?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div
          className={`space-y-2 ${
            errors.fitnessGoal && !fitnessGoalValue ? "" : ""
          }`} // Added border around the radio group if there's an error
        >
          {[
            "Build muscle",
            "Lose fat",
            "Body recomposition (lose fat and build muscle)",
            "Performance",
            "Health",
          ].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                value={option}
                {...register("fitnessGoal", {
                  required: "Please select a fitness goal",
                })}
                className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] focus:ring-[#EF4123] focus:ring-2"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {errors.fitnessGoal && (
          <p className="text-red-500 text-sm mt-1">{errors.fitnessGoal.message}</p>
        )}
      </div>

      {/* Obstacles Section */}
      <div>
        <label className="block text-sm font-medium mb-2">
          What do you think are the primary (up to 3) obstacles that are in the way of your fitness goals?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("obstacles", {
            required: "Please describe your obstacles",
          })}
          className={`mt-1 block w-full p-3 bg-[#1a1a1a] border border-gray-600 rounded-md text-white focus:ring-[#EF4123] focus:border-[#EF4123] min-h-[100px] ${
            errors.obstacles ? "border-red-500" : ""
          }`} // Updated to match the dark theme and added error border
        />
        {errors.obstacles && (
          <p className="text-red-500 text-sm mt-1">{errors.obstacles.message}</p>
        )}
      </div>

      {/* Future Goal Section */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Where would you like to be w.r.t. your fitness a year from now?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("futureGoal", {
            required: "Please describe your future goal",
          })}
          className={`mt-1 block w-full p-3 bg-[#1a1a1a] border border-gray-600 rounded-md text-white focus:ring-[#EF4123] focus:border-[#EF4123] min-h-[100px] ${
            errors.futureGoal ? "border-red-500" : ""
          }`} // Updated to match the dark theme and added error border
        />
        {errors.futureGoal && (
          <p className="text-red-500 text-sm mt-1">{errors.futureGoal.message}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-[#EF4123] text-white px-6 py-3 rounded-md hover:bg-[#FF6B4A] transition-all duration-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-[#EF4123] text-white px-6 py-3 rounded-md hover:bg-[#FF6B4A] transition-all duration-300" // Updated to match the orange theme
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step5;