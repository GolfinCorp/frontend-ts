import React from "react";
import { Box } from "@chakra-ui/react";
import { getCurrentDate } from "@/helpers/getCurrentDate";

type PropsT = {
  selected: Date;
  day: Date;
};
type dayColorT = (weekend: boolean, select: boolean) => string;

const Day = ({ selected, day }: PropsT) => {
  // Set hours is needed to include current day
  const date = getCurrentDate();
  const prevDay = day < date;
  const isWeekend = day.getDay() === 6 || day.getDay() === 0;
  const dayColor: dayColorT = (weekend, select) => {
    if (weekend) return "brand.100";
    if (select) return "brand.white";
    return "brand.dark";
  };

  return (
    <>
      {prevDay ? (
        <Box
          borderRadius="8px"
          p="1"
          backgroundColor="brand.50"
          color="brand.100"
        >
          {day.getDate()}
        </Box>
      ) : (
        <Box
          borderRadius="8px"
          p="1"
          bgColor={
            day.getTime() === selected.getTime()
              ? "brand.primary"
              : "transparent"
          }
          color={dayColor(isWeekend, day.getTime() === selected.getTime())}
        >
          {day.getDate()}
        </Box>
      )}
    </>
  );
};

export default Day;
