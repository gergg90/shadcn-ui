"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

const InputOPTPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      {" "}
      <InputOTP
        value={value}
        onChange={(value) => setValue(value)}
        maxLength={6}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p>{value}</p>
    </div>
  );
};

export default InputOPTPage;
