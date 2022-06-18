import useTranslation from "../hook/useTranslation";
import BaseForm from "../components/core/baseForm";
import BaseInput from "../components/core/baseInput";
import BaseTextField from "../components/core/baseTextField";
import BaseRadio from "../components/core/baseRadio";
import { Box } from "@mui/material";
import messages from "../locales/home.json";

export default function Home() {
  const modelObj = {
    sampleText: "",
    customValid: "",
    sampleSelect: "",
  };

  const limit = {
    sampleText: { min: 10, max: -1 },
    customValid: { min: -1, max: -1 },
    sampleSelect: { min: 1, max: -1 },
  };

  const { t, obj, msg } = useTranslation(messages);

  const validExactValue = (value) => {
    return value == "pass" || msg("validate.exact", { text: "pass" });
  };

  return (
    <BaseForm modelObj={modelObj}>
      <h1 style={{ textAlign: "center" }}>{t("title")}</h1>
      <Box m={4} display="flex" flexWrap="wrap" justifyContent="center">
        <BaseInput name="sampleText" type="text" label={t("sampleText")} limit={limit.sampleText} />
        <BaseTextField label={t("uncontrolled")} />
        <BaseInput name="customValid" type="text" label={t("customValid")} rules={validExactValue} />
        <BaseInput name="sampleSelect" type="select" label="Testing" options={obj("optSelect")} limit={limit.sampleSelect} />
        <BaseRadio />
      </Box>
    </BaseForm>
  );
}
