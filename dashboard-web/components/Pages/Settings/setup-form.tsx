import React, { FormEvent } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import DefaultButton from "@/components/Shared/Button/DefaultButton";
import { TypeAnimation } from "react-type-animation";

type SetupFormProps = {
  onCloseModal?: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  enableCancelButton?: boolean;
};

const SetupForm = ({
  onCloseModal,
  onSubmit,
  isLoading,
  enableCancelButton = true,
}: SetupFormProps) => {
  return (
      <div className="flex-0">
        <div className="flex flex-col gap-3">
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              display: "block",
              fontSize: "32px",
              fontWeight: "bold",

            }}
            sequence={[
              "Add credit card",
              750,
            ]}
            speed={85}
            wrapper="h1"
            cursor={false}
            repeat={0}
          />
          <div className="text-neutral-600">Enter your credit card details to ensure uninterrupted access to premium features.</div>
        </div>
        <form className="my-8" onSubmit={onSubmit}>
          <div className="stripe-payment-element">
            <PaymentElement />
          </div>
          <div className="mt-4 flex gap-6">
            {enableCancelButton && (
              <button
                type="button"
                className="w-full font-semibold text-center flex rounded-md items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed border hover:border-neutral-600 px-4 py-2.5 text-sm"
                onClick={onCloseModal}
              >Cancel</button>
            )}
            <button
              disabled={isLoading}
              type="submit"
              className="w-full font-semibold text-center flex rounded-md items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed bg-black text-white px-4 py-2.5 text-sm"
            >Submit</button>
          </div>
        </form>
      </div>
  );
};

export default SetupForm;
