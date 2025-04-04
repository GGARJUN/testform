import { useForm } from "react-hook-form";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      injuries: formData.injuries || [],
      medicalConditions: formData.medicalConditions || "",
      bloodMarkers: formData.bloodMarkers || "",
      medicalDocuments: formData.medicalDocuments || null,
    },
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Medical History</h2>

      {/* Injuries or Aches/Pains */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Do you have any injuries or aches/pains that I should be aware of?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              value="None"
              {...register("injuries", {
                validate: (value) =>
                  value.length > 0 || "Please select at least one option",
              })}
              className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] rounded focus:ring-[#EF4123] focus:ring-2"
            />
            <span className="text-white">None</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Shoulder/Neck"
              {...register("injuries")}
              className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] rounded focus:ring-[#EF4123] focus:ring-2"
            />
            <span className="text-white">Shoulder/Neck</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Knee"
              {...register("injuries")}
              className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] rounded focus:ring-[#EF4123] focus:ring-2"
            />
            <span className="text-white">Knee</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Lower back"
              {...register("injuries")}
              className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] rounded focus:ring-[#EF4123] focus:ring-2"
            />
            <span className="text-white">Lower back</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              value="Other"
              {...register("injuries")}
              className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] rounded focus:ring-[#EF4123] focus:ring-2"
            />
            <span className="text-white">Other</span>
          </label>
        </div>
        {errors.injuries && (
          <p className="text-red-500 text-xs mt-1">{errors.injuries.message}</p>
        )}
      </div>

      {/* Medical Conditions */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Do you have any medical conditions that I should be aware of?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="Yes"
              {...register("medicalConditions", {
                required: "Please select an option",
              })}
              className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] focus:ring-[#EF4123] focus:ring-2"
            />
            <span className="text-white">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="No"
              {...register("medicalConditions", {
                required: "Please select an option",
              })}
              className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] focus:ring-[#EF4123] focus:ring-2"
            />
            <span className="text-white">No</span>
          </label>
        </div>
        {errors.medicalConditions && (
          <p className="text-red-500 text-xs mt-1">
            {errors.medicalConditions.message}
          </p>
        )}
      </div>

      {/* Blood Markers */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Have you recently checked your blood markers?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="Yes"
              {...register("bloodMarkers", {
                required: "Please select an option",
              })}
              className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] focus:ring-[#EF4123] focus:ring-2"
            />
            <span className="text-white">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="No"
              {...register("bloodMarkers", {
                required: "Please select an option",
              })}
              className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] focus:ring-[#EF4123] focus:ring-2"
            />
            <span className="text-white">No</span>
          </label>
        </div>
        {errors.bloodMarkers && (
          <p className="text-red-500 text-xs mt-1">{errors.bloodMarkers.message}</p>
        )}
      </div>

      {/* Medical Documents Upload */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Please feel free to upload any medical documents or blood reports for
          our reference, if any
        </label>
        <div className="relative">
          <input
            type="file"
            {...register("medicalDocuments")}
            className="w-full p-3 bg-[#1a1a1a] text-gray-400 border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
        </div>
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

export default Step2;