import { useForm } from "react-hook-form";

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      comfortableExercises: formData.comfortableExercises || [],
      trainingConsistency: formData.trainingConsistency || "",
      trainingDuration: formData.trainingDuration || "",
      trainingFrequency: formData.trainingFrequency || "",
      availableEquipment: formData.availableEquipment || [],
      equipmentDetails: formData.equipmentDetails || "",
      exercisesToInclude: formData.exercisesToInclude || "",
      exercisesToAvoid: formData.exercisesToAvoid || "",
    },
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Exercise History</h2>

      {/* Comfortable Exercises */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Which of the following exercises/movement are you comfortable with?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {[
            "Bodyweight Squat",
            "Deadlift",
            "Bench Press",
            "Chin-Ups/Lat pulldown",
            "Shoulder Press",
            "Lunge",
            "Plank",
            "Kettlebell Clean",
            "Kettlebell Swing",
            "Other",
          ].map((exercise) => (
            <label key={exercise} className="flex items-center">
              <input
                type="checkbox"
                value={exercise}
                {...register("comfortableExercises", {
                  validate: (value) =>
                    value.length > 0 || "Please select at least one option", // Already required, no change needed
                })}
                className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] rounded focus:ring-[#EF4123] focus:ring-2"
              />
              <span className="text-white">{exercise}</span>
            </label>
          ))}
        </div>
        {errors.comfortableExercises && (
          <p className="text-red-500 text-xs mt-1">
            {errors.comfortableExercises.message}
          </p>
        )}
      </div>

      {/* Training Consistency */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          How long have you been training with consistency?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {[
            "This is my first time exercising",
            "I have exercised consistently in the past but it has been a while",
            "Less than a year",
            "1-2 years",
            "As long as I can remember AKA I’m a machine",
          ].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                value={option}
                {...register("trainingConsistency", {
                  required: "Please select an option", // Already required, no change needed
                })}
                className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] focus:ring-[#EF4123] focus:ring-2"
              />
              <span className="text-white">{option}</span>
            </label>
          ))}
        </div>
        {errors.trainingConsistency && (
          <p className="text-red-500 text-xs mt-1">
            {errors.trainingConsistency.message}
          </p>
        )}
      </div>

      {/* Training Duration */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          How long can you train per session?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {["30 minutes", "45 minutes", "60 minutes", "As long as it takes"].map(
            (option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  value={option}
                  {...register("trainingDuration", {
                    required: "Please select an option", // Already required, no change needed
                  })}
                  className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] focus:ring-[#EF4123] focus:ring-2"
                />
                <span className="text-white">{option}</span>
              </label>
            )
          )}
        </div>
        {errors.trainingDuration && (
          <p className="text-red-500 text-xs mt-1">
            {errors.trainingDuration.message}
          </p>
        )}
      </div>

      {/* Training Frequency */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          How many days per week are you available to exercise?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {["2-3 days per week", "4-5 days per week"].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                value={option}
                {...register("trainingFrequency", {
                  required: "Please select an option", // Already required, no change needed
                })}
                className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] focus:ring-[#EF4123] focus:ring-2"
              />
              <span className="text-white">{option}</span>
            </label>
          ))}
        </div>
        {errors.trainingFrequency && (
          <p className="text-red-500 text-xs mt-1">
            {errors.trainingFrequency.message}
          </p>
        )}
      </div>

      {/* Available Equipment */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          What equipment do you have available to train?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {[
            "Barbell",
            "Plates",
            "Bench",
            "Cable Machine",
            "Dumbbells",
            "Kettlebells",
            "Pull-Up Bar",
            "Resistance Bands",
            "Suspension Trainer (TRX)",
            "Wall",
            "Other",
          ].map((equipment) => (
            <label key={equipment} className="flex items-center">
              <input
                type="checkbox"
                value={equipment}
                {...register("availableEquipment", {
                  validate: (value) =>
                    value.length > 0 || "Please select at least one option", // Already required, no change needed
                })}
                className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] rounded focus:ring-[#EF4123] focus:ring-2"
              />
              <span className="text-white">{equipment}</span>
            </label>
          ))}
        </div>
        {errors.availableEquipment && (
          <p className="text-red-500 text-xs mt-1">
            {errors.availableEquipment.message}
          </p>
        )}
      </div>

      {/* Equipment Details */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Please provide details of the equipment you have available (weight,
          resistance, etc.) <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("equipmentDetails", {
            required: "This field is required", // Added required validation
          })}
          className={`w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${
            errors.equipmentDetails ? "border-red-500" : ""
          }`}
          rows="3"
          placeholder="Please provide details of the equipment you have available (weight, resistance, etc.)"
        />
        {errors.equipmentDetails && (
          <p className="text-red-500 text-xs mt-1">
            {errors.equipmentDetails.message}
          </p>
        )}
      </div>

      {/* Exercises to Include */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Are there any exercises that you would like to include in the program?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("exercisesToInclude", {
            required: "This field is required", // Added required validation
          })}
          className={`w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${
            errors.exercisesToInclude ? "border-red-500" : ""
          }`}
          rows="3"
          placeholder="Are there any exercises that you would like to include in the program?"
        />
        {errors.exercisesToInclude && (
          <p className="text-red-500 text-xs mt-1">
            {errors.exercisesToInclude.message}
          </p>
        )}
      </div>

      {/* Exercises to Avoid */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Any exercises you would like to avoid?{" "}
          <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("exercisesToAvoid", {
            required: "This field is required", // Added required validation
          })}
          className={`w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${
            errors.exercisesToAvoid ? "border-red-500" : ""
          }`}
          rows="3"
          placeholder="Any exercises you would like to avoid?"
        />
        {errors.exercisesToAvoid && (
          <p className="text-red-500 text-xs mt-1">
            {errors.exercisesToAvoid.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between space-x-4">
        <button
          type="button"
          onClick={prevStep}
          className="bg-[#EF4123] text-white px-6 py-3 rounded-md hover:bg-[#FF6B4A] transition-all duration-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-[#EF4123] text-white px-6 py-3 rounded-md hover:bg-[#FF6B4A] transition-all duration-300"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step3;