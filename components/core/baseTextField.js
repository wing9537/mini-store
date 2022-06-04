import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

/**
 * @mui TextField API
 * @ref https://mui.com/api/text-field/
 */
const BaseTextField = forwardRef((props, ref) => <TextField sx={{ m: 2 }} inputRef={ref} InputLabelProps={{ shrink: true }} {...props} />);

export default BaseTextField;
