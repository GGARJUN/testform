import { useForm } from "react-hook-form";
import PhoneInput from "./PhoneInput";


const Step1 = ({ formData, setFormData, nextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      email: formData.email || "",
      phone: formData.phone || "",
      country: formData.country || "",
      city: formData.city || "",
      occupation: formData.occupation || "",
      dateOfBirth: formData.dateOfBirth || "",
      height: formData.height || "",
      weight: formData.weight || "",
      socialMediaHandle: formData.socialMediaHandle || "",
      programDuration: formData.programDuration || "",
    },
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Basic Information</h2>

      {/* First Name and Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("firstName", { required: "First Name is required" })}
            className={`w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${errors.firstName ? "border-red-500" : ""
              }`}
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("lastName", { required: "Last Name is required" })}
            className={`w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${errors.lastName ? "border-red-500" : ""
              }`}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className={`w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${errors.email ? "border-red-500" : ""
            }`}
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Phone
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center">
          <span className="inline-flex items-center px-3 py-3 bg-[#1a1a1a] border border-gray-600 border-r-0 rounded-l-md text-gray-400">
            🇮🇳
          </span>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number (must be 10 digits)",
              },
            })}
            className={`w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-r-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${
              errors.phone ? "border-red-500" : ""
            }`}
            placeholder="Phone"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div> */}

      {/* Phone Input */}
      <PhoneInput register={register} errors={errors} />

      {/* Country and City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            {...register("country", { required: "Country is required" })}
            className={`w-full p-3 bg-[#1a1a1a] text-gray-400 border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${errors.country ? "border-red-500" : ""
              }`}
          >
            <option value="" disabled>
              Please choose one option
            </option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            {/* Add more countries as needed */}
          </select>
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("city", { required: "City is required" })}
            className={`w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${errors.city ? "border-red-500" : ""
              }`}
            placeholder="City"
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
          )}
        </div>
      </div>

      {/* Occupation */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Occupation <span className="text-red-500">*</span>
        </label>
        <select
          {...register("occupation", { required: "Occupation is required" })}
          className={`w-full p-3 bg-[#1a1a1a] text-gray-400 border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${errors.occupation ? "border-red-500" : ""
            }`}
        >
          <option value="" disabled>
            Please choose one option
          </option>
          <option value="Student">Student</option>
          <option value="Professional">Professional</option>
          <option value="Other">Other</option>
        </select>
        {errors.occupation && (
          <p className="text-red-500 text-xs mt-1">{errors.occupation.message}</p>
        )}
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          {...register("dateOfBirth", { required: "Date of Birth is required" })}
          className={`w-full p-3 bg-[#1a1a1a] text-gray-400 border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${errors.dateOfBirth ? "border-red-500" : ""
            }`}
        />
        {errors.dateOfBirth && (
          <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</p>
        )}
      </div>

      {/* Height and Weight */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Height in CMS <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            {...register("height", { required: "Height is required", min: { value: 1, message: "Height must be greater than 0" } })}
            className={`w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${errors.height ? "border-red-500" : ""
              }`}
            placeholder="Height in CMS"
          />
          {errors.height && (
            <p className="text-red-500 text-xs mt-1">{errors.height.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Weight in KGS <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            {...register("weight", { required: "Weight is required", min: { value: 1, message: "Weight must be greater than 0" } })}
            className={`w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${errors.weight ? "border-red-500" : ""
              }`}
            placeholder="Weight in KGS"
          />
          {errors.weight && (
            <p className="text-red-500 text-xs mt-1">{errors.weight.message}</p>
          )}
        </div>
      </div>

      {/* Social Media Handle */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Social Media Handle <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          {...register("socialMediaHandle", {
            required: "This field is required", // Added required validation
          })}
          className={`w-full p-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${errors.socialMediaHandle ? "border-red-500" : ""
            }`} // Added conditional styling for error state
          placeholder="This is optional. You can share with us relevant page links which you prefer."
        />
        {errors.socialMediaHandle && (
          <p className="text-red-500 text-xs mt-1">{errors.socialMediaHandle.message}</p>
        )}
      </div>

      {/* Program Duration Preference */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Which duration of the On Demand Program would you prefer? <span className="text-red-500">*</span>
        </label>
        <select
          {...register("programDuration", { required: "Program duration is required" })}
          className={`w-full p-3 bg-[#1a1a1a] text-gray-400 border border-gray-600 rounded-md focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 ${errors.programDuration ? "border-red-500" : ""
            }`}
        >
          <option value="" disabled>
            Please choose one option
          </option>
          <option value="1 Month">1 Month</option>
          <option value="3 Months">3 Months</option>
          <option value="6 Months">6 Months</option>
        </select>
        {errors.programDuration && (
          <p className="text-red-500 text-xs mt-1">{errors.programDuration.message}</p>
        )}
      </div>

      {/* Next Button */}
      <div className="flex justify-end">
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

export default Step1;