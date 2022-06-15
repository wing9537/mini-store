import { TextField } from "@mui/material";

/**
 * @mui TextField API
 * @ref https://mui.com/api/text-field/
 */
function BaseTextField(props) {
  return <TextField sx={{ m: 2, minWidth: 210 }} InputLabelProps={{ shrink: true }} {...props} />;
}
export default BaseTextField;
