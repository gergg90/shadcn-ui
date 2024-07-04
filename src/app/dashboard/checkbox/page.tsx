"use client";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const CheckboxPage = () => {
  const [terms, setTerms] = useState(false);

  console.log(terms);

  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        checked={terms}
        onCheckedChange={() => setTerms(!terms)}
        id="terms1"
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-sm text-muted-foreground">
          {terms ? (
            <Badge variant="colorCute">True</Badge>
          ) : (
            <Badge variant="destructive">False</Badge>
          )}
        </p>
      </div>
    </div>
  );
};

export default CheckboxPage;
