import { Box, InputLabel, MenuItem, FormControl, Select, OutlinedInput, FormHelperText } from "@mui/material";

/**
 * @mui Select API
 * @ref https://mui.com/material-ui/api/select/
 */
function BaseSelect({ id = "select", label = "", error = false, helperText = "", options = {}, ...rest }) {
  return (
    <Box m={2} sx={{ minWidth: 210 }}>
      <FormControl fullWidth error={error}>
        <InputLabel id={`lbl-${id}`} shrink>
          {label}
        </InputLabel>
        <Select id={id} input={<OutlinedInput notched label={label} />} {...rest}>
          {Object.entries(options).map(([key, val]) => (
            <MenuItem key={key} value={key}>
              {val}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{error && helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default BaseSelect;
