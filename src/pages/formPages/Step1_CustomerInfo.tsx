import CustomInputField from "@/components/formComponents/CustomInputField";
import CustomSelectField from "@/components/formComponents/CustomSelectField";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function Step1_CustomerInfo() {
  const form = useFormContext();
  const { t, i18n } = useTranslation("step1");
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <>
      <div
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4"
        dir={dir}
      >
        <CustomInputField
          name="companyName"
          label={t("companyName")}
          control={form.control}
          required
        />

        <CustomInputField
          name="crNumber"
          label={t("crNumber")}
          control={form.control}
          required
        />

        <CustomInputField
          name="phoneNumber"
          label={t("phoneNumber")}
          control={form.control}
          // type="tel"
          required
        />

        <CustomInputField
          name="loanAmount"
          label={t("loanAmount")}
          control={form.control}
          // type="number"
          required
        />

        <CustomInputField
          name="entityCode"
          label={t("entityCode")}
          control={form.control}
        />

        <CustomSelectField
          name="branch"
          label={t("branch")}
          control={form.control}
          required
          options={[
            { label: t("branches.riyadh"), value: "riyadh" },
            { label: t("branches.jeddah"), value: "jeddah" },
            { label: t("branches.dammam"), value: "dammam" },
          ]}
        />
      </div>
    </>
  );
}
