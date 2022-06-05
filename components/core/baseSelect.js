import { Box, InputLabel, MenuItem, FormControl, Select, OutlinedInput, FormHelperText } from "@mui/material";

/**
 * @mui Select API
 * @ref https://mui.com/material-ui/api/select/
 */
function BaseSelect({ id = "sel", label = "", error = false, helperText = "", options = {}, ...rest }) {
  return (
    <Box m={2} sx={{ minWidth: 120 }}>
      <FormControl fullWidth error={error}>
        <InputLabel id={id} shrink children={label} />
        <Select id={id} labelId={`${id}-lbl`} input={<OutlinedInput notched label={label} />} {...rest}>
          {Object.entries(options).map(([key, val]) => (
            <MenuItem key={key} value={key} children={val} />
          ))}
        </Select>
        <FormHelperText>{error && helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default BaseSelect;
