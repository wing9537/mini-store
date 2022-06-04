import useTranslation from "../hook/useTranslation";
import BaseForm from "../components/core/baseForm";
import BaseInput from "../components/core/baseInput";
import BaseTextField from "../components/core/baseTextField";
import { Box } from "@mui/material";
import messages from "../locales/home.json";

export default function Home() {
  const modelObj = {
    sampleText: "",
    customValid: "",
  };

  const { t } = useTranslation(messages);

  const exactStr = t("exactStr");

  const validExactValue = (value) => {
    return value == exactStr || t("validate.exact", { text: exactStr });
  };

  return (
    <BaseForm modelObj={modelObj}>
      <h1 style={{ textAlign: "center" }}>{t("title")}</h1>
      <Box m={4} display="flex" flexWrap="wrap" justifyContent="center">
        <BaseInput name="sampleText" type="text" label={t("sampleText")} limit={{ min: 10, max: -1 }} />
        <BaseTextField label={t("uncontrolled")} />
        <BaseInput name="customValid" type="text" label={t("customValid")} rules={validExactValue} />
      </Box>
    </BaseForm>
  );
}
