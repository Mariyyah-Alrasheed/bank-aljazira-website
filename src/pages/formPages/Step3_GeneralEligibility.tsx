import CustomSelectField from "@/components/formComponents/CustomSelectField";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function Step3_GeneralEligibility() {
  const form = useFormContext();
  const { t, i18n } = useTranslation("step3");

  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <>
      <div
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4"
        dir={dir}
      >
        <CustomSelectField
          name="legalForm"
          label={t("legalForm")}
          control={form.control}
          required
          options={[
            { label: t("options.legalForm.jointStock"), value: "jointStock" },
            {
              label: t("options.legalForm.limitedLiability"),
              value: "limitedLiability",
            },
            { label: t("options.legalForm.individual"), value: "individual" },
          ]}
        />

        <CustomSelectField
          name="engineAge"
          label={t("engineAge")}
          control={form.control}
          required
          options={[
            { label: t("options.engineAge.<1"), value: "<1" },
            { label: t("options.engineAge.1-3"), value: "1-3" },
            { label: t("options.engineAge.>3"), value: ">3" },
          ]}
        />

        <CustomSelectField
          name="activityAge"
          label={t("activityAge")}
          control={form.control}
          required
          options={[
            { label: t("options.activityAge.<1"), value: "<1" },
            { label: t("options.activityAge.1-3"), value: "1-3" },
            { label: t("options.activityAge.>3"), value: ">3" },
          ]}
        />

        <CustomSelectField
          name="activityLocation"
          label={t("activityLocation")}
          control={form.control}
          required
          options={[
            { label: t("options.activityLocation.riyadh"), value: "riyadh" },
            { label: t("options.activityLocation.jeddah"), value: "jeddah" },
            { label: t("options.activityLocation.dammam"), value: "dammam" },
          ]}
        />

        <CustomSelectField
          name="activityType"
          label={t("activityType")}
          control={form.control}
          options={[
            { label: t("options.activityType.trade"), value: "trade" },
            { label: t("options.activityType.industry"), value: "industry" },
            { label: t("options.activityType.services"), value: "services" },
          ]}
        />

        <CustomSelectField
          name="otherCompanyActivity"
          label={t("otherCompanyActivity")}
          control={form.control}
          required
          options={[
            {
              label: t("options.otherCompanyActivity.activity1"),
              value: "activity1",
            },
            {
              label: t("options.otherCompanyActivity.activity2"),
              value: "activity2",
            },
            {
              label: t("options.otherCompanyActivity.activity3"),
              value: "activity3",
            },
          ]}
        />

        <CustomSelectField
          name="personalAssets"
          label={t("personalAssets")}
          control={form.control}
          required
          options={[
            { label: t("options.personalAssets.<100k"), value: "<100k" },
            {
              label: t("options.personalAssets.100k-500k"),
              value: "100k-500k",
            },
            { label: t("options.personalAssets.>500k"), value: ">500k" },
          ]}
        />
      </div>
    </>
  );
}
