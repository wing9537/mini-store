import { useForm, FormProvider } from "react-hook-form";
import { Box } from "@mui/material";

function BaseForm({ modelObj = {}, onSubmit = () => {}, children, ...rest }) {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onSubmit",
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
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
        {children}
      </Box>
    </FormProvider>
  );
}

export default BaseForm;
