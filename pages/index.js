import useTranslation from "../hook/useTranslation";
import BaseForm from "../components/core/baseForm";
import BaseInput from "../components/core/baseInput";
import BaseTextField from "../components/core/baseTextField";
import BaseSelect from "../components/core/baseSelect";
import BaseRadio from "../components/core/baseRadio";
import BaseCheckbox from "../components/core/baseCheckbox";
import BaseDatePicker from "../components/core/baseDatePicker";
import { Box } from "@mui/material";
import messages from "../locales/home.json";

export default function Home() {
  const modelObj = {
    sampleText: "",
    customValid: "",
    sampleSelect: "",
    sampleRadio: "",
    sampleCheckbox: [],
    sampleDatePicker: "",
  };

  const limit = {
    sampleText: { min: 10, max: -1 },
    customValid: { min: 1, max: -1 },
    sampleSelect: { min: 1, max: -1 },
    sampleRadio: { min: 1, max: -1 },
    sampleCheckbox: { min: 1, max: 1 },
    sampleDatePicker: { min: 1, max: -1 },
  };

  const { t, obj, msg } = useTranslation(messages);
  const sampleData = obj("sampleData");

  const validExactValue = (value) => {
    return value == "pass" || msg("validate.exact", { text: "pass" });
  };

  return (
    <BaseForm modelObj={modelObj}>
      <h1 style={{ textAlign: "center" }}>{t("title")}</h1>
      <Box width={{ xs: "100%", md: "50%" }} display="inline-flex" flexWrap="wrap" justifyContent={{ xs: "center", md: "right" }}>
        <BaseInput name="sampleText" type="text" label={t("sampleText")} limit={limit.sampleText} />
        <BaseInput name="customValid" type="text" label={t("customValid")} rules={validExactValue} limit={limit.customValid} />
        <BaseInput name="sampleDatePicker" type="datepicker" label={t("sampleDatePicker")} limit={limit.sampleDatePicker} />
        <BaseInput name="sampleSelect" type="select" label={t("sampleSelect")} options={sampleData} limit={limit.sampleSelect} />
        <BaseInput name="sampleRadio" type="radio" label={t("sampleRadio")} options={sampleData} limit={limit.sampleRadio} />
        <BaseInput name="sampleCheckbox" type="checkbox" label={t("sampleCheckbox")} options={sampleData} limit={limit.sampleCheckbox} />
      </Box>
      <Box width={{ xs: "100%", md: "50%" }} display="inline-flex" flexWrap="wrap" justifyContent={{ xs: "center", md: "left" }}>
        <BaseTextField label={t("uncontrolled")} type="password" />
        <BaseTextField label={t("uncontrolled")} type="number" />
        <BaseDatePicker label={t("uncontrolled")} />
        <BaseSelect label={t("uncontrolled")} options={sampleData} />
        <BaseRadio label={t("uncontrolled")} options={sampleData} />
        <BaseCheckbox label={t("uncontrolled")} options={sampleData} />
      </Box>
    </BaseForm>
  );
}
