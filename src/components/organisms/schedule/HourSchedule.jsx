import React from "react";
import { Grid } from "@chakra-ui/react";
import MatchCard from "./MatchCard";
import { useCalendar, useGames } from "@/hooks";
const HourSchedule = () => {
  const { selectedDate } = useCalendar();
  const { games } = useGames();
  const startHour = 6;
  const endHour = 17;
  // const getDayPlan = () => {
  //   for (let i = startHour; i < 17; i++) {
  //     console.log(i);
  //   }
  // };
  // getDayPlan();
  return (
    <Grid
      py="5"
      px={{ base: "0", md: 5 }}
      gap="5"
      maxH="80vh"
      overflowY="scroll"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
    </Grid>
  );
};

export default HourSchedule;
