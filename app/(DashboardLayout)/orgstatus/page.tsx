'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";

const STATUS_STEPS = [
  { key: "pending", label: "Pending" },
  { key: "under_review", label: "Under Review" },
  { key: "verified", label: "Verified" }
];

export default function OrgStatusPage() {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStep(1); // stays on under review for first-time login
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center 0 text-white p-6">
      <Card className="w-full max-w-2xl rounded-2xl shadow-2xl bg-slate-100 border border-gray-700">
        <CardContent className="p-8">
          <h1 className="text-2xl font-semibold mb-2">Welcome 👋</h1>
          <p className="text-gray-400 mb-6">
            Your organization profile is currently being reviewed.
          </p>

          {/* Progress Bar */}
          <div className="relative flex items-center justify-between text-black">
            {STATUS_STEPS.map((step, index) => (
              <div key={step.key} className="flex-1 flex flex-col items-center relative">
                {/* Line */}
                {index !== STATUS_STEPS.length - 1 && (
                  <div className="absolute top-4 left-1/2 w-full h-1 bg-gray-700 z-0" />
                )}

                {/* Circle */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{
                    scale: currentStep >= index ? 1.1 : 0.8,
                    opacity: currentStep >= index ? 1 : 0.4
                  }}
                  className={`z-10 w-10 h-10 rounded-full flex items-center text-black justify-center text-sm font-bold ${
                    currentStep >= index ? "bg-blue-500" : "bg-gray-700"
                  }`}
                >
                  {index + 1}
                </motion.div>

                {/* Label */}
                <p className="mt-2 text-sm text-center">
                  {step.label}
                </p>
              </div>
            ))}
          </div>

          {/* Animated Status Message */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-center"
          >
            {currentStep === 0 && <p>Submitting your profile...</p>}
            {currentStep === 1 && (
              <p className="text-blue-400">
                Your profile is under review. This usually takes 24–48 hours.
              </p>
            )}
            {currentStep === 2 && (
              <p className="text-green-400">Your organization is verified 🎉</p>
            )}
          </motion.div>

          {/* Info Box */}
          <div className="mt-6 p-4 rounded-xl bg-slate-100  text-sm text-black">
            <p>
              While under review, you may have limited access. You’ll be notified
              once verification is complete.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
