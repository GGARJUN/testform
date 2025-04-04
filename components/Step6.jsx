import Image from "next/image";

const Step6 = ({ formData, setFormData, prevStep, handleClearData }) => {
  return (
    <div className="space-y-6 text-center">
      {/* Thank You Message */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Thank You!</h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Your form has been submitted successfully.
        </p>
      </div>

      {/* Thank You GIF Animation */}
      <div className="flex justify-center">
        <Image
          src="/tick.png" // Publicly available "Thank You" GIF
          alt="Thank You Animation"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-[#EF4123] text-white px-6 py-2 rounded-md hover:bg-[#FF6B4A] transition-colors"
        >
          Back
        </button>
        <button
          type="button" // Changed to type="button" since we're handling the clear data logic manually
          onClick={handleClearData}
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-[#FF6B4A] transition-colors"
        >
          Clear Data
        </button>
      </div>
    </div>
  );
};

export default Step6;