import AddButton from "@/components/AddButton";
import CustomInputField from "@/components/formComponents/CustomInputField";
import CustomSelectField from "@/components/formComponents/CustomSelectField";
import { TypographyH3 } from "@/components/Typography";
import { useFieldArray, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { MdDelete } from "react-icons/md";

export default function Step4_EvaluativeEligibility() {
  const form = useFormContext();

  const { t, i18n } = useTranslation("step4");

  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const { control } = form;
  const {
    fields: ownerFields,
    append: appendOwner,
    remove: removeOwner,
  } = useFieldArray({
    control,
    name: "owners", // اسم الحقل في الـ defaultValues
  });

  const {
    fields: supplierFields,
    append: appendSupplier,
    remove: removeSupplier,
  } = useFieldArray({
    control,
    name: "suppliers",
  });

  return (
    <>
      <div
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4"
        dir={dir}
      >
        <CustomSelectField
          name="capitalStability"
          label={t("capitalStability")}
          control={form.control}
          required
          options={[
            {
              label: t("options.capitalStability.jointStock"),
              value: "jointStock",
            },
            {
              label: t("options.capitalStability.limitedLiability"),
              value: "limitedLiability",
            },
            {
              label: t("options.capitalStability.individual"),
              value: "individual",
            },
          ]}
        />

        <CustomSelectField
          name="financialStatements"
          label={t("financialStatements")}
          control={form.control}
          required
          options={[
            { label: t("options.financialStatements.<1"), value: "<1" },
            { label: t("options.financialStatements.1-3"), value: "1-3" },
            { label: t("options.financialStatements.>3"), value: ">3" },
          ]}
        />

        <CustomSelectField
          name="activityTypeEvaluative"
          label={t("activityTypeEvaluative")}
          control={form.control}
          required
          options={[
            {
              label: t("options.activityTypeEvaluative.trade"),
              value: "trade",
            },
            {
              label: t("options.activityTypeEvaluative.industry"),
              value: "industry",
            },
            {
              label: t("options.activityTypeEvaluative.services"),
              value: "services",
            },
          ]}
        />

        <CustomSelectField
          name="numberOfEmployees"
          label={t("numberOfEmployees")}
          control={form.control}
          options={[
            { label: "1-10", value: "1-10" },
            { label: "11-50", value: "11-50" },
            { label: ">50", value: ">50" },
          ]}
        />

        <CustomSelectField
          name="licensesAvailability"
          label={t("licensesAvailability")}
          control={form.control}
          required
          options={[
            {
              label: t("options.licensesAvailability.available"),
              value: "available",
            },
            {
              label: t("options.licensesAvailability.notAvailable"),
              value: "notAvailable",
            },
          ]}
        />

        <CustomSelectField
          name="mainEngineExperienceYears"
          label={t("mainEngineExperienceYears")}
          control={form.control}
          required
          options={[
            { label: t("options.mainEngineExperienceYears.<1"), value: "<1" },
            { label: t("options.mainEngineExperienceYears.1-3"), value: "1-3" },
            { label: t("options.mainEngineExperienceYears.>3"), value: ">3" },
          ]}
        />

        <CustomSelectField
          name="secondManagementPresence"
          label={t("secondManagementPresence")}
          control={form.control}
          options={[
            { label: t("options.secondManagementPresence.yes"), value: "yes" },
            { label: t("options.secondManagementPresence.no"), value: "no" },
          ]}
        />

        <CustomSelectField
          name="bankCreditFacilities"
          label={t("bankCreditFacilities")}
          control={form.control}
          required
          options={[
            { label: t("options.bankCreditFacilities.<100k"), value: "<100k" },
            {
              label: t("options.bankCreditFacilities.100k-500k"),
              value: "100k-500k",
            },
            { label: t("options.bankCreditFacilities.>500k"), value: ">500k" },
          ]}
        />

        <CustomInputField
          name="annualSalesVolume"
          label={t("annualSalesVolume")}
          control={form.control}
          type="text"
        />

        <CustomSelectField
          name="yearsWithOurBank"
          label={t("yearsWithOurBank")}
          control={form.control}
          required
          options={[
            { label: t("options.yearsWithOurBank.<1"), value: "<1" },
            { label: t("options.yearsWithOurBank.1-3"), value: "1-3" },
            { label: t("options.yearsWithOurBank.>3"), value: ">3" },
          ]}
        />
      </div>

      {/* ——— قائمة المالكين ——— */}
      <TypographyH3 text={t("ownersTitle")} dir={dir} />
      <div className="w-full max-w-4xl flex flex-col gap-4" dir={dir}>
        {ownerFields.map((owner, idx) => (
          <div key={owner.id} className="flex gap-4 items-end">
            <div className="flex-1">
              <CustomSelectField
                name={`owners.${idx}.ownerType`}
                control={control}
                label={t("ownerType")}
                options={[
                  {
                    label: t("options.ownerType.mainOwner"),
                    value: "mainOwner",
                  },
                  { label: t("options.ownerType.subOwner"), value: "subOwner" },
                ]}
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name={`owners.${idx}.cardNumber`}
                control={control}
                label={t("cardNumber")}
                type="text"
              />
            </div>
            <MdDelete
              className="text-red-500 text-xl cursor-pointer mb-1"
              onClick={() => removeOwner(idx)}
            />
          </div>
        ))}
        <AddButton
          text={t("addOwner")}
          onClick={() => appendOwner({ ownerType: "", cardNumber: "" })}
        />
      </div>

      {/* ——— قائمة الموردين ——— */}
      <TypographyH3 text={t("suppliersTitle")} dir={dir} />
      <div className="w-full max-w-4xl flex flex-col gap-4" dir={dir}>
        {supplierFields.map((sup, idx) => (
          <div key={sup.id} className="flex gap-4 items-end">
            <div className="flex-1">
              <CustomInputField
                name={`suppliers.${idx}.supplierName`}
                control={control}
                label={t("supplierName")}
                type="text"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name={`suppliers.${idx}.crn`}
                control={control}
                label={t("crn")}
                type="text"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name={`suppliers.${idx}.value`}
                control={control}
                label={t("value")}
                type="text"
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                name={`suppliers.${idx}.soldGoods`}
                control={control}
                label={t("soldGoods")}
                type="text"
              />
            </div>
            <MdDelete
              className="text-red-500 text-xl cursor-pointer mb-1"
              onClick={() => removeSupplier(idx)}
            />
          </div>
        ))}
        <AddButton
          text={t("addSupplier")}
          onClick={() =>
            appendSupplier({
              supplierName: "",
              crn: "",
              value: "",
              soldGoods: "",
            })
          }
        />
      </div>
    </>
  );
}
