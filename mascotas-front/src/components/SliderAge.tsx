import React, { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import { useFilterRange } from "@/store/filter/filterForAge.store";
import { Spiner } from "./Spiner";
import { useFetchWithOutPaginate } from "@/hooks/useFetchWithOutPaginate";

export const SliderAge = () => {
  const { isLoading, data } = useFetchWithOutPaginate("/api/pets-max-age");
  const minValue = useFilterRange((state) => state.minValue);
  const maxValue = useFilterRange((state) => state.maxValue);
  const setMaxValue = useFilterRange((state) => state.setMaxValue);
  const setMinValue = useFilterRange((state) => state.setMinValue);
  const [ageRange, setAgeRange] = useState([0, maxValue || 0]);
  console.log(minValue, "minvalue", maxValue, "maxvalue");
  const handleValuesChange = (values: number[]) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };
  useEffect(() => {
    if (data) {
      setMaxValue(data);
    }
  }, [data]);
  if (isLoading) return <Spiner />;
  console.log(data);
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <Slider
          min={0}
          max={25}
          value={ageRange}
          onValueChange={setAgeRange}
          className="flex-1"
        />
        <span>
          {ageRange[0]} - {ageRange[1]} años
        </span>
      </div>
    </div>
  );
};
