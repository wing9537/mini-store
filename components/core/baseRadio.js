import { Box, Radio, RadioGroup, FormControlLabel, FormControl, InputLabel, FormHelperText } from "@mui/material";

/**
 * @mui RadioGroup API
 * @ref https://mui.com/material-ui/api/radio-group/
 */
function BaseRadio({ id = "radio", label = "", error = false, helperText = "", options = {}, inputProps = {}, disabled = false, ...rest }) {
  return (
    <Box m={2} sx={{ minWidth: 210 }}>
      <FormControl error={error}>
        <Box px={2} py={1} className={`outlined-input ${disabled ? "disabled" : error ? "error" : ""}`}>
          <InputLabel id={`lbl-${id}`} shrink>
            {label}
          </InputLabel>
          <RadioGroup id={id} {...inputProps} {...rest}>
            {Object.entries(options).map(([key, val]) => (
              <FormControlLabel key={key} value={key} label={val} disabled={disabled} inputRef={inputProps.ref} control={<Radio />} />
            ))}
          </RadioGroup>
        </Box>
        <FormHelperText>{error && helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}
export default BaseRadio;
