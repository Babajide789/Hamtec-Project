declare module "input-otp" {
  import * as React from "react";

  export interface OTPSlot {
    char?: string;
    hasFakeCaret?: boolean;
    isActive?: boolean;
  }

  export interface OTPContextValue {
    slots: Record<number, OTPSlot>;
  }

  export const OTPInputContext: React.Context<OTPContextValue | null>;

  export interface OTPInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string;
  }

  export const OTPInput: React.FC<OTPInputProps>;
}
