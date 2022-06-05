import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

/**
 * @mui Select API
 * @ref https://mui.com/material-ui/api/select/
 */
const BaseSelect = forwardRef((props, ref) => <TextField sx={{ m: 2 }} inputRef={ref} InputLabelProps={{ shrink: true }} {...props} />);

BaseSelect.displayName = "BaseSelect";

export default BaseSelect;
