import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import useTranslation from "../../hook/useTranslation";
import BaseTextField from "./baseTextField";
import BaseSelect from "./baseSelect";
import { isEmpty } from "lodash-es";
import messages from "../../locales/errorMsg.json";
import { form } from "../../constant";

function BaseInput({
  name = "",
  type = "", // text, number, digit, email, password, select, radio, checkbox, datepicker, textarea
  label = "",
  limit = { min: -1, max: -1 },
  rules = {},
  options = {},
  ...rest
}) {
  const {
    register,
    formState: { errors },
    formStatus,
    getValues,
  } = useFormContext();

  const { locale, t } = useTranslation(messages);

  const [required] = useState(limit.min > 0);
  const [maxLength] = useState(limit.max > -1 ? limit.max : 255);
  const [minLength] = useState(limit.min > -1 ? limit.min : 0);
  const error = errors?.[name];

  const errorMsg = ({ type, message }) => {
    if (["required", "pattern"].includes(type)) {
      return t(type);
    }
    if (["max", "maxLength"].includes(type)) {
      return t(type, { limit: maxLength });
    }
    if (["min", "minLength"].includes(type)) {
      return t(type, { limit: minLength });
    }
    return JSON.parse(message)[locale];
  };

  console.log(name, error);

  switch (type) {
    case "text":
      return (
        <BaseTextField
          inputProps={register(name, {
            required,
            maxLength,
            minLength,
            validate: rules,
          })}
          id={`txt-${name}`}
          label={required ? `${label} *` : label}
          error={!isEmpty(error?.type)}
          helperText={error?.type && errorMsg(error)}
          disabled={formStatus == form.confirm}
          {...rest}
        />
      );
    case "select":
      return (
        <BaseSelect
          inputProps={register(name, {
            required,
            validate: rules,
          })}
          id={`sel-${name}`}
          label={required ? `${label} *` : label}
          value={getValues(name)}
          options={options}
          error={!isEmpty(error?.type)}
          helperText={error?.type && errorMsg(error)}
          disabled={formStatus == form.confirm}
          {...rest}
        />
      );
    case "radio":
      return <></>;
    case "checkbox":
      return <></>;
    case "datepicker":
      return <></>;
    default:
      return <></>;
  }
}

export default BaseInput;
