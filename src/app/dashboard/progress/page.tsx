"use client";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const ProgressPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Progress
        value={progress}
        indicatorColor={cn({
          "bg-teal-500": progress < 50,
          "bg-teal-600": progress >= 50 && progress < 80,
          "bg-teal-700": progress >= 80,
        })}
      />
    </div>
  );
};

export default ProgressPage;
