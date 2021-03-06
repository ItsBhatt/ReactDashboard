import React from 'react';
import { Box, MenuItem, Select, Typography } from '@material-ui/core';

import ButtonComp from '../../Global/Button';
import ToggleButtons from '../../Global/Button/ToggleButton';

import useStyles from './styles';

const Head = () => {
  const classes = useStyles();

  return (
    <Box
      display="grid"
      alignItems="center"
      gridTemplateColumns="auto auto"
      justifyContent="space-between"
    >
      {/* left */}
      <Box
        display="grid"
        gridGap="8px"
        alignItems="center"
        gridTemplateColumns="auto auto"
        justifyContent="start"
      >
        <Typography variant="subtitle1">
          Select assets, types and period:
        </Typography>

        <ButtonComp variant="outlined" color="secondary">
          Filter
        </ButtonComp>
      </Box>

      {/* right */}
      <Box
        display="grid"
        gridGap="34px"
        alignItems="center"
        gridTemplateColumns="auto auto"
        justifyContent="start"
      >
        <Box
          display="grid"
          gridGap="8px"
          alignItems="center"
          gridTemplateColumns="auto 80px"
          justifyContent="start"
        >
          <Typography variant="subtitle1">Units:</Typography>
          <ToggleButtons data={units} equal color="secondary" />
        </Box>
        <Box
          display="grid"
          gridGap="8px"
          alignItems="center"
          gridTemplateColumns="auto auto"
          justifyContent="start"
        >
          <Typography variant="subtitle1">Sort by</Typography>

          <Select
            value="trending"
            variant="outlined"
            className={classes.select}
          >
            <MenuItem value="trending" dense>
              Trending
            </MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

const units = [
  {
    value: 'percent',
    text: '%',
  },
  {
    value: 'dollar',
    text: '$',
  },
];

export default Head;
