import { Box, Radio, RadioGroup, FormControlLabel, FormControl, InputLabel } from "@mui/material";

/**
 * @mui RadioGroup API
 * @ref https://mui.com/material-ui/api/radio-group/
 */
function BaseRadio(props) {
  return (
    <Box m={2} sx={{ minWidth: 210 }}>
      <FormControl className="outlined-input">
        <InputLabel id="demo-radio-buttons-group-label" shrink>Gender</InputLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
export default BaseRadio;
