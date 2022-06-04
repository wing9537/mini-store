import { useForm, FormProvider } from "react-hook-form";
import { Box } from "@mui/material";

function BaseForm({ modelObj = {}, onSubmit = () => {}, children, ...rest }) {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: modelObj,
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  });

  return (
    <FormProvider {...methods}>
      <Box component="form" autoComplete="off" onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
        {children}
        <input type="submit" />
      </Box>
    </FormProvider>
  );
}

export default BaseForm;
