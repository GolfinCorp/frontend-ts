import { Grid } from '@chakra-ui/react';
import MatchCard from './MatchCard';

const HourSchedule = () => {
  return (
    <Grid
      py="5"
      px={{ base: '0', md: 5 }}
      gap="5"
      maxH="80vh"
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none'
        }
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
