import CustomSelectField from "@/components/formComponents/CustomSelectField";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function Step2_FinancialEligibility() {
  const form = useFormContext();
  const { t, i18n } = useTranslation("step2");

  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <>
      <div
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4"
        dir={dir}
      >
        <CustomSelectField
          name="salesVolume"
          label={t("salesVolume")}
          control={form.control}
          required
          options={[
            { label: t("options.salesVolume.low"), value: "300K" },
            { label: t("options.salesVolume.high"), value: "500K" },
          ]}
        />
        <CustomSelectField
          name="capital"
          label={t("capital")}
          control={form.control}
          required
          options={[
            { label: t("options.capital.low"), value: "300K" },
            { label: t("options.capital.high"), value: "500K" },
          ]}
        />
      </div>
    </>
  );
}
