"use client";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const SliderPage = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [rangeValue, setSetRangeValue] = useState([0, 100]);

  return (
    <div className="flex flex-col gap-3">
      <span className="flex justify-center">{sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
        max={100}
        step={1}
      />

      <span className="flex justify-center">{rangeValue.join(",")}</span>
      <Slider
        defaultValue={rangeValue}
        onValueChange={setSetRangeValue}
        max={100}
        step={1}
      />
    </div>
  );
};

export default SliderPage;
