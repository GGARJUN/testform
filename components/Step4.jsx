import { useForm } from "react-hook-form";
import { useState } from "react"; // Import useState for managing slider values

const Step4 = ({ formData, setFormData, nextStep, prevStep }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            sleepHours: formData.sleepHours || "",
            wakeUpFeeling: formData.wakeUpFeeling || "",
            sleepQuality: formData.sleepQuality || 0, // Changed initial value to 0
            energyLevels: formData.energyLevels || 0, // Changed initial value to 0
        },
    });

    // State to track slider values for fill effect
    const [sleepQualityValue, setSleepQualityValue] = useState(formData.sleepQuality || 0); // Changed initial value to 0
    const [energyLevelsValue, setEnergyLevelsValue] = useState(formData.energyLevels || 0); // Changed initial value to 0

    const onSubmit = (data) => {
        setFormData({ ...formData, ...data });
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Sleep Assessment</h2>

            {/* Sleep Hours */}
            <div>
                <label className="block text-sm font-medium text-white mb-2">
                    How many hours of sleep do you get each night?{" "}
                    <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                    {["Less than 6 hours", "6-8 hours", "8 hours or more"].map(
                        (option) => (
                            <label key={option} className="flex items-center">
                                <input
                                    type="radio"
                                    value={option}
                                    {...register("sleepHours", {
                                        required: "Please select an option",
                                    })}
                                    className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] focus:ring-[#EF4123] focus:ring-2"
                                />
                                <span className="text-white">{option}</span>
                            </label>
                        )
                    )}
                </div>
                {errors.sleepHours && (
                    <p className="text-red-500 text-xs mt-1">{errors.sleepHours.message}</p>
                )}
            </div>

            {/* Wake Up Feeling */}
            <div>
                <label className="block text-sm font-medium text-white mb-2">
                    How do you feel when you wake up?{" "}
                    <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                    {[
                        "I feel great and have great energy",
                        "It takes me a little while to wake up",
                        "I feel tired and exhausted and it lasts through the day",
                    ].map((option) => (
                        <label key={option} className="flex items-center">
                            <input
                                type="radio"
                                value={option}
                                {...register("wakeUpFeeling", {
                                    required: "Please select an option",
                                })}
                                className="mr-2 h-5 w-5 text-[#EF4123] border-gray-600 bg-[#1a1a1a] focus:ring-[#EF4123] focus:ring-2"
                            />
                            <span className="text-white">{option}</span>
                        </label>
                    ))}
                </div>
                {errors.wakeUpFeeling && (
                    <p className="text-red-500 text-xs mt-1">
                        {errors.wakeUpFeeling.message}
                    </p>
                )}
            </div>

            {/* Sleep Quality Slider */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">
                    On a scale of 0-10 how would you rate the quality of your sleep?{" "}
                    <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <input
                        type="range"
                        min="0" // Changed min to 0
                        max="10"
                        step="1"
                        {...register("sleepQuality", {
                            required: "Please select a value",
                            valueAsNumber: true,
                        })}
                        className="w-full h-1 custom-slider appearance-none cursor-pointer"
                        style={{ "--value": sleepQualityValue }}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setSleepQualityValue(value); // Update state for fill effect
                        }}
                    />
                </div>
                <div className="flex justify-between text-gray-400 text-xs mt-2">
                    {[...Array(11)].map((_, i) => (
                        <div key={i} className="ml-[6px] flex flex-col items-center gap-2">
                            <span className="border h-2"></span>
                            {i}
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-400 text-sm">Poor</span>
                    <span className="text-gray-400 text-sm">Excellent</span>
                </div>
                {errors.sleepQuality && (
                    <p className="text-red-500 text-xs mt-1">{errors.sleepQuality.message}</p>
                )}
            </div>

            {/* Energy Levels Slider */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-white mb-2">
                    How would you best describe your energy levels through the day?{" "}
                    <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <input
                        type="range"
                        min="0" // Changed min to 0
                        max="10"
                        step="1"
                        {...register("energyLevels", {
                            required: "Please select a value",
                            valueAsNumber: true,
                        })}
                        className="w-full h-1 custom-slider appearance-none cursor-pointer"
                        style={{ "--value": energyLevelsValue }}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            setEnergyLevelsValue(value); // Update state for fill effect
                        }}
                    />
                </div>
                <div className="flex justify-between text-gray-400 text-xs mt-2">
                    {[...Array(11)].map((_, i) => (
                        <div key={i} className="ml-[6px] flex flex-col items-center gap-2">
                            <span className="border h-2"></span>
                            {i}
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-400 text-sm">I'm tired all day</span>
                    <span className="text-gray-400 text-sm">I feel great</span>
                </div>
                {errors.energyLevels && (
                    <p className="text-red-500 text-xs mt-1">{errors.energyLevels.message}</p>
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

export default Step4;