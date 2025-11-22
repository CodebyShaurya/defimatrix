"use client";

import React from "react";
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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" max-h-[90vh] overflow-y-auto bg-[url('/why-background.png')]   text-white max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center mb-2">
            DeFiMatrix.io – User Disclaimer
          </DialogTitle>
          <DialogDescription className="text-white/90 space-y-2">
            <p className="text-sm leading-relaxed">
              By accessing or using DeFiMatrix.io, I acknowledge and agree to the following:
            </p>
            
            <div className="space-y-4 text-left">
              <div>
                <p className="font-semibold  text-sm">• Bridge Aggregation Only:</p>
                <p className="text-white/80 pl-4 text-xs">
                  I understand that DeFiMatrix.io operates solely as a bridge aggregator that routes 
                  transactions to third-party bridging protocols. DeFiMatrix.io does not at any point 
                  take custody of user funds.
                </p>
              </div>

              <div>
                <p className="font-semibold  text-sm">• Estimated Fees:</p>
                <p className="text-white/80 pl-4 text-xs">
                  I accept that any fees displayed for a selected route are estimates and may vary 
                  based on network conditions, third-party protocol fees, or market fluctuations.
                </p>
              </div>

              <div>
                <p className="font-semibold  text-sm">• Estimated Bridging Times:</p>
                <p className="text-white/80 pl-4 text-xs">
                  I acknowledge that all bridging times shown are approximations. DeFiMatrix.io does 
                  not control the execution speed of external bridges or protocols, and actual transfer 
                  durations may occasionally exceed the estimates provided.
                </p>
              </div>

              <div>
                <p className="font-semibold  text-sm">• Legal Compliance:</p>
                <p className="text-white/80 pl-4 text-xs">
                  I confirm that I am legally permitted to access and use DeFiMatrix.io under the laws 
                  and regulations of the jurisdiction in which I reside and am physically located.
                </p>
              </div>
            </div>

            <div className="pt-6 flex justify-center">
              <button
                onClick={onAgree}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105"
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
