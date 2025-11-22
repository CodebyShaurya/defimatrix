"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  isOpen,
  onClose,
  onAgree,
}) => {
  const [checkboxes, setCheckboxes] = useState([false, false, false, false]);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  const allChecked = checkboxes.every((checked) => checked);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto bg-black border border-[#C450D5] text-white max-w-[500px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center mb-2">
            <img
              src="/defimatrix-logo.svg"
              alt="DefiMatrix Logo"
              className="h-8 rounded-2xl mx-auto mb-4"
            />
             User Disclaimer
          </DialogTitle>
          <DialogDescription className="text-white/90 space-y-4">
       

            <div className="space-y-4 text-left">
              {(
                [
                  "I understand that DeFiMatrix.io operates solely as a bridge aggregator that routes transactions to third-party bridging protocols. DeFiMatrix.io does not at any point take custody of user funds.",
                  "I accept that any fees displayed for a selected route are estimates and may vary based on network conditions, third-party protocol fees, or market fluctuations.",
                  "I acknowledge that all bridging times shown are approximations. DeFiMatrix.io does not control the execution speed of external bridges or protocols, and actual transfer durations may occasionally exceed the estimates provided.",
                  "I confirm that I am legally permitted to access and use DeFiMatrix.io under the laws and regulations of the jurisdiction in which I reside and am physically located."
                ] as const
              ).map((point, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    checked={checkboxes[index]}
                    onChange={() => handleCheckboxChange(index)}
                    className="h-5 w-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <p className="text-white/80 text-sm">{point}</p>
                </div>
              ))}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  checked={checkboxes[3]}
                  onChange={() => handleCheckboxChange(3)}
                  className="h-5 w-5 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                />
                <p className="text-white/80 text-sm">
                  I hereby confirm your acceptance of, and continued agreement to, the
                  <a
                    href="https://www.defimatrix.io/terms-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 underline ml-1"
                  >
                    Terms and Conditions
                  </a>
                   and 
                  <a
                    href="https://www.defimatrix.io/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 underline ml-1"
                  >
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
            <img src="/disclaimer.png" alt="Disclaimer Illustration" className="w-full my-4 rounded-xl h-36" />

            <div className="pt-2 flex justify-center">
              <button
                onClick={onAgree}
                disabled={!allChecked}
                className={`w-full px-8 py-3 rounded-3xl font-semibold text-white transition-all duration-200 transform  ${
                  allChecked
                    ? "bg-[#C450D5] hover:bg-pink-600 hover:scale-105"
                    : "bg-[#C450D5] cursor-not-allowed"
                }`}
              >
                I Agree
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
