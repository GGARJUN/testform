import { useState } from "react";

const countryCodes = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  // Add more country codes as needed
];

const PhoneInput = ({ register, errors }) => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Default to India

  return (
    <div>
      <label className="block text-sm font-medium text-white mb-1">
        Phone <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center">
        {/* Country Code Dropdown */}
        <div className="relative">
          <select
            value={selectedCountry.code}
            onChange={(e) => {
              const selected = countryCodes.find((country) => country.code === e.target.value);
              setSelectedCountry(selected);
            }}
            className="appearance-none inline-flex items-center px-3 py-3 bg-[#1a1a1a] border border-gray-600 border-r-0 rounded-l-md text-gray-400 focus:outline-none focus:border-[#EF4123] focus:ring-2 focus:ring-[#EF4123]/20 pr-8"
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.code}
              </option>
            ))}
          </select>
          {/* Dropdown Arrow */}
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            ▼
          </span>
        </div>

        {/* Phone Input */}
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
    </div>
  );
};

// Export the component to use in Step1
export default PhoneInput;