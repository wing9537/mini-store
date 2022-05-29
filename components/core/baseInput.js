import { useFormContext } from "react-hook-form";
import BaseTextField from "./BaseTextField";

function BaseInput({
  name = "",
  type = "", // text, number, digit, email, password, select, radio, checkbox, datepicker, textarea
  label = "",
  limit = { min: -1, max: -1 },
  rules = [],
  options = {},
  ...rest
}) {
  const methods = useFormContext();

  switch (type) {
    case "text":
      return <BaseTextField />;
    default:
      return <></>;
  }
}

export default BaseInput;
